export interface TimelineEntry {
  date: string
  title: string
  description: string
  category?: 'career' | 'education' | 'speaking' | 'press' | 'engagement'
}

export const timeline: TimelineEntry[] = [
  {
    date: "2014",
    category: "education",
    title: "B.S., Management & Operations",
    description: "Xavier University, Cincinnati",
  },
  {
    date: "2014–2016",
    category: "career",
    title: "Financial Services & Early ML",
    description: "Predictive analytics for loan payment and micro-lending; first exposure to machine learning in production.",
  },
  {
    date: "2017",
    category: "education",
    title: "MBA, Finance & Entrepreneurship",
    description: "EDHEC Business School, France",
  },
  {
    date: "2016–2019",
    category: "career",
    title: "Senior Business Analyst & Sourcing Manager, Access Financial",
    description: "Enterprise data governance, SQL/Python analytics dashboards.",
  },
  {
    date: "2019–2023",
    category: "career",
    title: "Founder & CEO, Heritage Hill Cooperative",
    description: "HBCU/Divine Nine e-commerce cooperative; scaled to $3M revenue, 125 retail doors, implemented ML demand forecasting.",
  },
  {
    date: "2022-11",
    category: "career",
    title: "RUDI Founded",
    description: "Launched after ChatGPT release; began building AI literacy community and applied research.",
  },
  {
    date: "2023",
    category: "education",
    title: "MIT xPRO Certification",
    description: "Driving Innovation with Generative AI.",
  },
  {
    date: "2024",
    category: "career",
    title: "Head of Product, Ultimate Technologies Group",
    description: "Grew qualified pipeline 24%, trained 40+ staff on LLMs.",
  },
  {
    date: "2024-03",
    category: "engagement",
    title: "Strategy Consultant, Morehouse College",
    description: "AI & data-governance curriculum, faculty training, academic-industry partnerships.",
  },
  {
    date: "2024",
    category: "education",
    title: "IBM AI Developer + DeepLearning.AI Certifications",
    description: "",
  },
  {
    date: "2024",
    category: "engagement",
    title: "Adjunct Instructor, University of Illinois–Springfield",
    description: 'Graduate course "AI, Politics & Education" (Course 601).',
  },
  {
    date: "2024-12",
    category: "press",
    title: "Stacker / Creatie.ai Feature",
    description: "Quoted as expert voice in national AI year-in-review coverage.",
  },
  {
    date: "2025",
    category: "speaking",
    title: "AI Workshop Series, Mercantile Library, Cincinnati",
    description: "Public AI ethics education series, 70–100 attendees per session.",
  },
  {
    date: "2025-05",
    category: "press",
    title: 'Soapbox Cincinnati "AI Sherpa" profile',
    description: "Featured profile on RUDI and Mercantile Library series.",
  },
  {
    date: "2025",
    category: "engagement",
    title: "Fireside Chat, Crowe LLP",
    description: "Human-Centered AI; also: GreenLight Fund, GCMI, State of Ohio, Moody Nolan workshops.",
  },
  {
    date: "2025-08",
    category: "engagement",
    title: "Warren County ESC Engagement Begins",
    description: "10-month AI literacy program for 23 Ohio educators; documented 524% ROI.",
  },
  {
    date: "2025-11",
    category: "speaking",
    title: "AfroTech 2025, Houston",
    description: "AI Strategy Bootcamp session on responsible AI; featured in Technical.ly coverage.",
  },
  {
    date: "2026-04",
    category: "speaking",
    title: "ULI Cincinnati Lunch & Learn",
    description: '"The AI-Augmented Developer," The Port Atrium II, Cincinnati.',
  },
  {
    date: "2026-04",
    category: "engagement",
    title: "Apple Community Education Initiative",
    description: "Campus visit and participation.",
  },
]
