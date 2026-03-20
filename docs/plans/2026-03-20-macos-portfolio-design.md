# macOS Portfolio Design

## Overview

A portfolio website designed as a fully interactive macOS desktop experience. The concept: "a look into my mind" - visitors feel like they're exploring your actual laptop, seeing the chaos and creativity of a builder's brain rendered as a living desktop.

**Core feeling:** "This person is interesting AND gets shit done"

**Values to exude:** Competence, Kindness, Confidence (CKC)

**Target audiences:**
- Investors (looking at ventures, traction, vision)
- Potential team members (who is this person?)
- Founders (resources, shared experience, credibility)
- General audience (content, personal brand)

---

## Technical Foundation

**Base:** Fork of [danielprior-macos](https://github.com/daprior/danielprior-macos)

**Stack:**
- Next.js 13+
- TypeScript
- Tailwind CSS 3.0
- shadcn/ui components
- Lucide React icons
- Bun (package manager/runtime)

---

## The Desktop Experience

### Boot Sequence
- Fast (2-3 seconds)
- Apple-style logo + progress bar
- Sets the tone without friction

### Desktop State on Load
- Windows already open (Spotify playing, Notes fragment visible)
- Feels "in use" - like you just stepped away
- Rotating wallpapers: Team GB, company logos, abstract art, LSE memories

### Menu Bar (Top)
- Name/logo on left
- Real-time clock
- Control Center icon (brightness/volume sliders - decorative)
- Battery at 100% (always charged)
- Dark/Light mode toggle

### Dock (Bottom)
Apps in order:
1. Companies
2. Journal
3. Localhost
4. Resources
5. About
6. Spotify
7. Videos
8. Contact

### Window Behavior
- All windows: draggable, resizable, minimizable
- Encourages exploration and play
- Multiple windows can be open simultaneously

### Spotlight Search (Cmd+K)
- Global search across all content
- Surfaces posts, companies, resources, videos
- Makes navigation effortless

---

## The Apps

### 1. Companies
**Appearance:** Finder window with four folders

**Content:**
- 20punches - AI financial advisory
- Our Circles - family life sharing
- 1z2 - content research intelligence
- Supanova - AI video production

**Each company shows:**
- Hero image
- One-line description
- Problem being solved
- Live link
- Demo video (optional)
- Status indicator:
  - 🟢 Active (building now)
  - 🔵 Live (out there, growing)
  - 🟡 Exploring (early stage)

---

### 2. Journal (Substack Integration)
**Appearance:** Notes app with sidebar

**Features:**
- Pulls in Substack posts directly
- Sidebar lists all entries
- Tags: #philosophy, #founder-life, #curiosity, etc.
- Full diversity of topics on display (quantum mechanics to founder advice)
- The range IS the point

---

### 3. Localhost (Experiments)
**Appearance:** Folder structure `~/localhost/` or `~/experiments/`

**Content:**
- Unfinished projects and half-built ideas
- Each entry: name, one-liner, optional screenshot/sketch
- Example: "AI journaling companion - 60% done"

**Purpose:**
- Shows prolific builder mindset
- Creates intrigue ("what else is in there?")
- Honest about work-in-progress nature
- Abundance mentality

---

### 4. Resources
**Appearance:** Folder structure

**Structure:**
```
~/resources/
  ├── fundraising/
  ├── product/
  ├── mindset/
  └── tools-i-use/
```

**Content:**
- Templates
- Articles written
- Tool recommendations
- Voice memos of advice
- Downloads and links

**Purpose:** Generosity operationalized. Value for founders.

---

### 5. About
**Appearance:** Terminal window with typing effect (scrollable)

**Sections:**
- The arc: athlete → economist → consultant → builder
- LSE thesis (downloadable)
- CKC framework explained
- "Things I believe" (punchy lines)
- Real photos (not corporate)

**Background:**
- LSE (economics)
- Ex-Team GB athlete
- 8+ years: sales, strategy consulting, venture
- Self-taught coder

---

### 6. Spotify
**Appearance:** Native macOS mini-player

**Features:**
- Connects to actual Spotify account
- Shows currently playing / last played
- Curated playlist section:
  - 🏃 Running (Team GB energy)
  - 🧠 Deep Work (coding soundtrack)
  - 🌅 Morning Pages (journaling)
  - ☕ Sunday Build (weekend hacking)
- Playlists link to Spotify

**Purpose:** Humanizes instantly. Memorable detail.

---

### 7. Videos
**Appearance:** Media player window

**Organization:**
- 🎤 Talks - speaking gigs, panels
- 🎙️ Podcasts - appearances, interviews
- 🎬 Builds - shipping in real-time, demos
- 💭 Thoughts - short-form, raw takes

**Features:**
- Thumbnails with title + duration
- Inline playback (no redirect)
- Window resizable, draggable
- Can watch while exploring other apps

---

### 8. Contact (FaceTime)
**Appearance:** FaceTime app interface

**Content:**
- Photo (subtle animation/breathing effect)
- "Let's talk" - Calendly link
- Email - one click
- Twitter/X - for DMs
- LinkedIn - professional reach

**Feature:** "What's this about?" dropdown:
- Investment opportunity
- Speaking / podcast
- Collaboration
- Just saying hi

**Purpose:** Triage inbound, make visitors feel seen.

---

## Easter Eggs

- `~/secrets/` folder with thank you message for the curious
- Terminal commands in About section (`help` shows fun command list)
- Konami code triggers something ridiculous (confetti, etc.)

---

## Dark/Light Mode

- Toggle in menu bar or Control Center
- Respects system preferences by default
- Brand looks good in both

---

## Content to Prepare

1. **Companies:** Descriptions, hero images, status for each
2. **Journal:** Substack API integration or manual post import
3. **Localhost:** List of experiments with one-liners
4. **Resources:** Curated links, templates, downloads
5. **About:** Bio copy, thesis PDF, photos
6. **Spotify:** Playlist curation, API integration
7. **Videos:** Curated selection with categories
8. **Contact:** Calendly setup, social links
9. **Wallpapers:** Collection of personal/meaningful images

---

## Next Steps

1. Fork the danielprior-macos repo
2. Clone to local, set up with Bun
3. Audit existing components vs. requirements
4. Plan implementation phases
