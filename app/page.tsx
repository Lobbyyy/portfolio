import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <EditorialLayout currentPath="home.mdx">
      <Breadcrumb path="home.mdx" />

      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-[rgb(var(--text))] mb-6 leading-tight">
          I build things that{" "}
          <span className="text-[rgb(var(--primary))]">matter</span>.
        </h1>
        <p className="text-lg text-[rgb(var(--muted))] max-w-xl leading-relaxed">
          Entrepreneur with a background in economics, athletics, and venture.
          Currently building at the intersection of AI and human creativity.
        </p>
      </header>

      {/* Current Focus */}
      <section className="mb-16">
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          Currently Building
        </h2>
        <div className="grid gap-4">
          <CompanyCard
            name="Supanova"
            description="AI video production"
            status="active"
            href="/companies/supanova"
          />
          <CompanyCard
            name="1z2"
            description="Content research intelligence"
            status="active"
            href="/companies/1z2"
          />
        </div>
        <Link
          href="/companies"
          className="inline-flex items-center gap-1 mt-4 text-sm text-[rgb(var(--primary))] hover:underline"
        >
          View all companies
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </section>

      {/* Latest Writing */}
      <section className="mb-16">
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          Latest Writing
        </h2>
        <div className="space-y-4">
          <JournalEntry
            title="On Building in Public"
            date="Mar 15, 2026"
            href="/journal/building-in-public"
          />
          <JournalEntry
            title="The CKC Framework"
            date="Mar 10, 2026"
            href="/journal/ckc-framework"
          />
          <JournalEntry
            title="Fourth Dimensional Thinking"
            date="Mar 5, 2026"
            href="/journal/fourth-dimensional"
          />
        </div>
        <Link
          href="/journal"
          className="inline-flex items-center gap-1 mt-4 text-sm text-[rgb(var(--primary))] hover:underline"
        >
          Read more
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </section>

      {/* Values */}
      <section>
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          What I Believe
        </h2>
        <blockquote className="font-serif text-2xl italic text-[rgb(var(--text))] border-l-2 border-[rgb(var(--primary))] pl-6">
          "Interesting people build interesting companies."
        </blockquote>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <ValueCard letter="C" word="Competence" />
          <ValueCard letter="K" word="Kindness" />
          <ValueCard letter="C" word="Confidence" />
        </div>
      </section>
    </EditorialLayout>
  )
}

// Component: Company Card
function CompanyCard({
  name,
  description,
  status,
  href,
}: {
  name: string
  description: string
  status: "active" | "live" | "exploring"
  href: string
}) {
  const statusColors = {
    active: "bg-green-500",
    live: "bg-blue-500",
    exploring: "bg-yellow-500",
  }

  return (
    <Link
      href={href}
      className="editorial-elevated-card group flex items-center justify-between p-4 rounded-lg border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))] transition-colors"
    >
      <div>
        <h3 className="font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
          {name}
        </h3>
        <p className="text-sm text-[rgb(var(--muted))]">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
        <ArrowUpRight className="w-4 h-4 text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors" />
      </div>
    </Link>
  )
}

// Component: Journal Entry
function JournalEntry({
  title,
  date,
  href,
}: {
  title: string
  date: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between py-2 border-b border-[rgb(var(--border))] hover:border-[rgb(var(--primary))] transition-colors"
    >
      <span className="text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
        {title}
      </span>
      <span className="font-mono text-xs text-[rgb(var(--muted))]">{date}</span>
    </Link>
  )
}

// Component: Value Card
function ValueCard({ letter, word }: { letter: string; word: string }) {
  return (
    <div className="editorial-elevated-card text-center p-4 rounded-lg border border-[rgb(var(--border))]">
      <span className="font-serif text-3xl text-[rgb(var(--primary))]">
        {letter}
      </span>
      <p className="text-sm text-[rgb(var(--muted))] mt-1">{word}</p>
    </div>
  )
}
