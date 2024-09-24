"use client";

import React, { useState } from "react";

import Link from "next/link";

import Card from "@/components/custom/Card";
import CategoryList from "@/components/custom/CategoryList";
import EmailForm from "@/components/custom/EmailForm";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import HomeNav from "@/components/custom/HomeNav";
import RecipeCarousel from "@/components/custom/RecipeCarousel";

export default function Home() {
  const [visibleCards, setVisibleCards] = useState(8);
  const handleLoadMore = () => {
    setVisibleCards((prevCount) => Math.min(prevCount + 8, 16));
  };
  const cardItems = Array.from({ length: 20 });
  return (
    <div>
      <HomeNav />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <Hero></Hero>
        </div>
        <div className="w-4/5">
          <h1 className="my-8 text-2xl font-bold">Top 5 dishes of the week</h1>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <RecipeCarousel></RecipeCarousel>
        </div>
        <div className="w-4/5">
          <h1 className="my-8 text-2xl font-bold">Top 5 sweets of the week</h1>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <RecipeCarousel></RecipeCarousel>
        </div>
        <div className="w-4/5">
          <h1 className="my-8 text-2xl font-bold">Popular categories</h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          <Link href="./categories/recipeList">
            <CategoryList></CategoryList>
          </Link>
          <CategoryList></CategoryList>
          <CategoryList></CategoryList>
          <CategoryList></CategoryList>
          <CategoryList></CategoryList>
          <CategoryList></CategoryList>
        </div>

        <EmailForm />

        <div className="mb-4 w-4/5">
          <h1 className="my-8 text-2xl font-bold">Latest recipes</h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          {cardItems.slice(0, visibleCards).map((_, index) => (
            <Link href="./recipe" key={index}>
              <Card></Card>
            </Link>
          ))}
        </div>
        {visibleCards < 16 && (
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
