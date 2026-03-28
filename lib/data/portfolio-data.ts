// ============================================
// PORTFOLIO DATA - Single Source of Truth
// ============================================
// This file contains all personal info and content data
// used by both Editorial (browser) and macOS (desktop) modes.
// Update this file to change content across the entire portfolio.

// ============================================
// PERSONAL INFO
// ============================================
export const PERSONAL = {
  name: "Lobsang",
  initial: "L",
  username: "lobsang", // for terminal prompts
  tagline: "I build things that matter.",
  bio: "Entrepreneur with a background in economics, athletics, and venture. Currently building at the intersection of AI and human creativity.",

  // Social & Contact
  email: "your@email.com", // TODO: Update
  github: "Lobbyyy",
  linkedin: "your-linkedin", // TODO: Update
  twitter: "your-twitter", // TODO: Update
  youtube: "", // Leave empty if not applicable
  website: "your-site.com", // TODO: Update
  substack: "your-substack", // TODO: Update
}

// ============================================
// NAVIGATION
// ============================================
// Used by: Sidebar, Search, macOS file browser
export type NavItemType = "file" | "folder"
export type NavIcon = "home" | "folder" | "user" | "mail" | "music" | "file"

export interface NavItem {
  name: string
  path: string
  icon: NavIcon
  type: NavItemType
}

export const NAVIGATION: NavItem[] = [
  { name: "home.mdx", path: "/", icon: "home", type: "file" },
  { name: "companies/", path: "/companies", icon: "folder", type: "folder" },
  { name: "context/", path: "/context", icon: "folder", type: "folder" },
  { name: "essays/", path: "/essays", icon: "folder", type: "folder" },
  { name: "localhost/", path: "/localhost", icon: "folder", type: "folder" },
  { name: "resources/", path: "/resources", icon: "folder", type: "folder" },
  { name: "about.mdx", path: "/about", icon: "user", type: "file" },
  { name: "contact.mdx", path: "/contact", icon: "mail", type: "file" },
  { name: "spotify.mdx", path: "/spotify", icon: "music", type: "file" },
]

// ============================================
// COMPANIES
// ============================================
export type CompanyStatus = "active" | "live" | "exploring"

export interface Company {
  slug: string
  name: string
  description: string
  longDescription: string
  url: string
  status: CompanyStatus
}

export const COMPANIES: Company[] = [
  {
    slug: "supanova",
    name: "Supanova",
    description: "AI video production",
    longDescription: "Helping creators produce professional video content with AI-powered tools.",
    url: "https://www.iamsupanova.com",
    status: "active",
  },
  {
    slug: "1z2",
    name: "1z2",
    description: "Content research intelligence",
    longDescription: "AI-powered platform for content research and competitive analysis.",
    url: "https://www.1z2.app",
    status: "active",
  },
  {
    slug: "our-circles",
    name: "Our Circles",
    description: "Family life sharing",
    longDescription: "A private space for families to share moments and stay connected.",
    url: "https://www.our-circles.com",
    status: "live",
  },
  {
    slug: "20punches",
    name: "20 Punches",
    description: "AI financial advisory",
    longDescription: "Making financial advice accessible through AI-powered guidance.",
    url: "https://www.20punches.co.uk",
    status: "live",
  },
]

// ============================================
// ESSAYS
// ============================================
export interface Essay {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

export const ESSAYS: Essay[] = [
  {
    slug: "building-in-public",
    title: "On Building in Public",
    excerpt: "Why I share my journey, the good and the bad, and what I've learned from it.",
    date: "Mar 15, 2026",
    readTime: "5 min",
    tags: ["founder-life", "philosophy"],
  },
  {
    slug: "ckc-framework",
    title: "The CKC Framework",
    excerpt: "Competence, Kindness, Confidence - the three values I try to embody in everything I do.",
    date: "Mar 10, 2026",
    readTime: "8 min",
    tags: ["mindset", "philosophy"],
  },
  {
    slug: "fourth-dimensional",
    title: "Fourth Dimensional Thinking",
    excerpt: "Exploring consciousness, quantum mechanics, and why we might be more than we think.",
    date: "Mar 5, 2026",
    readTime: "12 min",
    tags: ["curiosity", "philosophy"],
  },
  {
    slug: "learning-to-code",
    title: "Learning to Code at 30",
    excerpt: "How I went from zero to shipping products, and what I wish I knew earlier.",
    date: "Feb 28, 2026",
    readTime: "10 min",
    tags: ["founder-life", "learning"],
  },
  {
    slug: "startup-lessons",
    title: "Lessons from 4 Startups",
    excerpt: "What worked, what didn't, and what I'd do differently.",
    date: "Feb 20, 2026",
    readTime: "15 min",
    tags: ["founder-life", "startups"],
  },
]

export const ESSAY_TAGS = ["all", "founder-life", "philosophy", "curiosity", "mindset", "learning", "startups"]

// ============================================
// SKILLS (for terminal, notes, about page)
// ============================================
export const SKILLS = {
  languages: ["TypeScript", "Python", "JavaScript"],
  frameworks: ["Next.js", "React", "Node.js"],
  tools: ["Git", "VS Code", "Figma"],
  interests: ["AI/ML", "Product Design", "Venture Building"],
}

// ============================================
// VALUES (CKC Framework)
// ============================================
export const VALUES = [
  { letter: "C", word: "Competence" },
  { letter: "K", word: "Kindness" },
  { letter: "C", word: "Confidence" },
]

// ============================================
// SEARCH ITEMS
// ============================================
// Generated from navigation + companies + essays for search functionality
export type SearchItemType = "page" | "folder" | "company" | "post"

export interface SearchItem {
  title: string
  path: string
  type: SearchItemType
  description: string
}

export function generateSearchItems(): SearchItem[] {
  const items: SearchItem[] = []

  // Add navigation items
  NAVIGATION.forEach(nav => {
    items.push({
      title: nav.name.replace('.mdx', '').replace('/', ''),
      path: nav.path,
      type: nav.type === "folder" ? "folder" : "page",
      description: nav.path === "/" ? "Welcome" : `Navigate to ${nav.name}`,
    })
  })

  // Add companies
  COMPANIES.forEach(company => {
    items.push({
      title: company.name,
      path: `/companies/${company.slug}`,
      type: "company",
      description: company.description,
    })
  })

  // Add essays
  ESSAYS.forEach(post => {
    items.push({
      title: post.title,
      path: `/essays/${post.slug}`,
      type: "post",
      description: post.excerpt.slice(0, 60) + "...",
    })
  })

  return items
}

// ============================================
// NOTES CONTENT (for macOS Notes app)
// ============================================
export function getAboutMeNote(): string {
  return `# ${PERSONAL.name}

${PERSONAL.bio}

## Currently Building
${COMPANIES.filter(c => c.status === "active").map(c => `- **${c.name}** - ${c.description}`).join('\n')}

## Skills
${Object.entries(SKILLS).map(([category, items]) => `- **${category}**: ${(items as string[]).join(', ')}`).join('\n')}

## Values (CKC Framework)
${VALUES.map(v => `- **${v.letter}** - ${v.word}`).join('\n')}

## Contact
- Email: ${PERSONAL.email}
- GitHub: github.com/${PERSONAL.github}
- Website: ${PERSONAL.website}`
}

export function getLearningGoalsNote(): string {
  return `# Learning Goals

## Current Focus
- Building AI-powered products
- Scaling venture operations
- Content creation and distribution

## Books I'm Reading
- The Almanack of Naval Ravikant
- Zero to One
- The Mom Test

## Podcasts I Listen To
- Acquired
- My First Million
- Lex Fridman Podcast`
}
