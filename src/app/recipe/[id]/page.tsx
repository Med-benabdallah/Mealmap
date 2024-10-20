// src/app/recipe/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getRecipeById } from "@/actions/admin/recipie"; // Check the import path

const RecipePage = () => {
  const { id } = useParams();
  interface Recipe {
    name: string;
    image?: string | null;
    // Add other properties as needed
  }
  
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) {
        setError("Invalid recipe ID");
        setLoading(false);
        return;
      }
      try {
        const data = await getRecipeById(Array.isArray(id) ? id[0] : id);
        setRecipe(data);
      } catch (err) {
        setError("Failed to fetch recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>No recipe found.</p>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      {recipe.image && <img src={recipe.image} alt={recipe.name} />}
      {/* Display ingredients and instructions */}
    </div>
  );
};

export default RecipePage;
