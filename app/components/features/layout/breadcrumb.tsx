import Link from "next/link"
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-muted-foreground mb-6">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-1.5">
          {item.href ? (
            <Link href={item.href} className="text-xs hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-xs">{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight className="h-3 w-3" />}
        </div>
      ))}
    </nav>
  )
}

