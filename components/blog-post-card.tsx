// components/blog-post-card.tsx

import Link from 'next/link'
import Image from 'next/image'
import type { Post } from '@/lib/blog'
import { format } from 'date-fns'

type BlogPostCardProps = {
  post: Post
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <article className="group relative flex flex-col space-y-2 bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:-translate-y-1">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <Image
          src={post.mainImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Link href={post.url} className="absolute inset-0">
          <span className="sr-only">Read more about {post.title}</span>
        </Link>
      </div>
      <div className="flex flex-col flex-grow p-2">
        <time dateTime={post.date} className="block text-sm text-gray-500 mb-2">
            {format(new Date(post.date), 'MMMM dd, yyyy')}
        </time>
        <h2 className="text-xl font-bold text-white mb-2 leading-snug">
          <Link href={post.url} className="hover:text-blue-400 transition-colors duration-200">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-400 text-sm flex-grow">{post.description}</p>
        <div className="mt-4">
           <Link href={post.url} className="text-blue-400 font-semibold text-sm hover:text-blue-300">
                Read More →
           </Link>
        </div>
      </div>
    </article>
  )
}