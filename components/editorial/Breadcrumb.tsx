"use client"

import Link from "next/link"

interface BreadcrumbProps {
  path: string
}

export default function Breadcrumb({ path }: BreadcrumbProps) {
  return (
    <div className="font-mono text-sm text-[rgb(var(--muted))] mb-8">
      <span className="text-[rgb(var(--primary))]">~</span>
      <span>/</span>
      <span>{path}</span>
    </div>
  )
}
