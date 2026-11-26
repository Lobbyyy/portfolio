import { notFound } from "next/navigation"
import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import MarkdownRenderer from "@/components/mdx/MarkdownRenderer"
import SupportFooter from "@/components/editorial/SupportFooter"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import {
  getResourcesByType,
  getResourceBySlug,
  getRelatedResources,
  ResourceContent,
} from "@/lib/resources"
import GuideTracker from "./GuideTracker"
import ResourceTLDR from "@/components/resources/ResourceTLDR"
import SignupDrawer from "@/components/resources/SignupDrawer"

// The drawer shows only when the Resend list is configured, so a visitor never gets a form that cannot work.
const signupEnabled = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_RESOURCES_SEGMENT_ID)

interface Props {
  params: Promise<{ category: string; slug: string }>
}

export function generateStaticParams() {
  const guides = getResourcesByType("guide")
  return guides.map((guide) => ({
    category: guide.category,
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { category, slug } = await params
  const resource = getResourceBySlug(category, slug)

  if (!resource) {
    return { title: "Resource Not Found" }
  }

  const url = `https://lobsang-lama.com/resources/${category}/${slug}`

  return {
    title: resource.title,
    description: resource.excerpt,
    authors: [{ name: "Lobsang Lama", url: "https://lobsang-lama.com" }],
    keywords: resource.tags,
    openGraph: {
      title: resource.title,
      description: resource.excerpt,
      url,
      siteName: "Lobsang Lama",
      type: "article",
      publishedTime: resource.date,
      authors: ["Lobsang Lama"],
      tags: resource.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: resource.title,
      description: resource.excerpt,
      creator: "@Lobbyyyyyy",
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function ResourcePage({ params }: Props) {
  const { category, slug } = await params
  const resource = getResourceBySlug(category, slug)

  if (!resource) {
    notFound()
  }

  const relatedResources = getRelatedResources("guide", slug, 3, category)

  // Article schema for SEO/GEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.excerpt,
    author: {
      "@type": "Person",
      name: "Lobsang Lama",
      url: "https://lobsang-lama.com",
    },
    datePublished: resource.date,
    publisher: {
      "@type": "Person",
      name: "Lobsang Lama",
      url: "https://lobsang-lama.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lobsang-lama.com/resources/${category}/${slug}`,
    },
    keywords: resource.tags.join(", "),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {category === "github-repos" && resource.primaryHref && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: resource.title,
              description: resource.excerpt,
              codeRepository: resource.primaryHref,
              url: `https://lobsang-lama.com/resources/${category}/${slug}`,
            }),
          }}
        />
      )}
      <GuideTracker
        slug={resource.slug}
        title={resource.title}
        tags={resource.tags}
        readTime={resource.readTime}
      />
      <EditorialLayout
        contextContent={
          <ResourceContext resource={resource} relatedResources={relatedResources} />
        }
        share={{
          url: `https://lobsang-lama.com/resources/${category}/${slug}`,
          title: resource.title,
          subtitle: resource.excerpt,
          tag: "Resource",
        }}
      >
        <Breadcrumb path={`resources/${category}/${slug}.mdx`} />

        {/* Back Link */}
        <Link
          href="/resources?tab=guides"
          className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--primary))] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Guides
        </Link>

        {/* Resource Header */}
        <header className={resource.agentPrompt ? "mb-6" : "mb-12"}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[rgb(var(--primary))] uppercase tracking-wider">
              {resource.category}
            </span>
            <span className="text-[rgb(var(--border))]">·</span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-[rgb(var(--muted))]">
              <Calendar className="w-3 h-3" />
              {resource.date}
            </span>
            <span className="text-[rgb(var(--border))]">·</span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-[rgb(var(--muted))]">
              <Clock className="w-3 h-3" />
              {resource.readTime}
            </span>
          </div>

          <h1
            className={
              resource.agentPrompt
                ? "font-serif text-3xl md:text-5xl text-[rgb(var(--text))] mb-3 leading-tight"
                : "font-serif text-4xl md:text-5xl text-[rgb(var(--text))] mb-6 leading-tight"
            }
          >
            {resource.title}
          </h1>

          <p className="text-lg text-[rgb(var(--muted))] max-w-2xl leading-relaxed">
            {resource.excerpt}
          </p>

          {/* TLDR: give it to your agent, open it, or read more */}
          {resource.agentPrompt && (
            <ResourceTLDR
              resource={resource.slug}
              agentPrompt={resource.agentPrompt}
              primaryLabel={resource.primaryLabel}
              primaryHref={resource.primaryHref}
            />
          )}

          {/* Tags */}
          <div id="read-more" className="flex flex-wrap gap-2 mt-6 scroll-mt-24">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-1 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Resource Content */}
        <MarkdownRenderer content={resource.content} />

        {resource.postHref && (
          <p className="mt-10 text-sm text-[rgb(var(--muted))]">
            Found this from a video?{" "}
            <a
              href={resource.postHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--primary))] hover:underline"
            >
              There are more like it on Instagram
            </a>
            .
          </p>
        )}

        {/* Support Footer */}
        <SupportFooter />
      </EditorialLayout>

      {/* Outside the layout: EditorialLayout renders its children twice (desktop and mobile), the drawer must exist once */}
      {resource.agentPrompt && signupEnabled && (
        <SignupDrawer resource={resource.slug} keyword={resource.keyword} />
      )}
    </>
  )
}

function ResourceContext({
  resource,
  relatedResources,
}: {
  resource: ResourceContent
  relatedResources: ResourceContent[]
}) {
  return (
    <div className="space-y-6">
      {/* Reading Info */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Reading Info
        </h3>
        <div className="space-y-2">
          <p className="text-sm text-[rgb(var(--text))]">
            <span className="text-[rgb(var(--muted))]">Time:</span> {resource.readTime}
          </p>
          <p className="text-sm text-[rgb(var(--text))]">
            <span className="text-[rgb(var(--muted))]">Published:</span> {resource.date}
          </p>
          <p className="text-sm text-[rgb(var(--text))]">
            <span className="text-[rgb(var(--muted))]">Category:</span>{" "}
            <span className="capitalize">{resource.category}</span>
          </p>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <div>
          <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
            Related Resources
          </h3>
          <div className="space-y-2">
            {relatedResources.map((related) => (
              <Link
                key={`${related.category}-${related.slug}`}
                href={`/resources/${related.category}/${related.slug}`}
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
