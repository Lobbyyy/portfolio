import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"

const EXPERIMENTS = [
  {
    name: "ai-journaling-companion",
    description: "A thoughtful AI that helps you reflect and write",
    progress: 60,
    status: "paused",
    reason: "Exploring different interaction models",
  },
  {
    name: "founder-matching-algo",
    description: "Better cofounder matching based on working styles",
    progress: 40,
    status: "paused",
    reason: "Need more data to validate approach",
  },
  {
    name: "voice-memo-to-blog",
    description: "Turn rambling voice notes into polished posts",
    progress: 25,
    status: "exploring",
    reason: "Early prototype stage",
  },
  {
    name: "habit-streaks-api",
    description: "Simple API for tracking streaks in any app",
    progress: 80,
    status: "paused",
    reason: "Works but needs a home",
  },
  {
    name: "startup-idea-validator",
    description: "Quick validation framework for new ideas",
    progress: 15,
    status: "exploring",
    reason: "Just started",
  },
]

export default function LocalhostPage() {
  return (
    <EditorialLayout currentPath="localhost/">
      <Breadcrumb path="localhost/" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          ~/localhost
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          Experiments that may never leave localhost. Unfinished ideas, paused projects,
          and things I&apos;m tinkering with. The graveyard and the nursery.
        </p>
      </header>

      {/* Experiments List */}
      <div className="space-y-4">
        {EXPERIMENTS.map((experiment) => (
          <ExperimentCard key={experiment.name} {...experiment} />
        ))}
      </div>

      {/* Footer Note */}
      <footer className="mt-12 p-4 rounded-lg border border-dashed border-[rgb(var(--border))]">
        <p className="text-sm text-[rgb(var(--muted))] italic text-center">
          &ldquo;A lot more that may never leave localhost lol&rdquo;
        </p>
      </footer>
    </EditorialLayout>
  )
}

function ExperimentCard({
  name,
  description,
  progress,
  status,
  reason,
}: {
  name: string
  description: string
  progress: number
  status: string
  reason: string
}) {
  return (
    <div className="p-4 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-mono text-sm text-[rgb(var(--text))]">
            {name}.mdx
          </h3>
          <p className="text-sm text-[rgb(var(--muted))] mt-1">{description}</p>
        </div>
        <span className="font-mono text-xs text-[rgb(var(--muted))] px-2 py-1 rounded bg-[rgb(var(--border))]">
          {status}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-xs text-[rgb(var(--muted))]">Progress</span>
          <span className="font-mono text-xs text-[rgb(var(--primary))]">{progress}%</span>
        </div>
        <div className="h-1.5 bg-[rgb(var(--border))] rounded-full overflow-hidden">
          <div
            className="h-full bg-[rgb(var(--primary))] rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Reason */}
      <p className="mt-3 text-xs text-[rgb(var(--muted))] italic">
        → {reason}
      </p>
    </div>
  )
}
