import React from 'react';
import Card from './Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';

function RecipeCarousel() {
  return (
    <div className='w-4/5 my-10'
    >
      
      <Carousel orientation='horizontal'
      opts={{
        align: "start",
      }} className='w-full'>
        <CarouselContent className='w-full'>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='flex justify-center items-center md:basis-1/2 lg:basis-1/3'>
              <div><Link href="/recipe"><Card></Card></Link></div>
              
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default RecipeCarousel;
