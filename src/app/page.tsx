"use client";

import React, { useState } from 'react';
import Hero from "@/components/custom/Hero";
import RecipeCarousel from "@/components/custom/RecipeCarousel";
import CategoryList from "@/components/custom/CategoryList";
import EmailForum from "@/components/custom/EmailForum";
import Card from "@/components/custom/Card";
import Link from 'next/link';

export default function Home() {
  const [visibleCards, setVisibleCards] = useState(8); 
  const handleLoadMore = () => {
    setVisibleCards((prevCount) => Math.min(prevCount + 8, 16));
  };
  const cardItems = Array.from({ length: 20 }); 
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <Hero></Hero>
        </div>
        <div className="w-4/5 ">
          <h1 className="text-2xl font-bold my-8 ">Top 5 dishes of the week</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <RecipeCarousel></RecipeCarousel>
        </div>
        <div className="w-4/5 ">
          <h1 className="text-2xl font-bold my-8 ">Top 5 sweets of the week</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <RecipeCarousel></RecipeCarousel>
        </div>
        <div className="w-4/5 ">
          <h1 className="text-2xl font-bold my-8 ">Popular categories</h1>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
          <Link href="./categories/recipeList" ><CategoryList></CategoryList></Link>
          <CategoryList></CategoryList>
          <CategoryList></CategoryList>
          <CategoryList></CategoryList>
          <CategoryList></CategoryList>
          <CategoryList></CategoryList>
        </div>
        <div>
          <EmailForum></EmailForum>
        </div>
        <div className="w-4/5 mb-4">
          <h1 className="text-2xl font-bold my-8 ">Latest recipes</h1>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center ">
          {cardItems.slice(0, visibleCards).map((_, index) => (
            <Link href="./recipe" key={index}><Card ></Card></Link>
          ))}
        </div>
        {visibleCards < 16 && (
          <button
            className="mt-6 bg-greenbg text-white py-2 px-4 rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
