import type { MetadataRoute } from "next"
import { getAllEssays } from "@/lib/essays"
import { getResourcesByType } from "@/lib/resources"
import { COMPANIES } from "@/lib/data/portfolio-data"

const siteUrl = "https://lobsang-lama.com"

function toDate(value: string): Date | undefined {
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? undefined : d
}

// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/companies", "/essays", "/resources", "/context", "/changelog", "/contact"].map((p) => ({
    url: `${siteUrl}${p}`,
  }))
  const essays = getAllEssays().map((e) => ({ url: `${siteUrl}/essays/${e.slug}`, lastModified: toDate(e.date) }))
  const guides = getResourcesByType("guide").map((g) => ({
    url: `${siteUrl}/resources/${g.category}/${g.slug}`,
    lastModified: toDate(g.date),
  }))
  const deepDives = getResourcesByType("deep-dive").map((d) => ({
    url: `${siteUrl}/resources/deep-dives/${d.slug}`,
    lastModified: toDate(d.date),
  }))
  const companies = COMPANIES.map((c) => ({ url: `${siteUrl}/companies/${c.slug}` }))
  return [...pages, ...essays, ...guides, ...deepDives, ...companies]
}
