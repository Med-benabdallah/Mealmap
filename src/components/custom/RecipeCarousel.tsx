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

function RecipeCarousel() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center md:basis-1/2 lg:basis-1/3"
            >
              <div>
                <Link href="/recipe">
                  <Card></Card>
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
