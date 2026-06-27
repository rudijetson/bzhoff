import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Cost of Colossus | Brandon Hoff',
  description: 'Five days after Grok 4 became one of the world\'s most powerful AI models, Alexis Humphreys had her first severe asthma attack in 15 years. An investigation into what happens when Silicon Valley\'s "move fast" mentality meets a community that\'s already choking.',
  keywords: ['AI infrastructure', 'environmental justice', 'Memphis', 'xAI', 'Elon Musk', 'data centers', 'air pollution', 'environmental racism', 'AI ethics'],
  authors: [{ name: 'Brandon Hoff' }],
  alternates: {
    canonical: 'https://bzhoff.com/essays/cost-of-colossus'
  },
  openGraph: {
    title: 'The Cost of Colossus: What Memphis Reveals About AI\'s Future',
    description: 'Five days after Grok 4 became one of the world\'s most powerful AI models, Alexis Humphreys had her first severe asthma attack in 15 years. An investigation into environmental racism in the AI era.',
    type: 'article',
    publishedTime: '2025-10-25',
    authors: ['Brandon Hoff'],
    url: 'https://bzhoff.com/essays/cost-of-colossus',
    images: [{
      url: 'https://bzhoff.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'The Cost of Colossus'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cost of Colossus',
    description: 'What happens when Silicon Valley\'s "move fast" mentality meets a community already choking on decades of pollution.',
    images: ['https://bzhoff.com/og-image.png'],
  }
}

export default function CostOfColossus() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Cost of Colossus: What Memphis Reveals About AI\'s Future',
    description: 'An investigation into what happens when Silicon Valley\'s "move fast and break things" mentality meets a community already choking on decades of industrial pollution. Memphis has the answer—and it\'s not what AI\'s boosters want to hear.',
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
      '@id': 'https://bzhoff.com/essays/cost-of-colossus'
    },
    keywords: 'AI infrastructure, environmental justice, Memphis, xAI, Elon Musk, data centers, air pollution, environmental racism, AI ethics'
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
          <span className="text-xs">The Cost of Colossus</span>
        </nav>
      </div>

      {/* Essay Content (iframe full width) */}
      <iframe
        src="/essays/cost-of-colossus/index.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 120px)',
          border: 'none',
          display: 'block'
        }}
        title="The Cost of Colossus: What Memphis Reveals About AI's Future"
      />
    </div>
    </>
  )
}
