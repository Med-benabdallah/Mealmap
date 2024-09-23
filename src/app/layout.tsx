import type { Metadata } from "next";
import { Inter, Pattaya } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const pattaya = Pattaya({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "MealMap",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundColor: "#F9EFDB",
          height: "screen",
        }}
      >
       

        {children}


      </body>
    </html>
  );
}
