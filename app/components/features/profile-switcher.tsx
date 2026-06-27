"use client"

import Link from "next/link"
import { ChevronRight, User, Pencil } from 'lucide-react'
import { Switch } from "@/app/components/primitives"

type ProfileSwitcherProps = {
  isCreatorProfile: boolean
  onProfileChange: (checked: boolean) => void
}

export function ProfileSwitcher({ isCreatorProfile, onProfileChange }: ProfileSwitcherProps) {
  const handleChange = (checked: boolean) => {
    console.log('Switch clicked:', checked)
    onProfileChange(checked)
  }

  return (
    <nav className="flex items-center justify-between text-muted-foreground mb-8">
      <div className="flex items-center gap-2">
        <Link 
          href="/" 
          className="text-xs hover:text-foreground transition-colors"
          onClick={() => onProfileChange(false)}
        >
          Home
        </Link>
        {isCreatorProfile && (
          <>
            <ChevronRight className="h-3 w-3" />
            <span className="text-xs">Creator</span>
          </>
        )}
      </div>
      <div className="relative flex items-center gap-3 bg-background/50 rounded-full px-3 py-1.5 shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.1)]">
        <button 
          className={`flex items-center gap-1.5 transition-colors ${!isCreatorProfile ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          onClick={() => handleChange(false)}
        >
          <User className="h-3 w-3" />
          <span className="text-[11px] tracking-tight">Professional</span>
        </button>
        <Switch
          id="profile-mode"
          checked={isCreatorProfile}
          onCheckedChange={handleChange}
        />
        <button 
          className={`flex items-center gap-1.5 transition-colors ${isCreatorProfile ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          onClick={() => handleChange(true)}
        >
          <Pencil className="h-3 w-3" />
          <span className="text-[11px] tracking-tight">Creator</span>
        </button>
      </div>
    </nav>
  )
} 