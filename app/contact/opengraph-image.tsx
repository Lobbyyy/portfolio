import { createOGImageResponse, ogSize, ogContentType } from '@/lib/og-image'

export const runtime = 'nodejs'
export const alt = 'Contact Lobsang Lama'
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return createOGImageResponse({
    title: 'Contact',
    subtitle: 'Always happy to chat with interesting people. Let\'s connect.',
    tag: 'Contact',
  })
}
