---
title: "OpenJarvis"
excerpt: "Your own Jarvis, running on your own computer. Stanford's open-source personal AI reads you a morning briefing from your email and calendar, with no subscription."
date: "Nov 26, 2026"
readTime: "3 min"
tags: ["github-repos", "ai-agents", "local-ai", "open-source"]
featured: false
agentPrompt: "Install OpenJarvis for me and set up the morning digest: https://github.com/open-jarvis/OpenJarvis"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/open-jarvis/OpenJarvis"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "JARVIS"
---

## What it is

[OpenJarvis](https://github.com/open-jarvis/OpenJarvis) is a personal AI that runs on your own device. It comes from a research team at Stanford ([project site](https://openjarvis.stanford.edu/)), it's open source under Apache 2.0, and it has about 19,000 stars on GitHub.

Most "personal" assistants send everything to someone else's server. This one runs a local model through Ollama, so your email and calendar stay on your machine.

## What you get

- **A spoken morning briefing.** The `morning-digest` preset reads your email, calendar and news, then plays you a short audio summary.
- **One sign-in for Google.** `jarvis connect gdrive` covers Gmail, Calendar and Tasks with one OAuth.
- **Eight built-in agents.** Morning digest, deep research with citations, a code assistant, a scheduled monitor and more.
- **Skills.** Import skills from public collections, or write your own.

## How to set it up

The fastest way: paste the GitHub link into Claude Code and say "install this for me". The installer is one command, so your agent can run it.

By hand:

1. Install it. On macOS, Linux or WSL2: `curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | bash`. On Windows: `irm https://open-jarvis.github.io/OpenJarvis/install.ps1 | iex`. It sets up Python, Ollama and a starter model in about 3 minutes.
2. Pick the briefing preset: `jarvis init --preset morning-digest-mac --force` (or `-linux`).
3. Connect your email and calendar: `jarvis connect gdrive`.
4. Get your first briefing: `jarvis digest --fresh`.

Prefer an app? There are desktop installers on the [releases page](https://github.com/open-jarvis/OpenJarvis/releases/latest).

## Before you use it

It's free, but a local model needs a reasonable computer. Bigger models keep downloading in the background after the install, and `jarvis doctor` shows where things are.
