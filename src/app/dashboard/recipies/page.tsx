"use client";

import React, { useState, useEffect } from "react";
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
import { getRecipies, addRecipie, deleteRecipie, updateRecipie } from "@/actions/admin/recipie";
import { toast } from "sonner";
import { UploadButton } from "@/utils/uploadthing";

export default function Recipes() {
  const [recipies, setRecipies] = useState<any[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [instructions, setInstructions] = useState<string[]>([]);
  const [currentInstruction, setCurrentInstruction] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [editingRecipieId, setEditingRecipieId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fields for the update form
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editInstructions, setEditInstructions] = useState<string[]>([]);
  const [editIngredients, setEditIngredients] = useState<string[]>([]);

  useEffect(() => {
    async function fetchRecipies() {
      const fetchedRecipies = await getRecipies();
      setRecipies(fetchedRecipies);
    }
    fetchRecipies();
  }, []);

  const addIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentIngredient.trim()) {
      if (isEditing) {
        setEditIngredients([...editIngredients, currentIngredient]);
      } else {
        setIngredients([...ingredients, currentIngredient]);
      }
      setCurrentIngredient("");
    }
  };

  const removeIngredient = (indexToRemove: number) => {
    if (isEditing) {
      setEditIngredients(editIngredients.filter((_, index) => index !== indexToRemove));
    } else {
      setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
    }
  };

  const addInstruction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentInstruction.trim()) {
      if (isEditing) {
        setEditInstructions([...editInstructions, currentInstruction]);
      } else {
        setInstructions([...instructions, currentInstruction]);
      }
      setCurrentInstruction("");
    }
  };

  const removeInstruction = (indexToRemove: number) => {
    if (isEditing) {
      setEditInstructions(editInstructions.filter((_, index) => index !== indexToRemove));
    } else {
      setInstructions(instructions.filter((_, index) => index !== indexToRemove));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!recipeName.trim() || ingredients.length === 0 || instructions.length === 0) {
      alert("Please fill out all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      await addRecipie(recipeName, selectedImage, instructions, ingredients);
      toast.success("Recipe added successfully");

      setRecipies((prev) => [
        ...prev,
        { name: recipeName, image: selectedImage, instructions, ingredients },
      ]);
      setRecipeName("");
      setSelectedImage("");
      setIngredients([]);
      setInstructions([]);
    } catch (error) {
      console.error("Error adding recipe:", error);
      toast.error("Error adding recipe");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteRecipie = async (recipieId: string) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await deleteRecipie(recipieId);
        setRecipies(recipies.filter((recipie) => recipie.id !== recipieId));
        toast.success("Recipe deleted successfully");
      } catch (error) {
        toast.error("Failed to delete recipe");
        console.error("Error deleting recipe:", error);
      }
    }
  };

  const handleEditRecipie = (recipie: any) => {
    setEditingRecipieId(recipie.id);
    setEditName(recipie.name);
    setEditImage(recipie.image);
    setEditInstructions(recipie.instructions);
    setEditIngredients(recipie.ingredients);
    setIsEditing(true);
  };

  const handleUpdateRecipie = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateRecipie(editingRecipieId!, editName, editImage, editInstructions, editIngredients);
      setRecipies(recipies.map((recipie) => {
        if (recipie.id === editingRecipieId) {
          return { ...recipie, name: editName, image: editImage, instructions: editInstructions, ingredients: editIngredients };
        }
        return recipie;
      }));
      toast.success("Recipe updated successfully");
      setIsEditing(false);
      setEditingRecipieId(null);
      resetEditFields();
    } catch (error) {
      toast.error("Error updating recipe");
      console.error("Error updating recipe:", error);
    }
  };

  const resetEditFields = () => {
    setEditName("");
    setEditImage("");
    setEditInstructions([]);
    setEditIngredients([]);
    setCurrentIngredient("");
    setCurrentInstruction("");
  };

  const closeEditing = () => {
    resetEditFields();
    setIsEditing(false);
    setEditingRecipieId(null);
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
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
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
                    onClick={addInstruction}
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

              {/* Recipe Image Upload */}
              <div>
                <label htmlFor="image">Recipe Image</label>
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    if (res && res.length > 0) {
                      setSelectedImage(res[0].url); // Update the imageUrl state
                      toast.success("Upload complete");
                    }
                  }}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  className="hover:bg-primary-dark h-12 w-full rounded-md bg-primary text-white transition disabled:bg-gray-300"
                  type="submit"
                  disabled={isSubmitting || ingredients.length === 0 || instructions.length === 0}
                >
                  {isSubmitting ? "Submitting..." : "Submit Recipe"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Recipes Table */}
      <div className="w-2/3">
        <Table className="mt-10">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead className="text-right">Modify</TableHead>
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recipies.map((recipie) => (
              <TableRow key={recipie.id}>
                <TableCell className="font-medium">{recipie.id}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={recipie.image || "https://github.com/shadcn.png"} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{recipie.name}</TableCell>
                <TableCell className="text-right">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEditRecipie(recipie);
                    }}
                    className="hover:underline"
                  >
                    Modify
                  </a>
                </TableCell>
                <TableCell className="text-right">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteRecipie(recipie.id);
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

      {/* Update Recipe Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Card className="w-1/3 relative">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold">
                Update Recipe
              </CardTitle>
              <button className="absolute top-2 right-2 text-red-500" onClick={closeEditing}>
                X
              </button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateRecipie} className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="editName" className="font-medium">Name</label>
                  <input
                    type="text"
                    id="editName"
                    placeholder="Enter recipe name"
                    className="h-10 w-full rounded-md border border-gray-300 px-4 focus:border-primary focus:outline-none"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="editIngredients" className="font-medium">Ingredients</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
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
                    {editIngredients.map((ingredient, index) => (
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

                <div className="flex flex-col gap-2">
                  <label htmlFor="editInstructions" className="font-medium">Instructions</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={currentInstruction}
                      onChange={(e) => setCurrentInstruction(e.target.value)}
                      placeholder="Enter instruction"
                      className="h-10 w-full rounded-md border border-gray-300 px-4 focus:border-primary focus:outline-none"
                    />
                    <button
                      className="hover:bg-primary-dark rounded-md bg-primary px-4 text-white transition"
                      onClick={addInstruction}
                      disabled={!currentInstruction.trim()}
                    >
                      Add
                    </button>
                  </div>
                  <ol className="mt-2 list-inside list-decimal space-y-1">
                    {editInstructions.map((instruction, index) => (
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

                <div>
                  <label htmlFor="editImage">Recipe Image</label>
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res && res.length > 0) {
                        setEditImage(res[0].url);
                        toast.success("Upload complete");
                      }
                    }}
                  />
                </div>

                <div>
                  <button
                    className="hover:bg-primary-dark h-12 w-full rounded-md bg-primary text-white transition"
                    type="submit"
                  >
                    Update Recipe
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
