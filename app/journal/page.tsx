import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { JOURNAL_POSTS, JOURNAL_TAGS } from "@/lib/data/portfolio-data"

export default function JournalPage() {
  return (
    <EditorialLayout
      currentPath="journal/"
      contextContent={<JournalContext />}
    >
      <Breadcrumb path="journal/" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Journal
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          Thoughts on building, philosophy, and everything in between.
          Originally published on{" "}
          <a
            href="https://substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(var(--primary))] hover:underline"
          >
            Substack
          </a>
          .
        </p>
      </header>

      {/* Posts */}
      <div className="space-y-8">
        {JOURNAL_POSTS.map((post) => (
          <JournalPost key={post.slug} {...post} />
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 text-center">
        <a
          href="https://substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[rgb(var(--border))] text-[rgb(var(--muted))] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
        >
          View all on Substack
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </EditorialLayout>
  )
}

function JournalPost({
  slug,
  title,
  excerpt,
  date,
  readTime,
  tags,
}: {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}) {
  return (
    <article className="group">
      <Link href={`/journal/${slug}`} className="block">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-[rgb(var(--muted))]">{date}</span>
          <span className="text-[rgb(var(--border))]">·</span>
          <span className="font-mono text-xs text-[rgb(var(--muted))]">{readTime}</span>
        </div>

        <h2 className="font-serif text-2xl text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors mb-2">
          {title}
        </h2>

        <p className="text-[rgb(var(--muted))] mb-3">{excerpt}</p>

        <div className="flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  )
}

function JournalContext() {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {JOURNAL_TAGS.map((tag) => (
            <button
              key={tag}
              className="font-mono text-xs px-2 py-1 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))] hover:text-[rgb(var(--primary))] transition-colors"
            >
              {tag === "all" ? "All" : `#${tag}`}
            </button>
          ))}
        </div>
      </div>

      {/* Subscribe */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Subscribe
        </h3>
        <a
          href="https://substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] transition-colors"
        >
          Get new posts via email →
        </a>
      </div>
    </div>
  )
}
