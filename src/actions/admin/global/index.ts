import { db } from "@/lib/db";

export async function getTotalUsers() {
    return await db.user.findMany();
  }

export async function getTotalCatgories() {
    return await db.category.findMany();
}

export async function getTotalRecipes() {
    return await db.recipie.findMany();
}