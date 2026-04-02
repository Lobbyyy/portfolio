import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import { COMPANIES, CompanyStatus, Company } from "@/lib/data/portfolio-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function generateStaticParams() {
  return COMPANIES.map((company) => ({ slug: company.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = COMPANIES.find((c) => c.slug === slug)
  if (!company) return { title: "Not Found" }
  return {
    title: `${company.name} - ${company.tagline}`,
    description: company.problem,
  }
}

const statusConfig: Record<CompanyStatus, { color: string; label: string }> = {
  active: { color: "bg-green-500", label: "Active" },
  live: { color: "bg-blue-500", label: "Live" },
  exploring: { color: "bg-yellow-500", label: "Exploring" },
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = COMPANIES.find((c) => c.slug === slug)
  if (!company) notFound()

  return (
    <EditorialLayout
      
      contextContent={<CompanyContext company={company} />}
      share={{
        url: `https://lobsang-lama.com/companies/${company.slug}`,
        title: company.name,
        subtitle: company.tagline,
        tag: "Company",
      }}
    >
      <Breadcrumb path={`companies/${company.slug}`} />

      {/* Hero */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          {company.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-12 h-12 rounded object-contain"
            />
          )}
          <h1 className="font-serif text-4xl md:text-5xl text-[rgb(var(--text))]">
            {company.name}
          </h1>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono bg-[rgb(var(--border))]">
            <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[company.status].color}`} />
            {statusConfig[company.status].label}
          </span>
        </div>
        <p className="text-xl text-[rgb(var(--primary))] font-mono">
          {company.tagline}
        </p>
      </header>

      {/* Problem */}
      <section className="mb-12">
        <h2 className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--muted))] mb-3">
          The Problem
        </h2>
        <p className="text-lg leading-relaxed text-[rgb(var(--text))]">
          {company.problem}
        </p>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--muted))] mb-3">
          The Solution
        </h2>
        <p className="text-lg leading-relaxed text-[rgb(var(--text))]">
          {company.solution}
        </p>
      </section>

      {/* Why I Built It */}
      <section className="mb-12">
        <h2 className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--muted))] mb-3">
          Why I Built It
        </h2>
        <p className="text-lg leading-relaxed text-[rgb(var(--text))]">
          {company.whyIBuiltIt}
        </p>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        <a
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(var(--primary))] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Visit {company.name}
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[rgb(var(--border))] rounded-lg text-[rgb(var(--text))] hover:border-[rgb(var(--primary))] transition-colors"
        >
          {company.cta || "Get in touch"}
        </Link>
      </div>
    </EditorialLayout>
  )
}

function CompanyContext({ company }: { company: Company }) {
  return (
    <div className="space-y-6">
      {/* Company Info */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Company Info
        </h3>
        <div className="space-y-2">
          <p className="text-sm text-[rgb(var(--text))]">
            <span className="text-[rgb(var(--muted))]">Status:</span>{" "}
            <span className="capitalize">{statusConfig[company.status].label}</span>
          </p>
        </div>
      </div>

      {/* Links */}
      <div>
        <h3 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-3">
          Links
        </h3>
        <a
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[rgb(var(--primary))] hover:underline"
        >
          {company.url.replace(/^https?:\/\//, "")}
        </a>
      </div>
    </div>
  )
}
