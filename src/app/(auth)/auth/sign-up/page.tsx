import React from "react";

import { SignUpForm } from "@/components/auth/forms/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[65%_1fr]">
      <div className="relative flex flex-col items-center justify-center bg-white p-8">
        <h1 className="absolute left-8 top-8 font-pattaya text-3xl text-greenbg">
          MealMap
        </h1>

        <SignUpForm />
      </div>
      <div className="bg-greenbg"></div>
    </div>
  );
}
