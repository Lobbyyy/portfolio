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
  name: "Lobsang Lama",
  initial: "L",
  username: "lobsang", // for terminal prompts
  identity: "S.E.C.A",
  identityExpanded: "Stoic. Entrepreneur. Creative. Athlete.",
  tagline: "I build things that matter.", // Legacy, kept for compatibility
  bio: "Top student. Team GB table tennis player. Spent years in corporate soaking up experience. Taught myself to code and now, I'm building products at the intersection of AI and human creativity.",

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
  { name: "essays/", path: "/essays", icon: "folder", type: "folder" },
  { name: "context/", path: "/context", icon: "folder", type: "folder" },
  { name: "localhost/", path: "/localhost", icon: "folder", type: "folder" },
  { name: "resources/", path: "/resources", icon: "folder", type: "folder" },
  { name: "about.mdx", path: "/about", icon: "user", type: "file" },
  { name: "changelog.mdx", path: "/changelog", icon: "file", type: "file" },
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
  tagline: string
  description: string
  longDescription: string
  url: string
  logo?: string  // Path to logo in public folder (e.g., "/coconut_logo.png")
  status: CompanyStatus
  problem: string
  solution: string
  whyIBuiltIt: string
  cta?: string
}

export const COMPANIES: Company[] = [
  {
    slug: "coconut",
    name: "Coconut",
    tagline: "A brand builder's oasis",
    description: "Post more without doing more",
    longDescription: "Escape the content treadmill with our intelligent content arbitrage system.",
    url: "https://coconutapp.xyz",
    logo: "/logos/coconut_logo.webp",
    status: "active",
    problem: "Creators are exhausted. The content treadmill demands constant output while quality suffers. You have great ideas trapped in long-form content that never gets repurposed.",
    solution: "Coconut is content arbitrage. We ingest your existing content, extract the gold, and remix it for every platform. Post more without doing more.",
    whyIBuiltIt: "As a founder building in public, I experienced content burnout firsthand. I had hours of podcast content, essay drafts, and video scripts - all underutilized. Coconut is the tool I needed.",
  },
  {
    slug: "supanova",
    name: "Supanova",
    tagline: "AI-powered video production",
    description: "AI video production",
    longDescription: "Helping creators produce professional video content with AI-powered tools.",
    url: "https://www.iamsupanova.com",
    logo: "/logos/supanova_logo.svg",
    status: "active",
    problem: "Professional video content requires expensive equipment, editing skills, and hours of work. Creators have ideas but lack the means to bring them to life at scale.",
    solution: "Supanova uses AI to transform your ideas into polished video content. Professional quality, fraction of the time.",
    whyIBuiltIt: "I wanted to create video content but the barrier was too high. Supanova is the production studio I wished existed.",
  },
  {
    slug: "1z2",
    name: "1z2",
    tagline: "Content research intelligence",
    description: "Content research intelligence",
    longDescription: "AI-powered platform for content research and competitive analysis.",
    url: "https://www.1z2.app",
    logo: "/logos/primary-icon-logo-for-dark-bg.svg",
    status: "live",
    problem: "Understanding what content resonates requires hours of manual research across competitors and trends.",
    solution: "AI-powered content analysis that surfaces what's working and why.",
    whyIBuiltIt: "Before creating, you need to understand the landscape. This is the research layer that informs everything else.",
  },
  {
    slug: "our-circles",
    name: "Our Circles",
    tagline: "Private family sharing",
    description: "Family life sharing",
    longDescription: "A private space for families to share moments and stay connected.",
    url: "https://www.our-circles.com",
    logo: "/logos/circles_logo.png",
    status: "live",
    problem: "Families are scattered, and social media isn't the place to share precious moments with loved ones.",
    solution: "A private, intimate space where families can share photos, updates, and stay connected - no algorithms, no ads.",
    whyIBuiltIt: "My family is spread across continents. This keeps us close without the noise of public social networks.",
  },
  {
    slug: "20punches",
    name: "20 Punches",
    tagline: "AI financial guidance",
    description: "AI financial advisory",
    longDescription: "Making financial advice accessible through AI-powered guidance.",
    url: "https://www.20punches.co.uk",
    logo: "/logos/20-punches.svg",
    status: "live",
    problem: "Quality financial advice is expensive and inaccessible to most people.",
    solution: "AI-powered financial guidance that's accessible, clear, and actionable.",
    whyIBuiltIt: "I believe everyone deserves good financial advice, not just those who can afford advisors.",
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
// PURSUITS - Three life pursuits for homepage
// ============================================
export type PursuitType = "companies" | "essays" | "progress"

export interface Pursuit {
  id: string
  title: string
  subtitle: string
  type: PursuitType
  link?: string
  // For progress type
  current?: number
  goal?: number
  unit?: string
}

export const PURSUITS: Pursuit[] = [
  {
    id: "weapon",
    title: "To Be a Weapon of Mass Creation",
    subtitle: "Ideas arrive for a reason. My role is to collapse the distance between imagination and reality.",
    type: "companies",
    link: "/companies"
  },
  {
    id: "secrets",
    title: "To Unlock the Secrets of the Universe",
    subtitle: "Human lives are fleeting. The questions that drove Galileo, Newton, and Da Vinci still burn.",
    type: "essays",
    link: "/essays"
  },
  {
    id: "running",
    title: "To Run Around the World",
    subtitle: "A lifetime misogi. One hard challenge, pursued across an entire lifetime. One planet's circumference.",
    type: "progress",
    current: 1757,
    goal: 40075,
    unit: "km"
  }
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
