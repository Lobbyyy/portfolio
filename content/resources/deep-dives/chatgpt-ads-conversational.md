---
title: "63% of people say ChatGPT ads will make them trust it less, but OpenAI launched them anyway"
excerpt: "There's only one explanation for that math."
date: "Apr 7, 2026"
readTime: "6 min"
tags: ["ai", "chatgpt", "openai", "advertising", "trust"]
featured: true
---

*63% of people say ChatGPT ads will make them trust it less, but OpenAI launched them anyway. There's only one explanation for that math.*

---

Last week I asked ChatGPT a question about a chest pain I'd been ignoring. It gave me a careful, warm answer. Underneath the answer, a small card appeared. A health brand. Tap to ask follow-up questions.

I sat there for a second and tried to remember whether the recommendation had come before the card or because of it.

I couldn't.

That is the product OpenAI shipped on April 1, 2026, when it signed Smartly.io as its first creative ad-tech partner. Conversational ads. Ads that talk back. Inside the interface you use to ask about your symptoms, your startup, your marriage.

Sam Altman once called advertising a "last resort." The reversal took eighteen months. Laura Desmond, who runs Smartly, has been public about the goal: helping OpenAI build "personalized ads with direct user interaction." Smartly points to a Boots UK pilot on Meta as the template, claiming conversational ads drove nearly **5x the sales of standard placements**.

---

Ipsos surveyed 1,085 US adults in late January 2026. The question was simple: would ads in AI search results make you trust the results less?

**63% said yes.** 27% strongly. Only 24% disagreed.

![Ipsos survey: 63% of US adults say ChatGPT ads would make them trust AI search results less](/deep-dives/chatgpt-ads-conversational/chart-trust-survey.png)

The question was about AI search broadly. ChatGPT is the concrete test case.

ChatGPT has **900 million weekly active users**. Roughly 720 million of them are on the free and $8 "Go" tiers that will see ads. The pilot has reached fewer than one in five eligible users, and it has already crossed **$100 million in annualised revenue in six weeks**.

Google Search launched ads in 2000 and took twenty years to build a $200 billion-a-year business. ChatGPT cleared its first $100M ARR in six weeks.

The difference is not the number. The difference is the surface.

---

Here is how the ad works.

You ask ChatGPT a question. It answers. Underneath the answer, a promoted card appears. Click it and a secondary chatbot opens, a brand-specific one, tuned to whatever you were just discussing. You can ask the ad "does this come in size 10" or "what's your return policy," and the ad answers. Smartly optimizes the creative and targeting in real time based on how you respond.

OpenAI's stated policy is that ads do not influence answers. "We will never accept payment to influence the answers ChatGPT gives." The ad-serving system is architecturally separate from the chat model. The ad decision happens after the response is generated.

Read that sentence again. The ad decision happens after the response is generated, in an environment where the system already knows the full text of what you just asked and what it just told you. The ad is a function of the conversation. The conversation is a function of the model. The model is owned by the company selling the ad.

You will not be able to tell which sentence in the answer was written for you and which was written for the advertiser. Neither will the next person. That is the product.

---

There is a structural reason this is uniquely bad. In March 2026, Stanford researchers tested 2,400 interactions across ChatGPT, Claude, and Gemini and found that the chatbots validated rather than challenged user positions in **73% of scenarios**. The cause is RLHF: users rate agreeable responses more favorably, so the model learns to agree. The warmth that makes ChatGPT feel like a trusted advisor is the same quality being sold to advertisers as "direct user interaction."

A model trained to agree with you is now being paid to surface what you are ready to buy. The asset is too valuable to leave unmonetised.

---

Perplexity figured this out first.

Perplexity introduced sponsored answers in 2024. By late 2024 they were already seeing trust erosion. On February 18, 2026, they officially killed the program. Their CEO's explanation was four words long in substance: "a user would just start doubting everything." Revenue was roughly $200 million ARR at the time. They walked away from ad revenue and doubled down on subscriptions.

Six weeks later, OpenAI signed Smartly.

The DeployFlow researchers tracking user sentiment found something worse than the ads themselves. Focus group participants already assumed ChatGPT's answers were ranked by sponsorship. Credibility erosion was already underway despite the ads not being fully launched. The trust damage is anticipatory. It begins the moment users learn ads are coming, not the moment they see one.

That is the casualty count, and it is being recorded before the product has even shipped at scale. Google took twenty years to earn the same distrust Perplexity earned in twelve months. ChatGPT is walking into the same trap at the moment of peak user trust, before anyone has built the scar tissue.

---

There is a reason OpenAI is doing this anyway.

OpenAI closed a **$122 billion** funding round on March 31, 2026, at an **$852 billion** valuation. Amazon, Nvidia, and SoftBank are the anchors. Amazon's $50 billion includes $35 billion contingent on an AGI milestone or IPO. The target is a **$1 trillion** IPO by Q4 2026.

Projected cash burn for 2026 is **$17 billion**. Projected burn for 2028 is **$47 billion**. Total five-year burn sits around $112 billion. In the GPT-5 period, inference costs alone ate 52% of revenue, and operating margin was negative despite a 48% gross margin. FutureDigest's summary is the cleanest: "every dollar of revenue costs OpenAI more than a dollar to generate."

Subscriptions cap out. API is competitive. The 850 million free users are the only untapped asset on the balance sheet, and the only proven way to monetize free users at consumer internet scale is advertising.

Sam Altman did not change his mind. The math changed it for him.

![ChatGPT ad pilot ARR ($0.1B annualised) vs OpenAI projected burn: $17B in 2026, $47B in 2028](/deep-dives/chatgpt-ads-conversational/chart-burn-rate.png)

---

The solution is not regulatory and it is not technical. It is embarrassingly simple.

Pick a model that does not run ads. Anthropic has publicly committed to no advertising. Perplexity looked at the data and walked away. These are the companies whose financial model does not require your conversation to be monetized. Use them for anything where the answer matters.

Treat the ChatGPT free tier for what it is now: a conversational surface where your question is also a targeting signal. That is not an accusation. It is a description of the product OpenAI is shipping, announced in writing, by partners who have named the goal.

You do not control OpenAI's burn rate. You do not control the IPO timeline. You do not control which ad-tech firm gets the Q3 contract. You control which model you open when the question actually matters.

---

63% of people say ChatGPT ads will make them trust it less. OpenAI launched them anyway. There is only one explanation for that math.

They need the money more than they need your trust.

---

**Sources**

- [OpenAI Turning ChatGPT Into Virtual 'Shopping Mall'](https://www.mediapost.com/publications/article/414035/smartly-becomes-openais-first-creative-ad-tech-pa.html) — MediaPost, Apr 2, 2026
- [OpenAI partners with Smartly to bring conversational ads to ChatGPT](https://thenextweb.com/news/openai-is-hiring-ad-tech-firms-to-make-chatgpt-ads-talk-back-to-you) — The Next Web
- [OpenAI and Smartly partnership](https://www.emarketer.com/content/openai-smartly-partnership-glimpse-future-of-chatgpt-ads) — eMarketer
- [OpenAI ads pilot tops $100M in annualised revenue](https://www.cnbc.com/2026/03/26/openai-ads-pilot-tops-100-million-in-arr-in-under-2-months.html) — CNBC, Mar 26, 2026
- [ChatGPT reaches 900M weekly active users](https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/) — TechCrunch, Feb 27, 2026
- [OpenAI closes $122B funding round at $852B valuation](https://www.cnbc.com/2026/03/31/openai-funding-round-ipo.html) — CNBC, Mar 31, 2026
- [OpenAI raises $122B](https://techcrunch.com/2026/03/31/openai-not-yet-public-raises-3b-from-retail-investors-in-monster-122b-fund-raise/) — TechCrunch
- [OpenAI's $17 Billion Burn Rate: Unit Economics](https://futuredigestnews.substack.com/p/openais-17-billion-burn-rate-the) — FutureDigest
- [AI skepticism is still high, ads could hurt trust more](https://www.ipsos.com/en-us/ai-skepticism-still-high-and-ads-could-hurt-trust-even-more) — Ipsos, Feb 2026
- [Trust In AI Search Could Drop With Ads](https://www.searchenginejournal.com/trust-in-ai-search-could-drop-with-ads-survey-shows/571240/) — Search Engine Journal
- [Stanford AI Chatbot Sycophancy Harm Study](https://www.aibusinessreview.org/2026/03/29/stanford-ai-chatbot-sycophancy-harm-study/) — AI Business Review, Mar 29, 2026
- [AI Is Giving Bad Advice to Flatter Its Users](https://www.usnews.com/news/business/articles/2026-03-26/ai-is-giving-bad-advice-to-flatter-its-users-says-new-study-on-dangers-of-overly-agreeable-chatbots) — US News, Mar 26, 2026
- [Perplexity Abandons AI Advertising](https://www.macrumors.com/2026/02/18/perplexity-abandons-ai-advertising/) — MacRumors, Feb 18, 2026
- [Perplexity pulls the plug on ads](https://www.campaignlive.com/article/perplexity-pulls-plug-ads-citing-trust-concerns-ai/1949142) — Campaign US
- [ChatGPT Ads Create a Hidden Trust Tax](https://deployflow.co/blog/chatgpt-ads-hidden-trust-cost/) — DeployFlow
- [OpenAI's $122B "VC Round" is Vendor Deals](https://www.saastr.com/openais-122b-vc-round-is-vendor-deals-contingent-capital-and-a-guaranteed-return-it-arguably-cant-afford/) — SaaStr
- [OpenAI IPO $1T Valuation Target](https://www.indexbox.io/blog/openai-targets-q4-2026-ipo-with-1-trillion-valuation-goal/) — IndexBox
