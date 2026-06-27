"use client"

import { cn } from "@/lib/utils"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLast?: boolean
}

function TimelineItem({ year, title, description, isLast }: TimelineItemProps) {
  return (
    <div className="flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
          <div className="h-2 w-2 rounded-full bg-muted-foreground" />
        </div>
        {!isLast && <div className="flex-1 w-[1px] bg-border mt-2" />}
      </div>
      <div className="-mt-1">
        <div className="text-sm font-medium text-muted-foreground mb-1">{year}</div>
        <h3 className="text-sm font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

interface TimelineProps {
  items: {
    year: string
    title: string
    description: string
  }[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.year + item.title}
          year={item.year}
          title={item.title}
          description={item.description}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  )
} 