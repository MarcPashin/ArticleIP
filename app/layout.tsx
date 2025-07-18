// app/layout.tsx

import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google"; // Import both fonts
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils"; // For combining class names
import "./globals.css";

// 1. Setup both fonts using the modern CSS variable method
const fontSans = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Merriweather({
  subsets: ["latin"],
  weight: ["700"], // Only need bold for headings
  variable: "--font-serif",
});


// 2. Your excellent metadata object is preserved
export const metadata: Metadata = {
  title: "ArticleIP | AI-Powered Patent Generation Tool",
  description: "ArticleIP is the ultimate AI-powered tool for generating accurate patents, trusted by top researchers and attorneys worldwide. Streamline your innovation process today!",
  metadataBase: new URL("https://www.articleip.com"), // Your production domain
  openGraph: {
    title: "ArticleIP | AI-Powered Patent Generation Tool",
    description: "ArticleIP is the ultimate AI-powered tool for generating accurate patents, trusted by top researchers and attorneys worldwide. Streamline your innovation process today!",
    url: "https://www.articleip.com",
    images: [
      {
        url: "/ArticleIPPreview.png", // Use a relative path, Next.js will make it absolute
        width: 1200,
        height: 630,
        alt: "A Patent Generation Tool For Everyone",
      },
    ],
    type: "website",
  },
   icons: {
    icon: "/favicon.ico", // The modern way to set favicons
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        {/* 
          IMPORTANT: The <Head> component from `next/head` is for the old Pages Router. 
          In the App Router, it's removed and all its contents are handled by the `metadata` export above.
          This prevents duplicate tags and follows modern Next.js practice.
        */}
        <body
          className={cn(
            "min-h-screen bg-[#1A1F36] font-sans antialiased text-gray-200", // 3. Correct dark background and base text color
            fontSans.variable,
            fontSerif.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}