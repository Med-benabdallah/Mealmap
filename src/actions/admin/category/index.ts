"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import z from "zod";



export async function addCategory(cat: string, image: string) { 
  try {
    const category = await db.category.create({
      data: {
        name: cat,
        image:image,
      },
    });
    console.log(category);
    redirect("/dashboard/categories");
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
}
export async function getCategories() {
  try {
    const categories = await db.category.findMany();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function deleteCategory(categoryId: string) {
const deleteCategory = await db.category.delete({
  where: {
    id: categoryId,
  },
});
}

export async function updateCategory(categoryId: string, cat: string, image: string) {
  try {
    const category = await db.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name: cat,
        image:image,
      }

    });
    return category;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
}

