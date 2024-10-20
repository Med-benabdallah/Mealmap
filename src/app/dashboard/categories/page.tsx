"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { UploadButton } from "@/utils/uploadthing";
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
import { getCategories, addCategory, deleteCategory } from "@/actions/admin/category";

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Error fetching categories");
      }
    }
    fetchCategories();
  }, []);
  const handleDeleteCategory = async (categoryId: string) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await deleteCategory(categoryId);
        setCategories(categories.filter((category
        ) => category.id !== categoryId));
        toast.success("Recipe deleted successfully");
      } catch (error) {
        toast.error("Failed to delete recipe");
        console.error("Error deleting recipe:", error);
      }
    }
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    if (!categoryName || !imageUrl) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await addCategory(categoryName, imageUrl); // Pass the required arguments
      toast.success("Category added successfully");

      // Optionally update the categories state without reloading
      setCategories((prev) => [...prev, { name: categoryName, image: imageUrl }]);
      setCategoryName(""); // Clear the form
      setImageUrl(""); // Clear the uploaded image
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Error adding category");
    }
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
            <form onSubmit={handleAddCategory}>
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name">Category Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                    className="h-10 w-full px-4"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)} // Update state
                  />
                </div>
                <div>
                  <label htmlFor="image">Category Image</label>
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res && res.length > 0) {
                        setImageUrl(res[0].url); // Update the imageUrl state
                        toast.success("Upload complete");
                      }
                    }}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="h-10 w-full bg-primary text-white"
                  >
                    Add Category
                  </button>
                </div>
              </div>
            </form>
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
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={category.image} />
                    <AvatarFallback>NA</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell className="text-right">
                <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteCategory(category.id);
                    }}
                    className="hover:underline"
                  >
                    Delete
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
