import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Card from "./Card";

// Define the Recipe type
interface Recipe {
  id: string;
  name: string;
  image?: string;
}

interface RecipeCarouselProps {
  recipes: Recipe[];
}

function RecipeCarousel({ recipes }: RecipeCarouselProps) {
  return (
    <div className="my-10 w-4/5">
      <Carousel
        orientation="horizontal"
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="w-full">
          {recipes.map((recipe) => ( // Use the passed recipes prop
            <CarouselItem
              key={recipe.id} // Use recipe id as the key
              className="flex items-center justify-center md:basis-1/2 lg:basis-1/3"
            >
              <div>
                <Link href={`/recipe/${recipe.id}`}> {/* Link to specific recipe */}
                  <Card
                    recipeId={recipe.id}
                    name={recipe.name}
                    image={recipe.image || "/images/fallback.jpg"} // Fallback if no image
                    isFavorite={false}
                  />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default RecipeCarousel;
