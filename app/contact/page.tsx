import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import { Mail, Twitter, Linkedin, Github } from "lucide-react"

export default function ContactPage() {
  return (
    <EditorialLayout currentPath="contact.mdx">
      <Breadcrumb path="contact.mdx" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Contact
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          Always happy to chat with interesting people.
        </p>
      </header>

      {/* Contact Links */}
      <section className="mb-16">
        <div className="grid gap-4">
          <ContactLink
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            value="contact@lobsang-lama.com"
            href="mailto:contact@lobsang-lama.com"
          />
          <ContactLink
            icon={<Twitter className="w-5 h-5" />}
            label="Twitter / X"
            value="@Lobbyyyyyy"
            href="https://x.com/Lobbyyyyyy"
          />
          <ContactLink
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            value="Connect"
            href="https://www.linkedin.com/in/lobsang-lama-42a76b63/"
          />
          <ContactLink
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
            value="@Lobbyyy"
            href="https://github.com/Lobbyyy"
          />
        </div>
      </section>

      {/* Work With Me */}
      <section className="mb-16">
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          Work With Me
        </h2>
        <p className="text-[rgb(var(--muted))] mb-6">
          Looking to collaborate? Here&apos;s how we might work together.
        </p>

        <div className="grid gap-4">
          <WorkWithMeCard
            title="Build With Me"
            description="If you back ambitious founders or want to build alongside one, let's talk."
            cta="Join the Team"
          />
          <WorkWithMeCard
            title="Advisory & Speaking"
            description="Board seats, fractional roles, and speaking opportunities."
            cta="Get in touch"
          />
          <WorkWithMeCard
            title="Projects"
            description="Selective consulting for founders building something meaningful."
            cta="Discuss"
          />
        </div>
      </section>

      {/* Note */}
      <section>
        <div className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
          <p className="text-sm text-[rgb(var(--muted))] italic">
            I try to respond to all messages, though it might take a few days.
            For urgent matters, DM on Twitter is usually fastest.
          </p>
        </div>
      </section>
    </EditorialLayout>
  )
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors">
          {icon}
        </span>
        <span className="text-[rgb(var(--text))]">{label}</span>
      </div>
      <span className="font-mono text-sm text-[rgb(var(--muted))]">{value}</span>
    </a>
  )
}

function WorkWithMeCard({
  title,
  description,
  cta,
}: {
  title: string
  description: string
  cta: string
}) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] hover:border-[rgb(var(--primary))] transition-colors">
      <div>
        <h3 className="font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors mb-1">
          {title}
        </h3>
        <p className="text-sm text-[rgb(var(--muted))]">{description}</p>
      </div>
      <span className="font-mono text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--primary))] transition-colors sm:flex-shrink-0">
        {cta} &rarr;
      </span>
    </div>
  )
}
