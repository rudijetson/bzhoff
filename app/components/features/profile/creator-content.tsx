"use client"

import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import type { CreatorProfile } from "./types"

type CreatorContentProps = {
  profile: CreatorProfile
}

export function CreatorContent({ profile }: CreatorContentProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm text-muted-foreground">Content</h2>
        <div className="text-sm text-muted-foreground">Join 80,000+ tech enthusiasts</div>
      </div>
      <div className="border-t border-border/40">
        {profile.socialLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="flex items-center justify-between py-3 border-b border-border/40 hover:text-muted-foreground transition-colors"
          >
            <span className="flex items-center gap-3">
              {link.icon}
              <span className="text-sm">{link.title}</span>
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </div>
  )
} 