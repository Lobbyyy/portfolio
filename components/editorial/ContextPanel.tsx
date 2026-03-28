"use client"

import { ReactNode } from "react"

interface ContextPanelProps {
  children?: ReactNode
}

export default function ContextPanel({ children }: ContextPanelProps) {
  return (
    <aside
      className="editorial-elevated fixed right-0 top-12 h-[calc(100vh-48px)] w-48 border-l border-[rgb(var(--border))] p-4 hidden lg:block z-30 overflow-y-auto overscroll-contain"
      data-lenis-prevent
    >
      {children || (
        <div className="space-y-6">
          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] link-underline"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] link-underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] link-underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
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
    </aside>
  )
}
