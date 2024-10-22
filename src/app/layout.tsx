import type { Metadata } from "next";
import { Inter, Pattaya } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const pattaya = Pattaya({
  subsets: ["latin"],
  variable: "--font-pattaya",
  weight: "400",
});

export const metadata: Metadata = {
  title: "MealMap",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  session, // Add session prop if needed
}: {
  children: React.ReactNode;
  session?: any; // Optional session prop for server-side session fetching
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          pattaya.variable,
          "min-h-screen bg-[#F9EFDB]"
        )}
      >
        {/* Wrap the children with SessionProvider */}
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
