"use client";

import React, { useState } from "react";

import { addCategorie } from "@/actions/admin";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Categories() {
  const [isPending, startTransition] = React.useTransition();
  const [categories, setCategories] = useState("");
  const onSubmit = async (categories: string) => {
    startTransition(() => {
      toast.promise(addCategorie(categories), {
        loading: "Creating categorie",
        success: (response) => {
          return "Categorie created successfully";
        },
        error: (err) => err.message || "Something went wrong.",
      });
    });
  };
  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <div className="w-2/3">
        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="name">Category Name</label>
                <input
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  className="h-10 w-full px-4"
                />
              </div>
              <div>
                <button
                  className="h-10 w-full bg-primary text-white"
                  onClick={() => onSubmit(categories)}
                >
                  Add Category
                </button>
              </div>
            </div>
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
