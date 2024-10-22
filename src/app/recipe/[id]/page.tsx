import React from "react";
import Image from "next/image";
import { getRecipeById } from "@/actions/admin/recipie"; // Ensure correct import path

interface RecipePageProps {
  params: {
    id: string;
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipeById(params.id); // Fetch the recipe by ID

  // Return the layout
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      {/* Recipe Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          {recipe?.name}
        </h1>
        <p className="text-lg text-gray-600 italic">
          A delicious recipe to try out today!
        </p>
      </div>

      {/* Image Section */}
      {recipe?.image && (
        <div className="relative w-full h-96 mb-10 shadow-lg rounded-lg overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.name}
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
      )}

      {/* Recipe Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Ingredients */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 text-lg space-y-3">
            {recipe?.instructions?.map((instruction, index) => (
              <li key={index} className="text-gray-700">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200">
          Save Recipe to Favorites
        </button>
      </div>
    </div>
  );
}
