"use client"

import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Book, GraduationCap, Briefcase } from "lucide-react"
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

function ContextPageContent({ items: allItems, tags, categories }: ContextClientProps) {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get("category") as ContextCategory | null
  const selectedTag = searchParams.get("tag")

  // Filter items based on selected category and tag
  const items = useMemo(() => {
    let filtered = allItems

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    if (selectedTag) {
      filtered = filtered.filter((item) => item.tags.includes(selectedTag))
    }

    return filtered
  }, [allItems, selectedCategory, selectedTag])

  // Get counts for each category
  const categoryCounts = useMemo(() => {
    return {
      book: allItems.filter((i) => i.category === "book").length,
      course: allItems.filter((i) => i.category === "course").length,
      experience: allItems.filter((i) => i.category === "experience").length,
    }
  }, [allItems])

  return (
    <EditorialLayout
      currentPath="context/"
      contextContent={
        <ContextSidebar
          categories={categories}
          categoryCounts={categoryCounts}
          tags={tags}
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
        />
      }
    >
      <Breadcrumb path="context/" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Context
          {selectedCategory && (
            <span className="text-[rgb(var(--muted))] text-2xl ml-3 capitalize">
              / {selectedCategory}s
            </span>
          )}
          {selectedTag && (
            <span className="text-[rgb(var(--muted))] text-2xl ml-2">
              #{selectedTag}
            </span>
          )}
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          {selectedCategory || selectedTag ? (
            <>
              Showing {items.length} item{items.length !== 1 ? "s" : ""}.{" "}
              <Link
                href="/context"
                className="text-[rgb(var(--primary))] hover:underline"
              >
                View all
              </Link>
            </>
          ) : (
            <>
              Knowledge and experiences that have shaped my thinking.
              Books, courses, and professional experiences with one key takeaway from each.
            </>
          )}
        </p>
      </header>

      {/* Items */}
      <div className="space-y-6">
        {items.length === 0 ? (
          <p className="text-[rgb(var(--muted))] text-center py-8">
            No items found.{" "}
            <Link
              href="/context"
              className="text-[rgb(var(--primary))] hover:underline"
            >
              View all
            </Link>
          </p>
        ) : (
          items.map((item) => (
            <ContextCard
              key={item.id}
              item={item}
              selectedTag={selectedTag}
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
}: {
  item: ContextItem
  selectedTag: string | null
}) {
  const CategoryIcon = {
    book: Book,
    course: GraduationCap,
    experience: Briefcase,
  }[item.category]

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
                // Hide image on error, fallback handled by parent
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        ) : (
          <div className="mt-1 p-1.5 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))] group-hover:bg-[rgb(var(--primary))] group-hover:text-white transition-colors">
            <CategoryIcon className="w-4 h-4" />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <h2 className="font-serif text-xl text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
              {item.title}
            </h2>
          </div>

          <p className="font-mono text-xs text-[rgb(var(--muted))] mb-2">
            {item.subtitle}
          </p>

          <p className="text-[rgb(var(--text))] mb-3 italic">
            &ldquo;{item.takeaway}&rdquo;
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Link
                key={tag}
                href={`/context?tag=${tag}`}
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
  categories,
  categoryCounts,
  tags,
  selectedCategory,
  selectedTag,
}: {
  categories: ContextCategory[]
  categoryCounts: Record<ContextCategory, number>
  tags: string[]
  selectedCategory: ContextCategory | null
  selectedTag: string | null
}) {
  const categoryLabels: Record<ContextCategory, string> = {
    book: "Books",
    course: "Courses",
    experience: "Experiences",
  }

  const CategoryIcons: Record<ContextCategory, typeof Book> = {
    book: Book,
    course: GraduationCap,
    experience: Briefcase,
  }

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Categories
        </h3>
        <div className="space-y-1">
          <Link
            href="/context"
            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
              !selectedCategory && !selectedTag
                ? "bg-[rgb(var(--primary))] text-white"
                : "text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))]"
            }`}
          >
            All
          </Link>
          {categories.map((category) => {
            const Icon = CategoryIcons[category]
            const isActive = selectedCategory === category
            return (
              <Link
                key={category}
                href={`/context?category=${category}`}
                className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                  isActive
                    ? "bg-[rgb(var(--primary))] text-white"
                    : "text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{categoryLabels[category]}</span>
                <span className="ml-auto font-mono text-xs opacity-60">
                  {categoryCounts[category]}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Topics */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Topics
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => {
            const isActive = selectedTag === tag
            return (
              <Link
                key={tag}
                href={`/context?tag=${tag}`}
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
      </div>
    </div>
  )
}
