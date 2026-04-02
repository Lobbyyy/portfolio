"use client"

import { useState } from "react"
import { Link2, Image, Check } from "lucide-react"
import ShareImageModal from "@/components/ShareImageModal"

interface ShareFooterProps {
  url: string
  title: string
  subtitle?: string
  tag?: string
}

export default function ShareFooter({ url, title, subtitle, tag }: ShareFooterProps) {
  const [copied, setCopied] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  return (
    <>
      <div className="mt-auto pt-4 border-t border-[rgb(var(--border))]">
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Share
        </h3>
        <div className="flex items-center gap-2">
          {/* Copy link button */}
          <button
            onClick={handleCopyLink}
            className={`
              group relative p-2 rounded transition-colors
              ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-[rgb(var(--border))] text-[rgb(var(--muted))] hover:bg-[rgb(var(--primary))] hover:text-white"
              }
            `}
          >
            {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-mono bg-[rgb(var(--text))] text-[rgb(var(--background))] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {copied ? "Copied!" : "Copy link"}
            </span>
          </button>

          {/* Download image button */}
          <button
            onClick={() => setModalOpen(true)}
            className="group relative p-2 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))] hover:bg-[rgb(var(--primary))] hover:text-white transition-colors"
          >
            <Image className="w-4 h-4" />
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-mono bg-[rgb(var(--text))] text-[rgb(var(--background))] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Download image
            </span>
          </button>
        </div>
      </div>

      <ShareImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        subtitle={subtitle}
        tag={tag}
      />
    </>
  )
}
