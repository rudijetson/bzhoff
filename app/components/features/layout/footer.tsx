"use client"

import { useState } from "react"
import { ThemeToggle } from "@/app/theme-toggle"
import { Heart, Mail } from 'lucide-react'
import { cn } from "@/lib/utils"

export function Footer() {
  const [heartCount, setHeartCount] = useState(0)
  const maxHearts = 25

  const handleHeartClick = () => {
    if (heartCount < maxHearts) {
      setHeartCount(prev => prev + 1)
    }
  }

  return (
    <footer className="flex items-center justify-between pt-8 border-t border-border/40">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">built by bzhoff with</span>
        <button
          onClick={handleHeartClick}
          className="inline-flex items-center gap-1 hover:scale-110 active:scale-95 transition-transform"
          disabled={heartCount >= maxHearts}
        >
          <Heart 
            className={cn(
              "h-3 w-3 transition-all duration-300 text-red-500",
              heartCount > 0 && "fill-red-500"
            )}
          />
          {heartCount > 0 && (
            <span className="text-xs text-muted-foreground">
              {heartCount >= maxHearts ? "thanks for the love!" : heartCount}
            </span>
          )}
        </button>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="mailto:hoff@learnrudi.com"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="h-4 w-4" />
          contact me
        </a>
        <ThemeToggle />
      </div>
    </footer>
  )
}

