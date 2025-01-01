import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArticleIP | AI-Powered Patent Generation Tool",
  description: "Streamline your patent search and innovation process with our powerful tools.",
  metadataBase: new URL("https://www.articleip.com"), // Your production domain
  openGraph: {
    title: "ArticleIP | AI-Powered Patent Generation Tool",
    description: "Streamline your patent search and innovation process with our powerful tools.",
    url: "https://www.articleip.com",
    images: [
      {
        url: "https://www.articleip.com/ArticleIPPreview.png", // Absolute URL
        width: 1200,
        height: 630,
        alt: "A Patent Generation Tool For Everyone",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <Head>
          {/* Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <meta name="description" content="Streamline your patent search and innovation process with our powerful tools." />

          {/* Open Graph Tags */}
          <meta property="og:title" content="ArticleIP | AI-Powered Patent Generation Tool" />
          <meta property="og:description" content="Streamline your patent search and innovation process with our powerful tools." />
          <meta property="og:url" content="https://www.articleip.com" />
          <meta property="og:image" content="https://www.articleip.com/ArticleIPPreview.png" />
          <meta property="og:image:alt" content="A Patent Generation Tool For Everyone" />
          <meta property="og:type" content="website" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <body className={`${inter.className} bg-[#feefd4] text-[#1a1f36]`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
