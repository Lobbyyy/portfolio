import { Coffee } from "lucide-react"

export default function SupportFooter() {
  return (
    <div className="mt-16 pt-8 border-t border-[rgb(var(--border))]">
      <div className="max-w-lg">
        <p className="text-sm text-[rgb(var(--muted))] mb-4">
          I build companies and share what I learn along the way. If it&apos;s helped you think, build, or move ~ this is how you say thanks.
        </p>
        <a
          href="https://buymeacoffee.com/lobsanglama"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-sm text-[rgb(var(--text))] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
        >
          <Coffee className="w-4 h-4" />
          Buy me a coffee
        </a>
      </div>
    </div>
  )
}
