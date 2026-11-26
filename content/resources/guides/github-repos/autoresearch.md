---
title: "Autoresearch for Claude Code"
excerpt: "Karpathy's autoresearch loop, as a Claude Code skill. It makes one change, tests it, keeps it only if your metric improves, and repeats while you sleep."
date: "Nov 26, 2026"
readTime: "2 min"
tags: ["github-repos", "claude-code", "automation", "open-source"]
featured: false
agentPrompt: "Install the autoresearch skill with npx skills add uditgoenka/autoresearch, then help me set a goal and a metric: https://github.com/uditgoenka/autoresearch"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/uditgoenka/autoresearch"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "LOOP"
---

## What it is

[Autoresearch](https://github.com/uditgoenka/autoresearch) is a Claude Code skill by Udit Goenka. It's based on [Andrej Karpathy's autoresearch](https://github.com/karpathy/autoresearch), which improved ML models overnight on its own. This version works on anything with a number you can measure. It's open source (MIT) with about 6,900 stars on GitHub. It also works with OpenCode, Codex, pi and Muse.

## What you get

The loop:

1. Make one focused change.
2. Commit it.
3. Run your check: tests, a benchmark or a score.
4. Better? Keep it. Worse? Revert it.
5. Log the result and go again.

Use it to shrink a bundle, lift an SEO or Lighthouse score, speed up a test suite, or run a security audit overnight. There are commands for planning, debugging, fixing, security and shipping too.

## How to set it up

1. In your project: `npx skills add uditgoenka/autoresearch`
2. Restart Claude Code.
3. Run `/autoresearch` and type your goal in plain words. It asks for a metric once, then loops.

## Before you use it

Every command stops after a set number of rounds by default. Unlimited runs are opt-in. Built-in hooks block force-push, `rm -rf` and reading `.env` files, but they're guardrails, not a sandbox. Run it on a branch, and read the diff in the morning.
