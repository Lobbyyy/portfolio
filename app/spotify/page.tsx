import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import { ExternalLink } from "lucide-react"

// Spotify playlist embeds - add more playlist IDs as needed
// To get a playlist ID: open playlist in Spotify, click Share > Copy link
// URL format: https://open.spotify.com/playlist/PLAYLIST_ID
const PLAYLISTS = [
  {
    name: "Deep Work",
    description: "What I code to",
    embedId: "37i9dQZF1E8CQBn1BWn6gw", // TODO: Replace with actual playlist ID
  },
  {
    name: "Running",
    description: "Team GB training energy",
    embedId: "37i9dQZF1E8CQBn1BWn6gw", // TODO: Replace with actual playlist ID
  },
  {
    name: "Feeling Good",
    description: "Positive vibes only",
    embedId: "37i9dQZF1E8CQBn1BWn6gw", // TODO: Replace with actual playlist ID
  },
]

export default function SpotifyPage() {
  return (
    <EditorialLayout >
      <Breadcrumb path="spotify.mdx" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Spotify
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          Music I work, run, and think to. Feel free to steal my playlists.
        </p>
      </header>

      {/* Playlists with Embeds */}
      <section className="space-y-8">
        {PLAYLISTS.map((playlist) => (
          <div key={playlist.name}>
            <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
              {playlist.name}
            </h2>
            <p className="text-sm text-[rgb(var(--muted))] mb-4">{playlist.description}</p>
            <iframe
              src={`https://open.spotify.com/embed/playlist/${playlist.embedId}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-12">
        <a
          href="https://open.spotify.com/user/lobsanglama"
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
