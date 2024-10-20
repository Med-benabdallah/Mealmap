import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroimg from "../../../public/images/hero.jpg";
import { getRandomRecipe } from '@/actions/admin/recipie'; // Adjust the import based on your project structure

function Hero() {
  const [randomRecipe, setRandomRecipe] = useState<{ name: string; image: string | null } | null>(null); // Define the state for random recipe

  useEffect(() => {
    async function fetchRandomRecipe() {
      const recipe = await getRandomRecipe(); // Fetch random recipe
      if (recipe) {
        setRandomRecipe({
          name: recipe.name,
          image: recipe.image
        }); // Update state
      }
    }

    fetchRandomRecipe();
  }, []);

  return (
    <div className="flex h-auto w-3/4 flex-col rounded-xl bg-secondarybg lg:h-[500px] lg:flex-row">
      <div className="relative h-[300px] w-full lg:h-full lg:w-2/3">
        <Image
          src={randomRecipe?.image || heroimg} // Use the random recipe image or a default image
          className="rounded-t-lg lg:rounded-l-lg"
          layout="fill"
          style={{ objectFit: "cover" }}
          alt="picture of the best dish of the week"
        />
      </div>
      <div className="flex h-[200px] w-full flex-col items-center justify-center p-10 text-stone-100 lg:h-full lg:w-1/3 lg:items-start">
        <span className="inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
          <p>{randomRecipe ? "86% would make this again" : "Loading..."}</p> {/* Conditional rendering */}
        </span>

        <h1 className="my-3 text-3xl font-bold">{randomRecipe ? randomRecipe.name : "Loading..."}</h1>
       {/* Conditional rendering */}
      </div>
    </div>
  );
}

export default Hero;
