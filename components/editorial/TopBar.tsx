"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Search, Sun, Moon } from "lucide-react"
import SearchModal from "./SearchModal"

const IDENTITY_WORDS = ["builder", "athlete", "founder", "curious"]

export default function TopBar() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [currentDate, setCurrentDate] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    )
  }, [])

  // Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Word cycle effect on hover
  useEffect(() => {
    if (!isHovering) {
      setWordIndex(0)
      return
    }

    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev >= IDENTITY_WORDS.length - 1) {
          setIsHovering(false)
          return 0
        }
        return prev + 1
      })
    }, 150)

    return () => clearInterval(interval)
  }, [isHovering])

  if (!mounted) {
    return (
      <header className="h-12 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center justify-between px-6">
        <div className="w-32 h-6 bg-[rgb(var(--border))] rounded animate-pulse" />
      </header>
    )
  }

  return (
    <>
      <header className="h-12 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center justify-between px-6 sticky top-0 z-40">
        {/* Logo / Name */}
        <div
          className="cursor-pointer select-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h1 className="font-serif text-xl font-normal text-[rgb(var(--text))]">
            {isHovering ? (
              <span className="text-[rgb(var(--primary))]">
                {IDENTITY_WORDS[wordIndex]}
              </span>
            ) : (
              "Your Name"
            )}
          </h1>
        </div>

        {/* Right side - Date, Search, Theme */}
        <div className="flex items-center gap-4">
          {/* Current Date */}
          <span className="font-mono text-xs text-[rgb(var(--muted))] hidden sm:block">
            {currentDate}
          </span>

          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[rgb(var(--border))] transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-[rgb(var(--muted))]" />
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[rgb(var(--border))] text-xs font-mono text-[rgb(var(--muted))]">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-[rgb(var(--border))] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[rgb(var(--muted))]" />
            ) : (
              <Moon className="w-4 h-4 text-[rgb(var(--muted))]" />
            )}
          </button>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
