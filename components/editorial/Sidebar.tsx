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
} from "lucide-react"
import { NAVIGATION, NavIcon } from "@/lib/data/portfolio-data"

// Map icon names to Lucide components
const iconMap: Record<NavIcon, React.ReactNode> = {
  home: <Home className="w-4 h-4" />,
  folder: <Folder className="w-4 h-4" />,
  user: <User className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
  music: <Music className="w-4 h-4" />,
  file: <FileText className="w-4 h-4" />,
}

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <aside className="editorial-elevated fixed left-0 top-12 h-[calc(100vh-48px)] w-52 border-r border-[rgb(var(--border))] flex flex-col z-30 hidden lg:flex">
      {/* File Tree */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-0.5 px-2">
          {NAVIGATION.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-mono
                  transition-colors group
                  ${
                    isActive(item.path)
                      ? "bg-[rgba(var(--primary),0.1)] text-[rgb(var(--text))]"
                      : "text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))] hover:text-[rgb(var(--text))]"
                  }
                `}
              >
                {/* Active indicator */}
                <span
                  className={`
                    w-1.5 h-1.5 rounded-full transition-colors
                    ${isActive(item.path) ? "bg-[rgb(var(--primary))]" : "bg-transparent"}
                  `}
                />

                {/* Icon */}
                <span
                  className={`
                    ${isActive(item.path) ? "text-[rgb(var(--primary))]" : "text-[rgb(var(--muted))] group-hover:text-[rgb(var(--text))]"}
                  `}
                >
                  {iconMap[item.icon]}
                </span>

                {/* File name */}
                <span className="truncate">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
