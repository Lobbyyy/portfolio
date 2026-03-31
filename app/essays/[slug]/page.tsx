import { notFound } from "next/navigation"
import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import MarkdownRenderer from "@/components/mdx/MarkdownRenderer"
import SupportFooter from "@/components/editorial/SupportFooter"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ArrowRight, Clock, Calendar } from "lucide-react"
import { getAllEssays, getEssayBySlug, EssayContent } from "@/lib/essays"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const essays = getAllEssays()
  return essays.map((essay) => ({
    slug: essay.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const essay = getEssayBySlug(slug)

  if (!essay) {
    return { title: "Essay Not Found" }
  }

  return {
    title: `${essay.title} | Essays`,
    description: essay.excerpt,
  }
}

function getAdjacentEssays(currentSlug: string) {
  const essays = getAllEssays()
  const currentIndex = essays.findIndex(e => e.slug === currentSlug)

  return {
    prev: currentIndex > 0 ? essays[currentIndex - 1] : null,
    next: currentIndex < essays.length - 1 ? essays[currentIndex + 1] : null,
  }
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params
  const essay = getEssayBySlug(slug)

  if (!essay) {
    notFound()
  }

  const { prev, next } = getAdjacentEssays(slug)

  return (
    <EditorialLayout
      currentPath={`essays/${slug}`}
      contextContent={<EssayContext essay={essay} />}
    >
      <Breadcrumb path={`essays/${essay.slug}.mdx`} />

      {/* Back Link */}
      <Link
        href="/essays"
        className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--primary))] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Essays
      </Link>

      {/* Essay Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center gap-1.5 font-mono text-xs text-[rgb(var(--muted))]">
            <Calendar className="w-3 h-3" />
            {essay.date}
          </span>
          <span className="text-[rgb(var(--border))]">·</span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-[rgb(var(--muted))]">
            <Clock className="w-3 h-3" />
            {essay.readTime}
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-[rgb(var(--text))] mb-6 leading-tight">
          {essay.title}
        </h1>

        <p className="text-lg text-[rgb(var(--muted))] max-w-2xl leading-relaxed">
          {essay.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {essay.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Essay Content */}
      <MarkdownRenderer content={essay.content} />

      {/* Read on Substack */}
      {essay.substackUrl && (
        <div className="mt-12 pt-8 border-t border-[rgb(var(--border))]">
          <a
            href={essay.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgb(var(--primary))] hover:underline"
          >
            Read original on Substack
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Prev/Next Navigation */}
      {(prev || next) && (
        <nav className="mt-12 pt-8 border-t border-[rgb(var(--border))]">
          <div className="flex justify-between items-start gap-4">
            {prev ? (
              <Link
                href={`/essays/${prev.slug}`}
                className="group flex-1 max-w-[45%]"
              >
                <span className="flex items-center gap-1 text-xs font-mono text-[rgb(var(--muted))] mb-2">
                  <ArrowLeft className="w-3 h-3" />
                  Previous
                </span>
                <span className="block text-sm text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors line-clamp-2">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {next ? (
              <Link
                href={`/essays/${next.slug}`}
                className="group flex-1 max-w-[45%] text-right"
              >
                <span className="flex items-center justify-end gap-1 text-xs font-mono text-[rgb(var(--muted))] mb-2">
                  Next
                  <ArrowRight className="w-3 h-3" />
                </span>
                <span className="block text-sm text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors line-clamp-2">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </nav>
      )}

      {/* Support Footer */}
      <SupportFooter />
    </EditorialLayout>
  )
}

function EssayContext({ essay }: { essay: EssayContent }) {
  return (
    <div className="space-y-6">
      {/* Reading Info */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Reading Info
        </h3>
        <div className="space-y-2">
          <p className="text-sm text-[rgb(var(--text))]">
            <span className="text-[rgb(var(--muted))]">Time:</span> {essay.readTime}
          </p>
          <p className="text-sm text-[rgb(var(--text))]">
            <span className="text-[rgb(var(--muted))]">Published:</span> {essay.date}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {essay.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Subscribe */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Subscribe
        </h3>
        <a
          href="https://substack.com/@lobsanglama"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] transition-colors"
        >
          Get new essays via email →
        </a>
      </div>
    </div>
  )
}
