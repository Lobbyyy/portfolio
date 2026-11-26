---
title: "AI Job Search"
excerpt: "Turn Claude Code into your own job application assistant. It finds roles that fit, tailors your CV and cover letter, and preps you for the interview. You still press send."
date: "Nov 26, 2026"
readTime: "3 min"
tags: ["github-repos", "claude-code", "careers", "open-source"]
featured: false
agentPrompt: "Set up AI Job Search as a private copy on my computer, then run /setup: https://github.com/ai-job-search-dev/ai-job-search"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/ai-job-search-dev/ai-job-search"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "JOB"
---

## What it is

[AI Job Search](https://github.com/ai-job-search-dev/ai-job-search) is a set of Claude Code commands that run your job search from start to finish. It's open source (MIT) and has over 73,000 stars on GitHub.

The author built it after losing their own job. They sent 69 tailored applications, got 20 first interviews and one offer.

## What you get

- **`/setup`** builds your profile from your CV, your LinkedIn export, or a short interview.
- **`/scrape`** searches job boards for roles that match, and sorts them by fit.
- **`/apply`** scores one job for fit, drafts a tailored CV and cover letter, has a second agent review them, then shows you the final version.
- **`/interview`** builds a prep pack for that exact job and runs a mock interview.

There are ten more, from Gmail status updates to a skill-gap plan.

## How to set it up

1. Clone it: `gh repo clone ai-job-search-dev/ai-job-search`. Keep your copy **private**. Don't fork it: forks are public, and your profile goes into the files. The [README](https://github.com/ai-job-search-dev/ai-job-search#1-fork-and-clone) shows how to push it to a private repo.
2. Open it in Claude Code: `cd ai-job-search && claude`
3. Run `/setup`, then `/scrape`, then `/apply` on a job you like.

You also need Python 3.10+, Bun and a small LaTeX install for the PDFs. The [setup guide](https://github.com/ai-job-search-dev/ai-job-search/blob/main/SETUP.md) lists them.

## Before you use it

The repo is free, but Claude Code is not: you need a Claude plan or API credits. Read every CV and letter before you send it. You do the applying.
