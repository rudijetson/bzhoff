import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Machines Kept Their Promise — We Didn\'t | AI Writer',
  description: 'A collaborative essay between human and machine exploring why automation created wealth but not prosperity. In 1966, TIME predicted machines would make us all wealthy by 2000. The machines kept their promise—they created abundance. We just didn\'t share it.',
  keywords: ['automation', 'AI economics', 'future of work', 'wealth inequality', 'technology', 'AI collaboration'],
  authors: [{ name: 'Brandon Hoff' }],
  alternates: {
    canonical: 'https://bzhoff.com/essays/machines-kept-their-promise'
  },
  openGraph: {
    title: 'Machines Kept Their Promise — We Didn\'t',
    description: 'Exploring why automation created wealth but not prosperity',
    url: 'https://bzhoff.com/essays/machines-kept-their-promise',
    type: 'article',
    publishedTime: '2025-10-22',
    authors: ['Brandon Hoff'],
    images: [{
      url: 'https://bzhoff.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Machines Kept Their Promise — We Didn\'t'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Machines Kept Their Promise — We Didn\'t',
    description: 'Exploring why automation created wealth but not prosperity',
    images: ['https://bzhoff.com/og-image.png'],
  }
}

export default function MachinesKeptTheirPromise() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Machines Kept Their Promise — We Didn\'t',
    description: 'A collaborative essay between human and machine exploring why automation created wealth but not prosperity. In 1966, TIME predicted machines would make us all wealthy by 2000. The machines kept their promise—they created abundance. We just didn\'t share it.',
    image: 'https://bzhoff.com/og-image.png',
    datePublished: '2025-10-22',
    dateModified: '2025-10-22',
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
      '@id': 'https://bzhoff.com/essays/machines-kept-their-promise'
    },
    keywords: 'automation, AI economics, future of work, wealth inequality, technology, AI collaboration'
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
          <span className="text-xs">Machines Kept Their Promise</span>
        </nav>
      </div>

      {/* Essay Content (iframe full width) */}
      <iframe
        src="/essays/machines-kept-their-promise/index.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 120px)',
          border: 'none',
          display: 'block'
        }}
        title="Machines Kept Their Promise — We Didn't"
      />
      </div>
    </>
  )
}
