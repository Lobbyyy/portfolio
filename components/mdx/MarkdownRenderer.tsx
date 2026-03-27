"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import { MDXComponents } from "./MDXComponents"

interface MarkdownRendererProps {
  content: string
  className?: string
}

/**
 * Pre-process markdown content to fix common issues from Substack imports
 */
function preprocessContent(content: string): string {
  return content
    // Fix headers that are on the same line as image links (from Substack import)
    // e.g., "[![](img)](link)### Header" -> "[![](img)](link)\n\n### Header"
    .replace(/\)\s*(#{1,6})\s+/g, ")\n\n$1 ")
    // Decode common HTML entities
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, "&")
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const processedContent = preprocessContent(content)

  return (
    <article className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={MDXComponents}
      >
        {processedContent}
      </ReactMarkdown>
    </article>
  )
}
