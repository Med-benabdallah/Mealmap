import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
  import Search from "@/components/custom/Search";
  import SignIn from "@/components/custom/SignIn";
  import Nav from "@/components/custom/Nav";
  const pattaya = Pattaya({ subsets: ["latin"], weight: "400" });
  import { Inter, Pattaya } from "next/font/google";

function HomeNav() {
  return (
    <div> <NavigationMenu className="max-w-full m-4 lg:px-8 flex flex-row justify-between items-center pb-3">
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
              className="w-6 h-6"
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
    <NavigationMenuList className="flex flex-row justify-center items-center gap-6 flex-nowrap">


<NavigationMenuItem className="flex justify-center items-center">
<Search />
</NavigationMenuItem>
<NavigationMenuItem className="flex justify-end items-center">
  <SignIn/>
</NavigationMenuItem>
<NavigationMenuItem className="md:hidden flex justify-center items-center">
<Nav />
</NavigationMenuItem>
</NavigationMenuList>

  </NavigationMenu></div>
  )
}

export default HomeNav