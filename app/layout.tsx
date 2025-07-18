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


// 2. Comprehensive SEO metadata with optimized tags
export const metadata: Metadata = {
  title: {
    default: "ArticleIP | AI-Powered Patent Generation Tool",
    template: "%s | ArticleIP"
  },
  description: "Transform your innovations into professional patents with ArticleIP's AI-powered platform. Trusted by researchers, inventors, and IP attorneys worldwide. Generate accurate patent applications in minutes, not months.",
  keywords: [
    "patent generation",
    "AI patent tool",
    "intellectual property",
    "patent application",
    "patent writing",
    "IP automation",
    "patent attorney",
    "innovation protection",
    "patent drafting",
    "AI legal tech"
  ],
  authors: [{ name: "ArticleIP Team" }],
  creator: "ArticleIP",
  publisher: "ArticleIP",
  metadataBase: new URL("https://www.articleip.com"),
  alternates: {
    canonical: "https://www.articleip.com",
  },
  openGraph: {
    title: "ArticleIP | AI-Powered Patent Generation Tool",
    description: "Transform your innovations into professional patents with ArticleIP's AI-powered platform. Trusted by researchers, inventors, and IP attorneys worldwide.",
    url: "https://www.articleip.com",
    siteName: "ArticleIP",
    images: [
      {
        url: "/articleip_redesign.png",
        width: 1200,
        height: 630,
        alt: "ArticleIP - AI-Powered Patent Generation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArticleIP | AI-Powered Patent Generation Tool",
    description: "Transform your innovations into professional patents with AI. Trusted by researchers and IP attorneys worldwide.",
    images: ["/articleip_redesign.png"],
    creator: "@ArticleIP",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
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