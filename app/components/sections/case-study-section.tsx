import { cn } from "@/lib/utils"
import { primaryCaseStudy, secondaryCaseStudies } from "@/app/data/case-studies"

interface CaseStudySectionProps {
  className?: string
}

export function CaseStudySection({ className }: CaseStudySectionProps) {
  return (
    <section className={cn("", className)}>
      <h2 className="text-lg font-semibold mb-4">Case Studies</h2>

      {/* Primary case study */}
      <div className="rounded-lg border bg-card text-card-foreground p-5 mb-4">
        <div className="mb-3">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {primaryCaseStudy.engagement}
          </p>
          <h3 className="text-base font-semibold">{primaryCaseStudy.client}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {primaryCaseStudy.duration}
            {primaryCaseStudy.participants
              ? ` · ${primaryCaseStudy.participants} participants`
              : ""}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {primaryCaseStudy.results.map((result) => (
            <div
              key={result.label}
              className="rounded-md bg-muted/50 border border-border px-3 py-2 text-center"
            >
              <p className="text-xl font-bold">{result.value}</p>
              <p className="text-xs text-muted-foreground leading-tight mt-0.5">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {primaryCaseStudy.summary}
        </p>
      </div>

      {/* Secondary case studies */}
      <div className="space-y-2">
        {secondaryCaseStudies.map((study) => (
          <div
            key={study.client}
            className="rounded-lg border bg-card text-card-foreground px-4 py-3 flex items-start gap-2"
          >
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium">{study.client}</span>
              <span className="text-muted-foreground text-sm"> &mdash; </span>
              <span className="text-sm text-muted-foreground">{study.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
