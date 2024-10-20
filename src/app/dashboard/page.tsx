import React from "react";

import { getTotalUsers } from "@/actions/admin/global";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTotalCatgories } from "@/actions/admin/global";
import { getTotalRecipes } from "@/actions/admin/global";

export default async function dashboard() {
  const totalUsers = await getTotalUsers();
  const totalRecipes = await getTotalRecipes();
  const totalCatgories = await getTotalCatgories();
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="my-10 mt-4 flex h-full w-full items-center justify-center gap-4 max-sm:flex-col sm:flex-row">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
              <CardDescription>
                this is the total number of users{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalUsers.length}</p>
            </CardContent>
            <CardFooter>
              <p>Today&apos;s new users -&gt; +25</p>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Total Categories</CardTitle>
              <CardDescription>
                this is the total number of Categories{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalCatgories.length}</p>
            </CardContent>
            <CardFooter>
              <p>Today&apos;s new users -&gt; +25</p>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Total recipies</CardTitle>
              <CardDescription>
                this is the total number of users{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalRecipes.length}</p>
            </CardContent>
            <CardFooter>
              <p>Today&apos;s new users -&gt; +25</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mx-10 flex flex-row flex-nowrap items-center justify-evenly">
        <div className="m-10 w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>TOP USERS of the week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mx-10">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">NB posts</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>Ali</TableCell>
                      <TableCell className="text-right">15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>Ali</TableCell>
                      <TableCell className="text-right">11</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>Ali</TableCell>
                      <TableCell className="text-right">8</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">7</TableCell>
                      <TableCell>sarra</TableCell>
                      <TableCell className="text-right">6</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>samia</TableCell>
                      <TableCell className="text-right">1</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mx-10 w-1/2">
          <Card className="">
            <CardHeader>
              <CardTitle>TOP Recipies of the week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mx-10">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">user ID</TableHead>
                      <TableHead className="text-right">NB posts</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>Ali</TableCell>
                      <TableCell className="text-right">15</TableCell>
                      <TableCell className="text-right">15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>Ali</TableCell>
                      <TableCell className="text-right">11</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>Ali</TableCell>
                      <TableCell className="text-right">8</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">7</TableCell>
                      <TableCell>sarra</TableCell>
                      <TableCell className="text-right">6</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>samia</TableCell>
                      <TableCell className="text-right">1</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>{" "}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
