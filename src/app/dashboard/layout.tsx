import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-row justify-end items-center">
      {/* Sidebar */}
      <div className="h-full w-1/5 bg-greenbg flex items-center justify-center fixed top-0 left-0">
        <NavigationMenu orientation="vertical" className="w-full h-4/5 px-10">
          <NavigationMenuList className="flex flex-col justify-center items-center gap-10">
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/"
                className="text-white hover:bg-secondarybg hover:rounded-full w-full h-10 flex items-center justify-center px-4"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/dashboard"
                className="text-white hover:bg-secondarybg hover:rounded-full w-full h-10 flex items-center justify-center px-4"
              >
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/dashboard/user"
                className="text-white hover:bg-secondarybg hover:rounded-full w-full h-10 flex items-center justify-center px-4"
              >
                Users
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/dashboard/categories"
                className="text-white hover:bg-secondarybg hover:rounded-full w-full h-10 flex items-center justify-center px-4"
              >
                Categories
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-full">
              <NavigationMenuLink
                href="/dashboard/recipies"
                className="text-white hover:bg-secondarybg hover:rounded-full w-full h-10 flex items-center justify-center px-4"
              >
                Recipies
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Main Content */}
      <div className='w-4/5 ml-1/5 h-full overflow-auto'>
        {children}
      </div>
    </div>
  );
}
