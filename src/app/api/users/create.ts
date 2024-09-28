// pages/api/users/create.ts
import { db } from '../../../lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    try {
      const newUser = await db .user.create({
        data: {
          name,
          email,
          password, // Make sure to hash the password before saving!
        },
      });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'User creation failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
