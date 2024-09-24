import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export default function categories() {
  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <div className="w-2/3">
        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name">Category Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                    className="h-10 w-full px-4"
                  />
                </div>
                <div>
                  <button className="h-10 w-full bg-primary text-white">
                    Add Category
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="w-2/3">
        <Table className="mt-10">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Modify</TableHead>
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">11</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Pasta</TableCell>
              <TableCell className="text-right">modify button</TableCell>
              <TableCell className="text-right">Delete button</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
