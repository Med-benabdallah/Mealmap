"use client"; // Ensure this is the first line

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/custom/Card";
import CategoryList from "@/components/custom/CategoryList";
import EmailForm from "@/components/custom/EmailForm";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import HomeNav from "@/components/custom/HomeNav";
import RecipeCarousel from "@/components/custom/RecipeCarousel";
import { getCategories } from "@/actions/admin/category";
import { getRandomRecipe } from "@/actions/admin/recipie";

interface Recipe {
  id: string;
  name: string;
  image: string | undefined;
  ingredients: string[];
  instructions: string[];
  recipieBookId: string | null;
}

export default function Home() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingRecipes, setLoadingRecipes] = useState(true);
  const [latestRecipe, setLatestRecipe] = useState<Recipe | null>(null);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    const fetchLatestRecipes = async () => {
      setLoadingRecipes(true);
      try {
        const fetchedRecipe: Recipe | null = await getRandomRecipe();
        setLatestRecipe(fetchedRecipe || null);
      } catch (error) {
        console.error("Error fetching latest recipes:", error);
      } finally {
        setLoadingRecipes(false);
      }
    };

    fetchCategories();
    fetchLatestRecipes();
  }, []);

  const handleLoadMore = () => {
    setVisibleCards((prevCount) => Math.min(prevCount + 8, latestRecipe ? 1 : 0));
  };

  // Function to handle "Add to Favorite" button click
  const handleAddToFavorite = (recipeId: string) => {
    // Call your favorite API or handle logic to add to favorite
    console.log("Added to favorite: ", recipeId);
  };

  return (
    <div>
      <HomeNav />
      <div className="flex w-full flex-col items-center justify-center">
        <Hero />
        <div className="w-4/5">
          <h1 className="my-8 text-2xl font-bold">Top 5 dishes of the week</h1>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          {latestRecipe && <RecipeCarousel recipes={[latestRecipe]} />}
        </div>
        <div className="w-4/5">
          <h1 className="my-8 text-2xl font-bold">Top 5 sweets of the week</h1>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          {latestRecipe && <RecipeCarousel recipes={[latestRecipe]} />}
        </div>
        <div className="w-4/5">
          <h1 className="my-8 text-2xl font-bold">Popular categories</h1>
        </div>
        {loadingCategories ? (
          <div>Loading categories...</div>
        ) : (
          <div className="flex flex-row flex-wrap items-center justify-center gap-5">
            {categories.slice(0, 5).map((category) => (
              <Link href={`./categories/${category.id}`} key={category.id}>
                <CategoryList
                  catId={category.id}
                  catName={category.name}
                  catImg={category.image}
                />
              </Link>
            ))}
          </div>
        )}
        <EmailForm />
        <div className="mb-4 w-4/5">
          <h1 className="my-8 text-2xl font-bold">Latest recipes</h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          {loadingRecipes ? (
            <div>Loading latest recipe...</div>
          ) : (
            latestRecipe && (
              <div key={latestRecipe.id}>
                <Link href={`./recipe/${latestRecipe.id}`}>
                  <Card
                    recipeId={latestRecipe.id}
                    name={latestRecipe.name}
                    image={latestRecipe.image || "/images/fallback.jpg"}
                    isFavorite={false}
                  />
                </Link>
                <button
                  className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
                  onClick={() => handleAddToFavorite(latestRecipe.id)}
                >
                  Add to Favorite
                </button>
              </div>
            )
          )}
        </div>
        {latestRecipe && visibleCards < 1 && (
          <button
            className="mt-6 rounded bg-greenbg px-4 py-2 text-white"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}
