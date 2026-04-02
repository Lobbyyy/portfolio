"use client"

import { useState } from "react"
import { Link2, Image, Check } from "lucide-react"
import ShareImageModal from "@/components/ShareImageModal"

interface ShareSectionProps {
  url: string
  title: string
  subtitle?: string
  tag?: string
}

export default function ShareSection({ url, title, subtitle, tag }: ShareSectionProps) {
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
      <div className="space-y-3">
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider">
          Share
        </h3>
        <div className="flex flex-col gap-2">
          {/* Copy link button */}
          <button
            onClick={handleCopyLink}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors w-full
              ${
                copied
                  ? "border-green-500/50 bg-green-500/10 text-green-600"
                  : "border-[rgb(var(--border))] text-[rgb(var(--muted))] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))]"
              }
            `}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Link2 className="w-4 h-4" />
                <span>Copy link</span>
              </>
            )}
          </button>

          {/* Download image button */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors w-full"
          >
            <Image className="w-4 h-4" />
            <span>Download image</span>
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
