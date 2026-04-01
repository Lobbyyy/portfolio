---
title: "Open Graph Images: Improving Social Click-Through Rates"
excerpt: "How to create compelling link previews that drive clicks from LinkedIn, Twitter, and other platforms. A complete guide from design to implementation."
category: "marketing"
date: "Apr 1, 2026"
readTime: "12 min"
tags: ["marketing", "og-images", "social-media", "conversions", "next.js", "design"]
featured: true
---

## The Objective

When you share a link on LinkedIn, Twitter, or other social platforms, the preview that appears can make or break your click-through rate. Posts with compelling images get **2-3x more engagement** than text-only previews.

This guide documents how I transformed my portfolio's link previews from plain text to branded, visually appealing cards that drive clicks.

---

## The Before State

Here's what my links looked like before implementing OG images:

![Before: Text-only LinkedIn preview](/resources/og-before.png)

**Problems:**
- No visual element to catch attention in a busy feed
- Generic appearance that doesn't stand out
- No brand recognition
- Lower perceived quality/professionalism

The preview showed only:
- Page title
- Domain name
- A snippet of text

This is the default behavior when no Open Graph image is specified.

---

## How Open Graph Works

Open Graph (OG) is a protocol created by Facebook that allows you to control how your content appears when shared on social platforms.

### Key Meta Tags

```html
<!-- Basic OG tags -->
<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="A brief description" />
<meta property="og:image" content="https://yoursite.com/og-image.png" />
<meta property="og:url" content="https://yoursite.com/page" />

<!-- Twitter-specific (now X) -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Page Title" />
<meta name="twitter:image" content="https://yoursite.com/og-image.png" />
```

### Platform Requirements

| Platform | Recommended Size | Format |
|----------|-----------------|--------|
| LinkedIn | 1200 x 630px | PNG, JPG |
| Twitter/X | 1200 x 630px | PNG, JPG |
| Facebook | 1200 x 630px | PNG, JPG |

The **1200 x 630px** size works well across all major platforms.

---

## The Design Process

I went through 8 design iterations (Variations A through H) before landing on the final design.

### Early Iterations (Dark Mode)

Started with a bold, dark design:
- Dark gradient background (#1A1A1A → #2A2A2A)
- Orange sidebar with logo
- White text

While striking, it felt heavy and didn't match my website's aesthetic.

### Key Design Decisions

1. **Light mode over dark** - Better matches my website, feels more approachable
2. **Grain texture** - Adds tactile, premium feel that matches my site
3. **Simplified footer** - Just website URL + tag, no redundant author name
4. **Horizontal divider** - Creates visual separation, adds polish

### Final Design (Variation H)

The winning design features:
- **180px orange sidebar** with white logo
- **Light gradient background** (#FAFAF8 → #F5F3F0)
- **Subtle grain texture** matching my website (8% opacity)
- **Title + subtitle** for context
- **Horizontal divider** with website URL and category tag

---

## Implementation with Next.js

Next.js 13+ has built-in support for generating OG images using the `ImageResponse` API from `next/og`.

### Basic Setup

Create an `opengraph-image.tsx` file in your route folder:

```typescript
// app/essays/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Essay preview'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }) {
  const { slug } = await params
  // Fetch your data
  const essay = getEssayBySlug(slug)

  return new ImageResponse(
    (
      <div style={{ /* your design */ }}>
        {essay.title}
      </div>
    ),
    { ...size }
  )
}
```

### Creating a Shared Component

For consistency across pages, I created a shared OG image template:

```typescript
// lib/og-image.tsx
export function createOGImageResponse({
  title,
  subtitle,
  tag
}: OGImageProps) {
  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#F8F6F3',
      }}>
        {/* Orange sidebar */}
        <div style={{
          width: '180px',
          background: '#D54919',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <LogoSVG />
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: '45px 50px' }}>
          <div style={{ fontSize: '28px' }}>{title}</div>
          {subtitle && (
            <div style={{ fontSize: '14px', color: '#666' }}>
              {subtitle}
            </div>
          )}
          {/* Footer with divider */}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
```

---

## Satori Limitations & Workarounds

Next.js OG images use **Satori** under the hood, which has some CSS limitations:

| Limitation | Workaround |
|------------|------------|
| No CSS `filter` property | Use SVG filters or skip effects |
| Limited `mix-blend-mode` | Use simple opacity instead |
| No external images by default | Base64 encode or use URLs |
| Limited font support | Load fonts explicitly via fetch |

### Adding Grain Texture

For the grain effect, I used an SVG noise filter:

```tsx
<svg style={{
  position: 'absolute',
  opacity: 0.06,
}}>
  <defs>
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.8"
        numOctaves="4"
        stitchTiles="stitch"
      />
    </filter>
  </defs>
  <rect width="100%" height="100%" filter="url(#noise)" />
</svg>
```

### SVG Logos

For the logo, I recreated it as an inline SVG path:

```tsx
<svg width="65" height="65" viewBox="0 0 100 100" fill="white">
  <path d="M0 0 H100 V100 H75 V25 H0 Z" />
  <path d="M0 45 H50 V100 H25 V70 H0 Z" />
</svg>
```

---

## Verification & Testing

After implementing, test your OG images using these tools:

### Debug Tools

- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/

### Cache Invalidation

Social platforms cache OG images aggressively. If you update your image but see the old one:

1. Use the platform's debugger tool to "scrape again" or "fetch new data"
2. Wait a few minutes and try again
3. For LinkedIn, the Post Inspector forces a re-crawl

### Local Testing

During development:
1. Run `next build` to generate static OG images
2. Check the build output for `opengraph-image` routes
3. Visit `/your-page/opengraph-image` directly to see the generated image

---

## Results

After implementing branded OG images across all pages:

**Before:**
- Text-only preview
- No visual branding
- Blends into the feed

**After:**
- Eye-catching branded image
- Clear title and description
- Professional appearance
- Consistent across all pages

---

## Key Takeaways

1. **OG images significantly impact click-through rates** - Don't neglect them
2. **Consistency matters** - Use the same template across all pages for brand recognition
3. **Match your site's aesthetic** - The OG image is a preview of your brand
4. **Test across platforms** - Different platforms may render slightly differently
5. **Keep it simple** - Too much detail gets lost at small sizes
6. **Include key information** - Title, subtitle/description, and branding

---

## Files Created

For reference, here are the key files in my implementation:

```
lib/og-image.tsx              # Shared OG template component
app/opengraph-image.tsx       # Homepage OG
app/essays/[slug]/opengraph-image.tsx    # Essay detail OG
app/essays/opengraph-image.tsx           # Essays index OG
app/about/opengraph-image.tsx            # About page OG
app/companies/opengraph-image.tsx        # Companies index OG
app/companies/[slug]/opengraph-image.tsx # Company detail OG
app/resources/opengraph-image.tsx        # Resources OG
app/context/opengraph-image.tsx          # Context OG
app/changelog/opengraph-image.tsx        # Changelog OG
app/contact/opengraph-image.tsx          # Contact OG
```

Each page gets a tailored OG image with relevant title, subtitle, and category tag, while maintaining consistent branding.
