"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "sonner";

import Card from "@/components/custom/Card";
import CategoryList from "@/components/custom/CategoryList";
import Footer from "@/components/custom/Footer";
import HomeNav from "@/components/custom/HomeNav";
import { getCategories } from "@/actions/admin/category";

export default function Recipes() {
  const [categories, setCategories] = useState<any[]>([]);
  const [visibleCards, setVisibleCards] = useState(8); // Initial load

  // Fetch categories when the component mounts
  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Error fetching categories");
      }
    }
    fetchCategories();
  }, []);

  // Load more categories
  const handleLoadMore = () => {
    setVisibleCards((prevCount) => Math.min(prevCount + 8, categories.length));
  };

  const cardItems = categories;

  return (
    <div>
      <HomeNav />
      <div className="flex w-screen flex-col items-center justify-center">
        <div className="w-4/5">
          <h1 className="my-8 border-b-2 border-zinc-400 text-2xl font-bold">
            Categories
          </h1>
        </div>

        {/* Categories Display */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          <div className="flex w-3/5 flex-row flex-wrap items-center justify-center gap-8">
            {cardItems.length > 0 ? (
              cardItems.slice(0, visibleCards).map((category) => (
                <Link
                  href={`/categories/${category.id}`}
                  key={category.id}
                  passHref
                >
                  <CategoryList
                    catId={category.id}
                    catName={category.name}
                  />
                </Link>
              ))
            ) : (
              <p>Loading categories...</p>
            )}
          </div>
        </div>

        {/* Load More Button */}
        {visibleCards < categories.length && (
          <button
            onClick={handleLoadMore}
            className="mt-8 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary-dark"
          >
            Load More
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}
