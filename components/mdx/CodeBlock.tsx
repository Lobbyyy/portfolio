"use client"

import { useState, useRef, useCallback, ReactNode } from "react"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  children: ReactNode
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const handleCopy = useCallback(async () => {
    if (!preRef.current) return

    // Extract text content from the pre element
    const text = preRef.current.textContent || ""

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }, [])

  return (
    <div className="relative group my-6">
      <pre
        ref={preRef}
        className="bg-[rgb(var(--surface))] border border-[rgb(var(--border))] rounded-lg p-4 overflow-x-auto text-[rgb(var(--text))] text-sm font-mono leading-relaxed"
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
              : "border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--muted))] opacity-0 group-hover:opacity-100 hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))]"
          }
        `}
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )
}
