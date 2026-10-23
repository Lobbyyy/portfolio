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
