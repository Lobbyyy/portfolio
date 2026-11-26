"use client"

import Link from "next/link"

interface BreadcrumbProps {
  path: string
}

// Resource categories have no page of their own: they live as tabs on /resources.
function hrefFor(parts: string[]): string {
  const [first, second] = parts
  if (first === "resources" && parts.length === 2) {
    return second === "deep-dives" ? "/resources?tab=deep-dives" : "/resources?tab=guides"
  }
  return "/" + parts.join("/")
}

// The file path doubles as navigation: every folder in it links back up, the current file does not.
export default function Breadcrumb({ path }: BreadcrumbProps) {
  const segments = path.split("/").filter(Boolean)
  const endsWithSlash = path.endsWith("/")
  const linkClass = "hover:text-[rgb(var(--primary))] transition-colors"

  return (
    <nav aria-label="Breadcrumb" className="font-mono text-sm text-[rgb(var(--muted))] mb-8 break-words">
      <Link href="/" className="text-[rgb(var(--primary))]">
        ~
      </Link>
      <span>/</span>
      {segments.map((segment, i) => {
        const isLast = i === segments.length - 1
        const label = segment + (!isLast || endsWithSlash ? "/" : "")
        if (isLast) {
          return (
            <span key={i} className="text-[rgb(var(--text))]" aria-current="page">
              {label}
            </span>
          )
        }
        return (
          <span key={i}>
            <Link href={hrefFor(segments.slice(0, i + 1))} className={linkClass}>
              {segment}
            </Link>
            /
          </span>
        )
      })}
    </nav>
  )
}
