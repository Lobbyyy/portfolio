# Personal Website Task Backlog

**Created:** 2026-03-31
**Owner:** Lobsang Lama
**Domain:** lobsang-lama.com
**Status:** Pre-deployment

---

## Project Overview

A Next.js 15 personal portfolio website with an editorial design system. The site showcases:
- 5 companies (Coconut, Supanova, 1z2, Our Circles, 20 Punches)
- 50+ essays (imported from Substack)
- 77+ context items (books, courses, experiences, education, competitions)
- 5 localhost projects (Midas, Themis, Lifta, Scoutr, Sands)
- Changelog timeline
- Resources (future)
- Spotify playlists

**Two viewing modes planned:**
1. **Browser Mode (Editorial)** — Current focus, text-focused minimalist design
2. **Desktop Mode (macOS-style)** — Future, same data presented as macOS desktop simulation

---

## Personal Information

```
Name: Lobsang Lama
Identity: S.E.C.A (Stoic. Entrepreneur. Creative. Athlete.)
Domain: lobsang-lama.com (purchased via Cloudflare)
```

### Social Links

| Platform | URL |
|----------|-----|
| Twitter/X | https://x.com/Lobbyyyyyy |
| TikTok | https://www.tiktok.com/@seca.mp4 |
| YouTube | https://www.youtube.com/@lobsang_lama |
| GitHub | https://github.com/Lobbyyy |
| Substack | https://substack.com/@lobsanglama |
| LinkedIn | https://www.linkedin.com/in/lobsang-lama-42a76b63/ |
| Buy Me a Coffee | https://buymeacoffee.com/lobsanglama |

### Companies

| Company | Tagline | URL | Status |
|---------|---------|-----|--------|
| Coconut | A brand builder's oasis | https://coconutapp.xyz | Active |
| Supanova | AI-powered video production | https://www.iamsupanova.com | Active |
| 1z2 | Content research intelligence | https://www.1z2.app | Live |
| Our Circles | Private family sharing | https://www.our-circles.com | Live |
| 20 Punches | AI financial guidance | https://www.20punches.co.uk | Live |

---

## Localhost Projects — Full Context

These are experimental/side projects displayed on the `/localhost` page.

### 1. Midas — Gesture-Based HCI

**Thesis:** "In the future, there will be no UI."

**Concept:** The evolution of human-computer interaction: keyboard → mouse → touch → voice → gestures. With agents executing tasks, we won't need traditional interfaces. Everything will be voice-based and gesture-based.

**What it does:** Uses computer vision to track hand movements. Control your desktop using just your hands — no mouse required.

**Inspiration:** The belief that agents will execute any task on your computer, and interaction will shift to voice and gestures.

**Status:**
- Core technical risks de-risked
- First time working with computer vision
- Built one game that works using hand gestures
- Needs: Improved hand tracking accuracy, expanded use cases

**Positioning (CMO voice):** "In the future, there will be no UI." Gesture-based human-computer interface using computer vision. Control your desktop with hand movements — no mouse required.

---

### 2. Themis — AI Debate Platform

**Concept:** "Polymarket meets LLM Arena"

**What it does:**
1. Pick a question/topic
2. Select AI agents for the "for" and "against" sides
3. Watch the agents debate
4. Vote on which agent won

**Inspiration:** Watching political debates and observing how politicians spin arguments. Same truth, different positioning. Wanted to explore how AI agents handle adversarial argumentation.

**Status:**
- UI has been built (basically done)
- In development
- Needs to be shipped to production
- Business model not yet figured out

**Positioning (CMO voice):** "Polymarket meets LLM Arena." Pick a question, select AI agents for/against, watch them debate, vote on the winner.

---

### 3. Lifta — AI Weightlifting Coach

**Concept:** Agentic voice-based weightlifting coach

**What it does:** Track weights and lifts in the gym with a science-based approach. Voice-based interaction — talk to your coach while lifting.

**Inspiration:** Love of gym and science-based approach to athletics. Built as part of Bolt hackathon.

**Status:**
- Demo available
- UI has been redone/refreshed
- Needs to be wired up
- Needs App Store launch
- Still in local development

**Note:** Mobile app. See "Competitions" in Context page for hackathon details.

**Positioning (CMO voice):** Your AI weightlifting coach. Voice-based, science-backed training tracking. Built for Bolt hackathon.

---

### 4. Scoutr — Find Your First 100 Users

**Concept:** Reddit community discovery for founders

**Problem:** Finding the right communities, engaging with them, and growing your user base is hard. Cold outreach sucks.

**What it does:** Helps founders find their first 100 users by discovering relevant Reddit communities and engagement opportunities.

**Status:**
- In local development
- Flows have been worked out and proved
- Needs to be pushed to production

**Positioning (CMO voice):** Find your first 100 users. Reddit community discovery for founders who hate cold outreach.

---

### 5. Sands — Life Visualization App

**Concept:** Memento mori — make time tangible

**What it does:** Visualizes your life in different ways to make you more present. Helps you understand that life is short and to make use of your time.

**Origin:** First app built as part of Harvard CS50 (Introduction to Computer Science) while learning to code.

**Status:**
- Pushed out / live
- UI needs refresh now that skills have improved
- More of a UI update task

**Positioning (CMO voice):** Visualize your life. A memento mori app that makes time tangible. Harvard CS50 project.

---

## Buy Me a Coffee — Positioning Context

**Link:** https://buymeacoffee.com/lobsanglama

**Philosophy:**
- It's a "tip" not a donation
- Sharing value without expecting anything in return
- Not transactional or disingenuous
- If people gain value and want to support the journey, they can
- If they don't want to pay, that's completely fine — just ask them to help someone else (pay it forward)

**Voice/Copy direction:**
> "I share without expecting anything in return. If something here helped you, you can support the journey. If not, pay it forward to someone else."

**Placement:**
1. Sidebar nav item (subtle, always accessible)
2. Footer on Essays page
3. Footer on Resources page
4. NOT everywhere else — keep it tasteful

**Why it exists:** Life of a creative — want to share art and work. Takes time to curate responses and create content. Support is appreciated but never expected.

---

## Desktop Mode — Vision Context

**Status:** Deferred to Phase 2 (after browser version complete)

**Concept:** Same data, different presentation. Two ways to view the portfolio:
1. Browser Mode — Editorial, text-focused (current)
2. Desktop Mode — macOS-style simulation

**Goal:** Showcase both thinking skills and execution skills

**Feel:** "As if visitors are already in my laptop" — personal, intimate

**Reference:** PostHog website (desktop icons, windows opening)

**Current state:**
- Toggle exists in top nav bar
- Foundation exists: Notes app, Safari app, GitHub app windows
- Apps open in windows
- Needs full implementation to match browser content

**Implementation approach:** Complete browser version first, then adapt all content to desktop mode. Right panel (quick links) helps users navigate; main area content stays focused.

---

## Resources Page — Vision Context

**Status:** Deferred (not blocking deployment)

**Structure:**
- Tabbed UI like Context page (Templates | Bookmarks | N8N Workflows | etc.)
- Current placeholder UI is good indication of final look

**Content types:**
- Templates created by Lobsang
- Bookmarks (founder's highway to useful resources — React bits, shadcn, templates, etc.)
- N8N workflows
- Guides/checklists

**Monetization:**
- All resources wrapped in Lemon Squeezy
- Free access with optional tip/donation
- Not paywalled, just appreciation-based

**Long-term:** Will keep adding resources over time. This is a content strategy, not a one-time build.

---

## Site Optimization — Context

**Status:** Post-deployment learning task

**Problem:** Book cover images on Context page (77+ items) take time to load

**Goals:**
1. Make the site lightning fast
2. Learn about performance optimization (first frontend-only site)
3. Understand Core Web Vitals (LCP, etc.)
4. Apply strategies to reduce load time

**Learning focus:** Want to understand the "why" behind optimizations, not just apply them blindly.

---

## GEO (Generative Engine Optimization) — Context

**Status:** Post-deployment

**Philosophy:** GEO-first, SEO wrapped around it

**Goal:** When people search on ChatGPT, Claude, Perplexity, or any AI tool for topics related to Lobsang or his work, the site should appear and be cited.

**Scope:**
- Full GEO audit
- llms.txt implementation
- Structured data / schema markup
- Meta tags and Open Graph
- AI crawler access optimization

**Note:** Lobsang has background research from other projects that can inform implementation.

---

## PostHog Analytics — Context

**Status:** Post-deployment

**Setup:** Has PostHog account from another app. Will provide environment key. Can set up PostHog MCP for dashboard creation.

**Metrics to track:**
- Pageviews
- Time on page
- Most popular pages
- Most popular essays
- Scroll depth
- All clicks (buttons, links)
- Specifically: Quick links, company links

**Key questions to answer:**
- How many people visit?
- How long do they stay?
- What actions do they perform?
- Where do they exit to?
- How many convert to visiting the apps (Coconut, Supanova, etc.)?

**Funnel:** Entry → Time on site → Actions → Exit destinations (especially to apps)

---

## Essays Cleanup — Context

**Issues to fix:**

### 1. Substack CTAs
Essays were imported from Substack and contain CTA blocks like:
- "Lobsang's Substack is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber."
- "Subscribe for access to practical business frameworks and startup insights!"

These appear mid-post and end-of-post. Need to be removed.

### 2. Internal links pointing to Substack
Some essays link to other essays using Substack URLs:
- Current: `[goldilocks of time](https://lobsanglama.substack.com/p/goldilocks-of-time)`
- Should be: `[goldilocks of time](/essays/goldilocks-of-time)`

Users should stay on the website, not be redirected to Substack.

### 3. Prev/Next navigation
Add documentation-style navigation at bottom of each essay:
- Previous essay link (left)
- Next essay link (right)
- Reference: Mintlify docs, Stripe docs

Keeps users immersed without clicking back.

---

## Context Takeaways — Content Task

**Status:** Post-deployment, requires user input session

**Problem:** All 77+ items in Context page have placeholder one-liner takeaways. These need to be replaced with Lobsang's actual learnings.

**Scope:** Books, courses, experiences, education, competitions

**Time estimate:** 1-2 hours of Lobsang's time to go through each item

**Not a code task** — content population task requiring human input.

---

## Deployment — Context

**Platform:** Vercel
**Domain:** lobsang-lama.com (purchased via Cloudflare)
**CI/CD:** Push to `main` → auto deploy

**Setup needed:**
1. Vercel CLI installation and authentication
2. Project linked to Vercel
3. Domain configured in Vercel dashboard
4. DNS records updated in Cloudflare
5. SSL certificate active

**Gmail:** Lobsang will set up Gmail account for contact email. Once ready, update `PERSONAL.email` in `portfolio-data.ts`.

---

# TICKET BACKLOG

## Priority Legend

- **P0** — Blocks deployment
- **P1** — Nice to have for launch
- **P2** — Post-deployment
- **P3** — Content task (requires user input)

---

## DEPLOYMENT BLOCKERS (P0)

### TICKET-001: Update Quick Links with Real Social URLs

**Priority:** P0 — Blocks deployment
**Type:** Content Update
**Estimate:** Small

**Description:**
Replace placeholder social links in ContextPanel with actual URLs.

**Links:**
- Twitter/X: https://x.com/Lobbyyyyyy
- TikTok: https://www.tiktok.com/@seca.mp4
- YouTube: https://www.youtube.com/@lobsang_lama
- GitHub: https://github.com/Lobbyyy
- Substack: https://substack.com/@lobsanglama
- LinkedIn: https://www.linkedin.com/in/lobsang-lama-42a76b63/

**Acceptance Criteria:**
- [ ] All 6 social links functional in ContextPanel
- [ ] Links open in new tab
- [ ] Icons match platforms

**Files:**
- `components/editorial/ContextPanel.tsx`
- `lib/data/portfolio-data.ts`

---

### TICKET-002: Add Company Tags to Quick Links Panel

**Priority:** P0 — Blocks deployment
**Type:** Feature
**Estimate:** Small

**Description:**
Add company links styled as tags (pill/badge style like essay topic tags) below social links. Creates visual distinction.

**Companies:**
- Coconut → https://coconutapp.xyz
- Supanova → https://www.iamsupanova.com
- 1z2 → https://www.1z2.app
- Our Circles → https://www.our-circles.com
- 20 Punches → https://www.20punches.co.uk

**Design:**
- Social links = simple link style
- Company links = pill/badge style
- Opens in new tab (external)

**Acceptance Criteria:**
- [ ] Company tags displayed below social links
- [ ] Styled as pills/badges
- [ ] Links to external company websites
- [ ] Opens in new tab

**Files:**
- `components/editorial/ContextPanel.tsx`

---

### TICKET-003: Update Localhost with Real Projects

**Priority:** P0 — Blocks deployment
**Type:** Content Update
**Estimate:** Medium

**Description:**
Replace placeholder localhost projects with real projects. Use CMO-level positioning.

**Projects:**

| Project | Positioning | Status |
|---------|-------------|--------|
| Midas | "In the future, there will be no UI." Gesture-based HCI using computer vision. | Core tech de-risked, expanding use cases |
| Themis | "Polymarket meets LLM Arena." AI agents debate, you vote. | UI complete, needs production |
| Lifta | AI weightlifting coach. Voice-based, science-backed. | Demo done, needs App Store launch |
| Scoutr | Find your first 100 users. Reddit community discovery. | Flows validated, needs production |
| Sands | Visualize your life. Memento mori app. | Live, UI refresh planned |

**Acceptance Criteria:**
- [ ] All 5 projects updated with real data
- [ ] Descriptions are punchy, benefit-focused
- [ ] Progress bars reflect actual status
- [ ] Links added where applicable

**Files:**
- `app/localhost/page.tsx` or relevant data file

---

### TICKET-004: Add Spotify Playlist Embeds

**Priority:** P0 — Blocks deployment
**Type:** Feature
**Estimate:** Small

**Description:**
Update Spotify page with real playlist embeds for different vibes.

**Categories:**
- Deep Work
- Running
- Feeling Good
- (Additional TBD)

**Test embed:**
```html
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E8CQBn1BWn6gw?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
```

**Acceptance Criteria:**
- [ ] Spotify page displays real playlist embeds
- [ ] Organized by vibe/mood category
- [ ] Responsive sizing
- [ ] User provides additional playlist URLs

**Files:**
- `app/spotify/page.tsx`

---

### TICKET-005: Add Buy Me a Coffee Integration

**Priority:** P0 — Blocks deployment
**Type:** Feature
**Estimate:** Small

**Description:**
Add Buy Me a Coffee as tip option with authentic positioning.

**Link:** https://buymeacoffee.com/lobsanglama

**Copy:**
> "I share without expecting anything in return. If something here helped you, you can support the journey. If not, pay it forward to someone else."

**Placement:**
1. Sidebar nav item
2. Footer on Essays page
3. Footer on Resources page

**Acceptance Criteria:**
- [ ] Nav item in sidebar
- [ ] Footer on Essays page
- [ ] Footer on Resources page
- [ ] Non-transactional copy
- [ ] Link works

**Files:**
- `lib/data/portfolio-data.ts`
- `components/editorial/Sidebar.tsx`
- `app/essays/[slug]/page.tsx`
- `app/resources/page.tsx`

---

### TICKET-006: Clean Up Essays — Remove Substack CTAs

**Priority:** P0 — Blocks deployment
**Type:** Content Cleanup
**Estimate:** Medium

**Description:**
Remove Substack-specific CTAs from imported essays.

**Patterns to remove:**
- "Lobsang's Substack is a reader-supported publication..."
- "Subscribe for access to practical business frameworks..."
- Any subscription CTAs (mid-post or end-of-post)

**Acceptance Criteria:**
- [ ] All Substack CTA blocks removed
- [ ] No "reader-supported publication" language
- [ ] Essays read as standalone content

**Files:**
- `content/essays/*.md`

---

### TICKET-007: Fix Internal Essay Links

**Priority:** P0 — Blocks deployment
**Type:** Bug Fix
**Estimate:** Medium

**Description:**
Fix essay cross-references that point to Substack URLs instead of internal routes.

**Example:**
- Wrong: `[goldilocks of time](https://lobsanglama.substack.com/p/...)`
- Right: `[goldilocks of time](/essays/goldilocks-of-time)`

**Acceptance Criteria:**
- [ ] All internal essay links point to `/essays/[slug]`
- [ ] No Substack URLs for on-site essays
- [ ] Users stay on website

**Files:**
- `content/essays/*.md`

---

### TICKET-008: Add Prev/Next Navigation to Essays

**Priority:** P1 — Nice to have
**Type:** Feature
**Estimate:** Small

**Description:**
Add documentation-style prev/next navigation at bottom of essay pages.

**Reference:** Mintlify docs, Stripe docs

**Acceptance Criteria:**
- [ ] Previous essay link at bottom left
- [ ] Next essay link at bottom right
- [ ] Shows essay title
- [ ] Styled consistently
- [ ] Based on date ordering

**Files:**
- `app/essays/[slug]/page.tsx`
- Create `components/editorial/EssayNavigation.tsx`

---

### TICKET-009: Vercel Deployment Setup

**Priority:** P0 — Blocks deployment
**Type:** DevOps
**Estimate:** Small

**Description:**
Set up Vercel deployment with custom domain.

**Details:**
- Domain: `lobsang-lama.com` (Cloudflare)
- CI/CD: Push to main → auto deploy

**Steps:**
1. Install Vercel CLI
2. Run `vercel` to link project
3. Configure domain in Vercel
4. Update Cloudflare DNS
5. Test pipeline

**Acceptance Criteria:**
- [ ] Vercel CLI installed
- [ ] Project linked
- [ ] Domain configured
- [ ] DNS pointing to Vercel
- [ ] Auto-deploy working
- [ ] SSL active

---

### TICKET-010: Update Contact Email

**Priority:** P0 — Blocks deployment
**Type:** Content Update
**Estimate:** Tiny
**Status:** BLOCKED — waiting for Gmail setup

**Description:**
Update placeholder email with real contact email.

**Acceptance Criteria:**
- [ ] `PERSONAL.email` updated
- [ ] Contact page displays correct email
- [ ] mailto: links work

**Files:**
- `lib/data/portfolio-data.ts`

---

## POST-DEPLOYMENT (P2)

### TICKET-011: Desktop Mode Implementation

**Priority:** P2
**Type:** Feature (Large)
**Estimate:** Large

**Description:**
Complete macOS-style desktop mode showing same data as browser mode.

**Reference:** PostHog website

**See:** "Desktop Mode — Vision Context" section above for full details.

**Status:** Deferred until browser version complete.

---

### TICKET-012: Resources Page Structure

**Priority:** P2
**Type:** Feature
**Estimate:** Medium

**Description:**
Build tabbed UI for Resources with Lemon Squeezy integration.

**See:** "Resources Page — Vision Context" section above.

**Status:** Not blocking deployment.

---

### TICKET-013: Site Performance Optimization

**Priority:** P2
**Type:** Performance
**Estimate:** Medium

**Description:**
Optimize for lightning-fast loading. Focus on book cover images and Core Web Vitals.

**See:** "Site Optimization — Context" section above.

**Goals:**
- Lighthouse 90+ performance
- LCP under 2.5s
- Document learnings

---

### TICKET-014: GEO Audit

**Priority:** P2
**Type:** SEO/GEO
**Estimate:** Medium

**Description:**
Full Generative Engine Optimization audit for AI search visibility.

**See:** "GEO — Context" section above.

**Deliverables:**
- llms.txt
- Schema markup
- Meta tags / Open Graph
- AI crawler optimization

---

### TICKET-015: PostHog Analytics Integration

**Priority:** P2
**Type:** Analytics
**Estimate:** Medium

**Description:**
Comprehensive analytics with PostHog.

**See:** "PostHog Analytics — Context" section above.

**Metrics:**
- Pageviews, time on page
- Popular pages/essays
- Scroll depth
- Click tracking
- Visitor → app conversion funnel

---

## CONTENT TASKS (P3)

### TICKET-016: Context Takeaways — Add Real Learnings

**Priority:** P3
**Type:** Content
**Estimate:** 1-2 hours user time
**Status:** BLOCKED — requires user input session

**Description:**
Replace 77+ placeholder takeaways with actual learnings.

**Scope:** Books, courses, experiences, education, competitions

---

# Summary Table

| # | Ticket | Priority | Blocks Deploy? | Status |
|---|--------|----------|----------------|--------|
| 001 | Update Quick Links | P0 | Yes | Ready |
| 002 | Add Company Tags | P0 | Yes | Ready |
| 003 | Update Localhost | P0 | Yes | Ready |
| 004 | Spotify Embeds | P0 | Yes | Ready |
| 005 | Buy Me a Coffee | P0 | Yes | Ready |
| 006 | Remove Substack CTAs | P0 | Yes | Ready |
| 007 | Fix Essay Links | P0 | Yes | Ready |
| 008 | Essay Prev/Next Nav | P1 | Nice to have | Ready |
| 009 | Vercel Setup | P0 | Yes | Ready |
| 010 | Update Email | P0 | Yes | Blocked (Gmail) |
| 011 | Desktop Mode | P2 | No | Deferred |
| 012 | Resources Structure | P2 | No | Deferred |
| 013 | Performance | P2 | No | Post-deploy |
| 014 | GEO Audit | P2 | No | Post-deploy |
| 015 | PostHog | P2 | No | Post-deploy |
| 016 | Context Takeaways | P3 | No | Blocked (content) |

---

**9 tickets block deployment. 7 tickets are post-deployment.**
