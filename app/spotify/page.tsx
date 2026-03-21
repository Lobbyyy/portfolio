import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import { Play, ExternalLink } from "lucide-react"

const PLAYLISTS = [
  {
    name: "Running",
    emoji: "🏃",
    description: "Team GB training energy",
    trackCount: 45,
    href: "https://open.spotify.com",
  },
  {
    name: "Deep Work",
    emoji: "🧠",
    description: "What I code to",
    trackCount: 120,
    href: "https://open.spotify.com",
  },
  {
    name: "Morning Pages",
    emoji: "🌅",
    description: "Journaling soundtrack",
    trackCount: 30,
    href: "https://open.spotify.com",
  },
  {
    name: "Sunday Build",
    emoji: "☕",
    description: "Weekend hacking vibes",
    trackCount: 80,
    href: "https://open.spotify.com",
  },
  {
    name: "Wind Down",
    emoji: "🌙",
    description: "End of day decompression",
    trackCount: 25,
    href: "https://open.spotify.com",
  },
]

export default function SpotifyPage() {
  return (
    <EditorialLayout currentPath="spotify.mdx">
      <Breadcrumb path="spotify.mdx" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Spotify
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          Music I work, run, and think to. Feel free to steal my playlists.
        </p>
      </header>

      {/* Now Playing - Placeholder */}
      <section className="mb-12">
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-4">
          Now Playing
        </h2>
        <div className="flex items-center gap-4 p-4 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
          <div className="w-16 h-16 rounded bg-[rgb(var(--border))] flex items-center justify-center">
            <Play className="w-6 h-6 text-[rgb(var(--muted))]" />
          </div>
          <div>
            <p className="text-sm text-[rgb(var(--muted))]">Not currently playing</p>
            <p className="text-xs text-[rgb(var(--muted))] mt-1 font-mono">
              Check back later
            </p>
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section>
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-4">
          Playlists
        </h2>
        <div className="grid gap-4">
          {PLAYLISTS.map((playlist) => (
            <PlaylistCard key={playlist.name} {...playlist} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12">
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[rgb(var(--primary))] hover:underline"
        >
          Follow on Spotify
          <ExternalLink className="w-3 h-3" />
        </a>
      </footer>
    </EditorialLayout>
  )
}

function PlaylistCard({
  name,
  emoji,
  description,
  trackCount,
  href,
}: {
  name: string
  emoji: string
  description: string
  trackCount: number
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl">{emoji}</span>
        <div>
          <h3 className="font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-[rgb(var(--muted))]">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-[rgb(var(--muted))]">
          {trackCount} tracks
        </span>
        <ExternalLink className="w-4 h-4 text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors" />
      </div>
    </a>
  )
}
