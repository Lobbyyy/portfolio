import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'

export const runtime = 'nodejs'
export const alt = 'Companies by Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return createOGImageResponse({
    title: 'Companies',
    subtitle: 'Things I\'m building. Each one started as a problem I wanted to solve.',
    tag: 'Companies',
  })
}
