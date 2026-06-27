import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ChatGPT Atlas: Reddit Analysis | AI Writer',
  description: 'Analysis of Reddit discussions about ChatGPT\'s cultural impact, synthesizing multiple threads to identify patterns in public perception and emerging concerns about AI adoption.',
  keywords: ['ChatGPT', 'Reddit analysis', 'AI culture', 'data synthesis', 'AI trends', 'social media analysis'],
  authors: [{ name: 'Brandon Hoff' }],
  alternates: {
    canonical: 'https://bzhoff.com/essays/chatgpt-atlas'
  },
  openGraph: {
    title: 'ChatGPT Atlas: Reddit Analysis',
    description: 'Analyzing Reddit discussions about ChatGPT\'s cultural impact',
    url: 'https://bzhoff.com/essays/chatgpt-atlas',
    type: 'article',
    publishedTime: '2025-10-01',
    authors: ['Brandon Hoff'],
    images: [{
      url: 'https://bzhoff.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'ChatGPT Atlas: Reddit Analysis'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChatGPT Atlas: Reddit Analysis',
    description: 'Analyzing Reddit discussions about ChatGPT\'s cultural impact',
    images: ['https://bzhoff.com/og-image.png'],
  }
}

export default function ChatGPTAtlas() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ChatGPT Atlas: Reddit Analysis',
    description: 'Analysis of Reddit discussions about ChatGPT\'s cultural impact, synthesizing multiple threads to identify patterns in public perception and emerging concerns about AI adoption.',
    image: 'https://bzhoff.com/og-image.png',
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
    author: {
      '@type': 'Person',
      name: 'Brandon Hoff',
      url: 'https://bzhoff.com',
      sameAs: [
        'https://twitter.com/hoffdigital',
        'https://www.linkedin.com/in/hoffbrandon/',
        'https://github.com/prompt-stack'
      ]
    },
    publisher: {
      '@type': 'Person',
      name: 'Brandon Z. Hoff',
      url: 'https://bzhoff.com'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://bzhoff.com/essays/chatgpt-atlas'
    },
    keywords: 'ChatGPT, Reddit analysis, AI culture, data synthesis, AI trends, social media analysis'
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-muted-foreground mb-8">
          <Link href="/" className="text-xs hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/essays" className="text-xs hover:text-foreground">
            AI Writer
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-xs">ChatGPT Atlas</span>
        </nav>
      </div>

      {/* Essay Content (iframe full width) */}
      <iframe
        src="/essays/chatgpt-atlas/index.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 120px)',
          border: 'none',
          display: 'block'
        }}
        title="ChatGPT Atlas: Reddit Analysis"
      />
      </div>
    </>
  )
}
