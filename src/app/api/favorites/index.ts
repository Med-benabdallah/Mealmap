import { db } from '@/lib/db'; // Ensure the path to your database is correct
import { getToken } from 'next-auth/jwt';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = await getToken({ req: req as any });

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const userId = token.sub;

    if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    if (req.method === 'POST') {
        const { recipeId } = req.body;

        if (!recipeId) {
            return res.status(400).json({ error: 'Recipe ID is required' });
        }

        try {
            const favorite = await db.favoriteRecipe.create({
                data: {
                    userId,
                    recipeId,
                },
            });
            return res.status(201).json(favorite);
        } catch (error) {
            console.error('Error adding favorite:', error);
            return res.status(500).json({ error: 'Unable to add to favorites.' });
        }
    } else if (req.method === 'DELETE') {
        const { recipeId } = req.body;

        if (!recipeId) {
            return res.status(400).json({ error: 'Recipe ID is required' });
        }

        try {
            await db.favoriteRecipe.deleteMany({
                where: {
                    userId,
                    recipeId,
                },
            });
            return res.status(204).end();
        } catch (error) {
            console.error('Error removing favorite:', error);
            return res.status(500).json({ error: 'Unable to remove from favorites.' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed.' });
    }
}
