'use client'

import { cn } from "@/lib/utils"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  children: React.ReactNode
  language?: string
  title?: string
  className?: string
}

export function CodeBlock({
  children,
  language,
  title,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const code = children?.toString() || ''
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn(
      'my-6 rounded-lg border bg-secondary/30',
      className
    )}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border/40">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{title}</span>
            {language && (
              <span className="text-xs text-muted-foreground">{language}</span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 hover:bg-secondary rounded transition-colors"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="sr-only">
              {copied ? "Copied!" : "Copy code"}
            </span>
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto text-sm text-muted-foreground">
        {children}
      </div>
    </div>
  )
} 