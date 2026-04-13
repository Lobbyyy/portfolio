import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'
import { getResourcesByType, getDeepDiveBySlug } from '@/lib/resources'

export const runtime = 'nodejs'
export const alt = 'Deep Dive by Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  const deepDives = getResourcesByType("deep-dive")
  return deepDives.map((deepDive) => ({
    slug: deepDive.slug,
  }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const deepDive = getDeepDiveBySlug(slug)

  return createOGImageResponse({
    title: deepDive?.title || 'Deep Dive',
    subtitle: deepDive?.excerpt,
    tag: 'Deep Dive',
  })
}
