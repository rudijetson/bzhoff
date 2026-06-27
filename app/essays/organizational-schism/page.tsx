import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Great Organizational Schism | AI Writer',
  description: 'Nearly half of C-suite executives report that AI adoption is tearing their company apart. An investigative analysis of why AI isn\'t failing because of technology—it\'s revealing every organizational dysfunction companies have been ignoring for decades.',
  keywords: ['AI adoption', 'organizational change', 'enterprise AI', 'digital transformation', 'AI strategy', 'organizational dysfunction'],
  authors: [{ name: 'Brandon Hoff' }],
  alternates: {
    canonical: 'https://bzhoff.com/essays/organizational-schism'
  },
  openGraph: {
    title: 'The Great Organizational Schism: How AI Is Tearing Companies Apart',
    description: 'Nearly half of C-suite executives report that AI adoption is tearing their company apart. An investigative analysis.',
    type: 'article',
    publishedTime: '2025-10-25',
    authors: ['Brandon Hoff'],
    url: 'https://bzhoff.com/essays/organizational-schism',
    images: [{
      url: 'https://bzhoff.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'The Great Organizational Schism'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Great Organizational Schism',
    description: 'Nearly half of C-suite executives report that AI adoption is tearing their company apart.',
    images: ['https://bzhoff.com/og-image.png'],
  }
}

export default function OrganizationalSchism() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Great Organizational Schism: How AI Is Tearing Companies Apart',
    description: 'Nearly half of C-suite executives report that AI adoption is tearing their company apart. An investigative analysis of why AI isn\'t failing because of technology—it\'s revealing every organizational dysfunction companies have been ignoring for decades.',
    image: 'https://bzhoff.com/og-image.png',
    datePublished: '2025-10-25',
    dateModified: '2025-10-25',
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
      '@id': 'https://bzhoff.com/essays/organizational-schism'
    },
    keywords: 'AI adoption, organizational change, enterprise AI, digital transformation, AI strategy, organizational dysfunction'
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="min-h-screen bg-background text-foreground">
        {/* Breadcrumb Navigation */}
        <div className="container max-w-3xl mx-auto px-4 py-12">
        <nav className="flex items-center gap-2 text-muted-foreground mb-8">
          <Link href="/" className="text-xs hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/essays" className="text-xs hover:text-foreground transition-colors">
            AI Writer
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-xs">The Great Organizational Schism</span>
        </nav>
      </div>

      {/* Essay Content (iframe full width) */}
      <iframe
        src="/essays/organizational-schism/index.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 120px)',
          border: 'none',
          display: 'block'
        }}
        title="The Great Organizational Schism: How AI Is Tearing Companies Apart"
      />
      </div>
    </>
  )
}
