import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HireAI",
  description: "Finding you the perfect candidate quicker and cheaper than ever before, so you can focus on what really matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
