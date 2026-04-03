'use client'

import { useEffect, useRef } from 'react'
import {
  trackContentView,
  trackContentCompleted,
  type ContentType,
} from '../events'
import { useScrollDepth } from './useScrollDepth'

interface UseContentTrackingOptions {
  type: ContentType
  slug: string
  title: string
  tags: string[]
  readTime?: string
  completionThreshold?: number // Scroll percentage to consider content "completed"
}

export function useContentTracking({
  type,
  slug,
  title,
  tags,
  readTime,
  completionThreshold = 75,
}: UseContentTrackingOptions) {
  const startTime = useRef<number>(Date.now())
  const hasTrackedView = useRef(false)
  const hasTrackedCompletion = useRef(false)

  // Track scroll depth
  const { reportedMilestones } = useScrollDepth({
    contentSlug: slug,
    contentType: type,
  })

  // Track content view on mount
  useEffect(() => {
    if (!hasTrackedView.current) {
      trackContentView(type, slug, title, tags, readTime)
      hasTrackedView.current = true
      startTime.current = Date.now()
    }

    // Reset on slug change
    return () => {
      hasTrackedView.current = false
      hasTrackedCompletion.current = false
    }
  }, [type, slug, title, tags, readTime])

  // Track completion when scroll threshold is reached
  useEffect(() => {
    const hasReachedThreshold = reportedMilestones.some(
      (milestone) => milestone >= completionThreshold
    )

    if (hasReachedThreshold && !hasTrackedCompletion.current) {
      const timeSpentSeconds = Math.round((Date.now() - startTime.current) / 1000)
      trackContentCompleted(slug, type, timeSpentSeconds, readTime)
      hasTrackedCompletion.current = true
    }
  }, [reportedMilestones, completionThreshold, slug, type, readTime])

  // Track time spent on page leave (via beforeunload)
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (!hasTrackedCompletion.current) {
        // Calculate time spent (PostHog handles this via $pageleave)
        const _timeSpentSeconds = Math.round((Date.now() - startTime.current) / 1000)
        // Use sendBeacon for reliability on page unload
        if (navigator.sendBeacon) {
          // PostHog will handle this via $pageleave, but we could add custom data here if needed
          void _timeSpentSeconds // Suppress unused variable warning
        }
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [slug, type, readTime])

  return {
    timeSpentSeconds: Math.round((Date.now() - startTime.current) / 1000),
    hasCompleted: hasTrackedCompletion.current,
  }
}
