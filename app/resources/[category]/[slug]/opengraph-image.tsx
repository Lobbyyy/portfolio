import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'
import { getAllResources, getResourceBySlug } from '@/lib/resources'

export const runtime = 'nodejs'
export const alt = 'Resource by Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  const resources = getAllResources()
  return resources.map((resource) => ({
    category: resource.category,
    slug: resource.slug,
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
