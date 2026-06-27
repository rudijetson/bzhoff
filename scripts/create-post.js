#!/usr/bin/env node

const fs = require('fs').promises
const path = require('path')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (query) => new Promise((resolve) => readline.question(query, resolve))

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

const formatDate = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const d = new Date(date)
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

const pageTemplate = `import { readFile } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXLayout } from '@/app/components/markdown/mdx-layout'
import { MDXContent } from '@/app/components/markdown/mdx-content'
import { components } from '@/app/components/markdown/mdx-components'

interface Frontmatter {
  title: string
  publishedAt: string
  updatedAt: string
  author: string
  authorBio: string
  authorImage: string
  tags: string[]
  summary: string
  image: string
  description: string
  keywords: string
  canonical: string
}

export default async function PostPage() {
  try {
    const filePath = path.join(process.cwd(), 'app/posts/__SLUG__/content.mdx')
    const fileContent = await readFile(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    const metadata = data as Frontmatter

    return (
      <div suppressHydrationWarning>
        <MDXLayout metadata={metadata}>
          <MDXContent frontmatter={metadata}>
            <MDXRemote 
              source={content}
              components={components}
              options={{
                scope: { frontmatter: metadata },
                parseFrontmatter: false
              }}
            />
          </MDXContent>
        </MDXLayout>
      </div>
    )
  } catch (error) {
    console.error('Error loading MDX:', error)
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Error loading content</h1>
        <p className="text-muted-foreground">Unable to load the requested content.</p>
      </div>
    )
  }
}`

const contentTemplate = (data) => `---
title: "${data.title}"
publishedAt: "${data.publishedAt}"
updatedAt: "${data.publishedAt}"
author: "Hoff"
authorBio: "${data.authorBio}"
authorImage: "/images/authors/hoff-linkedin.jpg"
tags: ${JSON.stringify(data.tags)}
summary: "${data.summary}"
image: "/images/posts/${data.slug}/cover.jpg"
description: "${data.description}"
keywords: "${data.keywords}"
canonical: "https://yourdomain.com/posts/${data.slug}"
---

# ${data.title}

${data.summary}

## Introduction

Start writing your post here...

<div className="border-t border-border/40 mt-8 pt-6">
  <div className="space-y-6">
    <FeedbackButtons />
    <NewsletterSignup />
  </div>
</div>

<AuthorBio 
  author={frontmatter.author}
  image={frontmatter.authorImage}
  bio={frontmatter.authorBio}
/>
`

async function updatePostsFile(postData) {
  const postsPath = path.join(process.cwd(), 'app/data/posts.ts')
  const postsContent = await fs.readFile(postsPath, 'utf8')
  
  // Find the posts array
  const postsArrayStart = postsContent.indexOf('export const posts: Post[] = [')
  const postsArrayEnd = postsContent.indexOf(']', postsArrayStart)
  
  // Create new post entry
  const newPost = `  {
    title: "${postData.title}",
    date: "${formatDate(postData.publishedAt)}",
    href: "/posts/${postData.slug}",
    category: "${postData.tags[0]}",
    slug: "${postData.slug}"
  },\n`
  
  // Insert the new post at the beginning of the array
  const updatedContent = 
    postsContent.slice(0, postsArrayStart + 'export const posts: Post[] = [\n'.length) +
    newPost +
    postsContent.slice(postsArrayStart + 'export const posts: Post[] = [\n'.length)
  
  await fs.writeFile(postsPath, updatedContent, 'utf8')
}

async function createPost() {
  try {
    // Gather post information
    const title = await question('Post title: ')
    const summary = await question('Post summary: ')
    const authorBio = await question('Author bio: ')
    const tagsInput = await question('Tags (comma-separated): ')
    const description = await question('SEO description (150-160 chars): ')
    const keywords = await question('SEO keywords (comma-separated): ')

    const slug = slugify(title)
    const date = new Date().toISOString().split('T')[0]
    const tags = tagsInput.split(',').map(tag => tag.trim())

    // Create post directory
    const postDir = path.join(process.cwd(), 'app/posts', slug)
    await fs.mkdir(postDir, { recursive: true })

    // Create images directory
    const imagesDir = path.join(process.cwd(), 'public/images/posts', slug)
    await fs.mkdir(imagesDir, { recursive: true })

    // Create content.mdx
    const postData = {
      title,
      publishedAt: date,
      authorBio,
      tags,
      summary,
      slug,
      description,
      keywords
    }

    await fs.writeFile(
      path.join(postDir, 'content.mdx'),
      contentTemplate(postData),
      'utf8'
    )

    // Create page.tsx
    const pageContent = pageTemplate.replace('__SLUG__', slug)
    await fs.writeFile(
      path.join(postDir, 'page.tsx'),
      pageContent,
      'utf8'
    )

    // Update posts.ts
    await updatePostsFile(postData)

    console.log(`
✅ Post created successfully!

📝 Next steps:
1. Add your cover image to: public/images/posts/${slug}/cover.jpg
2. Edit your post at: app/posts/${slug}/content.mdx
3. Preview at: http://localhost:3000/posts/${slug}

Happy writing! 🚀
    `)

  } catch (error) {
    console.error('Error creating post:', error)
  } finally {
    readline.close()
  }
}

createPost() 