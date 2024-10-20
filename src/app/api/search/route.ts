import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Update with correct path to your db instance

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
  }

  try {
    const recipes = await db.recipie.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { ingredients: { hasSome: [query] } },
        ],
      },
    });

    const categories = await db.category.findMany({
      where: {
        name: { contains: query, mode: 'insensitive' },
      },
    });

    return NextResponse.json({ recipes, categories });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
