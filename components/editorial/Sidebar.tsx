"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FileText,
  Folder,
  Home,
  User,
  Mail,
  Music,
  Monitor,
} from "lucide-react"

interface FileEntry {
  name: string
  path: string
  icon: React.ReactNode
  isFolder?: boolean
}

const FILE_TREE: FileEntry[] = [
  { name: "home.mdx", path: "/", icon: <Home className="w-4 h-4" /> },
  { name: "companies/", path: "/companies", icon: <Folder className="w-4 h-4" />, isFolder: true },
  { name: "journal/", path: "/journal", icon: <Folder className="w-4 h-4" />, isFolder: true },
  { name: "localhost/", path: "/localhost", icon: <Folder className="w-4 h-4" />, isFolder: true },
  { name: "resources/", path: "/resources", icon: <Folder className="w-4 h-4" />, isFolder: true },
  { name: "about.mdx", path: "/about", icon: <User className="w-4 h-4" /> },
  { name: "contact.mdx", path: "/contact", icon: <Mail className="w-4 h-4" /> },
  { name: "spotify.mdx", path: "/spotify", icon: <Music className="w-4 h-4" /> },
]

interface SidebarProps {
  currentPath?: string
}

export default function Sidebar({ currentPath }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <aside className="editorial-elevated w-52 border-r border-[rgb(var(--border))] flex flex-col">
      {/* File Tree */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-0.5 px-2">
          {FILE_TREE.map((file) => (
            <li key={file.path}>
              <Link
                href={file.path}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-mono
                  transition-colors group
                  ${
                    isActive(file.path)
                      ? "bg-[rgba(var(--primary),0.1)] text-[rgb(var(--text))]"
                      : "text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))] hover:text-[rgb(var(--text))]"
                  }
                `}
              >
                {/* Active indicator */}
                <span
                  className={`
                    w-1.5 h-1.5 rounded-full transition-colors
                    ${isActive(file.path) ? "bg-[rgb(var(--primary))]" : "bg-transparent"}
                  `}
                />

                {/* Icon */}
                <span
                  className={`
                    ${isActive(file.path) ? "text-[rgb(var(--primary))]" : "text-[rgb(var(--muted))] group-hover:text-[rgb(var(--text))]"}
                  `}
                >
                  {file.icon}
                </span>

                {/* File name */}
                <span className="truncate">{file.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mode Toggle - Bottom */}
      <div className="border-t border-[rgb(var(--border))] p-3">
        <Link
          href="/macos"
          className="
            flex items-center gap-2 px-3 py-2 rounded-md text-xs font-mono
            text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))] hover:text-[rgb(var(--text))]
            transition-colors
          "
        >
          <Monitor className="w-4 h-4" />
          <span>Switch to desktop mode</span>
        </Link>
      </div>
    </aside>
  )
}
