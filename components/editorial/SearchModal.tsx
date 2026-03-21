"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Search, FileText, Folder, ArrowRight } from "lucide-react"

interface SearchItem {
  title: string
  path: string
  type: "page" | "folder" | "post"
  description?: string
}

const SEARCH_ITEMS: SearchItem[] = [
  { title: "Home", path: "/", type: "page", description: "Welcome" },
  { title: "Companies", path: "/companies", type: "folder", description: "Things I'm building" },
  { title: "Supanova", path: "/companies/supanova", type: "page", description: "AI video production" },
  { title: "1z2", path: "/companies/1z2", type: "page", description: "Content research intelligence" },
  { title: "Our Circles", path: "/companies/our-circles", type: "page", description: "Family life sharing" },
  { title: "20 Punches", path: "/companies/20punches", type: "page", description: "AI financial advisory" },
  { title: "Journal", path: "/journal", type: "folder", description: "Writing and thoughts" },
  { title: "On Building in Public", path: "/journal/building-in-public", type: "post" },
  { title: "The CKC Framework", path: "/journal/ckc-framework", type: "post" },
  { title: "Fourth Dimensional Thinking", path: "/journal/fourth-dimensional", type: "post" },
  { title: "Localhost", path: "/localhost", type: "folder", description: "Experiments" },
  { title: "Resources", path: "/resources", type: "folder", description: "Templates and tools" },
  { title: "About", path: "/about", type: "page", description: "The story so far" },
  { title: "Contact", path: "/contact", type: "page", description: "Get in touch" },
  { title: "Spotify", path: "/spotify", type: "page", description: "Music playlists" },
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filteredItems = query
    ? SEARCH_ITEMS.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description?.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_ITEMS.slice(0, 8)

  const handleSelect = useCallback(
    (path: string) => {
      router.push(path)
      onClose()
      setQuery("")
    },
    [router, onClose]
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((prev) => Math.min(prev + 1, filteredItems.length - 1))
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((prev) => Math.max(prev - 1, 0))
          break
        case "Enter":
          e.preventDefault()
          if (filteredItems[selectedIndex]) {
            handleSelect(filteredItems[selectedIndex].path)
          }
          break
        case "Escape":
          e.preventDefault()
          onClose()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, filteredItems, selectedIndex, handleSelect, onClose])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      setSelectedIndex(0)
    }
  }, [isOpen])

  // Reset on query change
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-50">
        <div className="mx-4 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[rgb(var(--border))]">
            <Search className="w-5 h-5 text-[rgb(var(--muted))]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-[rgb(var(--text))] placeholder:text-[rgb(var(--muted))]"
            />
            <kbd className="px-2 py-0.5 rounded bg-[rgb(var(--border))] text-xs font-mono text-[rgb(var(--muted))]">
              esc
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto py-2">
            {filteredItems.length === 0 ? (
              <div className="px-4 py-8 text-center text-[rgb(var(--muted))]">
                No results found
              </div>
            ) : (
              filteredItems.map((item, index) => (
                <button
                  key={item.path}
                  onClick={() => handleSelect(item.path)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2 text-left
                    ${index === selectedIndex ? "bg-[rgb(var(--border))]" : "hover:bg-[rgb(var(--border))]"}
                    transition-colors
                  `}
                >
                  {item.type === "folder" ? (
                    <Folder className="w-4 h-4 text-[rgb(var(--primary))]" />
                  ) : (
                    <FileText className="w-4 h-4 text-[rgb(var(--muted))]" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-[rgb(var(--text))] truncate">
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="text-xs text-[rgb(var(--muted))] truncate">
                        {item.description}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-[rgb(var(--muted))]" />
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-[rgb(var(--border))] text-xs text-[rgb(var(--muted))]">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-[rgb(var(--border))] font-mono">↑↓</kbd>
              {" "}to navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-[rgb(var(--border))] font-mono">↵</kbd>
              {" "}to select
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
