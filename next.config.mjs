import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkEmoji from 'remark-emoji'
import remarkPrism from 'remark-prism'
import remarkAttr from 'remark-attr'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
}

const withMDX = createMDX({
  // Optionally provide remark and rehype plugins
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkEmoji,
      remarkPrism,
      remarkAttr
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'wrap'
      }]
    ],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
