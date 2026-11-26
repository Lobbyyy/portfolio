---
title: "CLI-Anything"
excerpt: "Let Claude Code control apps that have no MCP or connector. CLI-Anything builds a command line for the app and hands your agent the controls."
date: "Nov 26, 2026"
readTime: "2 min"
tags: ["github-repos", "claude-code", "ai-agents", "open-source"]
featured: false
agentPrompt: "Install the CLI-Anything plugin in Claude Code, then find a CLI in CLI-Hub for the app I name: https://github.com/HKUDS/CLI-Anything"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/HKUDS/CLI-Anything"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "CLI"
---

## What it is

[CLI-Anything](https://github.com/HKUDS/CLI-Anything) makes any software usable by an AI agent. Normally someone has to build an integration first, like an MCP server or a connector. CLI-Anything reads the app and generates a command line for it, plus a skill file so your agent knows how to use it. It's open source (Apache 2.0), from the Data Intelligence Lab at the University of Hong Kong, with over 66,000 stars on GitHub.

## What you get

- **Ready-made CLIs.** CLI-Hub already has them for GIMP, Blender, Obsidian, Zoom, Godot, FreeCAD, LibreOffice, n8n and many more.
- **A generator.** Point it at an app, a codebase or an internal tool and it builds a new CLI for it.
- **Many agents.** Claude Code, Codex, Cursor, OpenCode and other agents that read skills.

## How to set it up

Use a CLI that already exists:

1. `pip install cli-anything-hub`
2. `cli-hub search <app>`, then `cli-hub install <name>`

Build your own in Claude Code:

1. `/plugin marketplace add HKUDS/CLI-Anything`
2. `/plugin install cli-anything`
3. Ask Claude to build a CLI for the app you want.

## Before you use it

You need Python 3.10+. A CLI that wraps a desktop app (GIMP, Blender) needs that app installed too. MCP still has its place. This is for the apps nobody has built one for yet.
