"use client"

import { useCallback, useState } from "react"
import { ArrowDown, ArrowUpRight, Check, Copy } from "lucide-react"
import { trackAgentPromptCopied, trackResourcePrimaryClick } from "@/lib/analytics"

// Event the signup drawer listens for: copying the prompt is the moment we offer the next one.
export const AGENT_PROMPT_COPIED_EVENT = "resource:agent-prompt-copied"

interface ResourceTLDRProps {
  resource: string
  agentPrompt: string
  primaryLabel?: string
  primaryHref?: string
}

const rowLabel = "font-mono text-[11px] text-[rgb(var(--muted))] tabular-nums w-5 shrink-0"

// TLDR at the top of a resource: three options in one card. Give it to your agent, open it, or read more.
export default function ResourceTLDR({ resource, agentPrompt, primaryLabel, primaryHref }: ResourceTLDRProps) {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(agentPrompt)
      setCopied(true)
      setCopyFailed(false)
      trackAgentPromptCopied(resource)
      window.dispatchEvent(new CustomEvent(AGENT_PROMPT_COPIED_EVENT))
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy agent prompt:", error)
      setCopyFailed(true)
    }
  }, [agentPrompt, resource])

  return (
    <div className="editorial-elevated-card mt-8 overflow-hidden rounded-2xl border border-[rgb(var(--border))] divide-y divide-[rgb(var(--border))] !shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_24px_-8px_rgba(0,0,0,0.12)] dark:!shadow-[0_1px_2px_rgba(0,0,0,0.3),0_8px_24px_-8px_rgba(0,0,0,0.5)]">
      {/* 01: give it to your agent */}
      <div className="p-4 md:p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className={rowLabel}>01</span>
          <span className="font-medium text-[rgb(var(--text))]">Give this to your agent</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] py-2 pl-3.5 pr-2">
          <code className="min-w-0 flex-1 break-words font-mono text-[13px] leading-snug text-[rgb(var(--text))]">
            <span className="mr-2 select-none text-[rgb(var(--primary))]">$</span>
            {agentPrompt}
          </code>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy the prompt for your agent"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[rgb(var(--primary))] px-3.5 py-2 font-mono text-xs text-white transition-transform duration-150 ease-out active:scale-[0.97]"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "copied" : "copy"}
          </button>
        </div>
        {copyFailed && (
          <p className="pt-2 text-xs text-[rgb(var(--primary))]">Copy did not work in this browser. Press and hold the text to copy it.</p>
        )}
      </div>

      {/* 02: open it */}
      {primaryHref && (
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackResourcePrimaryClick(resource, primaryHref)}
          className="group flex items-center gap-3 px-4 py-3.5 md:px-5 transition-colors hover:bg-[rgb(var(--background))]"
        >
          <span className={rowLabel}>02</span>
          <span className="flex-1 text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
            {primaryLabel || "Open it"}
          </span>
          <ArrowUpRight className="h-4 w-4 text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors" />
        </a>
      )}

      {/* 03: read more */}
      <a
        href="#read-more"
        className="group flex items-center gap-3 px-4 py-3.5 md:px-5 transition-colors hover:bg-[rgb(var(--background))]"
      >
        <span className={rowLabel}>{primaryHref ? "03" : "02"}</span>
        <span className="flex-1 text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
          Read how it works
        </span>
        <ArrowDown className="h-4 w-4 text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors" />
      </a>
    </div>
  )
}
