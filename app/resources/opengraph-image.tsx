import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'

export const runtime = 'nodejs'
export const alt = 'Resources by Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return createOGImageResponse({
    title: 'Resources',
    subtitle: 'Templates, guides, and tools for founders. Everything I wish I had when starting out.',
    tag: 'Resources',
  })
}
