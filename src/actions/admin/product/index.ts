"use server";

import { db } from "@/lib/db";
import fs from "fs/promises";
import { redirect, RedirectType } from "next/navigation";
import z from "zod";


const fileschema = z.instanceof(File, { message: "Invalid file" });
const imageSchema = fileschema.refine((file) => file.size === 0 || file.type.startsWith("image/"))
const addSchema = z.object({
  name: z.string().min(3),
  ingredients: z.array(z.string()).min(1),
  instructions: z.array(z.string()).min(1),
  image: imageSchema.refine(file => file.size > 0, "required"),
})

export async function addRecepie(name: string, ingredients: string[], instructions: string[], categoryIds: string[], image: string) {
  const result = addSchema.safeParse({ name, ingredients, instructions, image });
  if (result.success === false) {
      return result.error.formErrors.fieldErrors;
  }

  const data = result.data
  
  await fs.mkdir("public/recepies", { recursive: true });
  const imagePath = `recepies/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(`public/${imagePath}`, Buffer.from(await data.image.arrayBuffer()));
  try {
      // Step 1: Create the recipe
      const recepie = await db.recipie.create({
        data: {
          name: name,
          ingredients: ingredients,
          instructions: instructions,
          image: image,
        },
      });
  
      console.log("Recipe created:", recepie);
  
      // Step 2: Link the recipe to categories using the join table (RecipieCategory)
      const recipeCategoryLinks = categoryIds.map((categoryId) => {
        return db.recipieCategory.create({
          data: {
            recipieId: recepie.id,
            categoryId: categoryId,
          },
        });
      });
  
      // Step 3: Await all the links to be created
      await Promise.all(recipeCategoryLinks);
  
      console.log("Recipe linked to categories");
      redirect ("/dashboard/recipies");
    } catch (error) {
      console.error("Error creating recipe:", error);
      throw error;
    }

  }