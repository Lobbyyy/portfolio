"use client"

import { useState, useRef, useCallback, ReactNode, isValidElement } from "react"
import { Copy, Check } from "lucide-react"
import { trackCodeBlockCopied } from "@/lib/analytics"

interface CodeBlockProps {
  children: ReactNode
}

// Prose blocks (prompts, messages, skill files) wrap so they read on phones; code keeps horizontal scroll
const WRAPPED_LANGUAGES = ["language-text", "language-markdown"]

export default function CodeBlock({ children }: CodeBlockProps) {
  const codeClass = isValidElement<{ className?: string }>(children) ? children.props.className || "" : ""
  const wrap = WRAPPED_LANGUAGES.some((lang) => codeClass.includes(lang))
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const handleCopy = useCallback(async () => {
    if (!preRef.current) return

    // Extract text content from the pre element
    const text = preRef.current.textContent || ""

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      trackCodeBlockCopied(codeClass.replace("language-", "") || "plain", text)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }, [codeClass])

  return (
    <div className="relative group my-6">
      <pre
        ref={preRef}
        className={`bg-[rgb(var(--surface))] border border-[rgb(var(--border))] rounded-lg p-4 overflow-x-auto text-[rgb(var(--text))] text-sm font-mono leading-relaxed ${wrap ? "whitespace-pre-wrap break-words" : ""}`}
      >
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className={`
          absolute top-3 right-3 p-2 rounded-md border transition-all
          ${
            copied
              ? "border-green-500/50 bg-green-500/10 text-green-600"
              : "border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--muted))] opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))]"
          }
        `}
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )
}
