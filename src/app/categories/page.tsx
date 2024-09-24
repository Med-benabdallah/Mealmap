"use client";

import React, { useState } from "react";

import Link from "next/link";

import Card from "@/components/custom/Card";
import CategoryList from "@/components/custom/CategoryList";
import Footer from "@/components/custom/Footer";
import HomeNav from "@/components/custom/HomeNav";

export default function Recipes() {
  const [visibleCards, setVisibleCards] = useState(20);
  const handleLoadMore = () => {
    setVisibleCards((prevCount) => Math.min(prevCount + 8, 16));
  };
  const cardItems = Array.from({ length: 40 });
  return (
    <div>
      <HomeNav></HomeNav>{" "}
      <div className="flex w-screen flex-col items-center justify-center">
        <div className="w-4/5">
          <h1 className="my-8 border-b-2 border-zinc-400 text-2xl font-bold">
            Categories
          </h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          <div className="flex w-3/5 flex-row flex-wrap items-center justify-center gap-8">
            {cardItems.slice(0, visibleCards).map((_, index) => (
              <Link href="../categories/recipeList  " key={index}>
                <CategoryList></CategoryList>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
