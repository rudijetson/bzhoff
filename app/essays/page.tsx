import Link from "next/link"
import { ChevronRight, ArrowUpRight } from 'lucide-react'
import { Footer } from "@/app/components/features"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Writer Essays | Brandon Z. Hoff',
  description: 'AI-generated essays exploring technology trends, automation, and the future of work. Created using an automated trend detection and research synthesis system.',
  keywords: ['AI writing', 'automated essays', 'AI trends', 'technology analysis', 'AI research', 'trend detection', 'content automation'],
  alternates: {
    canonical: 'https://bzhoff.com/essays'
  },
  openGraph: {
    title: 'AI Writer Essays - Brandon Z. Hoff',
    description: 'AI-generated essays exploring technology trends and society',
    url: 'https://bzhoff.com/essays',
    type: 'website',
    images: [{
      url: 'https://bzhoff.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'AI Writer Essays'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Writer Essays - Brandon Z. Hoff',
    description: 'AI-generated essays exploring technology trends and society',
    images: ['https://bzhoff.com/og-image.png'],
  }
}

const essays = [
  {
    title: "The AI Safety Test: When Your Brand Meets the Pentagon",
    slug: "ai-safety-test",
    description: "Anthropic built its entire identity on AI safety. Now the Pentagon is demanding they drop their guardrails — threatening to invoke the Defense Production Act and label the company a national security risk. With 47 cited sources, this investigation asks: was AI safety ever real, or just branding?",
    publishedDate: "February 25, 2026",
    readTime: "18 min read",
    tags: ["AI Safety", "National Security", "Anthropic", "Pentagon", "Defense Production Act", "Investigative"]
  },
  {
    title: "The Cost of Colossus: What Memphis Reveals About AI's Future",
    slug: "cost-of-colossus",
    description: "Five days after Grok 4 became one of the world's most powerful AI models, Alexis Humphreys had her first severe asthma attack in 15 years. An investigation into what happens when Silicon Valley's 'move fast' mentality meets a community already choking on decades of pollution. Synthesized from 18 sources including Reddit, YouTube, and investigative journalism.",
    publishedDate: "October 25, 2025",
    readTime: "35 min read",
    tags: ["AI Infrastructure", "Environmental Justice", "Investigative", "Memphis", "Data Centers", "AI Ethics"]
  },
  {
    title: "The Great Organizational Schism: How AI Is Tearing Companies Apart",
    slug: "organizational-schism",
    description: "Nearly half of C-suite executives report that AI adoption is tearing their company apart. An investigative analysis of why AI isn't failing because of technology—it's revealing every organizational dysfunction companies have been ignoring for decades. Based on research from Wharton School, industry surveys, and practitioner voices.",
    publishedDate: "October 25, 2025",
    readTime: "45 min read",
    tags: ["AI Adoption", "Organizational Change", "Enterprise AI", "Digital Transformation", "Investigative"]
  },
  {
    title: "Machines Kept Their Promise — We Didn't",
    slug: "machines-kept-their-promise",
    description: "A collaborative essay between human and machine exploring why automation created wealth but not prosperity. In 1966, TIME predicted machines would make us all wealthy by 2000. The machines kept their promise—they created abundance. We just didn't share it.",
    publishedDate: "October 22, 2025",
    readTime: "8 min read",
    tags: ["AI & Automation", "Economics", "Future of Work", "Human-AI Collaboration"]
  },
  {
    title: "ChatGPT Atlas: Reddit Analysis",
    slug: "chatgpt-atlas",
    description: "Analysis of Reddit discussions about ChatGPT's cultural impact, synthesizing multiple threads to identify patterns in public perception and emerging concerns about AI adoption.",
    publishedDate: "October 2025",
    readTime: "Research Synthesis",
    tags: ["ChatGPT", "Reddit Analysis", "AI Culture", "Data Synthesis"]
  }
]

export default function EssaysPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-muted-foreground mb-8">
          <Link href="/" className="text-xs hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-xs">AI Writer</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-semibold mb-4">AI Writer</h1>
          <p className="text-base text-muted-foreground mb-4">
            Automated trend detection and essay generation exploring emerging technology topics.
          </p>
          <div className="prose prose-sm prose-gray dark:prose-invert">
            <p className="text-sm text-muted-foreground">
              AI Writer is an automated system that monitors trending AI conversations across Reddit, TikTok, and social media, synthesizes research, and generates long-form essays exploring emerging topics. Each essay includes the full research process—showing how data is collected, analyzed, and transformed into narrative. This demonstrates how AI can augment human creativity in research and writing.
            </p>
          </div>
        </div>

        {/* Essays List */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-6">Essays</h2>
          <div className="space-y-6">
            {essays.map((essay) => (
              <Link
                key={essay.slug}
                href={`/essays/${essay.slug}`}
                className="group block"
              >
                <article className="border-b border-border/40 pb-6 hover:text-muted-foreground transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-medium group-hover:text-foreground">
                      {essay.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 ml-2" />
                  </div>

                  <div className="text-xs text-muted-foreground mb-3">
                    {essay.publishedDate} · {essay.readTime}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {essay.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {essay.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Process Note */}
        <div className="mt-12 p-4 border border-border/40 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">About the Process:</span> Each essay is generated through an automated pipeline that detects trending topics, gathers relevant discussions, synthesizes research from multiple sources, and creates long-form content. The complete research methodology is documented alongside each essay.
          </p>
        </div>

        <Footer />
      </main>
    </div>
  )
}
