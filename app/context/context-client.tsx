"use client"

import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Book, GraduationCap, Briefcase, School } from "lucide-react"
import { useMemo, Suspense } from "react"
import type { ContextItem, ContextCategory } from "@/lib/data/context-data"

interface ContextClientProps {
  items: ContextItem[]
  tags: string[]
  categories: ContextCategory[]
}

export default function ContextClient({ items, tags, categories }: ContextClientProps) {
  return (
    <Suspense fallback={<ContextPageSkeleton />}>
      <ContextPageContent items={items} tags={tags} categories={categories} />
    </Suspense>
  )
}

function ContextPageSkeleton() {
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

const categoryLabels: Record<ContextCategory, string> = {
  experience: "Experience",
  education: "Education",
  course: "Courses",
  book: "Books",
}

const CategoryIcons: Record<ContextCategory, typeof Book> = {
  book: Book,
  course: GraduationCap,
  experience: Briefcase,
  education: School,
}

function ContextPageContent({ items: allItems, tags, categories }: ContextClientProps) {
  const searchParams = useSearchParams()
  const selectedCategory = (searchParams.get("category") as ContextCategory | null) || "experience"
  const selectedTag = searchParams.get("tag")

  // Filter items based on selected category and tag
  const items = useMemo(() => {
    let filtered = allItems

    // Always filter by category (default to experience)
    filtered = filtered.filter((item) => item.category === selectedCategory)

    if (selectedTag) {
      filtered = filtered.filter((item) => item.tags.includes(selectedTag))
    }

    return filtered
  }, [allItems, selectedCategory, selectedTag])

  // Get tags relevant to the current category
  const categoryTags = useMemo(() => {
    const categoryItems = allItems.filter((item) => item.category === selectedCategory)
    const tagSet = new Set<string>()
    categoryItems.forEach((item) => item.tags.forEach((tag) => tagSet.add(tag)))
    return Array.from(tagSet).sort()
  }, [allItems, selectedCategory])

  return (
    <EditorialLayout
      currentPath="context/"
      contextContent={
        <ContextSidebar
          tags={categoryTags}
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
        />
      }
    >
      <Breadcrumb path="context/" />

      <header className="mb-8">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Context
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl mb-6">
          Knowledge and experiences that have shaped my thinking.
        </p>

        {/* Category Tabs */}
        <div className="flex gap-1 border-b border-[rgb(var(--border))]">
          {categories.map((category) => {
            const isActive = selectedCategory === category
            const count = allItems.filter((i) => i.category === category).length
            return (
              <Link
                key={category}
                href={`/context?category=${category}`}
                className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-[1px] ${
                  isActive
                    ? "border-[rgb(var(--primary))] text-[rgb(var(--primary))]"
                    : "border-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                }`}
              >
                {categoryLabels[category]}
                <span className="ml-1.5 text-xs opacity-60">({count})</span>
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
            href={`/context?category=${selectedCategory}`}
            className="text-xs text-[rgb(var(--muted))] hover:text-[rgb(var(--primary))]"
          >
            Clear
          </Link>
        </div>
      )}

      {/* Items */}
      <div className="space-y-6">
        {items.length === 0 ? (
          <p className="text-[rgb(var(--muted))] text-center py-8">
            No items found.{" "}
            <Link
              href={`/context?category=${selectedCategory}`}
              className="text-[rgb(var(--primary))] hover:underline"
            >
              Clear filters
            </Link>
          </p>
        ) : (
          items.map((item) => (
            <ContextCard
              key={item.id}
              item={item}
              selectedTag={selectedTag}
              selectedCategory={selectedCategory}
            />
          ))
        )}
      </div>
    </EditorialLayout>
  )
}

function ContextCard({
  item,
  selectedTag,
  selectedCategory,
}: {
  item: ContextItem
  selectedTag: string | null
  selectedCategory: ContextCategory
}) {
  const CategoryIcon = CategoryIcons[item.category]

  // Generate Open Library cover URL from ISBN
  const coverUrl = item.isbn
    ? `https://covers.openlibrary.org/b/isbn/${item.isbn}-M.jpg`
    : null

  return (
    <article className="group border-l-2 border-transparent hover:border-[rgb(var(--primary))] pl-4 -ml-4 transition-colors">
      <div className="flex items-start gap-3">
        {coverUrl ? (
          <div className="flex-shrink-0 w-16 self-stretch rounded overflow-hidden bg-[rgb(var(--border))] shadow-sm">
            <img
              src={coverUrl}
              alt={`Cover of ${item.title}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        ) : (
          <div className="mt-1 p-2 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))] group-hover:bg-[rgb(var(--primary))] group-hover:text-white transition-colors">
            <CategoryIcon className="w-5 h-5" />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <h2 className="font-serif text-xl text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
              {item.title}
            </h2>
          </div>

          <p className="font-mono text-xs text-[rgb(var(--muted))] mb-1">
            {item.subtitle}
          </p>

          {/* Date and location for experiences/education */}
          {(item.date || item.location) && (
            <p className="font-mono text-xs text-[rgb(var(--muted))] mb-2 opacity-70">
              {item.date}
              {item.date && item.location && " · "}
              {item.location}
            </p>
          )}

          <p className="text-[rgb(var(--text))] mb-3 italic">
            &ldquo;{item.takeaway}&rdquo;
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Link
                key={tag}
                href={`/context?category=${selectedCategory}&tag=${tag}`}
                className={`font-mono text-xs px-2 py-0.5 rounded transition-colors ${
                  tag === selectedTag
                    ? "bg-[rgb(var(--primary))] text-white"
                    : "bg-[rgb(var(--border))] text-[rgb(var(--muted))] hover:bg-[rgb(var(--primary))] hover:text-white"
                }`}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function ContextSidebar({
  tags,
  selectedCategory,
  selectedTag,
}: {
  tags: string[]
  selectedCategory: ContextCategory
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
                  href={`/context?category=${selectedCategory}&tag=${tag}`}
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
            No topics for this category
          </p>
        )}
      </div>
    </div>
  )
}
