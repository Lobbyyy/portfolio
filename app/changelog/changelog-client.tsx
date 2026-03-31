"use client"

import { useEffect, useRef, useState } from "react"
import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import Link from "next/link"
import type { ChangelogEvent } from "@/lib/data/changelog-data"

interface ChangelogClientProps {
  eventsByYear: [number, ChangelogEvent[]][]
  years: number[]
}

export default function ChangelogClient({ eventsByYear, years }: ChangelogClientProps) {
  return (
    <EditorialLayout
      currentPath="changelog/"
      contextContent={<YearNavigation years={years} />}
    >
      <Breadcrumb path="changelog/" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Changelog
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          The inflection points. Moments that shaped who I am.
        </p>
      </header>

      {/* Timeline */}
      <div className="relative">
        {eventsByYear.map(([year, events], yearIndex) => (
          <div key={year}>
            <YearMarker year={year} />
            <div className="relative">
              {events.map((event, eventIndex) => (
                <TimelineEntry
                  key={event.id}
                  event={event}
                  index={yearIndex * 10 + eventIndex}
                  isLast={yearIndex === eventsByYear.length - 1 && eventIndex === events.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </EditorialLayout>
  )
}

function YearNavigation({ years }: { years: number[] }) {
  const scrollToYear = (year: number) => {
    const element = document.getElementById(`year-${year}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Jump to
        </h3>
        <div className="space-y-1">
          {years.map(year => (
            <button
              key={year}
              onClick={() => scrollToYear(year)}
              className="block font-mono text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--primary))] transition-colors"
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function YearMarker({ year }: { year: number }) {
  return (
    <div
      id={`year-${year}`}
      className="flex items-center gap-4 my-8 scroll-mt-20"
    >
      <div className="flex-1 h-[1px] bg-[rgb(var(--border))]" />
      <span className="font-mono text-sm text-[rgb(var(--muted))] px-2">
        {year}
      </span>
      <div className="flex-1 h-[1px] bg-[rgb(var(--border))]" />
    </div>
  )
}

function TimelineEntry({
  event,
  index,
  isLast,
}: {
  event: ChangelogEvent
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[rgb(var(--primary))] border-2 border-[rgb(var(--background))] z-10" />

      {/* Timeline line - hide for last item */}
      {!isLast && (
        <div className="absolute left-[5px] top-5 bottom-0 w-[2px] bg-[rgb(var(--border))]" />
      )}

      {/* Content */}
      <div className="group">
        <span className="font-mono text-xs text-[rgb(var(--muted))]">
          {event.date}
        </span>
        <h3 className="font-serif text-xl text-[rgb(var(--text))] mt-1 group-hover:text-[rgb(var(--primary))] transition-colors">
          {event.emoji && <span className="mr-2">{event.emoji}</span>}
          {event.title}
        </h3>
        <p className="text-[rgb(var(--muted))] mt-1">{event.description}</p>
        {event.link && (
          <Link
            href={event.link}
            className="inline-flex items-center gap-1 text-sm text-[rgb(var(--primary))] mt-2 hover:underline"
          >
            Learn more →
          </Link>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {event.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded bg-[rgb(var(--border))] text-[rgb(var(--muted))]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
