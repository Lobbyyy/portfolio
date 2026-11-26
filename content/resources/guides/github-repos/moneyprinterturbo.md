---
title: "MoneyPrinterTurbo"
excerpt: "Give it one topic and it writes the script, finds the footage, adds voice, subtitles and music, and renders a finished short video."
date: "Nov 26, 2026"
readTime: "3 min"
tags: ["github-repos", "ai", "video", "automation", "open-source"]
featured: false
agentPrompt: "Set up MoneyPrinterTurbo: https://github.com/harry0703/MoneyPrinterTurbo"
primaryLabel: "Open on GitHub"
primaryHref: "https://github.com/harry0703/MoneyPrinterTurbo"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "PRINTER"
---

## What it is

[MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) is an open-source video tool by harry0703, with over 145,000 stars on GitHub (MIT licence). You give it a topic or a keyword. It runs the whole pipeline and hands you a finished short video.

## What you get

- **Script.** An AI model writes it from your topic. It works with GPT, Claude, Gemini, DeepSeek and others, so you can use the model you already pay for.
- **Footage.** It pulls matching stock clips, or you can give it your own.
- **Voice, subtitles and music.** It generates the voiceover, syncs the subtitles to it and adds background music.
- **Any format.** 9:16 for Reels, Shorts and TikTok, 16:9 for YouTube, or square.
- **Publishing.** It can post the result to TikTok, Instagram and YouTube Shorts.

## How to set it up

The easiest route is the desktop app. Download the zip for your system from the project's latest release (macOS 14+ on Apple Silicon, Windows x64 or Ubuntu 22.04), unzip it and open the app.

If you prefer Docker:

1. Clone the repo and copy `config.example.toml` to `config.toml`.
2. Run `docker compose -f docker-compose.release.yml up`.
3. Open `http://127.0.0.1:8501` for the web app.

The project also ships its own agent skill. If your agent can read a skill file and use your terminal, it can install, configure and render a video for you, and it only asks when it needs an API key.

## Before you start

Some developers find the setup clunky if you're not used to a terminal. That's why the agent prompt at the top of this page is the fastest way in. You also need an API key for the model that writes the scripts.
