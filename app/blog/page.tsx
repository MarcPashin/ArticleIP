// app/blog/page.tsx

import Link from 'next/link';
import { getAllPosts, Post } from '@/lib/blog';
import { compareDesc } from 'date-fns';
// import BlogLayout from './components/BlogLayout'; // Import the new layout
import BlogLayout from '@/components/BlogLayout'; // Corrected import path
import { BlogPostCard } from '@/components/blog-post-card';

export const metadata = {
  title: "Patent & IP Innovation Blog",
  description: "Expert insights on intellectual property, patent strategies, AI in legal tech, and innovation trends. Stay ahead with ArticleIP's comprehensive guides on patent generation and IP protection.",
  keywords: [
    "patent blog",
    "intellectual property insights",
    "IP strategy",
    "patent trends",
    "innovation news",
    "AI legal technology",
    "patent law updates",
    "IP protection strategies"
  ],
  openGraph: {
    title: "Patent & IP Innovation Blog | ArticleIP",
    description: "Expert insights on intellectual property, patent strategies, AI in legal tech, and innovation trends from the ArticleIP team.",
    url: "https://www.articleip.com/blog",
    images: [
      {
        url: "/articleip_redesign.png",
        width: 1200,
        height: 630,
        alt: "ArticleIP Blog - Patent and IP Innovation Insights",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patent & IP Innovation Blog | ArticleIP",
    description: "Expert insights on intellectual property, patent strategies, and AI in legal tech.",
    images: ["/articleip_redesign.png"],
  },
  alternates: {
    canonical: "https://www.articleip.com/blog",
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts().sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    // Wrap the entire return statement with the BlogLayout
    <BlogLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto max-w-7xl px-6">
          <header className="max-w-3xl mx-auto text-center py-12">
              <h1 className="text-5xl md:text-6xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                  The ArticleIP Blog
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                  Insights on intellectual property, technology, and the future of innovation.
              </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post._id} post={post} />
              ))}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}