'use client';
import React,{ useState } from 'react'
import Card from '@/components/custom/Card';
import Link from 'next/link';

export default function RecipeList() {
  const [visibleCards, setVisibleCards] = useState(10); 
  const handleLoadMore = () => {
    setVisibleCards((prevCount) => Math.min(prevCount + 8));
  };
  const cardItems = Array.from({ length: 40 }); 
  return (
    
    <div className='w-screen flex flex-col justify-center items-center'>
    <div className='w-4/5'><h1 className='text-2xl font-bold my-8 border-b-2 border-zinc-400'>Categorie name</h1></div>
    <div className='flex flex-row flex-wrap gap-5 justify-center items-center'>
      <div className="flex flex-row flex-wrap gap-8 justify-center items-center w-5/5 ">
        {cardItems.slice(0, visibleCards).map((_, index) => (
          <Link href="../../recipe" key={index} ><Card></Card></Link>
        ))}
      </div>
      {visibleCards < cardItems.length && (
          <button
            className="mt-6 bg-greenbg text-white py-2 px-4 rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}      
    </div>
    
  </div>
  )
}
