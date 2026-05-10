"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronRight, Mail, Github } from 'lucide-react'
import { Button } from "@/app/components/primitives"
import { useState } from "react"
import type { PersonalProfile, CreatorProfile } from "./types"

type ProfileHeaderProps = {
  profile: PersonalProfile | CreatorProfile
  isCreatorProfile: boolean
}

export function ProfileHeader({ profile, isCreatorProfile }: ProfileHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-8">
      <Image
        src="/images/authors/hoff-linkedin.jpg"
        alt="Brandon Hoff"
        width={96}
        height={96}
        className="rounded-lg mb-3"
      />
      <div className="flex items-center gap-2 mb-2">
        {isCreatorProfile ? (
          <h1 className="text-xl font-bold">{profile.name}</h1>
        ) : (
          <h1 className="text-xl font-semibold">{profile.name}</h1>
        )}
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/prompt-stack"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:hoff@learnrudi.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="text-sm text-muted-foreground mb-2">{profile.subtitle}</div>
      <div className="space-y-4">
        <p className="text-sm">
          {profile.mainContent}
        </p>

        {isExpanded && (
          <>
            <div className="text-muted-foreground space-y-4 border-l border-border/40 pl-4">
              {profile.expandedContent.map((content, i) => (
                <p key={i} className="text-sm">{content}</p>
              ))}
            </div>
            <div className="pt-2">
              <Link href="/about">
                <Button variant="ghost" className="text-xs text-muted-foreground hover:text-foreground px-0 -ml-2">
                  About me
                  <ArrowUpRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>
          </>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground h-auto p-0"
        >
          {isExpanded ? 'Show less' : 'Read more'}
          <ChevronRight 
            className={`h-3 w-3 transition-transform duration-200 ${
              isExpanded ? 'rotate-90' : ''
            }`} 
          />
        </Button>
      </div>
    </div>
  )
} 