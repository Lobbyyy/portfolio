import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'

export const runtime = 'nodejs'
export const alt = 'Context - Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return createOGImageResponse({
    title: 'Context',
    subtitle: 'Books, experiences, and influences that shaped how I think and build.',
    tag: 'Context',
  })
}
