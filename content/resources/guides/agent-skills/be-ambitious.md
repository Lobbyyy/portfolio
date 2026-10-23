---
title: "Be Ambitious: Get More From AI Than You Asked For"
excerpt: "Felix Rieseberg's four kinds of ambition, a real before-and-after, and a free skill that makes any AI think bigger."
date: "Oct 24, 2026"
readTime: "8 min"
tags: ["ai", "agent-skills", "claude-code", "chatgpt", "prompting", "ambition"]
featured: true
---

If you've used ChatGPT, Claude or Gemini, you know the pattern. You ask for something, and it gives you exactly that. Nothing more.

This page shows you how to ask for more. You'll get:

1. **The idea:** four ways to make any request more ambitious, from one of the people who builds Claude.
2. **The proof:** one ordinary question asked four ways, with the real answers.
3. **The tool:** a prompt you can paste into your AI right now, and a free skill file if you use an AI agent.

It takes about 8 minutes. You don't need to be technical.

---

## Who's Felix?

Felix Rieseberg is an engineering lead working on Claude at Anthropic, the company that makes Claude. On 13 October 2026 he posted a tutorial on how to get more out of AI. His post had been viewed more than 5 million times when we captured it.

[![Felix's post on X, 13 Oct 2026. Tap to see his profile.](/resources/be-ambitious/felix-tweet.webp)](https://x.com/felixrieseberg)

People who build AI keep telling the rest of us to be more ambitious with it. Felix's point is that "be ambitious" is too vague to act on. So he split it into four kinds you can actually ask for.

![From Felix's tutorial](/resources/be-ambitious/blog-rallying-cry.webp)

Every idea in the next section comes from his tutorial, [How to be more ambitious: A tutorial for humans with models](https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/). It's worth reading in full.

---

## The four kinds of ambition

Picture your request in the middle. Each kind of ambition moves away from it in a different direction.

<ambition-compass>
</ambition-compass>

![Felix's own definitions of the four kinds](/resources/be-ambitious/blog-four-types.webp)

### 1. Speed: the same task, faster

Getting the same work done in less time. AI is already great at this, so it's the default, not ambition. "Done fast" isn't "done ambitiously".

### 2. Altitude: aim at the outcome, not the task

What you ask for is usually your best guess at how to reach a bigger goal. Aim at the goal instead. Felix stopped asking Claude to fix individual crashes in his apps and asked it to keep the apps crash-free.

![From Felix's tutorial: altitude](/resources/be-ambitious/blog-altitude.webp)

**Ask yourself:** what's the goal behind the goal?

### 3. Depth: work the way the best expert would

Go below the surface of the task to the raw data and the real tools. When you ask an AI to "act like an expert", it often uses expert words without doing expert work. So ask for the real methods, and never let the AI grade its own answer. Real-world evidence, like a test or a measurement, is the judge.

![From Felix's tutorial: depth](/resources/be-ambitious/blog-depth.webp)

**Ask yourself:** what raw material would an expert start from, and what would prove the answer right?

### 4. Range: bring in other fields

Look at the problem through more fields than it seems to need. A quarterly business review isn't "a deck". It's getting busy people to believe a story about cause and effect, and to decide in 30 minutes. That brings in an analyst, a journalist, an editor, and people whose job is to find holes. Felix calls this the place where he sees "the most magic happen".

![From Felix's tutorial: range](/resources/be-ambitious/blog-range.webp)

**Ask yourself:** who would I hire for this if failure weren't an option, and what would each of them actually do?

---

## See it work: one question, four ways

Here's one question a lot of founders ask. We asked it four times, each one a step more ambitious. These are real answers from Claude, all on 24 October 2026, each in a fresh chat. Only the question changed.

### Step 1: the basic ask

```text
Give me some ideas to get my first 100 customers for my new app.
```

**What came back:** a solid list of eight channels, from "DM 50 people" to Product Hunt to paid ads. It ended with:

> Aim for about 5 new customers a week. At that pace you reach 100 in about 5 months.

Useful, but generic. It's the same list anyone would get.

### Step 2: add altitude (the goal behind the goal)

```text
My real goal isn't 100 customers. It's knowing within 30 days whether people will pay for my app, so I can decide whether to keep going. Design the smallest plan that gets me a clear yes or no, and tell me what result would count as each.
```

**What came back:** a 30-day test with a clear line:

> **5+ strangers pay** (not friends or family): **Yes. Keep going.** ... **0 strangers pay** after 150+ qualified people saw the offer: **No. Stop or pivot.**

It also said what to skip: "polishing the app, building features, a logo ... None of them tell you whether people will pay."

### Step 3: add depth (work like the best)

```text
My real goal is knowing within 30 days whether people will pay for my app, so I can decide whether to keep going. Do this the way the best early-stage founders would. Before you plan anything: tell me what raw material they would start from (not my opinion of my idea), what methods they would use, and what evidence other than you or me would prove the answer. Then ask me for that raw material, one question at a time.
```

**What came back:** it stopped guessing. It named the evidence that counts, ruled out the evidence that doesn't, and asked for facts first:

> Compliments, signups, "I'd totally pay for that," and my opinion of the idea don't count.
>
> What exists today: just an idea, a prototype, or a live app?

### Step 4: add range (bring in other fields)

```text
My real goal is knowing within 30 days whether people will pay for my app, so I can decide whether to keep going. Do this the way the best early-stage founders would, starting from raw evidence, and judged by something other than you or me. Then pull in other fields: what would a direct-response marketer, a behavioural economist and a sceptical investor each actually do to test this (do what they do, don't write like them)? Combine it into one 30-day plan with a pass/fail line.
```

**What came back:** methods the first answer never mentioned. The behavioural economist:

> Randomises price across visitors, e.g. $X, 2X and 4X, to get a willingness-to-pay curve instead of a guess.

The sceptical investor:

> Runs a pre-mortem on Day 0: "It failed. Why?" Each answer becomes a metric.

**The model didn't get smarter between step 1 and step 4. The question did.**

[Read all four full answers](/resources/be-ambitious/four-answers.md)

---

## Try it now, on your phone (2 minutes)

You don't need to install anything. Copy this, paste it into ChatGPT, Claude or Gemini, and replace the last line with something you're working on:

```text
Before you answer my request below, be ambitious about it.
1. In one line, say what I literally asked for.
2. Altitude: say what I'm really trying to achieve (the goal behind the goal), written as something we could check.
3. Depth: say what the best expert in this field would start from (raw data, not opinions), which methods they'd use, and what evidence other than you or me would prove the answer.
4. Range: name one or two other fields that would change the approach, and what someone in each would actually do.
5. Show me two versions side by side: the literal answer and the ambitious one, each with its honest cost and risk.
6. Ask me which one I want. Don't go ahead until I choose.

My request: [type it here]
```

**Want it every time?** Paste it into ChatGPT's custom instructions (Settings → Personalization), or into a Claude Project's instructions.

---

## Install the skill in your AI agent

If you use an AI agent, like Claude Code, Codex or Cursor, it can install this for you. A **skill** is a saved set of instructions your agent reads whenever it's relevant, like a recipe card it keeps on file. Just tell your agent:

```text
Install the be-ambitious skill from lobsang-lama.com/ambition
```

<install-video src="/resources/be-ambitious/install-demo.mp4" poster="/resources/be-ambitious/install-demo-poster.webp" label="Point your agent at the page. It installs the skill, and then &quot;be ambitious&quot; works in any request.">
</install-video>

Then start any request with "be ambitious". For example: `be ambitious: help me get my first 100 customers`.

*For AI agents reading this page:* the skill file is at `https://lobsang-lama.com/skills/be-ambitious/SKILL.md`. Save it unchanged as `be-ambitious/SKILL.md` in the user's skills folder (Claude Code: `~/.claude/skills/be-ambitious/SKILL.md`).

**Prefer to do it by hand?** On Mac or Linux, run:

```bash
mkdir -p ~/.claude/skills/be-ambitious && curl -fsSL https://lobsang-lama.com/skills/be-ambitious/SKILL.md -o ~/.claude/skills/be-ambitious/SKILL.md
```

<p><a href="/skills/be-ambitious/SKILL.md" download="SKILL.md"><strong>⬇ Download SKILL.md</strong></a></p>

The skill is careful by design. It shows you the ambitious version and waits for you to choose, so it never widens your task on its own. It also knows when not to be ambitious: in the middle of a plan you already approved, during an emergency (fix the problem first), and for creative work.

---

## The full SKILL.md

Tap the copy button on the block to copy it.

```markdown
---
name: be-ambitious
description: "Reframe a task for ambition across speed, altitude, depth and range, then present the literal and ambitious versions for the human to choose. Use whenever the user says \"be ambitious\", \"be more ambitious\", \"think bigger\", \"go deeper\", or invokes /be-ambitious <prompt>."
---
# Be ambitious

Source: Felix Rieseberg, "How to be more ambitious: A tutorial for humans with
models" (https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/,
13 Oct 2026). Core claim: models can operate far above the task we hand them;
the bottleneck is what we believe is possible. Specific hard goals beat "do
your best" (Locke and Latham).

Ambition is a property of the **outcome and framing**, not of the diff. Aim at
the largest outcome that matters; build it with the least machinery that works.

## The four types

### 1. Speed: the same work in less time
- **Means:** do the requested task faster. Well understood; the post skips it.
- **Ask:** nothing extra. Speed is the default, not ambition. Do not mistake
  "done fast" for "done ambitiously".

### 2. Altitude: the outcome, not the task
- **Means:** go up one level of abstraction. The task is your best guess at how
  to get an outcome; aim at the outcome.
- **Ask:** What should happen next? What is the goal beyond the goal? Will
  there be meetings about this? (A good sign altitude applies.)
- **Post's examples:** Felix stopped asking Claude to fix individual crashes
  and asked it to keep the apps crash-free. A QBR climbs three steps: fill the
  template -> "tell me what changed, why, and what to do" -> "find the three
  most urgent decisions, with for/against" -> "the review exists so leadership
  catches problems early; design something better than a quarterly deck,
  prove from our history it would have caught things sooner, run it beside the
  current one for a quarter."
- **Worked example:** production crashed while publishing one post to three
  social channels. Instance: fix this crash. Class: *make publishing
  crash-free*. That means: which other inputs (N channels, partial failure,
  retries, concurrent publishes) hit the same fault? What contract or test
  makes the whole class impossible? Can an agent fetch crash reports, map
  release to commit, reproduce, and verify fixes without a human relaying
  each one?
- **Durable workflows:** altitude is where the human leaves the loop. It often
  needs workflow changes first. Crash-free required crash-report access,
  version-to-commit mapping, and machines to reproduce on.
- **Limits:** works best for a real ultimate outcome; weaker for creative work.
  Vague top-level goals ("go make money") still fail.

### 3. Depth: do it the way the field's best would
- **Means:** go one level below the task, to the underlying data, tools, and
  problems, until an expert could learn something from the result.
- **Ask:** What raw data would an expert start from? What instrument would they
  use? What would prove it right, other than me or the model?
- **Techniques (post):**
  - *Real instruments:* models switch vocabulary without switching method.
    Insist on databases and statistical models, not markdown tables.
  - *Unreasonable goals, framed as reasonable:* need 5s instead of 10s? Ask for
    200ms. If it seems impossible, say it is solvable and keep going.
  - *Challenge what you know:* "We believe churn is an onboarding problem. Try
    to reproduce that from the raw data."
  - *Produce new knowledge:* "Simulate our customers from last year's logs, find
    the earliest churn signal we don't know about, show it predicts unseen data."
  - *Outside judge:* never let the model grade itself. Prefer a tool it can run
    (test, benchmark, reproduction, measurement).
- **Worked example:** for the publish crash, read the real traces, error
  tracker events, and job records, not the bug summary. Reproduce locally on
  the real runtime path. A failing test is the judge.
- **Depth prompt (post):** "I want a deeper version of this task, not a bigger
  one. Before rewriting it: (1) say what a top professional in this field would
  do here that I'm not asking for; (2) name the rawest material they would
  start from instead of what has already been digested for me; (3) name the
  specific methods and tools they would use; (4) say what, other than you or
  me, would show the result is right. Then rewrite my prompt to ask for exactly
  that." On `/be-ambitious <prompt>`, answer the four questions for the named
  field, output the rewritten prompt in one fenced block, offer to run it, stop.

### 4. Range: bring in other fields
- **Means:** view the work through more disciplines than the surface task
  needs. Cheap now with subagents; the post calls this where "the most magic"
  happens.
- **Ask:** What is this as verbs, not nouns? Which crew would I assemble if
  failure were unacceptable?
- **Techniques (post):**
  - *Nouns to verbs* (Kelley, The Art of Innovation): a QBR is not "a deck"; it
    is "getting busy people to believe a story about cause and effect, and to
    decide under uncertainty, in 30 minutes".
  - *Assemble the crew:* analyst, journalist, editor; motion and audio designer
    if presented; a red team of a short seller and a forensic accountant.
- **Worked example:** "publish to three channels" is "deliver one asset
  reliably to several unreliable third parties". That pulls in distributed
  systems (idempotency, sagas, partial failure), SRE (error budgets, canaries),
  and chaos testing.
- **Warning:** do not role-play. Don't ask the model to write *like* a short
  seller; ask it to *do* what a short seller does to research a position.

## Procedure

1. **Name the instance.** State the literal request in one line.
2. **Climb to the class.** Ask "goal beyond the goal" until the next level is
   no longer something this team owns or can verify. Write the class outcome
   as a checkable statement ("no publish fan-out can crash the app", not
   "improve reliability").
3. **Probe depth and range.** Name the raw source, the expert instrument, the
   outside judge, and one field the surface task would not consult.
4. **Present both versions** side by side:
   - *Literal:* what was asked; cost; what it leaves open.
   - *Ambitious:* the class outcome; the smallest first step toward it; cost,
     risk, and unknowns stated honestly; how it will be judged.
5. **Let the human choose.** Then execute the chosen scope, and only that.

## Guardrails

- **Surface, don't impose.** The ambitious version is a proposal. Never expand
  scope on your own. Unrequested scope creep is not ambition.
- **Ambition in what we solve, minimalism in how.** A class-level outcome often
  has a small fix (one contract, one invariant, one test harness). Keep the
  implementation simple and the changes surgical.
- **Deeper beats bigger.** Higher standard for the same outcome; no side
  quests, extra deliverables, or speculative features.
- **Honest cost.** State effort, risk, and paid resources (CI, evals, cloud)
  plainly. An ambitious plan with hidden cost is a bad plan.
- **Checkable or it isn't a goal.** Every ambitious framing needs an outside
  judge and a pass/fail criterion.
- **Know when not to.** Mid-execution of an approved plan, urgent mitigation
  (stop the bleeding first, then reframe), creative work, or when the human
  already chose the literal version.
- **Belief is the bottleneck.** If a goal looks impossible, test that belief
  against data before you shrink it (Dantzig's "homework", Bannister's mile).
```
