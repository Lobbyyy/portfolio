"use client"

import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import SupportFooter from "@/components/editorial/SupportFooter"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { FileText, Telescope, Bookmark, ExternalLink, Clock, Folder } from "lucide-react"
import { useMemo, Suspense } from "react"
import type { ResourceContent } from "@/lib/resources"
import {
  resourceTabs,
  type ResourceTab,
  type Bookmark as BookmarkType,
} from "@/lib/data/resources-data"
import { trackResourceTabChange, trackBookmarkClick } from "@/lib/analytics"

interface ResourcesClientProps {
  deepDives: ResourceContent[]
  guides: ResourceContent[]
  bookmarks: BookmarkType[]
  deepDiveTags: string[]
  guideTags: string[]
  bookmarkTags: string[]
}

export default function ResourcesClient(props: ResourcesClientProps) {
  return (
    <Suspense fallback={<ResourcesPageSkeleton />}>
      <ResourcesPageContent {...props} />
    </Suspense>
  )
}

function ResourcesPageSkeleton() {
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

const tabIcons: Record<ResourceTab, typeof FileText> = {
  "deep-dives": Telescope,
  guides: FileText,
  bookmarks: Bookmark,
}

function ResourcesPageContent({
  deepDives,
  guides,
  bookmarks,
  deepDiveTags,
  guideTags,
  bookmarkTags,
}: ResourcesClientProps) {
  const searchParams = useSearchParams()
  const selectedTab = (searchParams.get("tab") as ResourceTab | null) || "deep-dives"
  const selectedTag = searchParams.get("tag")

  // Get current tab's items and tags
  const { items, tags } = useMemo(() => {
    switch (selectedTab) {
      case "deep-dives":
        return {
          items: selectedTag
            ? deepDives.filter((item) => item.tags.includes(selectedTag))
            : deepDives,
          tags: deepDiveTags,
        }
      case "guides":
        return {
          items: selectedTag
            ? guides.filter((item) => item.tags.includes(selectedTag))
            : guides,
          tags: guideTags,
        }
      case "bookmarks":
        return {
          items: selectedTag
            ? bookmarks.filter((item) => item.tags.includes(selectedTag))
            : bookmarks,
          tags: bookmarkTags,
        }
      default:
        return { items: [], tags: [] }
    }
  }, [selectedTab, selectedTag, deepDives, guides, bookmarks, deepDiveTags, guideTags, bookmarkTags])

  const handleTabChange = (newTab: ResourceTab) => {
    if (newTab !== selectedTab) {
      trackResourceTabChange(selectedTab, newTab)
    }
  }

  return (
    <EditorialLayout
      contextContent={
        <ResourcesSidebar
          tags={tags as string[]}
          selectedTab={selectedTab}
          selectedTag={selectedTag}
        />
      }
    >
      <Breadcrumb path="resources/" />

      <header className="mb-8">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Resources
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl mb-6">
          In-depth analysis, practical guides, and curated links for builders.
        </p>

        {/* Category Tabs */}
        <div className="flex gap-1 border-b border-[rgb(var(--border))] overflow-x-auto scrollbar-hide">
          {resourceTabs.map((tab) => {
            const isActive = selectedTab === tab.id
            const TabIcon = tabIcons[tab.id]
            let count = 0
            switch (tab.id) {
              case "deep-dives":
                count = deepDives.length
                break
              case "guides":
                count = guides.length
                break
              case "bookmarks":
                count = bookmarks.length
                break
            }
            return (
              <Link
                key={tab.id}
                href={`/resources?tab=${tab.id}`}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-[1px] whitespace-nowrap ${
                  isActive
                    ? "border-[rgb(var(--primary))] text-[rgb(var(--primary))]"
                    : "border-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
                <span className="text-xs opacity-60">({count})</span>
              </Link>
            )
          })}
        </div>
      </header>

      {/* Active filter indicator */}
      {selectedTag && (
        <div className="mb-6 flex items-center gap-2">
          <span className="text-[rgb(var(--muted))] text-sm">Filtered by:</span>
          <span className="bg-[rgb(var(--primary))] text-white text-xs px-2 py-1 rounded">
            #{selectedTag}
          </span>
          <Link
            href={`/resources?tab=${selectedTab}`}
            className="text-xs text-[rgb(var(--muted))] hover:text-[rgb(var(--primary))]"
          >
            Clear
          </Link>
        </div>
      )}

      {/* Content */}
      <div className="space-y-6">
        {items.length === 0 ? (
          <p className="text-[rgb(var(--muted))] text-center py-8">
            No items found.{" "}
            <Link
              href={`/resources?tab=${selectedTab}`}
              className="text-[rgb(var(--primary))] hover:underline"
            >
              Clear filters
            </Link>
          </p>
        ) : selectedTab === "bookmarks" ? (
          (items as BookmarkType[]).map((item) => (
            <BookmarkCard key={item.id} bookmark={item} selectedTag={selectedTag} />
          ))
        ) : selectedTab === "guides" ? (
          <GuidesView guides={items as ResourceContent[]} />
        ) : (
          (items as ResourceContent[]).map((item) => (
            <DeepDiveCard key={item.slug} resource={item} selectedTag={selectedTag} />
          ))
        )}
      </div>

      {/* Support Footer */}
      <SupportFooter />
    </EditorialLayout>
  )
}

function DeepDiveCard({
  resource,
  selectedTag,
}: {
  resource: ResourceContent
  selectedTag: string | null
}) {
  return (
    <Link
      href={`/resources/deep-dives/${resource.slug}`}
      className="group block border-l-2 border-transparent hover:border-[rgb(var(--primary))] pl-4 -ml-4 transition-colors"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 p-2 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))] group-hover:bg-[rgb(var(--primary))] group-hover:text-white transition-colors">
          <Telescope className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="font-serif text-xl text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors mb-1">
            {resource.title}
          </h2>

          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1 font-mono text-xs text-[rgb(var(--muted))]">
              <Clock className="w-3 h-3" />
              {resource.readTime}
            </span>
            <span className="text-[rgb(var(--border))]">·</span>
            <span className="font-mono text-xs text-[rgb(var(--muted))]">
              {resource.date}
            </span>
          </div>

          <p className="text-[rgb(var(--muted))] text-sm mb-3 line-clamp-2">
            {resource.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className={`font-mono text-xs px-2 py-0.5 rounded transition-colors ${
                  tag === selectedTag
                    ? "bg-[rgb(var(--primary))] text-white"
                    : "bg-[rgb(var(--border))] text-[rgb(var(--muted))]"
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

function GuidesView({
  guides,
}: {
  guides: ResourceContent[]
}) {
  // Group guides by category
  const groupedGuides = useMemo(() => {
    const groups: Record<string, ResourceContent[]> = {}
    guides.forEach((guide) => {
      const category = guide.category || "other"
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(guide)
    })
    return groups
  }, [guides])

  return (
    <div className="space-y-8">
      {Object.entries(groupedGuides).map(([category, categoryGuides]) => (
        <section key={category}>
          <div className="flex items-center gap-2 mb-4">
            <Folder className="w-4 h-4 text-[rgb(var(--primary))]" />
            <h2 className="font-mono text-sm text-[rgb(var(--text))]">{category}/</h2>
          </div>

          <div className="space-y-2 ml-6">
            {categoryGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/${guide.category}/${guide.slug}`}
                className="group flex items-center justify-between py-2 px-3 rounded-md hover:bg-[rgb(var(--border))] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[rgb(var(--muted))]" />
                  <span className="text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
                    {guide.title}
                  </span>
                  <span className="text-xs text-[rgb(var(--muted))] px-1.5 py-0.5 rounded bg-[rgb(var(--border))]">
                    {guide.readTime}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[rgb(var(--muted))] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function BookmarkCard({
  bookmark,
  selectedTag,
}: {
  bookmark: BookmarkType
  selectedTag: string | null
}) {
  const handleClick = () => {
    trackBookmarkClick(bookmark.title, bookmark.url, bookmark.domain)
  }

  return (
    <a
      href={bookmark.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group block border-l-2 border-transparent hover:border-[rgb(var(--primary))] pl-4 -ml-4 transition-colors"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 p-2 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))] group-hover:bg-[rgb(var(--primary))] group-hover:text-white transition-colors">
          <Bookmark className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="font-serif text-xl text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
              {bookmark.title}
            </h2>
            <ExternalLink className="w-4 h-4 text-[rgb(var(--muted))] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <p className="font-mono text-xs text-[rgb(var(--primary))] mb-2">
            {bookmark.domain}
          </p>

          <p className="text-[rgb(var(--muted))] text-sm mb-3">
            {bookmark.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {bookmark.tags.map((tag) => (
              <span
                key={tag}
                className={`font-mono text-xs px-2 py-0.5 rounded transition-colors ${
                  tag === selectedTag
                    ? "bg-[rgb(var(--primary))] text-white"
                    : "bg-[rgb(var(--border))] text-[rgb(var(--muted))]"
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

function ResourcesSidebar({
  tags,
  selectedTab,
  selectedTag,
}: {
  tags: string[]
  selectedTab: ResourceTab
  selectedTag: string | null
}) {
  return (
    <div className="space-y-6">
      {/* Topics */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Topics
        </h3>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => {
              const isActive = selectedTag === tag
              return (
                <Link
                  key={tag}
                  href={`/resources?tab=${selectedTab}&tag=${tag}`}
                  className={`font-mono text-xs px-2 py-1 rounded transition-colors ${
                    isActive
                      ? "bg-[rgb(var(--primary))] text-white"
                      : "bg-[rgb(var(--border))] text-[rgb(var(--muted))] hover:bg-[rgb(var(--primary))] hover:text-white"
                  }`}
                >
                  #{tag}
                </Link>
              )
            })}
          </div>
        ) : (
          <p className="text-xs text-[rgb(var(--muted))] opacity-60">
            No topics for this section
          </p>
        )}
      </div>
    </div>
  )
}
