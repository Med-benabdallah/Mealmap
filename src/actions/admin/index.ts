import { db } from "@/lib/db";

export async function getTotalUsers() {
  return await db.user.findMany();
}

export async function addCategorie(cat: string) {
  try {
    const categorie = await db.category.create({
      data: {
        name: cat,
      },
    });
    console.log(categorie);
    return categorie;
  } catch (error) {
    console.error(error);
  }
}
