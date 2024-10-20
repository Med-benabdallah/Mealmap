"use server";

import { redirect } from "next/navigation";

import { db } from "@/lib/db";

export async function addRecipie(
  name: string,
  image: string,
  instructions: string[],
  ingredients: string[],
) {
  try {
    const recipie = await db.recipie.create({
      data: {
        name: name,
        image: image,
        instructions: instructions,
        ingredients: ingredients,
      },
    });
    console.log(recipie);
    redirect("/dashboard/recipies");
  } catch (error) {
    console.error("Error creating recipie:", error);
    throw error;
  }
}

export async function addToFavorites(recipeId: string, userId: string) {
  return db.recipieBook.update({
    where: { userId },
    data: {
      recipies: {
        connect: { id: recipeId },
      },
    },
  });
}

// Remove from favorites
export async function removeFromFavorites(recipeId: string, userId: string) {
  return db.recipieBook.update({
    where: { userId },
    data: {
      recipies: {
        disconnect: { id: recipeId },
      },
    },
  });
}

export async function getRandomRecipe() {
  const allRecipes = await db.recipie.findMany(); // Adjust to your database access method
  if (allRecipes.length === 0) return null; // Return null if no recipes are found

  const randomIndex = Math.floor(Math.random() * allRecipes.length); // Generate random index
  return allRecipes[randomIndex]; // Return a random recipe
}

export async function getFavoriteRecipes(userId: string) {
  const recipeBook = await db.recipieBook.findUnique({
    where: { userId },
    include: { recipies: true }, // Include the user's favorite recipes
  });

  return recipeBook?.recipies || [];
}

export async function getRecipies() {
  try {
    const recipies = await db.recipie.findMany();
    return recipies;
  } catch (error) {
    console.error("Error fetching recipies:", error);
    throw error;
  }
}

export async function deleteRecipie(recipieId: string) {
  try {
    await db.recipie.delete({
      where: {
        id: recipieId,
      },
    });
    return true;
  } catch (error) {
    console.error("Error deleting recipe:", error);
    return false;
  }
}
// Assuming this is located in a file like: actions/admin/recipie.ts
// Example: actions/admin/recipie.ts

interface Recipe {
  id: string;
  name: string;
  image: string | null;
  ingredients: string[];
  instructions: string[];
} // Adjust the import path as necessary

export async function getRecipeById(id: string): Promise<Recipe | null> {
  try {
    const recipe = await db.recipie.findUnique({
      where: {
        id: id,
      },
    });

    return recipe;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
}

export async function updateRecipie(
  recipieId: string,
  name: string,
  image: string,
  instructions: string[],
  ingredients: string[],
) {
  try {
    const recipie = await db.recipie.update({
      where: {
        id: recipieId,
      },
      data: {
        name: name,
        image: image,
        instructions: instructions,
        ingredients: ingredients,
      },
    });
    return recipie;
  } catch (error) {
    console.error("Error updating recipie:", error);
    throw error;
  }
}
