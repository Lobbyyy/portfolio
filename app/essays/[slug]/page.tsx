import { notFound } from "next/navigation"
import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import MarkdownRenderer from "@/components/mdx/MarkdownRenderer"
import SupportFooter from "@/components/editorial/SupportFooter"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react"
import { getAllEssays, getEssayBySlug, getRelatedEssays, EssayContent } from "@/lib/essays"

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

  const url = `https://lobsang-lama.com/essays/${slug}`

  return {
    title: essay.title,
    description: essay.excerpt,
    authors: [{ name: 'Lobsang Lama', url: 'https://lobsang-lama.com' }],
    keywords: essay.tags,
    openGraph: {
      title: essay.title,
      description: essay.excerpt,
      url,
      siteName: 'Lobsang Lama',
      type: 'article',
      publishedTime: essay.date,
      authors: ['Lobsang Lama'],
      tags: essay.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: essay.title,
      description: essay.excerpt,
      creator: '@Lobbyyyyyy',
    },
    alternates: {
      canonical: url,
    },
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
  const relatedEssays = getRelatedEssays(slug, 3)

  // Article schema for SEO/GEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: essay.title,
    description: essay.excerpt,
    author: {
      '@type': 'Person',
      name: 'Lobsang Lama',
      url: 'https://lobsang-lama.com',
    },
    datePublished: essay.date,
    publisher: {
      '@type': 'Person',
      name: 'Lobsang Lama',
      url: 'https://lobsang-lama.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lobsang-lama.com/essays/${slug}`,
    },
    keywords: essay.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <EditorialLayout
      currentPath={`essays/${slug}`}
      contextContent={<EssayContext essay={essay} relatedEssays={relatedEssays} />}
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

      {/* Prev/Next Navigation */}
      {(prev || next) && (
        <nav className="mt-12 pt-8 border-t border-[rgb(var(--border))]">
          <div className="grid grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/essays/${prev.slug}`}
                className="group flex items-center p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors flex-shrink-0 mr-4" />
                <div>
                  <span className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-1 block">
                    Previous
                  </span>
                  <span className="font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors line-clamp-2">
                    {prev.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/essays/${next.slug}`}
                className="group flex items-center justify-between p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors"
              >
                <div>
                  <span className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-1 block">
                    Next
                  </span>
                  <span className="font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors line-clamp-2">
                    {next.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors flex-shrink-0 ml-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      )}

      {/* Support Footer */}
      <SupportFooter />
    </EditorialLayout>
    </>
  )
}

function EssayContext({ essay, relatedEssays }: { essay: EssayContent; relatedEssays: EssayContent[] }) {
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

      {/* Related Essays */}
      {relatedEssays.length > 0 && (
        <div>
          <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
            Related Essays
          </h3>
          <div className="space-y-2">
            {relatedEssays.map((related) => (
              <Link
                key={related.slug}
                href={`/essays/${related.slug}`}
                className="block text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] transition-colors line-clamp-2"
              >
                {related.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
