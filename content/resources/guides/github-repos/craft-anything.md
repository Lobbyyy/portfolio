---
title: "Craft Anything"
excerpt: "Point it at a website, app or game, say what you want, and a coding agent builds your own version. Then it checks the result against the original and keeps refining."
date: "Nov 26, 2026"
readTime: "3 min"
tags: ["github-repos", "claude-code", "rust", "open-source"]
featured: false
agentPrompt: "Set up Craft Anything with Claude Code as the builder: https://github.com/storytold/craft-anything"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/storytold/craft-anything"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "CRAFT"
---

## What it is

[Craft Anything](https://github.com/storytold/craft-anything) studies how a website, app or game works, then has a coding agent build your own version. The engine is written in Rust and it's open source (Apache 2.0). It went up at the end of October and already has over 44,000 stars on GitHub.

Claude Code is the main builder it supports. It runs your own `claude` program with your own sign-in.

## What you get

- **Study, Build, Check, Ready.** It inspects the original, builds a new project, compares the two and lists what doesn't match yet.
- **It checks its own work.** Websites are compared at three screen widths, and it keeps refining until the build is close.
- **Any stack you ask for.** "Recreate this website" or "Recreate this game's gameplay in Rust". The build uses the language or engine your request names.
- **Built for agents.** 320 tools, each one a CLI command and an MCP tool.

## How to set it up

The easiest route is the installer for Windows, macOS or Linux on the [releases page](https://github.com/storytold/craft-anything/releases).

From source (needs Rust 1.97 or newer):

1. `git clone https://github.com/storytold/craft-anything && cd craft-anything`
2. Run the desktop app: `cargo run --release -p craft-anything`
3. Or install the CLI: `cargo install --path apps/craft-anything-cli`, then `craft-anything-cli doctor` to check your setup.
4. Try it: `craft-anything-cli rebuild https://example.com "Recreate this website"`

## Before you use it

It's early alpha, so expect rough edges. Use it only on software you own or are allowed to examine. By default it works "clean room": it only uses what a visitor can see, never the original's code. It won't bypass DRM, logins or anti-cheat, and it's told not to copy logos, photos or text you don't own.
