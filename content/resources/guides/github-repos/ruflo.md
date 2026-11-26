---
title: "Ruflo"
excerpt: "A free agent harness for Claude Code and Codex: teams of AI agents that plan, code, test and review together, and remember what worked."
date: "Nov 26, 2026"
readTime: "3 min"
tags: ["github-repos", "ai", "claude-code", "agents", "open-source"]
featured: false
agentPrompt: "Set up ruflo: https://github.com/ruvnet/ruflo"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/ruvnet/ruflo"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "FLOW"
---

## What it is

[Ruflo](https://github.com/ruvnet/ruflo) is an open-source agent harness by ruvnet, with over 82,000 stars on GitHub (MIT licence). It sits on top of Claude Code, Codex and other MCP clients and runs teams of agents on your task instead of one.

## What you get

- **Agent teams.** Coordinator agents split the work, and worker agents research, code, test and review it.
- **Shared memory.** Each run stores what worked, so the next run can reuse it.
- **The full kit.** The full install adds 98 agents, 60+ commands, 30 skills, an MCP server and hooks to your project.
- **Mission Control.** A console where you can watch a run and inspect what each agent did.

## How to set it up

1. Open a terminal in your project folder.
2. Run `npx ruflo@latest init` (or `npx ruflo@latest init wizard` for a guided setup, which also works on Windows).
3. Open Claude Code in the same folder and give it a real task, for example: "Use a ruflo swarm to review this repo: find the riskiest module, write tests for it, and summarise what you changed."

Want to try it without adding files to your project? In Claude Code, run `/plugin marketplace add ruvnet/ruflo`, then `/plugin install ruflo-core@ruflo`.

## Before you start

The full install writes `.claude/`, `.claude-flow/` and a `CLAUDE.md` into your project, so try it on a branch first. Plugins and mods run with your account's permissions, so read what you install. And check the result yourself: ask the agent what it changed and review the diff.
