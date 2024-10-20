import { auth } from "@/auth";
import { Role } from "@prisma/client";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "@/lib/db";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
 
    .middleware(async ({ req }) => {
      const checkAdmin = await db.user.findFirst({
        where: {
          role: Role.ADMIN,
        }
      });

      if (!checkAdmin) throw new UploadThingError("Unauthorized");

      return { userId: checkAdmin.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
