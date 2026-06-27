"use client"

import { HelpCircle } from 'lucide-react'
import { Button } from "@/app/components/primitives"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/composed"

interface SectionHeaderProps {
  title: string
  tooltip: string
}

export function SectionHeader({ title, tooltip }: SectionHeaderProps) {
  return (
    <h2 className="text-sm text-muted-foreground mb-3 mt-8 flex items-center gap-1.5">
      {title}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-4 w-4 p-0.5 hover:bg-transparent hidden sm:inline-flex"
          >
            <HelpCircle className="h-2.5 w-2.5 text-muted-foreground/40" />
            <span className="sr-only">Learn more about {title}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </h2>
  )
}

