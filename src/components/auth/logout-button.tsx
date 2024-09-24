"use client";

import React from "react";

import { logout } from "@/actions/auth";

import { NavigationMenuItem } from "@/components/ui/navigation-menu";

export function LogoutButton() {
  return (
    <NavigationMenuItem
      onClick={() => logout()}
      className="flex h-10 w-full cursor-pointer items-center justify-center px-4 text-white hover:rounded-full hover:bg-secondarybg"
    >
      Logout
    </NavigationMenuItem>
  );
}
