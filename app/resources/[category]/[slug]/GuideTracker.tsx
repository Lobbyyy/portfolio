'use client'

import { useContentTracking } from '@/lib/analytics'

interface GuideTrackerProps {
  slug: string
  title: string
  tags: string[]
  readTime: string
}

export default function GuideTracker({ slug, title, tags, readTime }: GuideTrackerProps) {
  useContentTracking({
    type: 'guide',
    slug,
    title,
    tags,
    readTime,
  })

  return null
}
