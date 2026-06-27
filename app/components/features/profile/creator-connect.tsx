"use client"

import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import type { CreatorProfile } from "./types"

type CreatorConnectProps = {
  profile: CreatorProfile
}

export function CreatorConnect({ profile }: CreatorConnectProps) {
  return (
    <div className="mb-8">
      <h2 className="text-sm text-muted-foreground mb-3">Connect</h2>
      <div className="border-t border-border/40">
        {profile.connectLinks.map((link) => (
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