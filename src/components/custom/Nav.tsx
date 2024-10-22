"use client";

import React from "react";
import { Pattaya } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const pattaya = Pattaya({ subsets: ["latin"], weight: "400" });

function Nav() {
  const { data: session, status } = useSession();

  console.log("Session Status:", status);
  console.log("Session Data:", session);

  return (
    <div className="">
      <Sheet key="right">
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex flex-col items-center justify-center"
        >
          <SheetHeader>
            <SheetTitle className={`logo ${pattaya.className}`}>
              MealMap
            </SheetTitle>
          </SheetHeader>
          <NavigationMenu className="flex flex-col items-center justify-center">
            <NavigationMenuList className="flex w-full flex-col items-center justify-center gap-y-12">
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/categories">
                  Categories
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/trending"
                  className="w-screen border-b-2"
                >
                  <span className="inline-flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                      />
                    </svg>
                    Trending
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Authentication Section */}
              <NavigationMenuItem>
                {status === "loading" ? (
                  <p>Loading...</p>
                ) : session ? (
                  <div className="flex items-center space-x-4">
                    <img
                      src={session.user?.image || "/images/default-avatar.png"}
                      alt={session.user?.name || "User"}
                      className="w-8 h-8 rounded-full"
                    />
                    <p>{session.user?.name}</p>
                    <button onClick={() => signOut()} className="ml-4">
                      Logout
                    </button>
                  </div>
                ) : (
                  <button onClick={() => signIn()} className="login-button">
                    Login
                  </button>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Nav;
