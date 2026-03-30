"use client"

import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import { useRouter } from "next/navigation"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { COMPANIES, CompanyStatus } from "@/lib/data/portfolio-data"

export default function CompaniesPage() {
  return (
    <EditorialLayout currentPath="companies/">
      <Breadcrumb path="companies/" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Companies
        </h1>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-[rgb(var(--muted))]">
              Things I&apos;m building. Each one started as a problem I wanted to solve.
              {" "}<a href="/contact" className="text-[rgb(var(--primary))] hover:underline">Curious or want to get involved?</a>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <span className="group relative flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono bg-[rgb(var(--border))] cursor-help">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Active
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-[rgb(var(--text))] text-[rgb(var(--background))] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Building actively
              </span>
            </span>
            <span className="group relative flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono bg-[rgb(var(--border))] cursor-help">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Live
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-[rgb(var(--text))] text-[rgb(var(--background))] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Launched &amp; serving users
              </span>
            </span>
          </div>
        </div>
      </header>

      <div className="space-y-6">
        {COMPANIES.map((company) => (
          <CompanyCard
            key={company.slug}
            slug={company.slug}
            name={company.name}
            description={company.description}
            longDescription={company.longDescription}
            url={company.url}
            logo={company.logo}
            status={company.status}
          />
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
  logo,
  status,
}: {
  slug: string
  name: string
  description: string
  longDescription: string
  url: string
  logo?: string
  status: CompanyStatus
}) {
  const router = useRouter()
  const statusConfig = {
    active: { color: "bg-green-500", label: "Active" },
    live: { color: "bg-blue-500", label: "Live" },
    exploring: { color: "bg-yellow-500", label: "Exploring" },
  }

  return (
    <div
      onClick={() => router.push(`/companies/${slug}`)}
      className="group block p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-8 h-8 rounded object-contain"
            />
          )}
          <h2 className="font-serif text-2xl text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">{name}</h2>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono bg-[rgb(var(--border))]">
            <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[status].color}`} />
            {statusConfig[status].label}
          </span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
          aria-label={`Visit ${name}`}
        >
          Visit
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <p className="text-sm text-[rgb(var(--primary))] font-mono mb-2">{description}</p>
      <p className="text-[rgb(var(--muted))] mb-4">{longDescription}</p>

      <span className="inline-flex items-center gap-1 text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors">
        Learn more
        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </div>
  )
}
