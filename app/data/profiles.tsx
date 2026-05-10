"use client"

import React from 'react'
import { Mail } from 'lucide-react'
import type { PersonalProfile, CreatorProfile } from "@/app/components/features/profile/types"

export const profiles = {
  personal: {
    name: "Brandon Z. Hoff",
    title: "Chief AI Facilitator & Founder, RUDI Applied GenAI",
    subtitle: "Technology is easy. Adoption is hard. That's what we solve.",
    mainContent: "Brandon Z. Hoff is a Cincinnati-based AI educator and founder who helps organizations build the literacy—not just the tools—to make AI work.",
    expandedContent: [
      "RUDI (Responsible Use, Digital Intelligence) is an AI capacity-building studio that helps organizations move from tool purchases to genuine AI fluency through structured literacy training, governance frameworks, and evidence-based adoption programs.",
      "My background spans e-commerce ($3M cooperative), finance, and global experience across Cincinnati, Tanzania, and Europe. This diversity shapes my belief: linguistic capital and programming shouldn't be gatekept. AI changes everything."
    ],
    links: [
      // AI LITERACY MISSION
      {
        title: "RUDI",
        href: "https://github.com/prompt-stack/rudi",
        description: "Responsible Use of Digital Intelligence - AI literacy framework and training platform",
        techStack: ["AI Curriculum", "Training Programs", "Education"],
        category: "mission"
      },
      {
        title: "Upskill Ohio",
        href: "https://github.com/prompt-stack/upskill-ohio",
        description: "Commercial AI training platform - TechCred funding resource for Ohio workforce development",
        techStack: ["HTML", "CSS", "JavaScript"],
        category: "mission"
      },
      {
        title: "OTES Pro",
        href: "https://github.com/prompt-stack/otes-pro",
        description: "AI-powered teacher evaluation SaaS - saves evaluators 50% of time ($1.50/eval, 92% margins)",
        techStack: ["Next.js", "FastAPI", "Claude AI", "Whisper"],
        category: "mission"
      },

      // COMMERCIAL PROJECTS
      {
        title: "Heritage Hill",
        href: "https://heritagehill.vercel.app",
        description: "E-commerce cooperative case study with $3M+ revenue analysis (2019-2023)",
        techStack: ["Next.js", "TypeScript", "Recharts"],
        category: "commercial"
      },
      {
        title: "WWJD",
        href: "https://wwjd-omega.vercel.app",
        description: "AI-powered spiritual guidance and community prayer platform",
        techStack: ["Next.js", "Anthropic", "Community"],
        category: "commercial"
      },
      {
        title: "Content Engine",
        href: "https://github.com/prompt-stack/content-engine",
        description: "Multi-platform content extraction API for Reddit, TikTok, YouTube, and articles",
        techStack: ["Python", "FastAPI", "PostgreSQL"],
        category: "commercial"
      },

      // TECHNICAL PORTFOLIO
      {
        title: "AI Writer",
        href: "/essays",
        description: "Automated trend detection and research synthesis - monitors AI conversations to generate essays",
        techStack: ["AI Research", "Content Generation", "Trend Analysis"],
        category: "technical"
      },
      {
        title: "Content Stack",
        href: "https://github.com/prompt-stack/content-stack",
        description: "AI-powered content management system with 36+ React components",
        techStack: ["React", "TypeScript", "Vite"],
        category: "technical"
      },
      {
        title: "Grammar Ops",
        href: "https://github.com/prompt-stack/grammar-ops",
        description: "LLM-native codebase grammar system - 75x token reduction through metadata-driven navigation",
        techStack: ["Shell", "Code Analysis", "LLM"],
        category: "technical"
      },
      {
        title: "VAPI",
        href: "https://github.com/prompt-stack/vapi",
        description: "Voice AI integration platform with 69 components for telephony and voice assistants",
        techStack: ["JavaScript", "Voice AI", "Telephony"],
        category: "technical"
      },
      {
        title: "Dwellow",
        href: "https://web-production-43ab2.up.railway.app/",
        description: "Real estate feasibility workbench for Hamilton County, OH — parcel search, zoning envelopes, and pro formas across LIHTC, Opportunity Zones, TIF, HOME, and CDBG",
        techStack: ["Real Estate", "GIS", "Pro Forma", "Civic Tech"],
        category: "technical"
      },
      {
        title: "TWENTYONE",
        href: "https://nba-bets.up.railway.app/",
        description: "AI-powered NBA player prop predictions — 11-signal quantitative model with Claude analysis; 54.8% win rate over 4,929 graded picks",
        techStack: ["Python", "Flask", "PostgreSQL", "Claude AI", "Sports Analytics"],
        category: "technical"
      },
      {
        title: "KinCircle",
        href: "https://web-production-efe4e.up.railway.app/",
        description: "Family reunion planning platform — household-based invitations, date voting, automatic geographic-center calculation, and unified communication hub",
        techStack: ["Consumer SaaS", "Event Planning", "React"],
        category: "technical"
      },
      {
        title: "CEO Serenity",
        href: "https://web-production-945e7.up.railway.app/",
        description: "Private beta — executive productivity tool with magic-link authentication; invite-only",
        techStack: ["Private Beta", "Magic Link", "Next.js"],
        category: "technical"
      },
    ]
  } satisfies PersonalProfile,
  creator: {
    name: "@hoffdigital",
    title: "Creator Profile",
    subtitle: "tech · dev · society",
    mainContent: "I create content exploring how AI will impact the way we live, learn, and work. My focus is on demystifying technology to help people elevate their professional lives. I'm building the next generation of full-stack creators, showing non-technical individuals how to accelerate their learning and master software development with AI.",
    expandedContent: [
      "Through content, education, and community building, I guide the next generation of learners and builders in using AI tools to transform their capabilities.",
      "Join over 80,000 tech enthusiasts exploring the intersection of AI and the future of work."
    ],
    socialLinks: [
      {
        title: "TikTok",
        href: "https://www.tiktok.com/@hoffdigital",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-1.23-1.34-1.55-2.916-1.644-3.575h.004c-.01-.044-.018-.088-.027-.132v-.59h-3.685v13.534c0 .59-.005 1.179-.026 1.766-.02.547-.237 1.058-.6 1.478-.988 1.146-2.698.965-3.375.73-.82-.283-1.452-.922-1.638-1.71-.322-1.367.318-2.798 1.578-3.407.395-.19.828-.3 1.27-.32.362-.015.723.033 1.067.142v-3.86a7.576 7.576 0 0 0-1.655.034c-.97.13-1.91.444-2.772.925-1.474.83-2.7 2.116-3.363 3.607-.766 1.71-.892 3.837-.063 5.693.814 1.814 2.306 3.214 4.145 3.791.965.304 2.02.446 3.116.422 1.047-.022 2.078-.216 3.036-.568 1.418-.522 2.657-1.496 3.484-2.745.599-.906.968-1.93 1.083-2.992.088-.81.098-1.639.098-2.455l-.006-5.847c.58.358 1.127.635 1.627.815 1.116.4 2.27.622 3.432.66v-3.685c-.513-.04-1.017-.15-1.506-.327z"/>
          </svg>
        )
      },
      {
        title: "YouTube",
        href: "https://www.youtube.com/@hoffdigital",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        )
      }
    ],
    connectLinks: [
      {
        title: "Email",
        href: "mailto:hoff@learnrudi.com",
        icon: <Mail className="h-4 w-4" />,
      },
      {
        title: "Substack",
        href: "https://bzhoff.substack.com",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
          </svg>
        ),
      },
      {
        title: "LinkedIn",
        href: "https://linkedin.com/in/hoffbrandon",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      },
      {
        title: "GitHub",
        href: "https://github.com/prompt-stack",
        icon: (
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        )
      }
    ]
  } satisfies CreatorProfile
} 