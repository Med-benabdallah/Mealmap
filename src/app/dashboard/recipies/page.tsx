"use client";

import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Recipes() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");

  const [instructions, setInstructions] = useState<string[]>([]);
  const [currentInstruction, setCurrentInstruction] = useState("");

  const [selectedImage, setSelectedImage] = useState<FileList | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle image selection and preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setSelectedImage(files);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Function to add ingredient
  const addIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient]);
      setCurrentIngredient("");
    }
  };

  // Function to remove ingredient
  const removeIngredient = (indexToRemove: number) => {
    setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
  };

  // Function to add instruction
  const addInstruction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentInstruction.trim()) {
      setInstructions([...instructions, currentInstruction]);
      setCurrentInstruction("");
    }
  };

  // Function to remove instruction
  const removeInstruction = (indexToRemove : number) => {
    setInstructions(instructions.filter((_, index) => index !== indexToRemove));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // Validation: Ensure at least one ingredient and one instruction
    if (ingredients.length === 0 || instructions.length === 0) {
      alert("Please add at least one ingredient and one instruction.");
      return;
    }

    setIsSubmitting(true); // Show loading spinner

    // Simulate form submission (Replace this with API call or form handling logic)
    setTimeout(() => {
      setIsSubmitting(false); // Hide loading spinner

      // Example: Show a success message
      alert("Recipe submitted successfully!");

      // Clear form after successful submission
      setIngredients([]);
      setInstructions([]);
      setSelectedImage(null);
      setImagePreview(null);
    }, 2000);
  };

  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold">
              Add New Recipe
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Section */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter recipe name"
                  className="h-10 w-full rounded-md border border-gray-300 px-4 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              {/* Ingredients Section */}
              <div className="flex flex-col gap-2">
                <label htmlFor="ingredients" className="font-medium">
                  Ingredients
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="ingredients"
                    id="ingredients"
                    value={currentIngredient}
                    onChange={(e) => setCurrentIngredient(e.target.value)}
                    placeholder="Enter ingredient"
                    className="h-10 w-full rounded-md border border-gray-300 px-4 focus:border-primary focus:outline-none"
                  />
                  <button
                    className="hover:bg-primary-dark rounded-md bg-primary px-4 text-white transition"
                    onClick={addIngredient}
                    disabled={!currentIngredient.trim()}
                  >
                    Add
                  </button>
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="flex justify-between">
                      {ingredient}
                      <button
                        className="ml-2 text-sm text-red-500"
                        onClick={() => removeIngredient(index)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions Section */}
              <div className="flex flex-col gap-2">
                <label htmlFor="instructions" className="font-medium">
                  Instructions
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="instructions"
                    id="instructions"
                    value={currentInstruction}
                    onChange={(e) => setCurrentInstruction(e.target.value)}
                    placeholder="Enter instruction"
                    className="h-10 w-full rounded-md border border-gray-300 px-4 focus:border-primary focus:outline-none"
                  />
                  <button
                    className="hover:bg-primary-dark rounded-md bg-primary px-4 text-white transition"
                    type="submit"
                    disabled={!currentInstruction.trim()}
                  >
                    Add
                  </button>
                </div>
                <ol className="mt-2 list-inside list-decimal space-y-1">
                  {instructions.map((instruction, index) => (
                    <li key={index} className="flex justify-between">
                      {instruction}
                      <button
                        className="ml-2 text-sm text-red-500"
                        onClick={() => removeInstruction(index)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Image Upload Section */}
              <div className="flex flex-col gap-2">
                <label htmlFor="image" className="font-medium">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                />
                {imagePreview && (
                  <div className="mt-2">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-32 w-32 rounded-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  className="hover:bg-primary-dark h-12 w-full rounded-md bg-primary text-white transition disabled:bg-gray-300"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Recipe"}
                </button>
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
              <TableHead>FullName</TableHead>
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
              <TableCell>Khalil ltaief</TableCell>
              <TableCell className="text-right">Modify button</TableCell>
              <TableCell className="text-right">Delete button</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
