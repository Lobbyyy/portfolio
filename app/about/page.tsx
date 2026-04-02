import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"

export default function AboutPage() {
  return (
    <EditorialLayout >
      <Breadcrumb path="about.mdx" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          About
        </h1>
        <p className="text-lg text-[rgb(var(--muted))]">
          The story so far.
        </p>
      </header>

      {/* The Arc */}
      <section className="mb-16">
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          The Arc
        </h2>
        <div className="space-y-6 text-[rgb(var(--text))] leading-relaxed">
          <p>
            <span className="font-serif text-xl text-[rgb(var(--primary))]">Athlete → Economist → Consultant → Builder.</span>
          </p>
          <p>
            I competed for Team GB, studied Economics at LSE, spent 8+ years across sales,
            strategy consulting, and venture capital. Then I taught myself to code and
            hard pivoted into building.
          </p>
          <p>
            Now I build products at the intersection of AI and human creativity.
            I believe in moving fast, shipping often, and learning in public.
          </p>
        </div>
      </section>

      {/* The CKC Framework */}
      <section className="mb-16">
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          The CKC Framework
        </h2>
        <p className="text-[rgb(var(--muted))] mb-6">
          Three values I try to embody in everything I do:
        </p>
        <div className="grid gap-6">
          <FrameworkCard
            letter="C"
            title="Competence"
            description="Do the work. Know your craft. Be genuinely good at what you do."
          />
          <FrameworkCard
            letter="K"
            title="Kindness"
            description="How you treat people matters. Lift others up. Be generous with your knowledge."
          />
          <FrameworkCard
            letter="C"
            title="Confidence"
            description="Back yourself. Take swings. If someone says you can't, find a way."
          />
        </div>
      </section>

      {/* Things I Believe */}
      <section className="mb-16">
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          Things I Believe
        </h2>
        <ul className="space-y-4">
          <BeliefItem text="Interesting people build interesting companies." />
          <BeliefItem text="Building businesses is both an art and a science." />
          <BeliefItem text="The best way to learn is to ship." />
          <BeliefItem text="Hunger beats experience (ideally you're both)." />
          <BeliefItem text="How you communicate is how you think." />
        </ul>
      </section>

      {/* Background */}
      <section>
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          Background
        </h2>
        <div className="space-y-4 font-mono text-sm">
          <BackgroundItem label="Education" value="LSE (Economics)" />
          <BackgroundItem label="Athletics" value="Ex-Team GB" />
          <BackgroundItem label="Experience" value="8+ years in sales, strategy, venture" />
          <BackgroundItem label="Now" value="Building with AI" />
        </div>
      </section>
    </EditorialLayout>
  )
}

function FrameworkCard({
  letter,
  title,
  description,
}: {
  letter: string
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4 p-4 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <span className="font-serif text-4xl text-[rgb(var(--primary))]">{letter}</span>
      <div>
        <h3 className="font-medium text-[rgb(var(--text))] mb-1">{title}</h3>
        <p className="text-sm text-[rgb(var(--muted))]">{description}</p>
      </div>
    </div>
  )
}

function BeliefItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-[rgb(var(--primary))] mt-1">→</span>
      <span className="text-[rgb(var(--text))]">{text}</span>
    </li>
  )
}

function BackgroundItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-[rgb(var(--border))]">
      <span className="text-[rgb(var(--muted))]">{label}</span>
      <span className="text-[rgb(var(--text))]">{value}</span>
    </div>
  )
}
