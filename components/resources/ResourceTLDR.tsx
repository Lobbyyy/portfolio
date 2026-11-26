"use client"

import { useCallback, useState } from "react"
import { ArrowDown, ExternalLink } from "lucide-react"
import { trackAgentPromptCopied, trackResourcePrimaryClick } from "@/lib/analytics"

// Event the signup drawer listens for: copying the prompt is the moment we offer the next one.
export const AGENT_PROMPT_COPIED_EVENT = "resource:agent-prompt-copied"

interface ResourceTLDRProps {
  resource: string
  agentPrompt: string
  primaryLabel?: string
  primaryHref?: string
}

// TLDR at the top of a resource: give it to your agent, open it, or read more.
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
    <div className="mt-6">
      <div className="rounded-[22px] bg-black p-2.5 pt-4 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
        <p className="text-center text-[15px] font-medium text-white mb-3">Give this to your agent</p>
        <div className="flex items-center gap-3 rounded-2xl bg-[#222] py-2.5 pl-4 pr-2.5">
          <code className="flex-1 min-w-0 font-mono text-[13px] md:text-sm text-[#EDEDED] leading-snug break-words select-all">
            <span className="text-[#8A8A8A] mr-2 select-none">$</span>
            {agentPrompt}
          </code>
          <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 rounded-xl bg-[#F3F3F1] px-4 py-2.5 font-mono text-sm text-black transition-transform duration-150 ease-out active:scale-[0.97]"
            aria-label="Copy the prompt for your agent"
          >
            {copied ? "copied" : "copy"}
          </button>
        </div>
        {copyFailed && (
          <p className="px-2 pt-2 text-xs text-[#D54919]">Copy did not work in this browser. Press and hold the text to copy it.</p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {primaryHref && (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackResourcePrimaryClick(resource, primaryHref)}
            className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2.5 text-sm text-[rgb(var(--text))] transition-colors hover:border-[rgb(var(--primary))]"
          >
            {primaryLabel || "Open"}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        <a
          href="#read-more"
          className="inline-flex items-center gap-2 px-2 py-2.5 text-sm text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--primary))]"
        >
          Read more
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}
