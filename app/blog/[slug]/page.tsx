// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllPosts, getPostBySlug, Post } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import BlogLayout from '../../../components/BlogLayout';

// Type definition for the page's params
type PageProps = {
  params: {
    slug: string;
  };
};

// ===============================================
// GENERATE METADATA - For SEO
// ===============================================
export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | ArticleIP Blog`,
    description: post.description,
  };
}

// ===============================================
// GENERATE STATIC PARAMS - For pre-building pages
// THIS IS THE CRITICAL FIX
// ===============================================
export async function generateStaticParams(): Promise<PageProps['params'][]> {
  // We must ensure getAllPosts() is an array and then map it.
  // This explicitly returns an array of objects, e.g., [{ slug: '...' }, { slug: '...' }]
  // which is exactly what Next.js expects.
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

// ===============================================
// THE PAGE COMPONENT
// ===============================================
export default function SinglePostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound(); // Triggers a 404 page if the post isn't found
  }

  return (
    <BlogLayout>
      <div className="pt-24 pb-12">
        <article className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-12">
            <time dateTime={post.date} className="block text-sm text-blue-400 font-semibold mb-2">
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </time>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <Image
              src={post.mainImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
            {post.htmlContent ? (
              <div 
                dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                className="blog-content"
              />
            ) : (
              <MDXRemote source={post.body.code} />
            )}
          </div>
        </article>
      </div>
    </BlogLayout>
  );
}