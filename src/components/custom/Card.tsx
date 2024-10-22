import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

interface CardProps {
  recipeId: string;
  name: string;
  image: string | null;
  isFavorite: boolean;
}

const Card: React.FC<CardProps> = ({ recipeId, name, image, isFavorite }) => {
  const { data: session } = useSession();
  const [favorite, setFavorite] = useState(isFavorite);
  const [loading, setLoading] = useState(false);

  const handleFavoriteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!session) {
      console.error("User must be logged in to favorite recipes.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/favorites", {
        method: favorite ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.id}`, // Use user ID or token
        },
        body: JSON.stringify({ recipeId }),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get the error text from the response
        throw new Error(`Failed to update favorite status: ${errorText}`);
      }

      setFavorite((prev) => !prev); // Toggle favorite status
    } catch (error) {
      console.error("Error updating favorite status:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative h-[300px] w-[300px]">
        <Image
          src={image || "/images/default.jpg"}
          className="rounded-lg"
          layout="fill"
          style={{ objectFit: "cover" }}
          alt={`Image of ${name}`}
        />
      </div>
      <div className="p-4">
        <h1 className="text-center text-lg font-bold">{name}</h1>
        {favorite && <div className="text-center text-green-600">Favorite Recipe</div>}
        <div className="text-center mt-4">
          <button
            onClick={handleFavoriteClick}
            className={`px-4 py-2 rounded ${favorite ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
            disabled={loading}
          >
            {loading ? "Processing..." : favorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
