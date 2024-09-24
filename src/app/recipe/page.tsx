// Ensure this is imported if you haven't already
"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import Footer from "@/components/custom/Footer";
import HomeNav from "@/components/custom/HomeNav";

import cheeseCake from "../../../public/images/cheese_cake.jpg";

export default function Recipe() {
  // Initialize state for the ingredients checkboxes
  const [checkedIngredients, setCheckedIngredients] = useState({
    ing1: false,
    ing2: false,
    ing3: false,
    ing4: false,
  });

  // Load from localStorage when the component mounts
  useEffect(() => {
    const storedIngredients = localStorage.getItem("checkedIngredients");
    if (storedIngredients) {
      setCheckedIngredients(JSON.parse(storedIngredients));
    }
  }, []);

  // Save to localStorage whenever the checkedIngredients state changes
  useEffect(() => {
    localStorage.setItem(
      "checkedIngredients",
      JSON.stringify(checkedIngredients),
    );
  }, [checkedIngredients]);

  // Handle checkbox change
  const handleCheck = (e) => {
    const { id, checked } = e.target; // Ensure you are destructuring e.target correctly
    setCheckedIngredients((prevState) => ({
      ...prevState,
      [id]: checked, // Dynamically set the id to true or false based on 'checked' value
    }));
  };

  return (
    <div>
      <HomeNav />
      <div className="flex w-screen flex-col items-center justify-center">
        <div className="my-10 flex w-3/5 flex-row items-center justify-center border-b-2 border-zinc-500">
          <div className="w-3/4">
            <h1 className="text-5xl font-bold">Cheese Cake</h1>
          </div>
          <div className="flex flex-row flex-nowrap">
            <div>
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
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </div>
            <div>
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-3/5">
          <Image
            src={cheeseCake}
            className="rounded-lg"
            layout="fill"
            style={{ objectFit: "cover" }}
            alt="Cheese Cake"
          />
        </div>

        <div className="my-10 flex w-3/5 flex-row flex-nowrap items-start justify-center">
          <div className="relative top-0 flex w-2/4 flex-col items-start justify-center">
            <h1 className="text-2xl font-bold">Ingredients</h1>
            <div className="flex flex-row">
              <input
                type="checkbox"
                id="ing1"
                checked={checkedIngredients.ing1}
                onChange={handleCheck}
              />
              <label
                htmlFor="ing1"
                className={`ml-2 ${checkedIngredients.ing1 ? "line-through" : ""}`}
              >
                1 cup flour
              </label>
            </div>
            <div className="flex flex-row">
              <input
                type="checkbox"
                id="ing2"
                checked={checkedIngredients.ing2}
                onChange={handleCheck}
              />
              <label
                htmlFor="ing2"
                className={`ml-2 ${checkedIngredients.ing2 ? "line-through" : ""}`}
              >
                1 cup sugar
              </label>
            </div>
            <div className="flex flex-row">
              <input
                type="checkbox"
                id="ing3"
                checked={checkedIngredients.ing3}
                onChange={handleCheck}
              />
              <label
                htmlFor="ing3"
                className={`ml-2 ${checkedIngredients.ing3 ? "line-through" : ""}`}
              >
                1 cup milk
              </label>
            </div>
            <div className="flex flex-row">
              <input
                type="checkbox"
                id="ing4"
                checked={checkedIngredients.ing4}
                onChange={handleCheck}
              />
              <label
                htmlFor="ing4"
                className={`ml-2 ${checkedIngredients.ing4 ? "line-through" : ""}`}
              >
                1 cup butter
              </label>
            </div>
          </div>

          <div className="flex w-2/4 flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Instructions</h1>
            <p>
              Preheat oven to 350°F. Mix flour, sugar, milk, and butter in a
              bowl. Pour the mixture into a baking pan and bake for 30 minutes.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
