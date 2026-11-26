---
title: "Sherlock"
excerpt: "Type a username and Sherlock finds every account with that name across 400+ sites. Free, open source, and three commands to install."
date: "Nov 26, 2026"
readTime: "2 min"
tags: ["github-repos", "osint", "security", "open-source"]
featured: false
agentPrompt: "Set up Sherlock: https://github.com/sherlock-project/sherlock"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/sherlock-project/sherlock"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "SHERLOCK"
---

## What it is

[Sherlock](https://github.com/sherlock-project/sherlock) is an open-source search tool with over 117,000 stars on GitHub (MIT licence). You give it a username and it checks more than 400 social networks and sites for accounts with that name.

## What you get

- **One search, 400+ sites.** It lists every site where the username exists.
- **Several names at once.** `sherlock user1 user2 user3`.
- **Saved results.** Each search writes a text file, and it can export CSV or Excel too.

## How to set it up

1. Open a terminal.
2. Install it: `pipx install sherlock-project` (or use `uv` or `pip` in its place).
3. Search: `sherlock username`.

With Docker instead: `docker run -it --rm sherlock/sherlock username`.

## Before you use it

Look up only usernames you have a right to look up: your own, your brand's, or with permission. A match only means the name exists on that site, not that it's the same person. Third-party packages for ParrotOS and Ubuntu 24.04 are reported broken, so use `pipx`, `uv` or Docker there.
