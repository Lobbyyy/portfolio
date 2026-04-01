import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'
import { COMPANIES } from '@/lib/data/portfolio-data'

export const runtime = 'nodejs'
export const alt = 'Company by Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return COMPANIES.map((company) => ({
    slug: company.slug,
  }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = COMPANIES.find((c) => c.slug === slug)

  return createOGImageResponse({
    title: company?.name || 'Company',
    subtitle: company?.tagline,
    tag: 'Company',
  })
}
