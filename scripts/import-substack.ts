/**
 * Substack Import Script
 *
 * This script imports essays from Substack and converts them to markdown files.
 *
 * Usage:
 *   1. Install substack-api: bun add substack-api
 *   2. Get your connect.sid cookie from browser DevTools (logged into Substack)
 *   3. Run: SUBSTACK_TOKEN=your_connect_sid bun run scripts/import-substack.ts
 *
 * Alternative (RSS):
 *   If you don't want to use auth, you can use the RSS feed at:
 *   https://lobsanglama.substack.com/feed
 *   However, RSS may not include full content.
 */

import fs from "fs"
import path from "path"

// Configuration
const SUBSTACK_URL = "deckandadream.substack.com"
const OUTPUT_DIR = path.join(process.cwd(), "content/essays")

interface SubstackPost {
  id: string
  title: string
  subtitle?: string
  slug: string
  publishedAt: string
  content: string
  canonicalUrl: string
  wordCount?: number
}

// Helper: Create URL-friendly slug
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Helper: Estimate read time (average 200 words per minute)
function estimateReadTime(content: string): string {
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / 200)
  return `${minutes} min`
}

// Helper: Extract tags from content (basic heuristic)
function extractTags(title: string, content: string): string[] {
  const tags: string[] = []
  const text = `${title} ${content}`.toLowerCase()

  const tagKeywords: Record<string, string[]> = {
    "founder-life": ["founder", "startup", "building", "entrepreneurship", "company"],
    philosophy: ["philosophy", "thinking", "wisdom", "meaning", "purpose"],
    curiosity: ["curious", "exploration", "wonder", "learning", "discovery"],
    mindset: ["mindset", "mental", "psychology", "habits", "discipline"],
    learning: ["learning", "education", "growth", "skills", "knowledge"],
    startups: ["startup", "venture", "funding", "product", "market"],
    ai: ["ai", "artificial intelligence", "machine learning", "gpt", "llm"],
    creativity: ["creativity", "creative", "art", "design", "innovation"],
  }

  for (const [tag, keywords] of Object.entries(tagKeywords)) {
    if (keywords.some((keyword) => text.includes(keyword))) {
      tags.push(tag)
    }
  }

  // Default tag if none found
  if (tags.length === 0) {
    tags.push("thoughts")
  }

  return tags.slice(0, 3) // Max 3 tags
}

// Helper: Format date
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

// Helper: Clean HTML content to markdown
function htmlToMarkdown(html: string): string {
  // Basic HTML to Markdown conversion
  return html
    // Headers
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
    // Paragraphs
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
    // Bold and italic
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    // Lists
    .replace(/<ul[^>]*>/gi, "")
    .replace(/<\/ul>/gi, "\n")
    .replace(/<ol[^>]*>/gi, "")
    .replace(/<\/ol>/gi, "\n")
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
    // Blockquotes
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, "> $1\n\n")
    // Code
    .replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
    .replace(/<pre[^>]*>(.*?)<\/pre>/gi, "```\n$1\n```\n\n")
    // Images
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, "![$2]($1)")
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, "![]($1)")
    // Line breaks
    .replace(/<br\s*\/?>/gi, "\n")
    // Dividers
    .replace(/<hr\s*\/?>/gi, "\n---\n\n")
    // Remove remaining HTML tags
    .replace(/<[^>]+>/g, "")
    // Clean up extra whitespace
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

// Create markdown file for a post
function createMarkdownFile(post: SubstackPost): void {
  const slug = slugify(post.title)
  const content = htmlToMarkdown(post.content)
  const tags = extractTags(post.title, content)
  const readTime = estimateReadTime(content)
  const date = formatDate(post.publishedAt)

  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
excerpt: "${(post.subtitle || post.title).replace(/"/g, '\\"')}"
date: "${date}"
readTime: "${readTime}"
tags: ${JSON.stringify(tags)}
substackUrl: "${post.canonicalUrl}"
featured: false
---

${content}`

  const filePath = path.join(OUTPUT_DIR, `${slug}.md`)
  fs.writeFileSync(filePath, frontmatter)
  console.log(`✓ Created: ${slug}.md`)
}

// Main import function using substack-api
async function importFromAPI(): Promise<void> {
  const token = process.env.SUBSTACK_TOKEN

  if (!token) {
    console.error("Error: SUBSTACK_TOKEN environment variable is required")
    console.log("\nTo get your token:")
    console.log("1. Log into Substack in your browser")
    console.log("2. Open DevTools → Application → Cookies")
    console.log('3. Find the "connect.sid" cookie')
    console.log("4. Copy its value and run:")
    console.log("   SUBSTACK_TOKEN=your_token bun run scripts/import-substack.ts")
    process.exit(1)
  }

  try {
    // Dynamic import to handle missing package gracefully
    const { SubstackClient } = await import("substack-api")

    const client = new SubstackClient({
      token,
      publicationUrl: SUBSTACK_URL,
    })

    console.log(`Importing posts from ${SUBSTACK_URL}...\n`)

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true })
    }

    // Get profile first, then iterate posts
    const profile = await client.ownProfile()

    let count = 0
    for await (const post of profile.posts({ limit: 100 })) {
      // Fetch full post content
      const fullPost = await post.fullPost()

      const substackPost: SubstackPost = {
        id: fullPost.id,
        title: fullPost.title,
        subtitle: fullPost.subtitle,
        slug: fullPost.slug,
        publishedAt: fullPost.publishedAt,
        content: fullPost.htmlBody || fullPost.body || "",
        canonicalUrl: fullPost.url || `https://${SUBSTACK_URL}/p/${fullPost.slug}`,
      }

      createMarkdownFile(substackPost)
      count++
    }

    console.log(`\n✓ Imported ${count} posts to ${OUTPUT_DIR}`)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ERR_MODULE_NOT_FOUND") {
      console.error("Error: substack-api package not found")
      console.log("Install it with: bun add substack-api")
    } else {
      throw error
    }
  }
}

// Alternative: Import from RSS (no auth required, but limited content)
async function importFromRSS(): Promise<void> {
  const rssUrl = `https://${SUBSTACK_URL}/feed`

  console.log(`Fetching RSS feed from ${rssUrl}...\n`)

  try {
    const response = await fetch(rssUrl)
    const xml = await response.text()

    // Basic RSS parsing
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) || []

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true })
    }

    let count = 0
    for (const item of items) {
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || ""
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || ""
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ""
      const description =
        item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] || ""
      const content =
        item.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s)?.[1] ||
        description

      const post: SubstackPost = {
        id: link,
        title,
        subtitle: description.slice(0, 150),
        slug: slugify(title),
        publishedAt: pubDate,
        content,
        canonicalUrl: link,
      }

      createMarkdownFile(post)
      count++
    }

    console.log(`\n✓ Imported ${count} posts from RSS to ${OUTPUT_DIR}`)
  } catch (error) {
    console.error("Error fetching RSS:", error)
  }
}

// Run the import
const args = process.argv.slice(2)
if (args.includes("--rss")) {
  importFromRSS()
} else {
  importFromAPI()
}
