import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'

export const runtime = 'nodejs'
export const alt = 'Essays by Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return createOGImageResponse({
    title: 'Essays',
    subtitle: 'Deep dives on building, thinking, and creating. Ideas that have shaped how I work.',
    tag: 'Essays',
  })
}
