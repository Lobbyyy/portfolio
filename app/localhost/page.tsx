import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"

const EXPERIMENTS = [
  {
    name: "midas",
    description: "In the future, there will be no UI. Gesture-based HCI using computer vision — control your desktop with hand movements.",
    progress: 40,
    status: "building",
    reason: "Core tech de-risked. One game working. Expanding use cases.",
  },
  {
    name: "themis",
    description: "Polymarket meets LLM Arena. Pick a question, select AI agents for/against, watch them debate, vote on the winner.",
    progress: 85,
    status: "ready",
    reason: "UI complete. Needs production deployment.",
  },
  {
    name: "lifta",
    description: "Your AI weightlifting coach. Voice-based, science-backed training tracking.",
    progress: 70,
    status: "building",
    reason: "Demo done. UI refreshed. Needs wiring + App Store launch.",
  },
  {
    name: "scoutr",
    description: "Find your first 100 users. Reddit community discovery for founders who hate cold outreach.",
    progress: 75,
    status: "ready",
    reason: "Flows validated. Needs production push.",
  },
  {
    name: "sands",
    description: "Visualize your life. A memento mori app that makes time tangible. Harvard CS50 project.",
    progress: 100,
    status: "live",
    reason: "Live. UI refresh planned with new skills.",
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
          Side projects and experiments. Some will ship, some won&apos;t.
          The best ideas often start here.
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
