---
title: "Day Trader Skill"
excerpt: "11 free Claude skills that scan charts, watch the news, size each trade and replay it 10,000 times before you risk a dollar. Paper trading by default."
date: "Nov 26, 2026"
readTime: "3 min"
tags: ["github-repos", "ai", "claude-code", "skills", "trading"]
featured: false
agentPrompt: "Install the day-trader skill: https://github.com/Jakeschincariol/day-trader-skill"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/Jakeschincariol/day-trader-skill"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "TRADE"
---

## What it is

[Day Trader Skill](https://github.com/Jakeschincariol/day-trader-skill) is a pack of 11 Claude skills by Jake Schincariol, with over 9,000 stars on GitHub (MIT licence). Each skill does one job a trader would do, then hands its work to the next. It's free, needs no signup and no API key, and reads free public data: Yahoo Finance charts, Nasdaq's symbol lists, SEC EDGAR and the House Clerk.

## What you get

- **Chart Scanner.** Scans thousands of US stocks for setups like opening-range breakouts, flags and oversold bounces.
- **News Monitor.** Tracks breaking news on every stock you watch.
- **Entry Timer and Exit Planner.** Tells you when to get in, and sets your stop and target before you do.
- **Time Machine.** Replays the rest of the session 10,000 times from the stock's own recent bars, plus every past day the same setup fired, and gives you the honest odds.
- **Risk and Budget Managers.** Size every position to your budget and block anything that breaks your rules.
- **Pelosi Tracker.** Reads the stock trades members of Congress have to disclose.
- **Order Executor.** Paper trading by default. Nothing places an order until you type yes.

## How to set it up

1. Paste the prompt at the top of this page into Claude, or paste the GitHub link and say "install skill".
2. Or install it as a plugin in Claude Code: `/plugin marketplace add Jakeschincariol/day-trader-skill`, then `/plugin install day-trader-skill@day-trader-skill`.
3. The tools need Python 3.8 or newer, with nothing to pip install. The SEC tools ask for your name and email in `trader/config.json`.

## Before you rely on it

The creator's own worked example came out close to a coin flip. Use it to learn and to test ideas on paper, not as a money printer. This is not financial advice.
