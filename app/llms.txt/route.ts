import { getAllEssays } from "@/lib/essays"
import { getResourcesByType } from "@/lib/resources"
import { COMPANIES } from "@/lib/data/portfolio-data"

// llms.txt: a plain map of the site for AI assistants (https://llmstxt.org). Built from the same content as the pages.
// The "About" lines are the founder's own words from the About page; do not rewrite them here.
export const dynamic = "force-static"

const siteUrl = "https://lobsang-lama.com"

export function GET() {
  const guides = getResourcesByType("guide")
  const repos = guides.filter((g) => g.category === "github-repos")
  const otherGuides = guides.filter((g) => g.category !== "github-repos")
  const deepDives = getResourcesByType("deep-dive")
  const essays = getAllEssays()

  const line = (title: string, url: string, note?: string) => `- [${title}](${url})${note ? `: ${note}` : ""}`

  const body = [
    "# Lobsang Lama",
    "",
    "> Stoic. Entrepreneur. Creative. Athlete. Building companies and sharing what I learn along the way.",
    "",
    "## About",
    "",
    "Athlete → Economist → Consultant → Builder.",
    "I competed for Team GB, studied Economics at LSE, spent 8+ years across sales, strategy consulting, and venture capital. Then I taught myself to code and hard pivoted into building.",
    "Now I build products at the intersection of AI and human creativity. I believe in moving fast, shipping often, and learning in public.",
    `More: ${siteUrl}/about`,
    "",
    "## Companies",
    "",
    ...COMPANIES.map((c) => line(c.name, c.url, c.tagline)),
    "",
    "## GitHub repos (each page has a prompt to hand to an AI agent)",
    "",
    ...repos.map((r) => line(r.title, `${siteUrl}/resources/${r.category}/${r.slug}`, r.excerpt)),
    "",
    "## Guides",
    "",
    ...otherGuides.map((g) => line(g.title, `${siteUrl}/resources/${g.category}/${g.slug}`, g.excerpt)),
    "",
    "## Deep dives",
    "",
    ...deepDives.map((d) => line(d.title, `${siteUrl}/resources/deep-dives/${d.slug}`, d.excerpt)),
    "",
    "## Essays",
    "",
    ...essays.map((e) => line(e.title, `${siteUrl}/essays/${e.slug}`, e.excerpt)),
    "",
    "## Contact",
    "",
    `- ${siteUrl}/contact`,
    "",
  ].join("\n")

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
