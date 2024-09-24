import React from "react";

import { Inter, Pattaya } from "next/font/google";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Nav from "@/components/custom/Nav";
import Search from "@/components/custom/Search";
import SignIn from "@/components/custom/SignIn";

import { Button } from "../ui/button";

const pattaya = Pattaya({ subsets: ["latin"], weight: "400" });

function HomeNav() {
  return (
    <div>
      {" "}
      <NavigationMenu className="m-4 flex max-w-full flex-row items-center justify-between pb-3 lg:px-8">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`logo ${pattaya.className}`}
              href="/"
            >
              MealMap
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="hidden md:flex md:flex-row md:gap-x-12">
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/categories">
              Categories
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/favorite">
              <span className="inline-flex gap-x-1">
                Favorite
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="red"
                  className="h-6 w-6"
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
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="flex flex-row flex-nowrap items-center justify-center gap-6">
          <NavigationMenuItem className="flex items-center justify-center">
            <Search />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex items-center justify-end">
            <Button
              variant="outline"
              className="rounded bg-greenbg px-4 py-2 text-white"
              asChild
            >
              <Link href="/auth/sign-in">Sign In</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex items-center justify-center md:hidden">
            <Nav />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default HomeNav;
