'use client'

import { useContentTracking } from '@/lib/analytics'

interface EssayTrackerProps {
  slug: string
  title: string
  tags: string[]
  readTime: string
}

export default function EssayTracker({ slug, title, tags, readTime }: EssayTrackerProps) {
  useContentTracking({
    type: 'essay',
    slug,
    title,
    tags,
    readTime,
  })

  return null
}
