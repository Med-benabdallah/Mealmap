"use server";

import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { userHasRole } from "@/auth/helpers";
import { Role } from "@prisma/client";

import { db } from "@/lib/db";

/**
 * This function is used to get the current session of the user
 * @returns {Promise<ExtendedUser | null>}
 */
export async function getCurrentSession() {
  const session = await auth();
  return session?.user;
}

/**
 * This function is used to check if the user is logged in
 * @returns {Promise<boolean>}
 */
export async function isUserLoggedIn() {
  const session = await auth();
  const userIsLoggedIn = Boolean(session);
  return userIsLoggedIn;
}

/**
 * This function is used to log the user out
 * @returns {Promise<void>}
 */
export async function logout() {
  await signOut({ redirect: false });
  redirect("/auth/sign-in");
}

/**
 * This function is used to get the user by their id
 * @param {string} id
 * @returns {Promise<ExtendedUser | null>}
 */
export async function getUserById(id: string) { 
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * This function is used to get the user by their email
 * @param {string} email
 * @returns {Promise<ExtendedUser | null>}
 */
export async function getUserByEmail(email: string | undefined | null) {
  try {
    const user = await db.user.findFirst({
      where: {
        email: email || "",
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * This function is used to check if the current user is signed in and has the required role.
 * If the user is not signed in, the user will be redirected to the sign-in page.
 * @param Role
 * @returns {Promise<{ authorized: boolean; session: Object }>}
 */
export async function requireAuth(
  role: Role,
): Promise<{ authorized: boolean; session: Object }> {
  const session = await auth();

  if (!session) {
    return redirect("/auth/sign-in");
  }

  if (!userHasRole(session.user, role)) {
    return { authorized: false, session };
  }

  return { authorized: true, session };
}
