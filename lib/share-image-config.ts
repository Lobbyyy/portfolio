// Share image configuration - can be imported by client components

export const shareImageSizes = {
  vertical: { width: 1080, height: 1920 },   // Stories (9:16)
  square: { width: 1080, height: 1080 },     // Instagram/Twitter (1:1)
  instagram: { width: 1080, height: 1350 },  // Instagram feed (4:5)
  landscape: { width: 1200, height: 630 },   // LinkedIn/Twitter (same as OG)
} as const

export type ShareImageFormat = keyof typeof shareImageSizes

// Variation definitions for each format
export const VARIATIONS = {
  landscape: [
    { key: 'h', label: 'Classic', description: 'Sidebar with grain texture' },
  ],
  square: [
    { key: 'a', label: 'Centered', description: 'Clean centered layout' },
    { key: 'b', label: 'Sidebar', description: 'Orange sidebar left' },
    { key: 'c', label: 'Dark', description: 'Dark dramatic background' },
  ],
  instagram: [
    { key: 'a', label: 'Sidebar', description: 'Orange sidebar left' },
    { key: 'b', label: 'Top Logo', description: 'Logo centered at top' },
    { key: 'c', label: 'Thirds', description: 'Rule of thirds layout' },
  ],
  vertical: [
    { key: 'a', label: 'Statement', description: 'Bold centered layout' },
    { key: 'b', label: 'Dark', description: 'Dark dramatic mood' },
    { key: 'c', label: 'Book Cover', description: 'Elegant framed design' },
    { key: 'd', label: 'Side Stripe', description: 'Minimal accent stripe' },
    { key: 'e', label: 'Thirds', description: 'Rule of thirds composition' },
  ],
} as const

export type VariationKey = typeof VARIATIONS[ShareImageFormat][number]['key']

// Helper to get default variation for a format
export function getDefaultVariation(format: ShareImageFormat): VariationKey {
  return VARIATIONS[format][0].key
}
