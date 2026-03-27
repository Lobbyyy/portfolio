/**
 * Import ALL Substack posts using direct API
 * No authentication required - uses public archive API with pagination
 */

import fs from "fs"
import path from "path"

const SUBSTACK_URL = "deckandadream.substack.com"
const OUTPUT_DIR = path.join(process.cwd(), "content/essays")

interface SubstackPost {
  id: number
  title: string
  subtitle: string
  slug: string
  post_date: string
  canonical_url: string
  body_html: string
  truncated_body_text: string
  wordcount: number
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

function estimateReadTime(wordCount: number): string {
  const minutes = Math.ceil(wordCount / 200)
  return `${minutes} min`
}

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

  if (tags.length === 0) {
    tags.push("thoughts")
  }

  return tags.slice(0, 3)
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function htmlToMarkdown(html: string): string {
  if (!html) return ""

  return html
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    .replace(/<ul[^>]*>/gi, "")
    .replace(/<\/ul>/gi, "\n")
    .replace(/<ol[^>]*>/gi, "")
    .replace(/<\/ol>/gi, "\n")
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, "> $1\n\n")
    .replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
    .replace(/<pre[^>]*>(.*?)<\/pre>/gi, "```\n$1\n```\n\n")
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, "![$2]($1)")
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, "![]($1)")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<hr\s*\/?>/gi, "\n---\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

function createMarkdownFile(post: SubstackPost): void {
  const slug = post.slug || slugify(post.title)
  const content = htmlToMarkdown(post.body_html || post.truncated_body_text || "")
  const tags = extractTags(post.title, content)
  const readTime = estimateReadTime(post.wordcount || content.split(/\s+/).length)
  const date = formatDate(post.post_date)

  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
excerpt: "${(post.subtitle || post.title).replace(/"/g, '\\"')}"
date: "${date}"
readTime: "${readTime}"
tags: ${JSON.stringify(tags)}
substackUrl: "${post.canonical_url}"
featured: false
---

${content}`

  const filePath = path.join(OUTPUT_DIR, `${slug}.md`)
  fs.writeFileSync(filePath, frontmatter)
  console.log(`✓ Created: ${slug}.md`)
}

async function fetchAllPosts(): Promise<SubstackPost[]> {
  const allPosts: SubstackPost[] = []
  let offset = 0
  const limit = 12  // Substack's default page size

  console.log(`Fetching posts from ${SUBSTACK_URL}...\n`)

  while (true) {
    const url = `https://${SUBSTACK_URL}/api/v1/archive?sort=new&limit=${limit}&offset=${offset}`
    console.log(`  Fetching batch at offset ${offset}...`)

    const response = await fetch(url)
    const posts: SubstackPost[] = await response.json()

    if (!posts || posts.length === 0) break

    // For each post, fetch full content
    for (const post of posts) {
      // Skip if already in allPosts (dedup by id)
      if (allPosts.some(p => p.id === post.id)) continue

      // Fetch full post with body_html
      const fullUrl = `https://${SUBSTACK_URL}/api/v1/posts/${post.slug}`
      const fullResponse = await fetch(fullUrl)
      const fullPost: SubstackPost = await fullResponse.json()

      allPosts.push(fullPost)
      console.log(`    ✓ ${fullPost.title}`)

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    offset += limit

    // Safety limit
    if (offset > 500) break
  }

  return allPosts
}

async function main(): Promise<void> {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const posts = await fetchAllPosts()

  console.log(`\nImporting ${posts.length} posts...\n`)

  for (const post of posts) {
    createMarkdownFile(post)
  }

  console.log(`\n✓ Imported ${posts.length} posts to ${OUTPUT_DIR}`)
}

main().catch(console.error)
