"use client"

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/app/components/primitives"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("system")}
        className="h-8 w-8"
      >
        <Monitor className="h-4 w-4" />
        <span className="sr-only">System theme</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className="h-8 w-8"
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark theme</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className="h-8 w-8"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light theme</span>
      </Button>
    </div>
  )
}

