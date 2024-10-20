// src/app/api/recipe/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db'; // Adjust the import based on your folder structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const recipe = await db.recipie.findUnique({ where: { id: id as string } });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
