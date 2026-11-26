---
title: "Free LLM API"
excerpt: "One endpoint in front of every free AI model tier, so Claude Code keeps working after you hit your limit."
date: "Nov 26, 2026"
readTime: "3 min"
tags: ["github-repos", "ai", "claude-code", "llm", "open-source"]
featured: false
agentPrompt: "Set up freellmapi: https://github.com/tashfeenahmed/freellmapi"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/tashfeenahmed/freellmapi"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "LLM"
---

## What it is

[FreeLLMAPI](https://github.com/tashfeenahmed/freellmapi) is an open-source router by Tashfeen Ahmed, with over 58,000 stars on GitHub (MIT licence). It puts the free tiers of dozens of AI providers behind one `/v1` endpoint on your own machine. When one model hits its limit, the router moves you to the next one.

On 26 Nov 2026 the project lists 87 free providers, 1,313 free model endpoints and about 10.1 billion free tokens a month. Those numbers move as providers change their free tiers.

## What you get

- **One endpoint, one key.** Your apps see a single `freellmapi-…` key. Your provider keys stay encrypted on your machine.
- **Works with Claude Code.** It speaks Anthropic's Messages API, so Claude Code runs against your free pool. Codex, Gemini CLI, Cursor, Cline, OpenCode and Aider work too.
- **Automatic failover.** If a model returns a rate limit or an error, the router retries the next one in your chain.
- **Context handoff.** When it does switch models mid-chat, it can pass a short note so the new model knows what you were doing.
- **A dashboard** to add keys, reorder your fallback chain and see usage.

## How to set it up

1. Install Docker if you don't have it.
2. Run the one-line installer from the project: `curl -fsSL https://freellmapi.co/install.sh | bash` (you can [read the script first](https://freellmapi.co/install.sh)).
3. Open `http://localhost:3001`, add the free provider keys you have on the **Keys** page, and copy your unified key.
4. Start Claude Code through it with `npx freellmapi launch`.

On Windows, the project ships a signed desktop app in the Microsoft Store.

## Before you rely on it

The author says it plainly: this is for personal experiments and learning, not production. Free tiers can change or vanish, and each provider's terms still apply to you when your traffic goes through the router. If you build something real on it, switch to a paid API before you ship.
