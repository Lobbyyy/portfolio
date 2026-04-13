import fs from "fs"
import path from "path"
import matter from "gray-matter"

const RESOURCES_DIR = path.join(process.cwd(), "content/resources")

export type ResourceType = "deep-dive" | "guide"

// Legacy category type (for existing guides)
export type ResourceCategory = "marketing" | "fundraising" | "product" | "mindset" | "tools"

export interface ResourceContent {
  slug: string
  type: ResourceType
  category?: ResourceCategory // For guides (sub-category like marketing, product, etc.)
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  featured: boolean
  content: string
}

/**
 * Get all resources of a specific type
 */
export function getResourcesByType(type: ResourceType): ResourceContent[] {
  const typeDir = type === "deep-dive" ? "deep-dives" : "guides"
  const dirPath = path.join(RESOURCES_DIR, typeDir)

  if (!fs.existsSync(dirPath)) {
    return []
  }

  const resources: ResourceContent[] = []

  if (type === "deep-dive") {
    // Deep dives are flat files in deep-dives/
    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))

    files.forEach((filename) => {
      const slug = filename.replace(/\.(md|mdx)$/, "")
      const filePath = path.join(dirPath, filename)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(fileContent)

      resources.push({
        slug,
        type: "deep-dive",
        title: data.title || slug,
        excerpt: data.excerpt || "",
        date: data.date || "",
        readTime: data.readTime || "10 min",
        tags: data.tags || [],
        featured: data.featured || false,
        content,
      })
    })
  } else {
    // Guides are in category subdirectories (e.g., guides/marketing/og-images-guide.md)
    const categories = fs.readdirSync(dirPath).filter((item) => {
      const itemPath = path.join(dirPath, item)
      return fs.statSync(itemPath).isDirectory()
    })

    categories.forEach((category) => {
      const categoryPath = path.join(dirPath, category)
      const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))

      files.forEach((filename) => {
        const slug = filename.replace(/\.(md|mdx)$/, "")
        const filePath = path.join(categoryPath, filename)
        const fileContent = fs.readFileSync(filePath, "utf-8")
        const { data, content } = matter(fileContent)

        resources.push({
          slug,
          type: "guide",
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
  }

  // Sort by date (newest first)
  return resources.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

/**
 * Get all resources (both deep-dives and guides)
 */
export function getAllResources(): ResourceContent[] {
  const deepDives = getResourcesByType("deep-dive")
  const guides = getResourcesByType("guide")

  return [...deepDives, ...guides].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

/**
 * Get a single deep dive by slug
 */
export function getDeepDiveBySlug(slug: string): ResourceContent | null {
  const dirPath = path.join(RESOURCES_DIR, "deep-dives")

  // Try .md first, then .mdx
  const mdPath = path.join(dirPath, `${slug}.md`)
  const mdxPath = path.join(dirPath, `${slug}.mdx`)

  let filePath: string | null = null
  if (fs.existsSync(mdPath)) {
    filePath = mdPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  }

  if (!filePath) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    slug,
    type: "deep-dive",
    title: data.title || slug,
    excerpt: data.excerpt || "",
    date: data.date || "",
    readTime: data.readTime || "10 min",
    tags: data.tags || [],
    featured: data.featured || false,
    content,
  }
}

/**
 * Get a single guide by category and slug
 */
export function getGuideBySlug(category: string, slug: string): ResourceContent | null {
  const dirPath = path.join(RESOURCES_DIR, "guides", category)

  // Try .md first, then .mdx
  const mdPath = path.join(dirPath, `${slug}.md`)
  const mdxPath = path.join(dirPath, `${slug}.mdx`)

  let filePath: string | null = null
  if (fs.existsSync(mdPath)) {
    filePath = mdPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  }

  if (!filePath) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    slug,
    type: "guide",
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
 * Legacy function - get resource by category and slug (for existing routes)
 * Now maps to guides
 */
export function getResourceBySlug(category: string, slug: string): ResourceContent | null {
  return getGuideBySlug(category, slug)
}

/**
 * Get resources by category (guides only)
 */
export function getResourcesByCategory(category: ResourceCategory): ResourceContent[] {
  return getResourcesByType("guide").filter((resource) => resource.category === category)
}

/**
 * Get all unique tags from resources
 */
export function getAllResourceTags(type?: ResourceType): string[] {
  const resources = type ? getResourcesByType(type) : getAllResources()
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
  currentType: ResourceType,
  currentSlug: string,
  limit: number = 3,
  category?: string
): ResourceContent[] {
  const allResources = getAllResources()

  let current: ResourceContent | undefined
  if (currentType === "deep-dive") {
    current = allResources.find((r) => r.type === "deep-dive" && r.slug === currentSlug)
  } else {
    current = allResources.find(
      (r) => r.type === "guide" && r.slug === currentSlug && r.category === category
    )
  }

  if (!current) return []

  const scored = allResources
    .filter((r) => {
      if (r.type === current!.type && r.slug === currentSlug) {
        if (r.type === "guide" && r.category === category) return false
        if (r.type === "deep-dive") return false
      }
      return true
    })
    .map((resource) => ({
      resource,
      score: resource.tags.filter((tag) => current!.tags.includes(tag)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map((item) => item.resource)
}

/**
 * Get guide categories that have content
 */
export function getGuideCategories(): ResourceCategory[] {
  const guides = getResourcesByType("guide")
  const categorySet = new Set<ResourceCategory>()

  guides.forEach((guide) => {
    if (guide.category) {
      categorySet.add(guide.category)
    }
  })

  return Array.from(categorySet)
}
