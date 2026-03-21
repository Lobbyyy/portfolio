import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const COMPANIES = [
  {
    slug: "supanova",
    name: "Supanova",
    description: "AI video production",
    longDescription: "Helping creators produce professional video content with AI-powered tools.",
    url: "https://www.iamsupanova.com",
    status: "active" as const,
  },
  {
    slug: "1z2",
    name: "1z2",
    description: "Content research intelligence",
    longDescription: "AI-powered platform for content research and competitive analysis.",
    url: "https://www.1z2.app",
    status: "active" as const,
  },
  {
    slug: "our-circles",
    name: "Our Circles",
    description: "Family life sharing",
    longDescription: "A private space for families to share moments and stay connected.",
    url: "https://www.our-circles.com",
    status: "live" as const,
  },
  {
    slug: "20punches",
    name: "20 Punches",
    description: "AI financial advisory",
    longDescription: "Making financial advice accessible through AI-powered guidance.",
    url: "https://www.20punches.co.uk",
    status: "live" as const,
  },
]

export default function CompaniesPage() {
  return (
    <EditorialLayout currentPath="companies/">
      <Breadcrumb path="companies/" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Companies
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          Things I'm building. Each one started as a problem I wanted to solve.
        </p>
      </header>

      <div className="space-y-6">
        {COMPANIES.map((company) => (
          <CompanyCard key={company.slug} {...company} />
        ))}
      </div>
    </EditorialLayout>
  )
}

function CompanyCard({
  slug,
  name,
  description,
  longDescription,
  url,
  status,
}: {
  slug: string
  name: string
  description: string
  longDescription: string
  url: string
  status: "active" | "live" | "exploring"
}) {
  const statusConfig = {
    active: { color: "bg-green-500", label: "Active" },
    live: { color: "bg-blue-500", label: "Live" },
    exploring: { color: "bg-yellow-500", label: "Exploring" },
  }

  return (
    <div className="group p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <h2 className="font-serif text-2xl text-[rgb(var(--text))]">{name}</h2>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono bg-[rgb(var(--border))]">
            <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[status].color}`} />
            {statusConfig[status].label}
          </span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md hover:bg-[rgb(var(--border))] transition-colors"
          aria-label={`Visit ${name}`}
        >
          <ExternalLink className="w-4 h-4 text-[rgb(var(--muted))]" />
        </a>
      </div>

      <p className="text-sm text-[rgb(var(--primary))] font-mono mb-2">{description}</p>
      <p className="text-[rgb(var(--muted))]">{longDescription}</p>

      <Link
        href={`/companies/${slug}`}
        className="inline-flex items-center gap-1 mt-4 text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] transition-colors"
      >
        Read more
        <ArrowUpRight className="w-3 h-3" />
      </Link>
    </div>
  )
}
