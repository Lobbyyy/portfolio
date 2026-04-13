'use client'

import { useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { trackScrollDepthMilestone, type ContentType } from '../events'

interface UseScrollDepthOptions {
  contentSlug: string
  contentType: ContentType
  milestones?: number[]
}

export function useScrollDepth({
  contentSlug,
  contentType,
  milestones = [25, 50, 75, 100],
}: UseScrollDepthOptions) {
  const pathname = usePathname()
  const reportedMilestones = useRef<Set<number>>(new Set())
  const maxScrollPercentage = useRef(0)

  const handleScroll = useCallback(() => {
    // Calculate scroll percentage
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight

    if (docHeight <= 0) return

    const scrollPercentage = Math.min(100, Math.round((scrollTop / docHeight) * 100))

    if (scrollPercentage > maxScrollPercentage.current) {
      maxScrollPercentage.current = scrollPercentage

      // Check and report milestones
      for (const milestone of milestones) {
        if (
          scrollPercentage >= milestone &&
          !reportedMilestones.current.has(milestone)
        ) {
          reportedMilestones.current.add(milestone)
          trackScrollDepthMilestone(milestone, contentSlug, contentType, pathname)
        }
      }
    }
  }, [contentSlug, contentType, milestones, pathname])

  useEffect(() => {
    // Reset on mount/content change
    reportedMilestones.current = new Set()
    maxScrollPercentage.current = 0

    // Add scroll listener with passive option for performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Check initial scroll position (in case page is already scrolled)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, contentSlug])

  return {
    maxScrollPercentage: maxScrollPercentage.current,
    reportedMilestones: Array.from(reportedMilestones.current),
  }
}
