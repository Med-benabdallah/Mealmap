"use server";

import { getUserByEmail } from "@/actions/auth";
import { signIn } from "@/auth";
import { SignInFormValues, SignInSchema } from "@/schemas";
import { Role } from "@prisma/client";
import { AuthError } from "next-auth";

export async function login(values: SignInFormValues) {
  try {
    const validatedFields = SignInSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
      return { error: "Invalid credentials!" };
    }

    let defaultRedirectUrl = "/";

    if (existingUser.role === Role.ADMIN) {
      defaultRedirectUrl = "/dashboard";
    }

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      return { redirect: defaultRedirectUrl };
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid credentials!" };
          default:
            return { error: "Something went wrong!" };
        }
      }

      throw error;
    }
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
