// lib/blog.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface Post {
  _id: string
  title: string
  date: string
  description: string
  mainImage: string
  htmlContent?: string
  url: string
  slug: string
  content: string
  serializedContent?: MDXRemoteSerializeResult
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        _id: `posts/${fileName}`,
        slug,
        url: `/blog/${slug}`,
        title: data.title,
        date: data.date,
        description: data.description,
        mainImage: data.mainImage,
        htmlContent: data.htmlContent,
        content
      } as Post
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts()
  return posts.find((post) => post.slug === slug)
}

export async function getSerializedPost(slug: string): Promise<Post | undefined> {
  const post = getPostBySlug(slug)
  if (!post) return undefined

  const serializedContent = await serialize(post.content)
  return {
    ...post,
    serializedContent
  }
}

export const allPosts = getAllPosts()