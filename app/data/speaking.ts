export interface SpeakingEvent {
  date: string
  venue: string
  topic: string
  location?: string
  image?: string
  imageCredit?: string
}

export const speaking: SpeakingEvent[] = [
  {
    date: "2026-04-28",
    venue: "ULI Cincinnati Lunch & Learn",
    topic: "The AI-Augmented Developer",
    location: "The Port — Atrium II, 221 East Fourth Street, Cincinnati, OH",
    image: "/images/events/uli-cincinnati.jpg",
  },
  {
    date: "2025-11",
    venue: "AfroTech 2025",
    topic: "AI Strategy Bootcamp — Responsible AI & Implementation",
    location: "Houston, TX",
    image: "/images/events/afrotech.jpg",
    imageCredit: "Ismael Quintanilla III",
  },
  {
    date: "2025",
    venue: "Mercantile Library AI Series",
    topic: "Public AI Ethics Education",
    location: "Cincinnati, OH",
    image: "/images/events/mercantile-library.jpg",
  },
  {
    date: "2026-04",
    venue: "Apple Community Education Initiative",
    topic: "Campus Visit",
    location: "Apple Campus",
    image: "/images/events/apple-cei.jpg",
  },
  {
    date: "2025",
    venue: "Crowe LLP",
    topic: "Fireside Chat: Human-Centered AI",
  },
  {
    date: "2025",
    venue: "EAB Corporate Webinar",
    topic: "Generative AI for Work & Productivity",
  },
  {
    date: "2025",
    venue: "Gatherverse 2025",
    topic: "Panel: Generative AI in the Workplace",
  },
]
