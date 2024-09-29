import { requireAuth } from "@/actions/auth";
import { Role } from "@prisma/client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LogoutButton } from "@/components/auth/logout-button";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authorized } = await requireAuth(Role.ADMIN);

  if (!authorized)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Unauthorized
      </div>
    );

  return (
    <div className="flex h-screen w-screen flex-row items-center justify-end">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 flex h-full w-1/5 items-center justify-center bg-greenbg">
        <NavigationMenu orientation="vertical" className="h-4/5 w-full px-10">
          <NavigationMenuList className="flex flex-col items-center justify-center gap-10">
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/"
                className="flex h-10 w-full items-center justify-center px-4 text-white hover:rounded-full hover:bg-secondarybg"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/dashboard"
                className="flex h-10 w-full items-center justify-center px-4 text-white hover:rounded-full hover:bg-secondarybg"
              >
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/dashboard/user"
                className="flex h-10 w-full items-center justify-center px-4 text-white hover:rounded-full hover:bg-secondarybg"
              >
                Users
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/dashboard/categories"
                className="flex h-10 w-full items-center justify-center px-4 text-white hover:rounded-full hover:bg-secondarybg"
              >
                Categories
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/dashboard/recipies"
                className="flex h-10 w-full items-center justify-center px-4 text-white hover:rounded-full hover:bg-secondarybg"
              >
                Recipies
              </NavigationMenuLink>
            </NavigationMenuItem>

            <LogoutButton />
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Main Content */}
      <div className="ml-1/5 h-full w-4/5 overflow-auto">{children}</div>
    </div>
  );
}
