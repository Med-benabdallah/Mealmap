"use server";

import { SignUpFormValues, SignUpSchema } from "@/schemas";
import { Role } from "@prisma/client";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";

export async function signUp(values: SignUpFormValues) {
  try {
    const validatedFields = SignUpSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    const { name, email, password } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 12);

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return { error: "User already exists!" };
    }

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        emailVerified: new Date(),
        role: Role.USER,
      },
    });

    return { success: "Account created successfully!" };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
