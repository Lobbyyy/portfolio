"use client"

import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { useMemo, Suspense } from "react"
import type { EssayContent } from "@/lib/essays"

interface EssaysClientProps {
  essays: EssayContent[]
  tags: string[]
}

export default function EssaysClient({ essays, tags }: EssaysClientProps) {
  return (
    <Suspense fallback={<EssaysPageSkeleton />}>
      <EssaysPageContent essays={essays} tags={tags} />
    </Suspense>
  )
}

function EssaysPageSkeleton() {
  return (
    <div className="animate-pulse p-8">
      <div className="h-10 bg-[rgb(var(--border))] rounded w-32 mb-4" />
      <div className="h-4 bg-[rgb(var(--border))] rounded w-64 mb-12" />
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-3 bg-[rgb(var(--border))] rounded w-24" />
            <div className="h-6 bg-[rgb(var(--border))] rounded w-48" />
            <div className="h-4 bg-[rgb(var(--border))] rounded w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

function EssaysPageContent({ essays: allEssays, tags }: EssaysClientProps) {
  const searchParams = useSearchParams()
  const selectedTag = searchParams.get("tag")

  // Filter essays based on selected tag
  const essays = useMemo(() => {
    if (!selectedTag || selectedTag === "all") {
      return allEssays
    }
    return allEssays.filter((essay) => essay.tags.includes(selectedTag))
  }, [allEssays, selectedTag])

  return (
    <EditorialLayout
      currentPath="essays/"
      contextContent={<EssaysContext tags={tags} selectedTag={selectedTag} />}
    >
      <Breadcrumb path="essays/" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Essays
          {selectedTag && selectedTag !== "all" && (
            <span className="text-[rgb(var(--muted))] text-2xl ml-3">
              #{selectedTag}
            </span>
          )}
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          {selectedTag && selectedTag !== "all" ? (
            <>
              Showing {essays.length} essay{essays.length !== 1 ? "s" : ""} tagged with #{selectedTag}.{" "}
              <Link
                href="/essays"
                className="text-[rgb(var(--primary))] hover:underline"
              >
                View all
              </Link>
            </>
          ) : (
            <>
              Thoughts on building, philosophy, and everything in between.
              Originally published on{" "}
              <a
                href="https://deckandadream.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(var(--primary))] hover:underline"
              >
                Substack
              </a>
              .
            </>
          )}
        </p>
      </header>

      {/* Posts */}
      <div className="space-y-8">
        {essays.length === 0 ? (
          <p className="text-[rgb(var(--muted))] text-center py-8">
            No essays found with tag #{selectedTag}.{" "}
            <Link
              href="/essays"
              className="text-[rgb(var(--primary))] hover:underline"
            >
              View all essays
            </Link>
          </p>
        ) : (
          essays.map((essay) => (
            <article key={essay.slug} className="group">
              <Link href={`/essays/${essay.slug}`} className="block">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[rgb(var(--muted))]">{essay.date}</span>
                  <span className="text-[rgb(var(--border))]">·</span>
                  <span className="font-mono text-xs text-[rgb(var(--muted))]">{essay.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors mb-2">
                  {essay.title}
                </h2>

                <p className="text-[rgb(var(--muted))] mb-3">{essay.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {essay.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-xs px-2 py-0.5 rounded ${
                        tag === selectedTag
                          ? "bg-[rgb(var(--primary))] text-white"
                          : "bg-[rgb(var(--border))] text-[rgb(var(--muted))]"
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))
        )}
      </div>

      {/* View More */}
      <div className="mt-12 text-center">
        <a
          href="https://deckandadream.substack.com"
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

function EssaysContext({
  tags,
  selectedTag,
}: {
  tags: string[]
  selectedTag: string | null
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isActive = tag === "all"
              ? !selectedTag || selectedTag === "all"
              : selectedTag === tag

            return (
              <Link
                key={tag}
                href={tag === "all" ? "/essays" : `/essays?tag=${tag}`}
                className={`font-mono text-xs px-2 py-1 rounded transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[rgb(var(--primary))] text-white"
                    : "bg-[rgb(var(--border))] text-[rgb(var(--muted))] hover:bg-[rgb(var(--primary))] hover:text-white"
                }`}
              >
                {tag === "all" ? "All" : `#${tag}`}
              </Link>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Subscribe
        </h3>
        <a
          href="https://deckandadream.substack.com"
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
