"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import {
  Search,
  Sun,
  Moon,
  Menu,
  X,
  Home,
  Folder,
  User,
  Mail,
  Music,
  FileText,
  Coffee,
} from "lucide-react"
import Link from "next/link"
import SearchModal from "./SearchModal"
import { PERSONAL, NAVIGATION, NavIcon } from "@/lib/data/portfolio-data"

// Map icon names to Lucide components
const iconMap: Record<NavIcon, React.ReactNode> = {
  home: <Home className="w-4 h-4" />,
  folder: <Folder className="w-4 h-4" />,
  user: <User className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
  music: <Music className="w-4 h-4" />,
  file: <FileText className="w-4 h-4" />,
}

const IDENTITY_WORDS = ["Stoic", "Entrepreneur", "Creative", "Athlete"]
const WORD_DISPLAY_TIME = 150 // ms per word

export default function TopBar() {
  const [mounted, setMounted] = useState(false)
  const [currentDate, setCurrentDate] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [displayWord, setDisplayWord] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

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
      <header className="editorial-elevated h-12 border-b border-[rgb(var(--border))] flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Lobsang Lama"
            className="h-7 w-auto"
          />
        </Link>

        {/* Center - Name with hover animation (absolute positioned for true center) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 cursor-pointer select-none"
          onMouseEnter={handleMouseEnter}
        >
          <h1 className="font-serif text-xl font-normal">
            <span
              className={`
                inline-block transition-all duration-100 ease-out
                ${displayWord ? "text-[rgb(var(--primary))]" : "text-[rgb(var(--text))]"}
              `}
            >
              {displayWord || PERSONAL.name}
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

          {/* Mobile Menu Button - only visible on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-[rgb(var(--border))] transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-[rgb(var(--muted))]" />
            ) : (
              <Menu className="w-4 h-4 text-[rgb(var(--muted))]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-12 left-0 right-0 z-40 lg:hidden">
          <nav className="bg-[rgb(var(--surface))] border-b border-[rgb(var(--border))] shadow-lg">
            <ul className="py-2 px-4">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-mono
                      transition-colors
                      ${
                        isActive(item.path)
                          ? "bg-[rgba(var(--primary),0.1)] text-[rgb(var(--text))]"
                          : "text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))] hover:text-[rgb(var(--text))]"
                      }
                    `}
                  >
                    <span
                      className={
                        isActive(item.path)
                          ? "text-[rgb(var(--primary))]"
                          : "text-[rgb(var(--muted))]"
                      }
                    >
                      {iconMap[item.icon]}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              {/* Buy Me a Coffee */}
              <li className="border-t border-[rgb(var(--border))] mt-2 pt-2">
                <a
                  href="https://buymeacoffee.com/lobsanglama"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-mono text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))] hover:text-[rgb(var(--text))] transition-colors"
                >
                  <Coffee className="w-4 h-4" />
                  <span>support.mdx</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
