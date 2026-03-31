import EditorialLayout from "@/components/editorial/EditorialLayout"
import Breadcrumb from "@/components/editorial/Breadcrumb"
import SupportFooter from "@/components/editorial/SupportFooter"
import { Download, ExternalLink, Folder, FileText } from "lucide-react"

const RESOURCE_CATEGORIES = [
  {
    name: "fundraising",
    label: "Fundraising",
    description: "Templates and guides for raising capital",
    items: [
      { name: "Pitch Deck Template", type: "template", href: "#" },
      { name: "Investor CRM", type: "template", href: "#" },
      { name: "SAFE Notes Explained", type: "guide", href: "#" },
    ],
  },
  {
    name: "product",
    label: "Product",
    description: "Resources for building great products",
    items: [
      { name: "PRD Template", type: "template", href: "#" },
      { name: "User Interview Guide", type: "guide", href: "#" },
      { name: "Metrics Dashboard", type: "template", href: "#" },
    ],
  },
  {
    name: "mindset",
    label: "Mindset",
    description: "Frameworks for thinking",
    items: [
      { name: "The CKC Framework", type: "guide", href: "/about" },
      { name: "Decision Journal Template", type: "template", href: "#" },
    ],
  },
  {
    name: "tools",
    label: "Tools I Use",
    description: "My current stack",
    items: [
      { name: "Development Setup", type: "list", href: "#" },
      { name: "Design Tools", type: "list", href: "#" },
      { name: "Productivity Apps", type: "list", href: "#" },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <EditorialLayout currentPath="resources/">
      <Breadcrumb path="resources/" />

      <header className="mb-12">
        <h1 className="font-serif text-4xl text-[rgb(var(--text))] mb-4">
          Resources
        </h1>
        <p className="text-[rgb(var(--muted))] max-w-xl">
          Templates, guides, and tools I&apos;ve found useful. Take what&apos;s helpful.
        </p>
      </header>

      {/* File Tree View */}
      <div className="font-mono text-sm mb-8 p-4 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
        <div className="text-[rgb(var(--muted))]">~/resources/</div>
        {RESOURCE_CATEGORIES.map((category, i) => (
          <div key={category.name} className="ml-4">
            <span className="text-[rgb(var(--muted))]">
              {i === RESOURCE_CATEGORIES.length - 1 ? "└── " : "├── "}
            </span>
            <span className="text-[rgb(var(--primary))]">{category.name}/</span>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="space-y-8">
        {RESOURCE_CATEGORIES.map((category) => (
          <ResourceCategory key={category.name} {...category} />
        ))}
      </div>

      {/* Support Footer */}
      <SupportFooter />
    </EditorialLayout>
  )
}

function ResourceCategory({
  name,
  description,
  items,
}: {
  name: string
  label?: string
  description: string
  items: { name: string; type: string; href: string }[]
}) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-2">
        <Folder className="w-4 h-4 text-[rgb(var(--primary))]" />
        <h2 className="font-mono text-sm text-[rgb(var(--text))]">{name}/</h2>
      </div>
      <p className="text-sm text-[rgb(var(--muted))] mb-4 ml-6">{description}</p>

      <div className="space-y-2 ml-6">
        {items.map((item) => (
          <ResourceItem key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

function ResourceItem({
  name,
  type,
  href,
}: {
  name: string
  type: string
  href: string
}) {
  const isExternal = href.startsWith("http")
  const isDownload = type === "template"

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between py-2 px-3 rounded-md hover:bg-[rgb(var(--border))] transition-colors"
    >
      <div className="flex items-center gap-3">
        <FileText className="w-4 h-4 text-[rgb(var(--muted))]" />
        <span className="text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] transition-colors">
          {name}
        </span>
        <span className="text-xs text-[rgb(var(--muted))] px-1.5 py-0.5 rounded bg-[rgb(var(--border))]">
          {type}
        </span>
      </div>
      {isDownload ? (
        <Download className="w-4 h-4 text-[rgb(var(--muted))]" />
      ) : (
        <ExternalLink className="w-4 h-4 text-[rgb(var(--muted))]" />
      )}
    </a>
  )
}
