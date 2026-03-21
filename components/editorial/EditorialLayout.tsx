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
    <div className="editorial-bg min-h-screen flex flex-col">
      {/* Top Bar */}
      <TopBar />

      {/* Three Column Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - File Tree */}
        <Sidebar currentPath={currentPath} />

        {/* Center - Document Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-8 py-12">
            {children}
          </div>
        </main>

        {/* Right - Context Panel */}
        <ContextPanel>{contextContent}</ContextPanel>
      </div>
    </div>
  )
}
