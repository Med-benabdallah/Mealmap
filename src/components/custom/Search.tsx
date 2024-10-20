"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Recipe {
  id: string;
  name: string;
  image?: string; // Optional image field
}

interface Category {
  id: string;
  name: string;
  image?: string; // Optional image field
}

interface Results {
  recipes: Recipe[];
  categories: Category[];
}

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [results, setResults] = useState<Results>({ recipes: [], categories: [] }); // State for search results
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Debounced search effect
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim()) {
        handleSearchSubmit(); // Call search function after debounce
      } else {
        setResults({ recipes: [], categories: [] }); // Clear results if input is empty
      }
    }, 300); // 300ms debounce delay

    return () => clearTimeout(delayDebounceFn); // Cleanup function to clear timeout
  }, [searchQuery]); // Effect runs when searchQuery changes

  // Function to handle search submission
  const handleSearchSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setResults(data); // Store both recipes and categories
    } catch (error) {
      console.error("Error during search:", error);
      // Optionally, set an error state or display an error message in your UI
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Sheet key="top">
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>What’s on your mind?</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="mb-2 border-b-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery} // Bind input to state
              onChange={(e) => setSearchQuery(e.target.value)} // Update state when typing
              className="search-input w-full"
            />
          </div>

          {/* Show loading indicator */}
          {loading && <div>Loading...</div>}

          {/* Display Recipes */}
          {results.recipes.length > 0 && (
            <div className="search-results">
              <h3 className="font-bold">Recipes</h3>
              {results.recipes.map((recipe) => (
                <div key={recipe.id} className="flex flex-row flex-start gap-4 items-center">
                  {recipe.image && (
                  <img src={recipe.image} alt={recipe.name} className="recipe-image" width={50} height={50} />
                  )} {/* Display the recipe image if available */}
                  <h4>{recipe.name}</h4> {/* Display the recipe name */}
                </div>
              ))}
            </div>
          )}

          {/* Display Categories */}
          {results.categories.length > 0 && (
            <div className="search-results">
              <h3 className="font-bold">Categories</h3>
              {results.categories.map((category) => (
                <div key={category.id} className="flex flex-row flex-start gap-4 items-center">
                  {category.image && (
                    <img src={category.image} alt={category.name} className="category-image" width={50} height={50}/>
                  )} {/* Display the category image if available */}
                  <h4>{category.name}</h4> {/* Display the category name */}
                </div>
              ))}
            </div>
          )}

          {/* No results found */}
          {results.recipes.length === 0 && results.categories.length === 0 && searchQuery && !loading && (
            <div>No results found.</div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Search;
