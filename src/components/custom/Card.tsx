import React, { useState } from 'react';
import Image from 'next/image';

interface CardProps {
  recipeId: string;
  name: string;
  image: string | null;
  isFavorite: boolean;
}

const Card: React.FC<CardProps> = ({ recipeId, name, image, isFavorite }) => {
  // Local state to manage whether the recipe is a favorite
  const [favorite, setFavorite] = useState(isFavorite);

  // Function to handle adding/removing from favorites
  const handleFavoriteClick = async () => {
    try {
      // Here you can call your API to toggle the favorite status
      // Example:
      // await toggleFavorite(recipeId, !favorite);

      // For now, let's just toggle the local state
      setFavorite((prev) => !prev);
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };

  return (
    <div>
      <div className="relative h-[300px] w-[300px]">
        <Image
          src={image || '/images/default.jpg'} // Use a default image if none is provided
          className="rounded-lg"
          layout="fill"
          style={{ objectFit: 'cover' }}
          alt={`Image of ${name}`}
        />
      </div>
      <div className="p-4">
        <h1 className="text-center text-lg font-bold">{name}</h1>
        {favorite && (
          <div className="text-center text-green-600">Favorite Recipe</div>
        )}

        {/* Add to favorite button */}
        <div className="text-center mt-4">
          <button
            onClick={handleFavoriteClick}
            className={`px-4 py-2 rounded ${
              favorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
