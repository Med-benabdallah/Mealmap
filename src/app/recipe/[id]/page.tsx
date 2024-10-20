import React, { useEffect, useState } from "react";

import Image from "next/image";
import { getRecipeById } from "@/actions/admin/recipie"; // Check the import path

interface RecipePageProps {
  params: {
    id: string;
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipeById(params.id);
  return (
    <div>
      <h1>{recipe?.name}</h1>
      <Image
        src={recipe?.image || ""}
        alt={recipe?.name || ""}
        width={500}
        height={500}
      />
      <p>{recipe?.instructions}</p>
      <p>{recipe?.ingredients}</p>
    </div>
  );
}
