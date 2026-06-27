import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The AI Safety Test: When Your Brand Meets the Pentagon | Brandon Hoff',
  description: 'Anthropic built its entire identity on AI safety. Now the Pentagon is demanding they drop their guardrails — or be labeled a national security risk. This is the moment we find out if AI safety was ever real.',
  keywords: ['AI safety', 'Anthropic', 'Pentagon', 'Defense Production Act', 'Claude AI', 'military AI', 'Dario Amodei', 'AI ethics', 'AI policy', 'national security'],
  authors: [{ name: 'Brandon Hoff' }],
  alternates: {
    canonical: 'https://bzhoff.com/essays/ai-safety-test'
  },
  openGraph: {
    title: 'The AI Safety Test: When Your Brand Meets the Pentagon',
    description: 'Anthropic built its entire identity on AI safety. Now the Pentagon is demanding they drop their guardrails. This is the moment we find out if AI safety was ever real.',
    type: 'article',
    publishedTime: '2026-02-25',
    authors: ['Brandon Hoff'],
    url: 'https://bzhoff.com/essays/ai-safety-test',
    images: [{
      url: 'https://bzhoff.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'The AI Safety Test'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The AI Safety Test: When Your Brand Meets the Pentagon',
    description: 'If you stand for nothing, you\'ll fall for anything. Anthropic is about to show us if AI safety was ever real.',
    images: ['https://bzhoff.com/og-image.png'],
  }
}

export default function AiSafetyTest() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The AI Safety Test: When Your Brand Meets the Pentagon',
    description: 'Anthropic built its entire identity on AI safety. Now the Pentagon is demanding they drop their guardrails — threatening to invoke the Defense Production Act and label the company a national security risk. With 47 cited sources, this investigation traces the pattern from OpenAI to DeepMind to Anthropic and asks: was AI safety ever real, or just branding?',
    image: 'https://bzhoff.com/og-image.png',
    datePublished: '2026-02-25',
    dateModified: '2026-02-25',
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
      '@id': 'https://bzhoff.com/essays/ai-safety-test'
    },
    keywords: 'AI safety, Anthropic, Pentagon, Defense Production Act, Claude AI, military AI, Dario Amodei, AI ethics, AI policy, national security'
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
          <span className="text-xs">The AI Safety Test</span>
        </nav>
      </div>

      {/* Essay Content (iframe full width) */}
      <iframe
        src="/essays/ai-safety-test/index.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 120px)',
          border: 'none',
          display: 'block'
        }}
        title="The AI Safety Test: When Your Brand Meets the Pentagon"
      />
    </div>
    </>
  )
}
