import fs from "fs"
import path from "path"
import matter from "gray-matter"

const ESSAYS_DIR = path.join(process.cwd(), "content/essays")

export interface EssayContent {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  substackUrl?: string
  featured: boolean
  content: string
}

/**
 * Get all essays from markdown files in content/essays/
 * Falls back to portfolio-data.ts if no markdown files exist
 */
export function getAllEssays(): EssayContent[] {
  // Check if content directory exists
  if (!fs.existsSync(ESSAYS_DIR)) {
    return []
  }

  const files = fs.readdirSync(ESSAYS_DIR).filter((f) => f.endsWith(".md"))

  const essays = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "")
    const filePath = path.join(ESSAYS_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date || "",
      readTime: data.readTime || "5 min",
      tags: data.tags || [],
      substackUrl: data.substackUrl,
      featured: data.featured || false,
      content,
    }
  })

  // Sort by date (newest first)
  return essays.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

/**
 * Get a single essay by slug
 */
export function getEssayBySlug(slug: string): EssayContent | null {
  const filePath = path.join(ESSAYS_DIR, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || "",
    date: data.date || "",
    readTime: data.readTime || "5 min",
    tags: data.tags || [],
    substackUrl: data.substackUrl,
    featured: data.featured || false,
    content,
  }
}

/**
 * Get featured essays for homepage
 */
export function getFeaturedEssays(): EssayContent[] {
  return getAllEssays().filter((essay) => essay.featured)
}

/**
 * Get all unique tags from essays
 */
export function getAllTags(): string[] {
  const essays = getAllEssays()
  const tagSet = new Set<string>()

  essays.forEach((essay) => {
    essay.tags.forEach((tag) => tagSet.add(tag))
  })

  return ["all", ...Array.from(tagSet).sort()]
}

/**
 * Get related essays based on shared tags
 */
export function getRelatedEssays(currentSlug: string, limit: number = 3): EssayContent[] {
  const allEssays = getAllEssays()
  const currentEssay = allEssays.find(e => e.slug === currentSlug)

  if (!currentEssay) return []

  // Score essays by number of shared tags
  const scored = allEssays
    .filter(e => e.slug !== currentSlug)
    .map(essay => ({
      essay,
      score: essay.tags.filter(tag => currentEssay.tags.includes(tag)).length
    }))
    .filter(item => item.score > 0) // Only essays with at least 1 shared tag
    .sort((a, b) => b.score - a.score) // Sort by most shared tags

  return scored.slice(0, limit).map(item => item.essay)
}
