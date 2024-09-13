'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Search() {
  return (
    <div>
      <Sheet key='top'>
        <SheetTrigger>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </SheetTrigger>
        <SheetContent side='top'>
          <SheetHeader>
            <SheetTitle>what&lsquo;s in your mind
            </SheetTitle>
            <SheetDescription>
            
            </SheetDescription>
          </SheetHeader>
          <div className='border-b-2 mb-2'><input type="text" placeholder="Search..." className="search-input w-full" /></div>
          <div>

          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Search;
