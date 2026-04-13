---
title: "AGI is not a breakthrough, it's a narrative"
excerpt: "Here's how Apple shattered that narrative in one sentence."
date: "Apr 7, 2026"
readTime: "7 min"
tags: ["ai", "benchmarks", "openai", "apple", "agi"]
featured: true
---

*AGI is not a breakthrough, it's a narrative.*

---

## The six words that did all the work

In January 2025, Sam Altman published a statement on his blog. He wrote that OpenAI was confident it knew how to build AGI "as we have traditionally understood it."

Those last six words were doing all the work.

"As we have traditionally understood it" means there is no fixed definition. AGI is not a coordinate on a map. It is a basket of goods someone else gets to pack. Altman was setting the finish line while running the race.

Nine months later, researchers at Apple submitted a paper to ICLR 2025, one of the top machine learning conferences. That paper ran a test so simple it borders on embarrassing. And the results broke the narrative open.

---

## What the test looked like

To understand what Apple did, you need to understand the test they broke.

GSM8K is a set of about 8,000 grade-school math word problems. The kind of thing a ten-year-old solves. Sarah buys 12 kiwis. She eats 3 for lunch and gives 4 to her friend. How many kiwis does Sarah have left?

That is the benchmark. Since 2021, every major AI lab has used it to prove their model can reason. GPT-4o, Llama, Gemma, Phi, o1. They all train on it, they all post their scores, and they all say: look, our model is doing math.

By 2024, the leading models were scoring above 90%. GPT-4o hit 95%. OpenAI's o1-preview hit 96%. The marketing said: reasoning is here.

Apple's team, led by Iman Mirzadeh, took those same problems and changed one thing. They added a single extra sentence to each problem. A sentence that was true but had nothing to do with the answer.

The original: "Sarah buys 12 kiwis. She eats 3 and gives 4 to her friend. How many does she have left?"

The modified version: "Sarah buys 12 kiwis. **Five of them were a bit smaller than average.** She eats 3 and gives 4 to her friend. How many does she have left?"

The answer does not change. The math does not change. A ten-year-old ignores the sentence about kiwi size and gets the right answer.

The models could not.

---

## Every model collapsed

**Phi-3-mini dropped from 88% to 22%.** Sixty-six percentage points gone. From one sentence.

Gemma2-9b fell from 87% to 22%. Mathstral dropped from 80% to 20%. Llama 3-8b went from 74% to 18%. These are not fringe research models. These are the models running in products used by millions of developers.

The frontier models held better. They did not hold.

**GPT-4o dropped from 95% to 63%.** Thirty-two percentage points. o1-mini dropped 27 points. o1-preview, the best reasoning model OpenAI had shipped at the time, dropped 19.

The paper's abstract says accuracy fell "up to 65% across all state-of-the-art models." The 65% figure belongs to Phi-3-mini. But the honest read is: fragility is everywhere on the curve. Even the most advanced reasoning model on the market lost nearly a fifth of its accuracy from one irrelevant sentence about kiwi size.

![Accuracy collapse across 7 models after one irrelevant clause is added — GSM8K baseline vs GSM-NoOp, showing drops of 19 to 66 percentage points](/deep-dives/apple-gsm-symbolic-reasoning/chart-gsm-noop-drop.png)

Apple also tested what happens when you give the model help. Eight-shot prompting means you show the model eight fully worked examples before asking the question. It is the equivalent of a teacher solving eight problems on the whiteboard and then handing you a worksheet. Even with that help, Phi-3-medium still dropped to 22% on the modified problems. The models are not failing to apply a skill they possess. They are revealing that the skill was never there.

---

## Why the test was rigged from the start

This is not a performance bug. This is what happens when a test becomes a training target.

GSM8K was built in 2021. By the time Apple ran their experiment, every major model had been trained on those problems hundreds or thousands of times. The models had stopped solving the math and started recognizing the shape: the setup, the numbers, the structure of a GSM8K problem.

Add a clause that breaks the pattern, and the model has nothing to fall back on. There is no arithmetic engine underneath. There is a very large, very accurate pattern-matching system. When the input stops looking like the training data, the performance stops looking like reasoning.

Marilyn Strathern wrote in 1997: "When a measure becomes a target, it ceases to be a good measure." The AI labs used GSM8K as their target. The models learned to pass GSM8K. GSM8K ceased to measure what it claimed to measure. Apple just showed you the exact moment it stops working.

---

## Three receipts from inside the building

Apple's paper was not the first warning. The receipt had been accumulating for two years.

In 2024, Scale AI, a company whose entire business is building training data for the AI labs, published a paper at NeurIPS. Zhang and colleagues built 1,250 brand-new grade-school math problems of matched difficulty to GSM8K and re-ran the leading models. Accuracy dropped by **up to 13 percentage points** on problems the models had never seen before. They measured the statistical correlation between a model's ability to reproduce GSM8K examples verbatim from memory and its performance gap on the new problems. The correlation was direct and quantitative. A fingerprint of memorization masquerading as reasoning.

Almost no one outside the field heard about it.

OpenAI published its own paper called *Measuring Goodhart's Law*. The paper studies what happens when you push a model to optimize against a proxy for human preferences. At some point, the proxy keeps improving while the thing you actually care about starts falling. OpenAI's own research describes the exact problem the post is about: the metric and the thing it claims to measure are not the same thing.

Three institutions. Scale AI. Apple. OpenAI itself. All three arrived at the same finding within two years, in peer-reviewed venues. The dissent is coming from inside the building. The marketing departments did not notice.

---

## The embarrassingly simple question

When someone offers a benchmark score as proof of intelligence, ask three things. Who designed the test. Whether the models were trained on problems from the same set. And whether anyone has run the irrelevant-clause version on it.

Most people do not ask. Not because they are incurious. Because the narrative is load-bearing. It supports valuations, mission statements, funding rounds. Questioning whether the benchmark measures what it claims means questioning the entire story. That is an expensive move for anyone whose self-image is collateralized against the claim that AGI is close.

Yann LeCun left Meta in November 2025 after twelve years as Chief AI Scientist. He co-founded AMI Labs with a **$1.03 billion seed round** at a **$3.5 billion valuation**. His thesis is not that AI is useless. It is that the current approach, autoregressive LLMs, the architecture every major lab is scaling, will not reach human-level intelligence. He is building a different kind of AI, based on world-models, instead. The bet is not against intelligence. It is against the path.

You cannot fact-check a finish line the runners get to move.

---

AGI is not a breakthrough. It is a narrative.

The math problems these models were trained on could not survive a sentence about kiwi size. The finish line was always where the runners needed it to be. And three papers, from three independent institutions, just showed you the gap between the story and the measurement.

The measure became the target. The target moved. The narrative kept running.

---

**Sources**

- [Mirzadeh et al. — GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models (arXiv 2410.05229, ICLR 2025)](https://arxiv.org/abs/2410.05229)
- [Zhang et al. — A Careful Examination of Large Language Model Performance on Grade School Arithmetic / GSM1k (arXiv 2405.00332, NeurIPS 2024)](https://arxiv.org/abs/2405.00332)
- [OpenAI — Measuring Goodhart's Law](https://openai.com/index/measuring-goodharts-law/)
- [Sam Altman — Reflections (blog.samaltman.com, January 2025)](https://blog.samaltman.com/reflections)
- [Strathern, M. — 'Improving Ratings': Audit in the British University System (European Review, 1997)](https://gwern.net/doc/statistics/decision/1997-strathern.pdf)
- [MIT Technology Review — Yann LeCun's new venture is a contrarian bet against LLMs (Jan 22, 2026)](https://www.technologyreview.com/2026/01/22/1131661/yann-lecuns-new-venture-ami-labs/)
- [CNBC — Meta chief AI scientist Yann LeCun is leaving the company (Nov 19, 2025)](https://www.cnbc.com/2025/11/19/meta-chief-ai-scientist-yann-lecun-is-leaving-the-company-.html)
