import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { press, featuredIn } from "@/app/data/press"

interface PressSectionProps {
  className?: string
}

export function PressSection({ className }: PressSectionProps) {
  return (
    <section className={cn("", className)}>
      <h2 className="text-lg font-semibold mb-1">Press</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Work featured by {featuredIn.join(", ")}, and more.
      </p>
      <div className="space-y-4">
        {press.map((article) => (
          <div
            key={article.url}
            className="rounded-lg border bg-card text-card-foreground p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  {article.title}
                  <ExternalLink className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {article.source} &middot;{" "}
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{article.takeaway}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
