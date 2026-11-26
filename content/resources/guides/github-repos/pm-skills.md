---
title: "PM Skills Marketplace"
excerpt: "72 product management skills and 42 workflows for Claude Code, Cowork and Codex. Discovery, strategy, PRDs, launches and metrics, one command each."
date: "Nov 26, 2026"
readTime: "2 min"
tags: ["github-repos", "claude-code", "product", "open-source"]
featured: false
agentPrompt: "Install the PM Skills Marketplace plugins in Claude Code: https://github.com/phuryn/pm-skills"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/phuryn/pm-skills"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "SKILLS"
---

## What it is

[PM Skills Marketplace](https://github.com/phuryn/pm-skills) is a set of plugins that teach your AI assistant how a product manager works. 72 skills and 42 workflows, grouped into plugins. It's open source (MIT) with about 28,000 stars on GitHub.

Each skill walks you through a known framework step by step: continuous discovery, assumption mapping, prioritisation, value propositions and strategy.

## What you get

- **`/discover`** for a new idea: brainstorm, map assumptions, rank the risky ones, design experiments.
- **`/strategy`** when you need a clear direction.
- **`/write-prd`** to write a product spec.
- **`/plan-launch`** to plan a launch.
- **`/north-star`** to pick the metric that matters.

## How to set it up

In Claude Code:

1. `claude plugin marketplace add phuryn/pm-skills`
2. Install the plugins you want, for example `claude plugin install pm-product-discovery@pm-skills` and `claude plugin install pm-product-strategy@pm-skills`.

In Claude Cowork: Customize, then Browse plugins, Personal, +, Add marketplace from GitHub, and enter `phuryn/pm-skills`.

Codex reads the same marketplace: `codex plugin marketplace add phuryn/pm-skills`.

## Before you use it

The slash commands only work in Claude Code and Cowork. In Codex, Cursor or Gemini CLI you get the skills, and you describe the workflow in plain words.
