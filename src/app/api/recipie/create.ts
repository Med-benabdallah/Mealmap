// pages/api/recipies/create.ts
import {db}  from '../../../lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, ingredients, instructions, categoryId } = req.body;
    try {
      const newRecipie = await db.recipie.create({
        data: {
          name,
          ingredients,
          instructions,
          categories: { connect: { id: categoryId } },
        },
      });
      res.status(200).json(newRecipie);
    } catch (error) {
      res.status(500).json({ error: 'Recipe creation failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
