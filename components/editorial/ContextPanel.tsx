"use client"

import { ReactNode } from "react"
import { COMPANIES } from "@/lib/data/portfolio-data"
import ShareFooter from "./ShareFooter"

interface ShareData {
  url: string
  title: string
  subtitle?: string
  tag?: string
}

interface ContextPanelProps {
  children?: ReactNode
  share?: ShareData
}

const SOCIAL_LINKS = [
  { name: "Twitter/X", url: "https://x.com/Lobbyyyyyy" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/lobsang-lama-42a76b63/" },
  { name: "GitHub", url: "https://github.com/Lobbyyy" },
  { name: "YouTube", url: "https://www.youtube.com/@lobsang_lama" },
  { name: "TikTok", url: "https://www.tiktok.com/@seca.mp4" },
  { name: "Instagram", url: "https://www.instagram.com/seca.mp4/" },
  { name: "Substack", url: "https://substack.com/@lobsanglama" },
]

export default function ContextPanel({ children, share }: ContextPanelProps) {
  return (
    <aside
      className="editorial-elevated fixed right-0 top-12 h-[calc(100vh-48px)] w-48 border-l border-[rgb(var(--border))] p-4 hidden lg:flex flex-col z-30"
      data-lenis-prevent
    >
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto overscroll-contain">
        {children || (
          <div className="space-y-6">
            {/* Quick Links */}
            <div>
              <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] link-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Companies */}
            <div>
              <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
                Companies
              </h3>
              <div className="flex flex-wrap gap-2">
                {COMPANIES.map((company) => (
                  <a
                    key={company.slug}
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs px-2 py-1 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))] hover:bg-[rgb(var(--primary))] hover:text-white transition-colors"
                  >
                    #{company.name.toLowerCase().replace(/\s+/g, '-')}
                  </a>
                ))}
              </div>
            </div>

            {/* Last Updated */}
            <div>
              <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-2">
                Last Updated
              </h3>
              <p className="font-mono text-xs text-[rgb(var(--muted))]">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Share footer - fixed at bottom */}
      {share && (
        <ShareFooter
          url={share.url}
          title={share.title}
          subtitle={share.subtitle}
          tag={share.tag}
        />
      )}
    </aside>
  )
}
