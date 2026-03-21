import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import { Mail, Calendar, Twitter, Linkedin, Github } from "lucide-react"

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
            value="hello@example.com"
            href="mailto:hello@example.com"
          />
          <ContactLink
            icon={<Calendar className="w-5 h-5" />}
            label="Schedule a call"
            value="Calendly"
            href="https://calendly.com"
          />
          <ContactLink
            icon={<Twitter className="w-5 h-5" />}
            label="Twitter / X"
            value="@username"
            href="https://twitter.com"
          />
          <ContactLink
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            value="Connect"
            href="https://linkedin.com"
          />
          <ContactLink
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
            value="@username"
            href="https://github.com"
          />
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="mb-16">
        <h2 className="font-mono text-xs text-[rgb(var(--muted))] uppercase tracking-wider mb-6">
          Open To
        </h2>
        <ul className="space-y-3">
          <OpenToItem text="Collaboration on AI/creative projects" />
          <OpenToItem text="Speaking opportunities" />
          <OpenToItem text="Advising early-stage founders" />
          <OpenToItem text="Interesting conversations" />
        </ul>
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

function OpenToItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--primary))]" />
      <span className="text-[rgb(var(--text))]">{text}</span>
    </li>
  )
}
