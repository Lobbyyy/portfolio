import posthog from 'posthog-js'

// Content types for tracking
export type ContentType = 'essay' | 'deep-dive' | 'guide' | 'bookmark'

// Event names as constants for type safety
export const AnalyticsEvents = {
  // Content events
  CONTENT_VIEW: 'content_view',
  SCROLL_DEPTH_MILESTONE: 'scroll_depth_milestone',
  CONTENT_COMPLETED: 'content_completed',
  RELATED_CONTENT_CLICK: 'related_content_click',

  // Navigation events
  NAV_CLICK: 'nav_click',
  LOGO_CLICK: 'logo_click',
  RESOURCE_TAB_CHANGE: 'resource_tab_change',

  // Company events
  COMPANY_CARD_CLICK: 'company_card_click',
  COMPANY_VISIT_CLICK: 'company_visit_click',

  // Sharing events
  LINK_COPIED: 'link_copied',
  SHARE_IMAGE_DOWNLOADED: 'share_image_downloaded',

  // External link events
  EXTERNAL_LINK_CLICK: 'external_link_click',
  SOCIAL_LINK_CLICK: 'social_link_click',
  BOOKMARK_CLICK: 'bookmark_click',

  // Search events
  SEARCH_OPENED: 'search_opened',
  SEARCH_QUERY: 'search_query',
  SEARCH_RESULT_CLICK: 'search_result_click',

  // UI events
  THEME_TOGGLE: 'theme_toggle',
} as const

// Type for event names
export type AnalyticsEvent = (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents]

// Helper function to safely capture events
function capture(event: AnalyticsEvent, properties?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture(event, properties)
  }
}

// Content tracking
export function trackContentView(
  type: ContentType,
  slug: string,
  title: string,
  tags: string[],
  readTime?: string
) {
  capture(AnalyticsEvents.CONTENT_VIEW, {
    content_type: type,
    slug,
    title,
    tags,
    read_time: readTime,
  })
}

export function trackScrollDepthMilestone(
  depth: number,
  contentSlug: string,
  contentType: ContentType,
  page: string
) {
  capture(AnalyticsEvents.SCROLL_DEPTH_MILESTONE, {
    depth,
    content_slug: contentSlug,
    content_type: contentType,
    page,
  })
}

export function trackContentCompleted(
  slug: string,
  type: ContentType,
  timeSpentSeconds: number,
  estimatedReadTime?: string
) {
  capture(AnalyticsEvents.CONTENT_COMPLETED, {
    slug,
    content_type: type,
    time_spent_seconds: timeSpentSeconds,
    estimated_read_time: estimatedReadTime,
  })
}

export function trackRelatedContentClick(
  fromSlug: string,
  toSlug: string,
  contentType: ContentType
) {
  capture(AnalyticsEvents.RELATED_CONTENT_CLICK, {
    from_slug: fromSlug,
    to_slug: toSlug,
    content_type: contentType,
  })
}

// Navigation tracking
export function trackNavClick(destination: string, sourcePage: string) {
  capture(AnalyticsEvents.NAV_CLICK, {
    destination,
    source_page: sourcePage,
  })
}

export function trackLogoClick(sourcePage: string) {
  capture(AnalyticsEvents.LOGO_CLICK, {
    source_page: sourcePage,
  })
}

export function trackResourceTabChange(fromTab: string, toTab: string) {
  capture(AnalyticsEvents.RESOURCE_TAB_CHANGE, {
    from_tab: fromTab,
    to_tab: toTab,
  })
}

// Company tracking
export function trackCompanyCardClick(companySlug: string, sourcePage: string) {
  capture(AnalyticsEvents.COMPANY_CARD_CLICK, {
    company_slug: companySlug,
    source_page: sourcePage,
  })
}

export function trackCompanyVisitClick(companySlug: string, companyUrl: string) {
  capture(AnalyticsEvents.COMPANY_VISIT_CLICK, {
    company_slug: companySlug,
    company_url: companyUrl,
  })
}

// Sharing tracking
export function trackLinkCopied(contentType: ContentType, contentSlug: string, url: string) {
  capture(AnalyticsEvents.LINK_COPIED, {
    content_type: contentType,
    content_slug: contentSlug,
    url,
  })
}

export function trackShareImageDownloaded(
  contentSlug: string,
  format: string,
  variation: string
) {
  capture(AnalyticsEvents.SHARE_IMAGE_DOWNLOADED, {
    content_slug: contentSlug,
    format,
    variation,
  })
}

// External link tracking
export function trackExternalLinkClick(destination: string, sourcePage: string) {
  capture(AnalyticsEvents.EXTERNAL_LINK_CLICK, {
    destination,
    source_page: sourcePage,
  })
}

export function trackSocialLinkClick(platform: string, sourcePage: string) {
  capture(AnalyticsEvents.SOCIAL_LINK_CLICK, {
    platform,
    source_page: sourcePage,
  })
}

export function trackBookmarkClick(title: string, url: string, domain: string) {
  capture(AnalyticsEvents.BOOKMARK_CLICK, {
    title,
    url,
    domain,
  })
}

// Search tracking
export function trackSearchOpened(trigger: 'keyboard' | 'click') {
  capture(AnalyticsEvents.SEARCH_OPENED, {
    trigger,
  })
}

export function trackSearchQuery(query: string, resultsCount: number) {
  capture(AnalyticsEvents.SEARCH_QUERY, {
    query,
    results_count: resultsCount,
  })
}

export function trackSearchResultClick(
  query: string,
  resultType: string,
  resultTitle: string
) {
  capture(AnalyticsEvents.SEARCH_RESULT_CLICK, {
    query,
    result_type: resultType,
    result_title: resultTitle,
  })
}

// UI tracking
export function trackThemeToggle(newTheme: string) {
  capture(AnalyticsEvents.THEME_TOGGLE, {
    new_theme: newTheme,
  })
}
