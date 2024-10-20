import React, { useState, useEffect } from 'react';
import Card from '@/components/custom/Card';
import { getFavoriteRecipes } from '@/actions/admin/recipie';
import { useSession } from 'next-auth/react'; // To get the authenticated user's session

export default function Trending() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Array<{ id: string; name: string; ingredients: string[]; instructions: string[]; image: string | null; recipieBookId: string | null }>>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchFavorites() {
      if (session && session.user) {
        try {
          if (typeof session.user.id === 'string') {
            const fetchedFavorites = await getFavoriteRecipes(session.user.id); // Fetch favorites for the logged-in user
            setFavoriteRecipes(fetchedFavorites);
          } else {
            console.error('User ID is not a string');
          }
        } catch (error) {
          console.error('Failed to fetch favorite recipes:', error);
        } finally {
          setLoading(false); // Stop loading when the fetch is complete
        }
      } else {
        setLoading(false); // Stop loading if no session
      }
    }

    fetchFavorites();
  }, [session]);

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Trending Recipes (Your Favorites)</h1>

      {loading ? (
        <div>Loading favorite recipes...</div>
      ) : favoriteRecipes.length > 0 ? (
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          {favoriteRecipes.map((recipe) => (
            <Card 
              key={recipe.id} 
              recipeId={recipe.id} 
              isFavorite={true} 
              name={recipe.name} 
              image={recipe.image} 
            />
          ))}
        </div>
      ) : (
        <div>No favorite recipes yet.</div>
      )}
    </div>
  );
}
