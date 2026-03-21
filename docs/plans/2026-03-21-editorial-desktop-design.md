# Editorial Desktop Portfolio Design

## Overview

A PostHog-inspired portfolio redesign that replaces the macOS floating-window approach with an **editorial publication** aesthetic. The site feels like a beautifully designed independent magazine rendered as an interactive file system.

**Core concept:** "A look into my mind" - curated, editorial, navigable like a personal archive.

**Aesthetic direction:** Editorial/Magazine + Wabi-sabi minimalism + Stoic restraint

**Primary color:** YC Orange (#FF6600)

---

## Design Principles

### Wabi-Sabi Philosophy
- Beauty in imperfection and incompleteness
- Unfinished projects aren't failures, they're part of the journey
- Empty states are honest, not broken
- Timestamps show evolution ("Updated 3 days ago")

### Stoic Minimalism
- Restraint in color usage (orange appears sparingly, powerfully)
- Generous whitespace
- Every element earns its place
- No decoration without purpose

### Editorial Quality
- Typography-first design
- Content is the hero
- Magazine-like layouts and spacing
- Professional but personal

---

## Color Palette

### Light Mode (Default)
```css
--background:     #FAF8F5;  /* warm cream, like aged paper */
--surface:        #FFFFFF;  /* white for content cards */
--primary:        #FF6600;  /* YC orange - used sparingly */
--text:           #1A1A1A;  /* near-black, high contrast */
--muted:          #6B6B6B;  /* secondary text, metadata */
--border:         #E8E4DF;  /* subtle warm gray */
--primary-hover:  rgba(255, 102, 0, 0.1);  /* soft orange glow */
```

### Dark Mode
```css
--background:     #141414;  /* soft black, not pure #000 */
--surface:        #1E1E1E;  /* elevated surfaces */
--primary:        #FF6600;  /* orange stays - pops more */
--text:           #F5F5F5;  /* off-white */
--muted:          #8A8A8A;  /* secondary text */
--border:         #2A2A2A;  /* subtle separation */
--primary-hover:  rgba(255, 102, 0, 0.15);
```

---

## Typography

### Fonts
- **Headlines:** Instrument Serif - elegant, warm, editorial
- **Body:** Söhne or Untitled Sans - clean, Swiss-inspired, humanist
- **Metadata/Labels:** JetBrains Mono - file names, timestamps, paths

### Usage
- Headlines in Instrument Serif (large, confident)
- Body copy in Söhne (readable, refined)
- File paths, timestamps, status badges in JetBrains Mono
- Pull quotes in large italic Instrument Serif

---

## Layout: Three Columns

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo/Name]                              [Date] [Search] [Theme] │  ← TopBar
├──────────┬────────────────────────────────┬─────────────────┤
│          │                                │                 │
│ home.mdx │  ~/companies/supanova.mdx      │  Status: 🟢     │
│          │                                │                 │
│ companies/│  # Supanova                   │  Website ↗      │
│ journal/ │                                │                 │
│ localhost/│  AI video production that     │  Last updated   │
│ resources/│  helps creators...            │  3 days ago     │
│ about.mdx│                                │                 │
│ contact  │                                │                 │
│          │                                │                 │
│ ──────── │                                │                 │
│ [Toggle] │                                │                 │
│ Desktop  │                                │                 │
│          │                                │                 │
├──────────┴────────────────────────────────┴─────────────────┤
│  ~200px         ~60% fluid                    ~180px        │
└─────────────────────────────────────────────────────────────┘
```

### Left Column (Sidebar) - ~200px
- File tree navigation
- Files: `home.mdx`, `about.mdx`, `contact.mdx`, `spotify.mdx`
- Folders: `companies/`, `journal/`, `localhost/`, `resources/`
- Mode toggle at bottom ("Switch to desktop mode" → /macos)
- Active item has orange dot indicator

### Center Column (Document Area) - ~60%
- Main content area
- Breadcrumb path at top: `~/companies/supanova.mdx`
- Scrolls independently
- Generous margins, beautiful typography

### Right Column (Context Panel) - ~180px
- Changes based on current page
- Home: Quick links, Spotify now playing
- Company: Status badge, external link, last updated
- Journal: Categories, related posts
- Sometimes empty (wabi-sabi)

---

## Components

### Core Layout
```
<EditorialLayout>
├── <TopBar />
│   ├── <Logo /> (name with hover word-cycle effect)
│   ├── <CurrentDate />
│   ├── <SearchButton /> (opens Cmd+K modal)
│   └── <ThemeToggle />
│
├── <Sidebar />
│   ├── <FileTree />
│   │   ├── <FileEntry />
│   │   └── <FolderEntry />
│   └── <ModeToggle />
│
├── <DocumentArea />
│   ├── <Breadcrumb />
│   └── <DocumentContent />
│
└── <ContextPanel />
    └── (contextual content)
```

### Shared UI
- `<Badge />` - Status indicators
- `<ExternalLink />` - Links with arrow icon
- `<Timestamp />` - "Updated 3 days ago"
- `<ProgressBar />` - Experiment completion
- `<PullQuote />` - Large italic emphasis
- `<SearchModal />` - Cmd+K fuzzy search

---

## Routing

```
/                    → Editorial home
/companies           → Companies index
/companies/[slug]    → Individual company
/journal             → Journal index (Substack posts)
/journal/[slug]      → Individual post
/localhost           → Experiments list
/resources           → Resources index
/resources/[...slug] → Resource categories/items
/about               → About document
/contact             → Contact document
/spotify             → Spotify integration
/macos               → Original macOS portfolio (preserved)
```

---

## Content Architecture

### File Structure
```
/content
├── home.mdx
├── about.mdx
├── contact.mdx
├── spotify.mdx
├── companies/
│   ├── 20punches.mdx
│   ├── our-circles.mdx
│   ├── 1z2.mdx
│   └── supanova.mdx
├── localhost/
│   ├── ai-journaling.mdx
│   └── founder-matching.mdx
└── resources/
    ├── _index.yaml
    ├── fundraising/
    │   ├── _index.yaml
    │   └── pitch-deck-template.mdx
    ├── product/
    └── tools/
```

### MDX Frontmatter
```yaml
---
title: "Supanova"
type: "company"
status: "active"        # active | live | exploring | paused
url: "https://iamsupanova.com"
description: "AI video production"
lastUpdated: "2026-03-15"
featured: true
---
```

### Journal (Substack Integration)
- Fetch posts from Substack RSS at build time
- Generate static pages for each post (SSG)
- Cache images locally
- Search indexes title, excerpt, tags
- Optional: MDX overrides for specific posts

### Search
- Fuse.js for client-side fuzzy search
- Indexes: journal posts, resources, companies, pages
- Cmd+K shortcut to open
- Instant results as you type

---

## Interactions & Motion

### Page Transitions
- Content fades and slides up (200ms, ease-out)
- Subtle, confident, not flashy

### Hover States
- Links: orange underline draws left-to-right
- Sidebar items: soft cream/dark highlight
- Cards: subtle lift with shadow

### Logo Word Cycle
- Hover over name in TopBar
- Cycles through: "builder" → "athlete" → "founder" → "curious"
- 150ms per word, then settles back to name
- Memorable micro-interaction

### Active States
- Current sidebar item: orange dot + bolder weight
- Visited links: slightly muted color

### Theme Toggle
- Sun/moon icon in TopBar
- Smooth color transition (300ms)
- Respects system preference by default
- Persists to localStorage

---

## Wabi-Sabi Details

- **Borders:** 1px solid warm gray, slightly inconsistent roundness (0-2px)
- **Paper texture:** Subtle noise overlay (2-3% opacity) on background
- **Timestamps:** Everywhere, showing the site is alive
- **Empty states:** "Coming soon." is valid content
- **Imperfection:** Not everything perfectly aligned, some organic feel

---

## Technical Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + CSS variables for theming
- **Content:** MDX with next-mdx-remote
- **Fonts:** Google Fonts (Instrument Serif) + self-hosted (Söhne, JetBrains Mono)
- **Theme:** next-themes for dark/light mode
- **Search:** Fuse.js
- **Substack:** RSS fetch at build time
- **Animations:** CSS transitions + Framer Motion for complex interactions

---

## Mode Toggle

Both experiences preserved:
- **`/`** → Editorial Desktop (new primary)
- **`/macos`** → Original macOS portfolio

Toggle in sidebar bottom: "Switch to desktop mode"
Toggle on macOS: "Switch to editorial mode"

Shows range. Demonstrates both design taste and technical ability.

---

## The One Memorable Thing

The logo hover effect that cycles through identity words:

```
[Your Name] → hover → "builder" → "athlete" → "founder" → "curious" → [Your Name]
```

600ms total. Tells your story instantly. Unforgettable.

---

## Content to Prepare

1. **Companies:** Hero images, descriptions, status for each
2. **About:** Narrative bio, photos, CKC framework explanation
3. **Localhost:** List of experiments with progress/status
4. **Resources:** Curated links, templates, tools
5. **Contact:** Links, what you're looking for
6. **Spotify:** Playlist curation

---

## Next Steps

1. Set up new route structure alongside existing macOS
2. Implement EditorialLayout with three-column design
3. Create component library (FileTree, Badge, etc.)
4. Set up MDX content pipeline
5. Integrate Substack RSS for journal
6. Implement search with Fuse.js
7. Add theme toggle with next-themes
8. Add mode toggle between Editorial/macOS
9. Polish animations and interactions
10. Migrate/create content
