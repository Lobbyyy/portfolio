---
title: "Everything Claude Code"
excerpt: "A free, open-source setup that turns Claude Code into a dev team: 72 agents, 328 skills, memory and security scanning. Works with Codex and Cursor too."
date: "Nov 26, 2026"
readTime: "3 min"
tags: ["github-repos", "ai", "claude-code", "skills", "agents", "open-source"]
featured: false
agentPrompt: "Set up Everything Claude Code (ECC): https://github.com/affaan-m/ECC"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/affaan-m/ECC"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "CLAUDE"
---

## What it is

[Everything Claude Code](https://github.com/affaan-m/ECC) (ECC) is Affaan Mustafa's own Claude Code setup, now open source, with over 300,000 stars on GitHub (MIT licence). He has used Claude Code since its early rollout and won the Anthropic x Forum Ventures hackathon in September 2025. Instead of explaining your process in every prompt, you install it once and your agent works that way: plan, test, build, review, verify, remember.

## What you get

- **72 agents** for planning, review, build repair, security and architecture.
- **328 skills** for testing, research, security, docs, frontend, data and more, loaded only when needed.
- **Memory and learning.** Hooks save session summaries and learn from your past sessions.
- **AgentShield.** Scans your prompts, hooks, MCP config, permissions and agent files for security holes and leaked secrets.
- **Not only Claude Code.** Native plugins for Codex and Qoder, and lighter adapters for Cursor, OpenCode, Gemini and others.

## How to set it up

1. You need Node.js 18 or newer, Git, and Claude Code 2.1 or newer.
2. Run the guided setup: `npx ecc-universal@2.2.3 setup`. For a normal personal setup, choose **Global user** and **Standard** hooks.
3. Or, inside Claude Code: `/plugin marketplace add https://github.com/affaan-m/ECC`, then `/plugin install ecc@ecc`.

Pick one of the two routes, not both.

## Before you start

It's a lot to install at once. ECC has a low-context path without hooks if you want a lighter start, and a clean uninstall if it isn't for you. The core is free; ECC Pro for private repos is a paid add-on you don't need.
