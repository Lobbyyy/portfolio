---
title: "Career Ops"
excerpt: "Paste a job and it tells you if it's still open and if it fits. It scores each role out of 5, tailors your CV for the good ones, and never applies for you."
date: "Nov 26, 2026"
readTime: "3 min"
tags: ["github-repos", "claude-code", "careers", "open-source"]
featured: false
agentPrompt: "Set up Career Ops for me with npx @santifer/career-ops init, then walk me through adding my CV: https://github.com/career-ops-hq/career-ops"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/career-ops-hq/career-ops"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "CAREER"
---

## What it is

[Career Ops](https://github.com/career-ops-hq/career-ops) is a free, open-source job search agent with over 85,000 stars on GitHub (MIT). It runs on your machine, inside Claude Code, Codex or another AI CLI.

The person who built it was its first user. They evaluated 740 listings, applied to 68, got 12 interviews and 1 offer.

## What you get

- **Is it still open?** It checks the posting is live before you write a word.
- **Does it fit?** It scores the role from 1 to 5 against your real CV. Below 4.0, it tells you to skip it (you can override).
- **The drafts.** A tailored CV, a cover letter and answers to the application questions.
- **Who to talk to.** It finds a contact at the company and drafts the note.
- **A portal scanner.** 180+ companies are set up already, across Ashby, Greenhouse, Lever and Wellfound.

## How to set it up

1. Install it (needs Node.js): `npx @santifer/career-ops init`
2. Open it in your AI CLI: `cd career-ops && claude`
3. Paste your CV when it asks. Setup happens in the chat, with nothing to edit by hand.
4. Paste a job link to get your first evaluation.

## Before you use it

It never submits an application and never sends an email. You read everything and you press Submit. It rewrites your CV but must not invent anything, so check every version before it goes out. Your data stays on your machine, apart from what goes to the AI provider you pick.
