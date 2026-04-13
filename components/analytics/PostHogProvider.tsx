'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        capture_pageview: 'history_change', // Handles SPA navigation automatically
        capture_pageleave: 'if_capture_pageview',
        // Session replay is enabled by default
        person_profiles: 'identified_only', // Only create profiles for identified users (we have none, but good practice)
      })
    }
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
