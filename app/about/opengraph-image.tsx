import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'

export const runtime = 'nodejs'
export const alt = 'About Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return createOGImageResponse({
    title: 'About',
    subtitle: 'The story so far. Athlete → Economist → Consultant → Builder.',
    tag: 'About',
  })
}
