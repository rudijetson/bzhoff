import Image from "next/image"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { speaking } from "@/app/data/speaking"

interface SpeakingSectionProps {
  className?: string
}

function formatDate(dateStr: string): string {
  // Handle full dates like "2026-04-28"
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  // Handle year-month like "2025-11"
  if (/^\d{4}-\d{2}$/.test(dateStr)) {
    const [year, month] = dateStr.split("-")
    return new Date(Number(year), Number(month) - 1, 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    })
  }
  // Handle year-only like "2025" or "2026-04"
  return dateStr
}

export function SpeakingSection({ className }: SpeakingSectionProps) {
  const withImages = speaking.filter((e) => e.image)
  const withoutImages = speaking.filter((e) => !e.image)

  return (
    <section className={cn("", className)}>
      <h2 className="text-lg font-semibold mb-4">Speaking</h2>

      {withImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {withImages.map((event) => (
            <div
              key={event.venue + event.date}
              className="rounded-lg border bg-card text-card-foreground overflow-hidden"
            >
              <div className="relative w-full aspect-video bg-muted">
                <Image
                  src={event.image!}
                  alt={`${event.venue} — ${event.topic}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{formatDate(event.date)}</p>
                <p className="text-sm font-medium">{event.venue}</p>
                <p className="text-sm text-muted-foreground">{event.topic}</p>
                {event.location && (
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    {event.location}
                  </p>
                )}
                {event.imageCredit && (
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    Photo: {event.imageCredit}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {withoutImages.length > 0 && (
        <div className="space-y-2">
          {withoutImages.map((event) => (
            <div
              key={event.venue + event.date}
              className="rounded-lg border bg-card text-card-foreground px-4 py-3 flex items-start gap-3"
            >
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium">{event.venue}</span>
                <span className="text-muted-foreground text-sm"> &mdash; </span>
                <span className="text-sm text-muted-foreground">{event.topic}</span>
              </div>
              <p className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
                {formatDate(event.date)}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
