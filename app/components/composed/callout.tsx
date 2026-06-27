'use client'

import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react"

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success'
  children: React.ReactNode
  className?: string
}

const icons = {
  info: Info,
  warning: AlertCircle,
  error: XCircle,
  success: CheckCircle2,
}

const styles = {
  info: 'bg-blue-500/10 border-blue-500/20 dark:bg-blue-500/5 dark:border-blue-500/10',
  warning: 'bg-yellow-500/10 border-yellow-500/20 dark:bg-yellow-500/5 dark:border-yellow-500/10',
  error: 'bg-red-500/10 border-red-500/20 dark:bg-red-500/5 dark:border-red-500/10',
  success: 'bg-green-500/10 border-green-500/20 dark:bg-green-500/5 dark:border-green-500/10',
}

const iconColors = {
  info: 'text-blue-500',
  warning: 'text-yellow-500',
  error: 'text-red-500',
  success: 'text-green-500',
}

export function Callout({
  type = 'info',
  children,
  className,
}: CalloutProps) {
  const Icon = icons[type]

  return (
    <div className={cn(
      'my-4 flex items-baseline gap-1.5 rounded-lg border py-1.5 px-2',
      styles[type],
      className
    )}>
      <Icon className={cn(
        "h-3.5 w-3.5 flex-shrink-0",
        iconColors[type]
      )} />
      <div className="text-sm text-muted-foreground leading-normal">
        {children}
      </div>
    </div>
  )
} 