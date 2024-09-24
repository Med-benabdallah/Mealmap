"use client";

import React, { useState } from "react";

import Link from "next/link";

import Card from "@/components/custom/Card";
import Footer from "@/components/custom/Footer";
import HomeNav from "@/components/custom/HomeNav";

export default function RecipeList() {
  const [visibleCards, setVisibleCards] = useState(10);
  const handleLoadMore = () => {
    setVisibleCards((prevCount) => Math.min(prevCount + 8));
  };
  const cardItems = Array.from({ length: 40 });
  return (
    <div>
      <HomeNav />
      <div className="flex w-screen flex-col items-center justify-center">
        <div className="w-4/5">
          <h1 className="my-8 border-b-2 border-zinc-400 text-2xl font-bold">
            Categorie name
          </h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          <div className="w-5/5 flex flex-row flex-wrap items-center justify-center gap-8">
            {cardItems.slice(0, visibleCards).map((_, index) => (
              <Link href="../../recipe" key={index}>
                <Card></Card>
              </Link>
            ))}
          </div>
          {visibleCards < cardItems.length && (
            <button
              className="mt-6 rounded bg-greenbg px-4 py-2 text-white"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
