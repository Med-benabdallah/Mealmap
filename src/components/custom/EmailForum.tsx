import React from 'react';

function EmailForum() {
  return (
    <div className='w-screen h-[500px] bg-greenbg my-10 flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-serif mb-2'>Deliciousness to your inbox</h1>
      <p>Enjoy weekly hand-picked recipes</p>
      <div className='flex flex-row justify-center items-center mt-8 w-full'>
        <input 
          type='email' 
          placeholder='Enter your email' 
          className='h-12 w-1/5 p-3 border border-r-0 rounded-l-md'
        />
        <button className='h-12 bg-footer text-white px-4 rounded-r-md'>Subscribe</button>
      </div>
    </div>
  );
}

export default EmailForum;
