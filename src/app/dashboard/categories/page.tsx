"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Categories() {
  const [isPending, startTransition] = React.useTransition();
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null); // Store file as File object
  interface Category {
    id: string;
    name: string;
    image: string;
  }

  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories from the database when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle file input change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file); // Store file object
    }
  };

  // Handle form submission
  const onSubmit = async (name: string) => {
    const formData = new FormData();
    formData.append("name", name);
    if (image) {
      formData.append("image", image); // Append image file
    }

    startTransition(() => {
      toast.promise(
        fetch("/api/categories", {
          method: "POST",
          body: formData,
        }).then((res) => res.json()),
        {
          loading: "Creating category...",
          success: "Category created successfully",
          error: "Something went wrong.",
        }
      );
    });
  };

  return (
    <div className="m-10 flex flex-col items-center justify-center">
      {/* Add new category form */}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  className="h-10 w-full px-4"
                />
              </div>
              <div>
                <label htmlFor="image">Category Image</label>
                <input
                  onChange={handleImageChange}
                  type="file"
                  name="image"
                  id="image"
                  className="h-10 w-full px-4"
                />
              </div>
              <div>
                <button
                  className="h-10 w-full bg-primary text-white"
                  onClick={() => onSubmit(name)}
                >
                  Add Category
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table to display categories */}
      <div className="w-2/3">
        <Table className="mt-10">
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Modify</TableHead>
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={category.image || "/placeholder.png"} />
                    <AvatarFallback>{category.name[0]}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell className="text-right">Modify button</TableCell>
                <TableCell className="text-right">Delete button</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
