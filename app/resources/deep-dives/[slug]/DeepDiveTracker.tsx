'use client'

import { useContentTracking } from '@/lib/analytics'

interface DeepDiveTrackerProps {
  slug: string
  title: string
  tags: string[]
  readTime: string
}

export default function DeepDiveTracker({ slug, title, tags, readTime }: DeepDiveTrackerProps) {
  useContentTracking({
    type: 'deep-dive',
    slug,
    title,
    tags,
    readTime,
  })

  return null
}
