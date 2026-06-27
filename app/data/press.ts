export interface PressArticle {
  title: string
  source: string
  date: string
  url: string
  takeaway: string
}

export const press: PressArticle[] = [
  {
    title: "AfroTech 2025 mixed innovation with culture — and 40,000 showed up",
    source: "Technical.ly",
    date: "2025-11-06",
    url: "https://technical.ly/workforce/afrotech-2025-houston-recap/",
    takeaway:
      "Features Brandon's AfroTech talk on responsible AI and the hard realities of organizational AI implementation.",
  },
  {
    title: "The AI sherpa will see you now",
    source: "Soapbox Cincinnati",
    date: "2025-05-27",
    url: "https://soapboxmedia.com/the-ai-sherpa-will-see-you-now/",
    takeaway:
      "Profile of Brandon and the RUDI Mercantile Library public AI education series.",
  },
  {
    title: "AI was everywhere in 2024. Here are the biggest stories of the year.",
    source: "Stacker / Creatie.ai",
    date: "2024-12-12",
    url: "https://stacker.com/stories/technology/ai-was-everywhere-2024-here-are-biggest-stories-year",
    takeaway:
      "Quotes Brandon on AI adoption challenges, privacy tradeoffs, and organizational readiness.",
  },
]

// Work has also been featured by NPR, GQ, Essence, and MSNBC (no archived article URLs available).
export const featuredIn: string[] = ["NPR", "GQ", "Essence", "MSNBC"]
