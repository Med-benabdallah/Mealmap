import React from 'react';
import Image from 'next/image';
import heroimg from '../../../public/images/hero.jpg';

function Hero() {
  return (
    <div className='w-3/4 flex flex-col lg:flex-row bg-secondarybg rounded-xl h-auto lg:h-[500px]'>
      <div className='relative w-full lg:w-2/3 h-[300px] lg:h-full'>
        <Image 
          src={heroimg}
          className='rounded-t-lg lg:rounded-l-lg '
          layout='fill'
          style={{ objectFit: 'cover' }}
          alt='picture of the best dish of the week'
        />
      </div>
      <div className='w-full lg:w-1/3 p-10 h-[200px] lg:h-full flex flex-col justify-center items-center lg:items-start text-stone-100'>
        <span className='inline-flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
          </svg>
          <p>86% would make this again</p>
        </span>

        <h1 className='text-3xl font-bold my-3'>rice cup</h1>
        <p>one of the best rice meal that u can ever make</p>
      </div>
    </div>
  );
}

export default Hero;
