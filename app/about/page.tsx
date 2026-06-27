import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, Github, Linkedin } from 'lucide-react'
import { Button } from "@/app/components/primitives"
import { Footer } from "@/app/components/features"
import { Timeline } from "@/app/components/composed"
import { PressSection } from "@/app/components/sections/press-section"
import { SpeakingSection } from "@/app/components/sections/speaking-section"
import { CaseStudySection } from "@/app/components/sections/case-study-section"
import { timeline } from "@/app/data/timeline"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Brandon Z. Hoff | Chief AI Facilitator & Founder, RUDI Applied GenAI',
  description: 'Brandon Z. Hoff is the founder and Chief AI Facilitator of RUDI Applied GenAI. AI literacy researcher, trainer, and advocate with 500+ professionals trained across education, legal, healthcare, and enterprise sectors.',
  keywords: [
    'Brandon Hoff bio',
    'AI literacy researcher',
    'RUDI founder',
    'Chief AI Facilitator',
    'AI capacity building',
    'AI education',
    'AI training expert',
    'RUDI Applied GenAI',
    'technology democratization'
  ],
  alternates: {
    canonical: 'https://bzhoff.com/about'
  },
  openGraph: {
    title: 'About Brandon Z. Hoff | Chief AI Facilitator & Founder, RUDI Applied GenAI',
    description: 'AI literacy researcher and RUDI founder helping organizations adopt AI responsibly through literacy-first training.',
    url: 'https://bzhoff.com/about',
    type: 'profile',
    images: [{
      url: 'https://bzhoff.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'About Brandon Z. Hoff'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Brandon Z. Hoff | Chief AI Facilitator & Founder, RUDI Applied GenAI',
    description: 'AI literacy researcher and RUDI founder helping organizations adopt AI responsibly through literacy-first training.',
    images: ['https://bzhoff.com/og-image.png'],
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-muted-foreground mb-8">
          <Link href="/" className="text-xs hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-xs">About</span>
        </nav>

        <div className="mb-16">
          {/* Hero photo */}
          <Image
            src="/images/authors/hoff-headshot.jpg"
            alt="Brandon Z. Hoff"
            width={96}
            height={96}
            className="rounded-lg mb-6"
          />
          <h1 className="text-2xl font-semibold mb-6">About Me</h1>

          <div className="prose prose-sm prose-gray dark:prose-invert">
            {/* Medium bio */}
            <p className="text-base mb-4">
              Brandon Z. Hoff is the founder and Chief AI Facilitator of RUDI Applied GenAI, an AI capacity-building studio that helps organizations adopt artificial intelligence responsibly through literacy-first training and governance frameworks. With a background spanning financial data analytics, cooperative economics, and applied AI research, Brandon brings a rare combination of technical fluency and organizational change expertise to a space crowded with tool vendors and hype.
            </p>

            <p className="text-base mb-8">
              His work has been featured by NPR, GQ, Essence, and MSNBC. He has trained 500+ professionals across education, legal, healthcare, and enterprise sectors, grown an 80,000+ member AI literacy community on TikTok, and built 14+ production AI applications—all using AI. Brandon advises the Kentucky State Senate on technology policy and serves clients ranging from HBCUs to $40M logistics companies.
            </p>

            {/* New sections: Press, Speaking, Case Studies */}
            <div className="not-prose space-y-12 mb-12">
              <PressSection />
              <SpeakingSection />
              <CaseStudySection />
            </div>

            {/* Long bio */}
            <h2 className="mb-4">Background</h2>
            <p className="text-base mb-4">
              Brandon Z. Hoff began his career in financial services, building predictive analytics models for loan payment assessment and micro-lending operations—work he now recognizes as early machine learning. After being laid off, he co-founded Heritage Hill Cooperative, an HBCU-focused e-commerce cooperative that he scaled to $3M in revenue and 125 retail doors, using ML-based demand forecasting along the way. That chapter taught him that the growth of any organization can never outpace the quality of its people systems.
            </p>

            <p className="text-base mb-4">
              When ChatGPT launched in late 2022, Brandon went all in. He logged 1,100+ days and approximately 8,000 hours across AI platforms, taught himself to build software products from scratch, and started sharing what he learned with an 80,000+ following on TikTok. The more he learned, the more he recognized AI literacy as the new functional literacy—a structural advantage, like Bourdieu's linguistic capital, that would widen the gap between organizations that invested in it and those that didn't.
            </p>

            <p className="text-base mb-4">
              That conviction became RUDI (Responsible Use, Digital Intelligence), a structured AI adoption framework built on the principle that psychological comfort must precede technical competency. The RUDI methodology—three swim lanes (Conceptual, Operational, Governance) across five proficiency levels—is now deployed at educational service centers, universities, law firms, and enterprise organizations. Its flagship engagement with Warren County ESC produced a documented 524% ROI: 95% comfort achieved, 60% literacy gains in eight weeks, and an 85% reduction in teacher evaluation time (from 2–3 hours to 15–20 minutes per evaluation).
            </p>

            <p className="text-base mb-8">
              Today Brandon leads training and consulting from Cincinnati, where he also teaches at the University of Illinois–Springfield, advises the Kentucky State Senate on AI policy, and continues building open-source AI tools under the RUDI platform. He is a member of Phi Beta Sigma Fraternity Inc. and comes from a family of educators—a lineage that shapes every program he designs.
            </p>

            {/* Timeline */}
            <h2 className="mb-6">Journey & Accomplishments</h2>
            <Timeline
              items={timeline.map((entry) => ({
                year: entry.date,
                title: entry.title,
                description: entry.description,
              }))}
              className="mb-8"
            />

            {/* Beyond Work */}
            <h2>Beyond Work</h2>
            <p>
              Brandon's philosophy—that "technology is easy, adoption is hard"—is rooted in something deeper than strategy. He comes from a family of educators and carries that inheritance into every room he enters: the belief that capability, not tools, is what transforms people and organizations. He is a member of Phi Beta Sigma Fraternity Inc., is active in Cincinnati's cooperative and community economic development ecosystem (Coop Cincy, Greater Cincinnati Micro Initiative, BYOC Youth Center), and was featured in the documentary <em>Works for All</em>, about Cincinnati's cooperative economy. His interests span economics, theology, organizational systems, and the philosophical stakes of intelligence itself.
            </p>

            {/* Contact */}
            <h2 className="!mt-12">Get in Touch</h2>
            <div className="flex flex-col gap-4 not-prose">
              <Link
                href="mailto:brandonzhoff@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                brandonzhoff@gmail.com
              </Link>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <Link href="https://github.com/prompt-stack" target="_blank">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <Link href="https://www.linkedin.com/in/hoffbrandon/" target="_blank">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}
