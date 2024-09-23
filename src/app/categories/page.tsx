"use client";
import React,{ useState } from 'react'
import Card from "@/components/custom/Card";
import CategoryList from "@/components/custom/CategoryList";
import Link from 'next/link';
import Footer from '@/components/custom/Footer';
import HomeNav from '@/components/custom/HomeNav';
export default function Recipes() {
  const [visibleCards, setVisibleCards] = useState(20); 
  const handleLoadMore = () => {
    setVisibleCards((prevCount) => Math.min(prevCount + 8, 16));
  };
  const cardItems = Array.from({ length: 40 }); 
  return (
    <div><HomeNav></HomeNav> <div className='w-screen flex flex-col justify-center items-center'>
      <div className='w-4/5'><h1 className='text-2xl font-bold my-8 border-b-2 border-zinc-400'>Categories</h1></div>
      <div className='flex flex-row flex-wrap gap-5 justify-center items-center'>
        <div className="flex flex-row flex-wrap gap-8 justify-center items-center w-3/5 ">
          {cardItems.slice(0, visibleCards).map((_, index) => (
            <Link href="../categories/recipeList  " key={index}><CategoryList></CategoryList></Link>
          ))}
        </div>
        
      </div>
    </div><Footer/></div>
  )
}
