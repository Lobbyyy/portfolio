"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useTheme } from "next-themes"
import { Search, Sun, Moon } from "lucide-react"
import SearchModal from "./SearchModal"

const IDENTITY_WORDS = ["builder", "athlete", "founder", "curious"]
const WORD_DISPLAY_TIME = 150 // ms per word
const TOTAL_CYCLE_TIME = IDENTITY_WORDS.length * WORD_DISPLAY_TIME

export default function TopBar() {
  const [mounted, setMounted] = useState(false)
  const [currentDate, setCurrentDate] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [displayWord, setDisplayWord] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isAnimatingRef = useRef(false)

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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
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

  const runWordCycle = useCallback(() => {
    // Prevent multiple animations from running
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    let index = 0

    const showNextWord = () => {
      if (index < IDENTITY_WORDS.length) {
        setDisplayWord(IDENTITY_WORDS[index])
        index++
        timeoutRef.current = setTimeout(showNextWord, WORD_DISPLAY_TIME)
      } else {
        // Animation complete - show name again
        setDisplayWord(null)
        isAnimatingRef.current = false
      }
    }

    showNextWord()
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (!isAnimatingRef.current) {
      runWordCycle()
    }
  }, [runWordCycle])

  if (!mounted) {
    return (
      <header className="h-12 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center justify-between px-6">
        <div className="w-32 h-6 bg-[rgb(var(--border))] rounded animate-pulse" />
      </header>
    )
  }

  return (
    <>
      <header className="editorial-elevated h-12 border-b border-[rgb(var(--border))] flex items-center justify-between px-6 sticky top-0 z-40">
        {/* Logo / Name */}
        <div
          className="cursor-pointer select-none min-w-[120px]"
          onMouseEnter={handleMouseEnter}
        >
          <h1 className="font-serif text-xl font-normal">
            <span
              className={`
                inline-block transition-all duration-100 ease-out
                ${displayWord ? "text-[rgb(var(--primary))]" : "text-[rgb(var(--text))]"}
              `}
            >
              {displayWord || "Your Name"}
            </span>
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
