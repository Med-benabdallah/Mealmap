import { Role } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  emailVerified: Date;
  role: Role;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
