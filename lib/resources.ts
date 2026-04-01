import fs from "fs"
import path from "path"
import matter from "gray-matter"

const RESOURCES_DIR = path.join(process.cwd(), "content/resources")

export type ResourceCategory = "marketing" | "fundraising" | "product" | "mindset" | "tools"

export interface ResourceContent {
  slug: string
  category: ResourceCategory
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  featured: boolean
  content: string
}

/**
 * Get all resources from markdown files in content/resources/
 */
export function getAllResources(): ResourceContent[] {
  if (!fs.existsSync(RESOURCES_DIR)) {
    return []
  }

  const resources: ResourceContent[] = []

  // Read each category directory
  const categories = fs.readdirSync(RESOURCES_DIR).filter((item) => {
    const itemPath = path.join(RESOURCES_DIR, item)
    return fs.statSync(itemPath).isDirectory()
  })

  categories.forEach((category) => {
    const categoryPath = path.join(RESOURCES_DIR, category)
    const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".md"))

    files.forEach((filename) => {
      const slug = filename.replace(/\.md$/, "")
      const filePath = path.join(categoryPath, filename)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(fileContent)

      resources.push({
        slug,
        category: category as ResourceCategory,
        title: data.title || slug,
        excerpt: data.excerpt || "",
        date: data.date || "",
        readTime: data.readTime || "5 min",
        tags: data.tags || [],
        featured: data.featured || false,
        content,
      })
    })
  })

  // Sort by date (newest first)
  return resources.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

/**
 * Get a single resource by category and slug
 */
export function getResourceBySlug(category: string, slug: string): ResourceContent | null {
  const filePath = path.join(RESOURCES_DIR, category, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    slug,
    category: category as ResourceCategory,
    title: data.title || slug,
    excerpt: data.excerpt || "",
    date: data.date || "",
    readTime: data.readTime || "5 min",
    tags: data.tags || [],
    featured: data.featured || false,
    content,
  }
}

/**
 * Get resources by category
 */
export function getResourcesByCategory(category: ResourceCategory): ResourceContent[] {
  return getAllResources().filter((resource) => resource.category === category)
}

/**
 * Get all unique tags from resources
 */
export function getAllResourceTags(): string[] {
  const resources = getAllResources()
  const tagSet = new Set<string>()

  resources.forEach((resource) => {
    resource.tags.forEach((tag) => tagSet.add(tag))
  })

  return Array.from(tagSet).sort()
}

/**
 * Get related resources based on shared tags
 */
export function getRelatedResources(
  currentCategory: string,
  currentSlug: string,
  limit: number = 3
): ResourceContent[] {
  const allResources = getAllResources()
  const current = allResources.find(
    (r) => r.category === currentCategory && r.slug === currentSlug
  )

  if (!current) return []

  const scored = allResources
    .filter((r) => !(r.category === currentCategory && r.slug === currentSlug))
    .map((resource) => ({
      resource,
      score: resource.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map((item) => item.resource)
}
