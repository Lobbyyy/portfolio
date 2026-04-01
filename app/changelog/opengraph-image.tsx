import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'

export const runtime = 'nodejs'
export const alt = 'Changelog - Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return createOGImageResponse({
    title: 'Changelog',
    subtitle: 'A timeline of life events and milestones. The journey so far.',
    tag: 'Changelog',
  })
}
