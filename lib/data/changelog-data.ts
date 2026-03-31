// ============================================
// CHANGELOG DATA - Personal Timeline
// ============================================
// Life events told as a changelog - like software releases but for life.

export type ChangelogCategory = "life" | "education" | "career" | "project" | "milestone"

export interface ChangelogEvent {
  id: string
  date: string              // "Oct 1996", "Apr 2006", "Jan 2024"
  year: number              // For grouping: 1996, 2006, 2024
  title: string             // "Born in Kathmandu, Nepal"
  description: string       // "Where it all started."
  category: ChangelogCategory
  tags: string[]            // ["life", "nepal", "origin"]
  emoji?: string            // Optional emoji for visual interest
  link?: string             // Optional link to related page
}

export const CHANGELOG_EVENTS: ChangelogEvent[] = [
  // 1996
  {
    id: "birth",
    date: "Oct 1996",
    year: 1996,
    title: "Born in Kathmandu, Nepal",
    description: "Where it all started.",
    category: "life",
    tags: ["origin"],
    emoji: "🇳🇵"
  },

  // 2006
  {
    id: "moved-uk",
    date: "Apr 2006",
    year: 2006,
    title: "Moved to the United Kingdom",
    description: "A new chapter begins. Left Nepal for London.",
    category: "life",
    tags: ["uk", "london"],
    emoji: "🇬🇧"
  },

  // 2008
  {
    id: "table-tennis-start",
    date: "2008",
    year: 2008,
    title: "Started playing table tennis",
    description: "Picked up a paddle at 11. Didn't know it would define the next decade.",
    category: "life",
    tags: ["sport", "table-tennis"],
    emoji: "🏓"
  },

  // 2010
  {
    id: "tt-championships",
    date: "2010",
    year: 2010,
    title: "Won first major championships",
    description: "London championship, Surrey county, school, borough - the titles started stacking up.",
    category: "milestone",
    tags: ["sport", "table-tennis", "achievement"],
    emoji: "🏆"
  },

  // 2014
  {
    id: "tt-top-20",
    date: "2014",
    year: 2014,
    title: "Ranked top 20 in the UK",
    description: "At 18, reached peak national ranking. Years of 5am training sessions paid off.",
    category: "milestone",
    tags: ["sport", "table-tennis", "achievement"],
    emoji: "🥇"
  },

  // 2015
  {
    id: "lse-start",
    date: "Sep 2015",
    year: 2015,
    title: "Started at LSE",
    description: "BSc Economics at the London School of Economics and Political Science.",
    category: "education",
    tags: ["university", "economics"],
    emoji: "🎓"
  },

  // 2017
  {
    id: "team-gb",
    date: "Jul 2017",
    year: 2017,
    title: "Represented Team GB at European University Games",
    description: "Zagreb, Croatia. Competing for my country on the international stage.",
    category: "milestone",
    tags: ["sport", "table-tennis", "team-gb"],
    emoji: "🇬🇧"
  },

  // 2018
  {
    id: "lse-graduate",
    date: "Jun 2018",
    year: 2018,
    title: "Graduated from LSE",
    description: "BSc Economics complete. Ready for the real world.",
    category: "education",
    tags: ["university", "economics"],
    emoji: "🎓"
  },
  {
    id: "pitchbook",
    date: "Sep 2018",
    year: 2018,
    title: "Joined PitchBook Data",
    description: "First job out of university. Exposure to SaaS, VC, and the startup ecosystem.",
    category: "career",
    tags: ["saas", "venture", "first-job"]
  },

  // 2020
  {
    id: "can-co",
    date: "Nov 2020",
    year: 2020,
    title: "Head of GTM Execution at Can & Co",
    description: "Leading go-to-market strategy and execution for early-stage ventures.",
    category: "career",
    tags: ["gtm", "strategy"]
  },

  // 2022
  {
    id: "r3",
    date: "Jun 2022",
    year: 2022,
    title: "Venture Development Lead at R3",
    description: "Leading venture development in enterprise blockchain.",
    category: "career",
    tags: ["venture", "blockchain"]
  },

  // 2023
  {
    id: "antler",
    date: "Oct 2023",
    year: 2023,
    title: "Joined Antler London",
    description: "Cohort W24 - surrounded by ambitious founders building the next big thing.",
    category: "career",
    tags: ["venture", "startup"]
  },

  // 2024
  {
    id: "running-goal",
    date: "Jan 2024",
    year: 2024,
    title: "Started running 100km every month",
    description: "New year, new discipline. Building consistency one kilometer at a time.",
    category: "life",
    tags: ["fitness", "running", "discipline"],
    emoji: "🏃"
  },
  {
    id: "cs50",
    date: "Feb 2024",
    year: 2024,
    title: "Completed Harvard CS50",
    description: "Finally learned to code. The most valuable skill I've ever picked up.",
    category: "education",
    tags: ["coding", "learning", "cs50"],
    emoji: "💻"
  },
  {
    id: "20punches-launch",
    date: "Sep 2024",
    year: 2024,
    title: "Launched 20 Punches",
    description: "First app I took from 0 to 1. AI-powered financial guidance for everyone.",
    category: "project",
    tags: ["founder", "ai", "first-app"],
    link: "/companies/20punches"
  },
  {
    id: "started-writing",
    date: "Nov 2024",
    year: 2024,
    title: "Started writing on Substack",
    description: "Not every problem needs a SaaS solution. Some just need the right words. Reading Paul Graham's essays solved problems no app could. I wanted to do that for others.",
    category: "milestone",
    tags: ["writing", "substack", "ideas"],
    emoji: "✍️"
  },
  {
    id: "our-circles-start",
    date: "Dec 2024",
    year: 2024,
    title: "Started building Our Circles",
    description: "A lunch conversation with a close friend turned into something real. We decided to build it before dessert arrived.",
    category: "project",
    tags: ["founder", "product", "friendship"],
    link: "/companies/our-circles"
  },

  // 2025
  {
    id: "our-circles-launch",
    date: "Apr 2025",
    year: 2025,
    title: "Launched Our Circles",
    description: "First product I coded entirely myself. The failures along the way were brutal, but finishing changed my local maximum. I stopped asking what I could do and started asking where my ceiling actually was.",
    category: "project",
    tags: ["founder", "launch", "growth"],
    link: "/companies/our-circles"
  },
  {
    id: "creative-exploration",
    date: "2025",
    year: 2025,
    title: "Dove into AI and the creative ecosystem",
    description: "After launching Our Circles, I needed to learn how to market it. That pulled me into video editing, AI agents, and the creator economy. I discovered my people: brand builders.",
    category: "milestone",
    tags: ["ai", "creative", "exploration"],
    emoji: "🔍"
  },
  {
    id: "1z2-start",
    date: "Dec 2025",
    year: 2025,
    title: "Started building 1z2",
    description: "My content wasn't working. Instead of guessing, I built a tool to understand why some things go viral. Research intelligence for creators who want to be intentional.",
    category: "project",
    tags: ["founder", "ai", "content"],
    link: "/companies/1z2"
  },

  // 2026
  {
    id: "supanova-start",
    date: "Feb 2026",
    year: 2026,
    title: "Started building Supanova",
    description: "Saw the Gemini hackathon and wanted to test myself against the best. Built something complex that had been brewing since my 2025 explorations.",
    category: "project",
    tags: ["founder", "ai", "hackathon"],
    link: "/companies/supanova"
  },
  {
    id: "coconut-start",
    date: "Mar 2026",
    year: 2026,
    title: "Started building Coconut",
    description: "The big brother to 1z2. Where 1z2 helps you understand virality, Coconut is the system - reliable content operations for brand builders who think long-term.",
    category: "project",
    tags: ["founder", "product", "system"],
    link: "/companies/coconut"
  },
]

// Helper functions
export function getChangelogEvents(): ChangelogEvent[] {
  return [...CHANGELOG_EVENTS].sort((a, b) => {
    // Sort by year ascending (oldest first - tell the story forward)
    if (a.year !== b.year) return a.year - b.year
    return 0
  })
}

export function getEventsByYear(): [number, ChangelogEvent[]][] {
  const events = getChangelogEvents()
  const grouped = new Map<number, ChangelogEvent[]>()

  events.forEach(event => {
    const existing = grouped.get(event.year) || []
    grouped.set(event.year, [...existing, event])
  })

  // Convert to array and sort by year ascending (oldest first)
  return Array.from(grouped.entries()).sort(([a], [b]) => a - b)
}

export function getYears(): number[] {
  const years = new Set(CHANGELOG_EVENTS.map(e => e.year))
  // Ascending order (oldest first)
  return Array.from(years).sort((a, b) => a - b)
}
