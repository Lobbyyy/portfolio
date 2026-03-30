import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PERSONAL, COMPANIES, ESSAYS, PURSUITS } from "@/lib/data/portfolio-data"

// Get companies for the "Weapon of Mass Creation" pursuit
const displayCompanies = COMPANIES.slice(0, 4)
// Get essays for the "Unlocking the Secrets" pursuit
const displayEssays = ESSAYS.slice(0, 3)

export default function Home() {
  return (
    <EditorialLayout currentPath="home.mdx">
      <Breadcrumb path="home.mdx" />

      {/* Hero - SECA Identity */}
      <header className="mb-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-4 leading-tight">
          <span className="text-[rgb(var(--primary))]">S</span>
          <span className="text-[rgb(var(--muted))]">.</span>
          <span className="text-[rgb(var(--primary))]">E</span>
          <span className="text-[rgb(var(--muted))]">.</span>
          <span className="text-[rgb(var(--primary))]">C</span>
          <span className="text-[rgb(var(--muted))]">.</span>
          <span className="text-[rgb(var(--primary))]">A</span>
        </h1>
        <p className="font-mono text-sm text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          {PERSONAL.identityExpanded}
        </p>
        <p className="text-lg text-[rgb(var(--muted))] max-w-xl leading-relaxed">
          {PERSONAL.bio}
        </p>
      </header>

      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="font-mono text-xs text-[rgb(var(--primary))] uppercase tracking-wider mb-3">
          The Mission
        </h2>
        <p className="text-lg text-[rgb(var(--muted))] leading-relaxed">
          To be the best version of myself and help others do the same.
        </p>
      </section>

      {/* Goals Section */}
      <section className="mb-6">
        <h2 className="font-mono text-xs text-[rgb(var(--primary))] uppercase tracking-wider mb-3">
          The Goals
        </h2>
        <p className="text-lg text-[rgb(var(--muted))] leading-relaxed">
          Three pursuits across mind, body, and soul.
        </p>
      </section>

      {/* Three Pursuits - Numbered with Categories */}
      <div className="space-y-12">
        {/* Pursuit 1: Weapon of Mass Creation */}
        <PursuitCard
          category="SOUL"
          title={PURSUITS[0].title}
          subtitle={PURSUITS[0].subtitle}
        >
          <p className="text-sm text-[rgb(var(--muted))] mb-4">So far, I&apos;ve built:</p>
          <div className="space-y-2 mb-6">
            {displayCompanies.map((company) => (
              <CompanyLink
                key={company.slug}
                name={company.name}
                tagline={company.tagline}
                logo={company.logo}
                href={`/companies/${company.slug}`}
              />
            ))}
          </div>
          <Link
            href="/companies"
            className="inline-flex items-center gap-1 text-sm text-[rgb(var(--primary))] hover:underline"
          >
            View all
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </PursuitCard>

        {/* Pursuit 2: Unlocking the Secrets of the Universe */}
        <PursuitCard
          category="MIND"
          title={PURSUITS[1].title}
          subtitle={PURSUITS[1].subtitle}
        >
          <p className="text-sm text-[rgb(var(--muted))] mb-4">So far, I&apos;ve explored:</p>
          <div className="space-y-1.5 mb-6">
            {displayEssays.map((essay) => (
              <Link
                key={essay.slug}
                href={`/essays/${essay.slug}`}
                className="block text-sm text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] transition-colors"
              >
                → {essay.title}
              </Link>
            ))}
          </div>
          <Link
            href="/essays"
            className="inline-flex items-center gap-1 text-sm text-[rgb(var(--primary))] hover:underline"
          >
            Read more
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </PursuitCard>

        {/* Pursuit 3: Run Around the World */}
        <PursuitCard
          category="BODY"
          title={PURSUITS[2].title}
          subtitle={PURSUITS[2].subtitle}
        >
          <p className="text-sm text-[rgb(var(--muted))] mb-4">So far, I&apos;ve run:</p>
          <ProgressBar
            current={PURSUITS[2].current!}
            goal={PURSUITS[2].goal!}
            unit={PURSUITS[2].unit!}
          />
        </PursuitCard>
      </div>

      {/* Divider */}
      <hr className="my-16 border-[rgb(var(--border))]" />

      {/* Explore Section */}
      <section className="mb-16">
        <h2 className="font-mono text-xs text-[rgb(var(--primary))] uppercase tracking-wider mb-3">
          Explore
        </h2>
        <p className="text-lg text-[rgb(var(--muted))] mb-6">
          Dive deeper into the work and the thinking behind it.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <ExploreCard href="/essays" title="Essays" description="Deep dives on building, thinking, and creating" />
          <ExploreCard href="/companies" title="Companies" description="What I'm building" />
          <ExploreCard href="/context" title="Context" description="Books, experiences, and influences" />
          <ExploreCard href="/changelog" title="Changelog" description="The journey so far" />
        </div>
      </section>

      {/* Work With Me Section */}
      <section>
        <h2 className="font-mono text-xs text-[rgb(var(--primary))] uppercase tracking-wider mb-3">
          Work With Me
        </h2>
        <p className="text-lg text-[rgb(var(--muted))] mb-6">
          Looking to collaborate? Here&apos;s how we might work together.
        </p>

        <div className="grid gap-4">
          {/* Tier 1 */}
          <Link
            href="/contact"
            className="group flex items-center justify-between p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors"
          >
            <div>
              <h3 className="font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors mb-1">Build With Me</h3>
              <p className="text-sm text-[rgb(var(--muted))]">
                If you back ambitious founders or want to build alongside one, let&apos;s talk.
              </p>
            </div>
            <span className="font-mono text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors">
              Join the Team →
            </span>
          </Link>

          {/* Tier 2 */}
          <Link
            href="/contact"
            className="group flex items-center justify-between p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors"
          >
            <div>
              <h3 className="font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors mb-1">Advisory & Speaking</h3>
              <p className="text-sm text-[rgb(var(--muted))]">
                Board seats, fractional roles, and speaking opportunities.
              </p>
            </div>
            <span className="font-mono text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors">
              Get in touch →
            </span>
          </Link>

          {/* Tier 3 */}
          <Link
            href="/contact"
            className="group flex items-center justify-between p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors"
          >
            <div>
              <h3 className="font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors mb-1">Projects</h3>
              <p className="text-sm text-[rgb(var(--muted))]">
                Selective consulting for founders building something meaningful.
              </p>
            </div>
            <span className="font-mono text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors">
              Discuss →
            </span>
          </Link>
        </div>
      </section>
    </EditorialLayout>
  )
}

// Component: Pursuit Card
function PursuitCard({
  category,
  title,
  subtitle,
  children,
}: {
  category?: "SOUL" | "MIND" | "BODY"
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section className="group/card border-l-2 border-transparent hover:border-[rgb(var(--primary))] pl-4 -ml-4 py-4 transition-colors">
      {category && (
        <span className="inline-block font-mono text-xs text-[rgb(var(--muted))] group-hover/card:text-[rgb(var(--primary))] uppercase tracking-widest mb-3 transition-colors">
          {category}
        </span>
      )}
      <h3 className="text-lg text-[rgb(var(--muted))] group-hover/card:text-[rgb(var(--primary))] transition-colors mb-3">
        {title}
      </h3>
      <p className="text-sm text-[rgb(var(--muted))] mb-6">
        {subtitle}
      </p>
      {children}
    </section>
  )
}

// Component: Company Link (with logo)
function CompanyLink({
  name,
  tagline,
  logo,
  href,
}: {
  name: string
  tagline: string
  logo?: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 group"
    >
      {logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-5 h-5 rounded object-contain"
        />
      )}
      <span className="text-sm text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
        {name}
      </span>
      <span className="text-sm text-[rgb(var(--muted))]">
        — {tagline}
      </span>
    </Link>
  )
}

// Component: Progress Bar
function ProgressBar({
  current,
  goal,
  unit,
}: {
  current: number
  goal: number
  unit: string
}) {
  const percentage = Math.round((current / goal) * 100)
  const remaining = goal - current

  return (
    <div>
      {/* Progress bar */}
      <div className="h-3 bg-[rgb(var(--border))] rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-[rgb(var(--primary))] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {/* Stats */}
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-[rgb(var(--text))]">
          {current.toLocaleString()} / {goal.toLocaleString()} {unit}
        </span>
        <span className="font-mono text-sm text-[rgb(var(--muted))]">
          {percentage}%
        </span>
      </div>
      <p className="text-sm text-[rgb(var(--muted))] mt-2">
        {remaining.toLocaleString()} {unit} to go
      </p>
    </div>
  )
}

// Component: Explore Card
function ExploreCard({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-center p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors min-h-[120px]"
    >
      <h3 className="font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-[rgb(var(--muted))]">
        {description}
      </p>
    </Link>
  )
}
