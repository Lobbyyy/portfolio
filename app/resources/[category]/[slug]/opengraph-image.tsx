import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'
import { getResourcesByType, getResourceBySlug } from '@/lib/resources'

export const runtime = 'nodejs'
export const alt = 'Guide by Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  const guides = getResourcesByType("guide")
  return guides.map((guide) => ({
    category: guide.category,
    slug: guide.slug,
  }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  const resource = getResourceBySlug(category, slug)

  return createOGImageResponse({
    title: resource?.title || 'Resource',
    subtitle: resource?.excerpt,
    tag: 'Resource',
  })
}
