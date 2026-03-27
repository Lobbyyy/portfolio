"use client"

import { ReactNode } from "react"
import TopBar from "./TopBar"
import Sidebar from "./Sidebar"
import ContextPanel from "./ContextPanel"

interface EditorialLayoutProps {
  children: ReactNode
  contextContent?: ReactNode
  currentPath?: string
}

export default function EditorialLayout({
  children,
  contextContent,
  currentPath = "home.mdx",
}: EditorialLayoutProps) {
  return (
    <div className="editorial-bg min-h-screen">
      {/* Top Bar - Fixed at top */}
      <TopBar />

      {/* Left Sidebar - Fixed */}
      <Sidebar currentPath={currentPath} />

      {/* Right - Context Panel - Fixed */}
      <ContextPanel>{contextContent}</ContextPanel>

      {/* Center - Document Area (scrollable main content) */}
      <main className="editorial-document-area ml-52 mr-48 pt-12 min-h-screen hidden lg:block">
        <div className="max-w-3xl mx-auto px-8 py-12">
          {children}
        </div>
      </main>

      {/* Mobile: Full width content (no fixed panels) */}
      <main className="editorial-document-area pt-12 min-h-screen lg:hidden">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
