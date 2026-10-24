# Product

<!-- impeccable:product-schema 1 -->

<!-- Written 24 Oct 2026 without an interview: the founder asked not to be asked questions that can be figured out. Facts marked (inferred) come from the repo and the session, not from the founder's words. -->

## Platform

web

## Users

- **Instagram DM visitors (primary, confirmed):** people who commented a keyword (AMBITION, PATCH) on the founder's Instagram and got a short link (/ambition, /patch). Mostly on a phone, arriving cold, often AI beginners. Their job: get the promised resource and use it in minutes.
- **People checking out the founder (inferred):** collaborators, investors, employers or followers reading the homepage, companies and essays to decide who he is and whether to follow or contact him.

## Product Purpose

Lobsang Lama's personal site: identity (Stoic, Entrepreneur, Creative, Athlete), the companies he has built, essays, and free resources (guides, agent skills, checklists). Success: visitors who arrive for a resource read it, use it (copy, download, install), and come back. Long term these pages lead to a future course, **Full Stack Founder** (confirmed as the eventual offer; not built, never promise it on the site yet).

## Positioning

One founder who is an athlete (Team GB table tennis), ex-corporate, self-taught engineer, building AI products. Resources are hands-on, tested and show real outputs (confirmed by the AMBITION page's real before/after answers), not generic tips.

## Operating Context

- Traffic arrives from Instagram DMs with UTM tags; PostHog (EU) records page views, scroll, clicks, copies and downloads.
- Next.js 15 App Router, markdown resources in content/resources, Vercel deploys main.

## Capabilities and Constraints

- Resource pages: markdown with code blocks (copy buttons), images, video, custom figures.
- Main is production; redesign work happens on branches with Vercel previews.

## Brand Commitments

- Colours: orange #D54919 on warm cream #FAF8F5 (confirmed, keep).
- A marbled-stone motif (confirmed, keep; it is not yet a real asset in the repo).
- Identity words Stoic, Entrepreneur, Creative, Athlete and the S.E.C.A. mark (inferred keep).
- The founder dislikes the current typography and text sizing, grain over images, and the identity-word hover being too fast (confirmed).

## Evidence on Hand

- Companies with logos (public/, lib/data/portfolio-data.ts), essays (content/essays), resources (content/resources), Felix Rieseberg screenshots and an install demo video (public/resources/be-ambitious/).
- No testimonials, follower counts or press on file: do not invent them.

## Product Principles

1. The resource is the product: a DM visitor gets value on a phone in under two minutes.
2. Show real proof (real outputs, real screenshots), never claims.
3. Beginner-first wording on every page, whatever the entry point.
4. Every page can later hand off to the course without a rebuild.
