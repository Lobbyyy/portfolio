import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"

/**
 * Felix Rieseberg's four kinds of ambition drawn as directions from your task:
 * altitude goes up (the outcome), depth goes down (the expert layer),
 * range goes out (other fields), and speed stays put, just faster.
 * Used in markdown as <ambition-compass></ambition-compass>.
 */
export default function AmbitionCompass() {
  return (
    <figure
      className="not-prose my-10 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 md:p-6"
      aria-label="Diagram: altitude is up from your task, depth is down, range is out to the sides, and speed is the same task done faster"
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-3">
        {/* Altitude: up */}
        <DirectionCard
          className="col-span-3"
          name="Altitude"
          direction="Up"
          line="Aim at the outcome, not the task."
          ask="What's the goal behind the goal?"
        />
        <Arrow className="col-span-3 justify-self-center">
          <ArrowUp className="h-5 w-5" />
        </Arrow>

        {/* Range: out, on both sides */}
        <DirectionCard name="Range" direction="Out" line="Bring in other fields." compact />
        <div className="flex items-center gap-1 md:gap-2">
          <Arrow>
            <ArrowLeft className="h-5 w-5" />
          </Arrow>
          {/* The task, with speed as the ring around it */}
          <div className="rounded-full border-2 border-dashed border-[rgb(var(--primary))] p-1.5">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[rgb(var(--primary))] text-center text-white md:h-24 md:w-24">
              <span className="font-mono text-[10px] uppercase tracking-wider opacity-80">Start</span>
              <span className="font-serif text-base leading-tight md:text-lg">Your task</span>
            </div>
          </div>
          <Arrow>
            <ArrowRight className="h-5 w-5" />
          </Arrow>
        </div>
        <DirectionCard name="Range" direction="Out" line="Hire the crew you'd need." compact />

        <Arrow className="col-span-3 justify-self-center">
          <ArrowDown className="h-5 w-5" />
        </Arrow>
        {/* Depth: down */}
        <DirectionCard
          className="col-span-3"
          name="Depth"
          direction="Down"
          line="Work the way the best expert would."
          ask="What raw data would they start from?"
        />
      </div>

      <figcaption className="mt-5 border-t border-[rgb(var(--border))] pt-4 text-center text-sm text-[rgb(var(--muted))]">
        <span className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--primary))]">Speed</span>{" "}
        is the dashed ring: the same task, just faster. Useful, but it's the default.
        <br />
        Framework by{" "}
        <a
          href="https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--primary))] hover:underline underline-offset-2"
        >
          Felix Rieseberg
        </a>
        .
      </figcaption>
    </figure>
  )
}

function DirectionCard({
  name,
  direction,
  line,
  ask,
  compact = false,
  className = "",
}: {
  name: string
  direction: string
  line: string
  ask?: string
  compact?: boolean
  className?: string
}) {
  return (
    <div
      className={`rounded-lg border border-[rgb(var(--border))] px-3 py-2.5 text-center ${className}`}
    >
      <div className="font-mono text-[10px] uppercase tracking-wider text-[rgb(var(--muted))]">
        {direction}
      </div>
      <div className={`font-serif text-[rgb(var(--text))] ${compact ? "text-base" : "text-xl"}`}>
        {name}
      </div>
      <div className={`text-[rgb(var(--text))] ${compact ? "text-xs leading-snug" : "text-sm"}`}>
        {line}
      </div>
      {ask && <div className="mt-1 text-xs italic text-[rgb(var(--muted))]">Ask: {ask}</div>}
    </div>
  )
}

function Arrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-[rgb(var(--primary))] ${className}`}>{children}</div>
}
