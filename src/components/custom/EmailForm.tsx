import React from "react";

function EmailForm() {
  return (
    <div className="my-10 flex h-[500px] w-full flex-col items-center justify-center bg-greenbg">
      <h1 className="mb-2 font-serif text-4xl">Deliciousness to your inbox</h1>
      <p>Enjoy weekly hand-picked recipes</p>
      <div className="mt-8 flex w-full flex-row items-center justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-12 w-1/5 rounded-l-md border border-r-0 p-3"
        />
        <button className="h-12 rounded-r-md bg-footer px-4 text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default EmailForm;
