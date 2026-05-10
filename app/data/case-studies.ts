export interface CaseStudyResult {
  label: string
  value: string
}

export interface CaseStudy {
  client: string
  engagement: string
  participants?: number
  duration: string
  results: CaseStudyResult[]
  summary: string
}

export interface SecondaryCaseStudy {
  client: string
  description: string
}

export const primaryCaseStudy: CaseStudy = {
  client: "Warren County Educational Service Center (WCESC)",
  engagement: "AI Literacy Program",
  participants: 23,
  duration: "10-month engagement (Aug 2025 – ongoing)",
  results: [
    { label: "Documented ROI", value: "524%" },
    { label: "Comfort level achieved", value: "95%" },
    { label: "Literacy gains in 8 weeks", value: "60%" },
    { label: "Reduction in evaluation time", value: "85%" },
  ],
  summary:
    "Warren County ESC partnered with RUDI to prepare 23 Ohio educators for a state-mandated AI policy deadline. Using the RUDI three-swim-lane framework—Conceptual, Operational, and Governance—participants moved from Pre-Beginner to Intermediate in just 30 days. The flagship outcome: a custom AI assistant that reduced teacher evaluation time by 85%, turning a 2–3-hour OTES process into 15–20 minutes.",
}

export const secondaryCaseStudies: SecondaryCaseStudy[] = [
  {
    client: "Crowe LLP",
    description: "Enterprise AI ethics workshops for professional services staff",
  },
  {
    client: "Morehouse College",
    description: "AI & data-governance curriculum and faculty training",
  },
  {
    client: "University of Illinois–Springfield",
    description: 'Graduate-level "AI, Politics & Education"',
  },
  {
    client: "Walker SCM",
    description:
      "AI strategy for $35–40M MBE logistics company; projected $2.2–5M annual benefit",
  },
  {
    client: "HBCU-Propel",
    description: "Multi-module AI curriculum for HBCU students and faculty",
  },
]
