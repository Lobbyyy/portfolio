// Resource types for the tabbed resources page
export type ResourceTab = 'deep-dives' | 'guides' | 'bookmarks'

export const resourceTabs: { id: ResourceTab; label: string }[] = [
  { id: 'deep-dives', label: 'Deep Dives' },
  { id: 'guides', label: 'Guides' },
  { id: 'bookmarks', label: 'Bookmarks' },
]

// Bookmark type for curated external links
export interface Bookmark {
  id: string
  title: string
  url: string
  domain: string
  description: string
  tags: string[]
  category?: string
  dateAdded: string
}

// Curated bookmarks collection
export const bookmarks: Bookmark[] = [
  // Startup & Product
  {
    id: 'paul-graham-essays',
    title: 'Paul Graham Essays',
    url: 'https://paulgraham.com/articles.html',
    domain: 'paulgraham.com',
    description: 'Essential reading on startups, writing, and thinking clearly.',
    tags: ['startups', 'essays', 'writing'],
    category: 'reading',
    dateAdded: '2024-01-15',
  },
  {
    id: 'stripe-atlas-guides',
    title: 'Stripe Atlas Guides',
    url: 'https://stripe.com/atlas/guides',
    domain: 'stripe.com',
    description: 'Comprehensive guides for starting and scaling a company.',
    tags: ['startups', 'legal', 'business'],
    category: 'resources',
    dateAdded: '2024-01-20',
  },
  {
    id: 'ycombinator-library',
    title: 'Y Combinator Startup Library',
    url: 'https://www.ycombinator.com/library',
    domain: 'ycombinator.com',
    description: 'Curated startup advice from YC partners and founders.',
    tags: ['startups', 'fundraising', 'growth'],
    category: 'resources',
    dateAdded: '2024-02-01',
  },
  // Design & Development
  {
    id: 'refactoring-ui',
    title: 'Refactoring UI',
    url: 'https://www.refactoringui.com/',
    domain: 'refactoringui.com',
    description: 'Design tips for developers to improve UI without a designer.',
    tags: ['design', 'ui', 'development'],
    category: 'tools',
    dateAdded: '2024-02-10',
  },
  {
    id: 'patterns-dev',
    title: 'Patterns.dev',
    url: 'https://www.patterns.dev/',
    domain: 'patterns.dev',
    description: 'Modern web development patterns and rendering strategies.',
    tags: ['development', 'patterns', 'react'],
    category: 'learning',
    dateAdded: '2024-02-15',
  },
  // Productivity & Thinking
  {
    id: 'mental-models',
    title: 'Farnam Street Mental Models',
    url: 'https://fs.blog/mental-models/',
    domain: 'fs.blog',
    description: 'A comprehensive guide to mental models for better thinking.',
    tags: ['thinking', 'mental-models', 'decision-making'],
    category: 'reading',
    dateAdded: '2024-03-01',
  },
]

// Helper to get bookmarks by tag
export function getBookmarksByTag(tag: string): Bookmark[] {
  return bookmarks.filter((bookmark) => bookmark.tags.includes(tag))
}

// Helper to get all bookmark tags
export function getAllBookmarkTags(): string[] {
  const tagSet = new Set<string>()
  bookmarks.forEach((bookmark) => {
    bookmark.tags.forEach((tag) => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}

// Helper to get bookmarks by category
export function getBookmarksByCategory(category: string): Bookmark[] {
  return bookmarks.filter((bookmark) => bookmark.category === category)
}
