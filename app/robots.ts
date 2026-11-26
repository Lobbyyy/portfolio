import type { MetadataRoute } from "next"

// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
// Search engines and AI crawlers are welcome; the API endpoints are not content.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/ingest/"] }],
    sitemap: "https://lobsang-lama.com/sitemap.xml",
    host: "https://lobsang-lama.com",
  }
}
