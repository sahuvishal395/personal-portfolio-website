import type { BlogPost } from "../blogs";

// Post 6 of 7 in the AI search cluster (pillar: generative-engine-optimization.ts).
export const aiVisibility: BlogPost = {
  slug: "ai-visibility",
  title: "AI Visibility: How to Measure and Track It",
  metaTitle: "AI Visibility: How to Track Mentions and AI Citations",
  date: "2026-11-16",
  updated: "2026-11-16",
  excerpt:
    "AI visibility explained: the metrics to track, the free Search Console, Bing and GA4 reports that show them, and how to read a citation share rank.",
  summary:
    "AI visibility is how often AI answer engines such as ChatGPT, Perplexity, Gemini and Google AI Overviews name your brand or cite your pages. Measure it by running a fixed set of buyer prompts repeatedly, logging mentions and citations, and checking Google Search Console, Bing Webmaster Tools, GA4 and ChatGPT's Business Hub.",
  content: `
TestMu AI (formerly LambdaTest), a software testing platform, [ranks 9th of 142 domains](/seo#ai-search-geo-aeo) for citation share in Profound, where I set up the company's AI search tracking. Profound [runs the same prompts](https://www.tryprofound.com/features/answer-engine-insights) through AI engines daily and logs the brands each answer names and the pages it cites.

That rank is useful and easy to misread, because citation share counts only links. Below, I compare it with other metrics and with the reports Google, Microsoft and OpenAI provide.

[[toc]]

## What is AI visibility?

AI visibility is how often AI answer engines such as ChatGPT, Perplexity, Gemini, Microsoft Copilot and Google AI Overviews name your brand (a mention) or link to your pages as a source (a citation) when they respond to questions in your category.

Earning mentions and AI citations is the work of [generative engine optimization](/blogs/generative-engine-optimization), and the two often come apart. In a [June 2026 Semrush study](https://www.semrush.com/blog/the-ghost-citations-study/) of 115 prompts, 61.7% of domain appearances were ghost citations: AI platforms "used the page as a source link, but the brand name never appeared in the actual answer." Brands that appeared in Gemini answers were named 83.7% of the time but cited only 21.4%, while ChatGPT showed an "87% citation rate, 20.7% mention rate."

## Which AI visibility metrics should you track?

The metrics that show how AI answers treat your brand are a visibility score, AI share of voice, AI citations and citation share, impressions in Google's AI features, sentiment and AI referral traffic. Report them separately, since they answer different questions.

Profound's [glossary](https://docs.tryprofound.com/getting-started/glossary) defines its AI visibility score as "the percentage of responses that mention your brand, out of all responses that mention at least one brand," so 5 of 10 such responses is 50%. AI share of voice is your brand's percentage of all brand mentions in the tracked answers, so 20 of 100 is 20%. Profound defines citation share as "the percentage of all citations that point to a given domain, page, or citation category," so 100 of 1,000 is 10%. Other vendors calculate scores differently: [AIVisibility.io](https://aivisibility.io/)'s "AI Search Readiness score" grades an audit out of 100.

| Metric | What it counts | Where to check without a tracker | Tracker example | Suggested reading window |
| --- | --- | --- | --- | --- |
| Visibility score | Answers that name you, out of answers that name any brand | Your own prompt log; Business Hub (beta) gives only a raw ChatGPT mention count | Profound Visibility Score | A 7-day or 30-day average |
| AI share of voice | Your brand mentions out of all brand mentions | Your prompt log, counted by brand | Profound Share of Voice; Ahrefs Brand Radar | Monthly, against the same competitors |
| AI citations and citation share | Links to your pages, and your share of all links | Bing Webmaster Tools AI Performance (Copilot, Bing and partners) | Profound Citation Share and Citation Rank | Days cited out of the last seven; compare 30-day periods |
| Google AI impressions | Times a link to your site showed in AI Overviews or AI Mode | Search Console's generative AI performance report | No tracker has Google's own counts | Weekly or monthly; the newest data can be preliminary |
| Sentiment | Share of positive sentiment in answers that mention you | Tag the answers in your prompt log | Profound Sentiment Score | Monthly |
| AI referral traffic | Human visits that arrive from an AI answer | GA4's AI Assistant channel (visits from AI Overviews and AI Mode count as Organic Search); website clicks in Business Hub | Profound Agent Analytics | Weekly, next to Organic Search |

Sources: [Profound glossary](https://docs.tryprofound.com/getting-started/glossary), [Ahrefs](https://ahrefs.com/ai-visibility-checker), [OpenAI](https://openai.com/index/introducing-businesses-chatgpt/), [Bing AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), [Bing Citation Share](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/), [Ahrefs citation study](https://ahrefs.com/blog/how-stable-are-ai-citations/), [Search Console Help](https://support.google.com/webmasters/answer/16984139), [Google's AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [GA4 channel definitions](https://support.google.com/analytics/answer/9756891). The seven-day count is Ahrefs' advice and the 30-day comparison is Microsoft's example; the other reading windows are my suggestions.

My roundup of [GEO tools](/blogs/geo-tools) compares the trackers themselves.

## What does a citation share rank tell you?

A citation share rank tells you where your domain sits when the domains cited in your tracked AI answers are sorted by their share of all citations. The rank leaves out how often those answers name your brand, how many visits they send and where you appear in any single answer.

TestMu AI's 9th place among 142 domains is what Profound calls a Citation Rank. Profound [sorts cited domains into categories](https://docs.tryprofound.com/answer-engine-insights/interpret) such as Owned, Competition, Earned Media and Social (review sites like G2 count as Social), so the domains ranked near yours aren't necessarily competitors.

A citation share rank is built only from links, so it can't flag what Profound calls ["Cited, Not Visible"](https://docs.tryprofound.com/answer-engine-insights/interpret): "Your content is cited, but your brand isn't mentioned in the answer." Read the rank next to a visibility score. Microsoft says Bing's Citation Share does not "represent traffic share," and neither does a tracker's rank. The rank also says nothing about your position inside one answer, and [SparkToro's Rand Fishkin](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/) calls any tool that gives a "ranking position in AI" "full of baloney."

The prompts you track decide the denominator of every share, so adding prompts on a new topic can move the rank even when nothing on your site changes.

I think the rank is still worth watching, because it pools citations from many answers across Profound's daily runs. Fishkin's endorsement covers how often brands appear: "visibility % across dozens to hundreds of prompts run multiple times is a reasonable metric." So treat the rank as a trend to confirm against the free reports below.

## Which reports from Google, Microsoft and OpenAI show AI search data?

[Google Search Console](https://support.google.com/webmasters/answer/9128668), [Bing Webmaster Tools](https://blogs.bing.com/webmaster/2025/6/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility/) and [Google Analytics 4](https://marketingplatform.google.com/about/analytics/) (GA4) are free, and each shows one slice of AI search: impressions in Google's AI features, citations in Microsoft Copilot and visits from AI assistants. ChatGPT's Business Hub, in beta since November 2026, adds mention and click counts.

### Google Search Console

Search Console's [generative AI performance report](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) launched in June 2026, reached all websites by August 31, 2026, and shows impressions in AI Overviews and AI Mode by page, country, device and date. Google's [help page](https://support.google.com/webmasters/answer/16984139) says sites with too few impressions may not see the report. Google's [AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) adds that "No third-party tool has access to our internal ranking or AI systems," so a tracker can't show Google's own counts.

### Bing Webmaster Tools

Bing Webmaster Tools' [AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) report, added in public preview on February 10, 2026, covers "Microsoft Copilot, AI-generated summaries in Bing, and select partner integrations." The report shows total citations, average cited pages per day and a sample of grounding queries, the phrases the AI used to retrieve content for its answers. A [June 2026 update](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/) added Citation Share in preview: your percentage of all citations for a given grounding query. Microsoft calls Citation Share "an observational metric" and "not a ranking system or a competitive scoreboard," and says it does not "expose competitor domains."

### ChatGPT Business Hub

OpenAI [introduced Businesses in ChatGPT](https://openai.com/index/introducing-businesses-chatgpt/) in beta on November 10, 2026. The Business Hub shows "the number of mentions and website clicks a business receives" and discovery topics (themes from conversations that cite the company's site), once activity meets OpenAI's thresholds.

### GA4 AI Assistant channel

GA4 added an [AI Assistant channel](https://support.google.com/analytics/answer/9164320) to its default channel group on May 13, 2026. Google's [channel definitions](https://support.google.com/analytics/answer/9756891) name sources "like ChatGPT, Gemini, Deepseek, Copilot, or Grok" and say the channel "excludes Google's AI Overviews and AI Mode," which count as Organic Search. [Custom channel groups](https://support.google.com/analytics/answer/13051316) take your own regex and "can be applied to your reports retroactively"; Google says to place the AI channel above Referrals.

## How do you choose prompts for AI search tracking?

Choose prompts for AI search tracking from the questions your buyers ask, grouped by topic, written several ways and run repeatedly on the engines they use.

1. Group buyer questions into topics. [Profound's prompt guide](https://docs.tryprofound.com/answer-engine-insights/how-tos/create-topics-and-prompts) suggests starting with five to 10 topics and aiming for about 15, with around 10 prompts each, written as complete questions or statements in each market's language.
2. Give prompts different jobs. [Profound's answer engine optimization (AEO) guide](https://www.tryprofound.com/aeo-guide/chapter-3) uses six types (discovery, competitor, validation, accuracy, sentiment and market perception) and warns that "You can show up in every discovery list and still lose every head-to-head, or vice versa," so report each type separately.
3. Write several phrasings per intent, because buyers word the same need differently. In SparkToro's study, volunteers' own prompts for one headphone-buying need had an average semantic similarity of 0.081, yet drew answers from "a relatively consistent set of brands."
4. Track every name the engines might use for you, including former names such as LambdaTest for TestMu AI. Before counting a mention as lost, check "whether the AI simply used a different version of your brand name," as Ahrefs advises.
5. Run each prompt repeatedly and log the brands named, the URLs cited and what each answer says. SparkToro lists the number of runs needed for statistically sound answers as an open question.

## Why do AI answers change from day to day?

AI answers change from day to day because each run generates a fresh response: the engine often searches the web differently and cites other pages.

In [Ahrefs' October 2026 study](https://ahrefs.com/blog/how-stable-are-ai-citations/) of about 37,500 citations tracked for 20 days across five AI tools, at least half disappeared by the next day. ChatGPT repeated the previous day's exact searches only 26% of the time, yet Ahrefs says its data "suggests much of the churn happens after the search, when the AI decides which pages to cite." Roughly 75% of the citations that disappeared at least once came back within the 20 days.

[SparkToro's study](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/) with Patrick O'Donnell of Gumshoe.ai, an AI-tracking startup, had 600 volunteers run 12 prompts through ChatGPT, Claude and Google's AI a combined 2,961 times in November and December 2025. The study found less than a 1 in 100 chance that ChatGPT or Google's AI would give the same list of brands in any two of 100 responses.

For each question you track, Ahrefs suggests you "count how many days out of the last seven you were cited." Profound also reports an Average Position, but given SparkToro's results, I'd give share metrics more weight.

## Where should you start tracking AI visibility?

Start tracking AI visibility with the free reports: open Search Console's generative AI performance report, check GA4's AI Assistant channel and add your site to Bing Webmaster Tools for Copilot citations. Then run prompts for five to 10 topics several times in ChatGPT, Perplexity, Gemini and Google's AI features, and log mentions, citations and competitors in a spreadsheet.

When daily runs outgrow the spreadsheet, pick a tracker from my [GEO tools](/blogs/geo-tools) roundup. To improve the numbers, see my guides to [AI search optimization](/blogs/ai-search-optimization) and [LLM SEO](/blogs/llm-seo).
`.trim(),
  tags: ["AI Search", "Analytics", "GEO"],
  readingTime: "10 min read",
  keyTakeaways: [
    "AI visibility covers mentions (answers that name your brand) and AI citations (answers that link to your pages), and the two often diverge, so track them separately.",
    "A visibility score counts answers, AI share of voice counts mentions and citation share counts links, so define each metric before reporting it.",
    "A citation share rank, such as TestMu AI's 9th of 142 domains in Profound, leaves out brand mentions, traffic and position within any one answer.",
    "Google Search Console, Bing Webmaster Tools and GA4 report Google AI impressions, Copilot citations and AI assistant visits for free, and ChatGPT's Business Hub (beta) adds mention and click counts.",
    "AI answers change daily. Judge visibility across many prompts and runs, and count the days you were cited out of the last seven.",
  ],
  faqs: [
    {
      question: "What is AI visibility?",
      answer:
        "AI visibility is how often AI answer engines such as ChatGPT, Perplexity, Gemini and Google AI Overviews mention your brand or cite your pages. A mention names the brand in the answer, while a citation links to a page as a source.",
    },
    {
      question: "How do I check my AI visibility?",
      answer:
        "Run the same buyer questions in ChatGPT, Perplexity, Gemini and Google's AI features daily, log the brands and pages in each answer, and count how many of the last seven days you were cited. Google Search Console, Bing Webmaster Tools and GA4 add free data on Google AI impressions, Copilot citations and AI assistant visits.",
    },
    {
      question: "What is a good AI visibility score?",
      answer:
        "Visibility scores can't be compared across tools, because vendors calculate them differently: Profound's is a percentage, while AIVisibility.io's is a readiness score out of 100. A useful test is whether your score beats the competitors you track on the same prompts over several weeks.",
    },
    {
      question: "What does AI share of voice mean?",
      answer:
        "AI share of voice is your percentage of all brand mentions in AI answers to the prompts you track. In Profound's example, 20 mentions out of 100 total brand mentions gives a 20% share of voice.",
    },
    {
      question: "What is the difference between AI mentions and AI citations?",
      answer:
        "An AI mention names your brand in an answer, and an AI citation links to your page as a source. In a 2026 Semrush study of 115 prompts, 61.7% of domain appearances were citations without a mention.",
    },
    {
      question: "How do I check my brand's visibility in ChatGPT?",
      answer:
        "ChatGPT's Business Hub, in beta since November 2026, shows businesses their mentions and website clicks once activity meets OpenAI's thresholds. GA4's AI Assistant channel counts visits from ChatGPT, and repeated buyer prompts reveal which competitors ChatGPT names.",
    },
  ],
  image: {
    alt: "Title card for AI Visibility: How to Measure and Track It, a guide to AI citations, AI share of voice and the AI search reports from Google, Microsoft and OpenAI",
    social: { src: "/images/blog/ai-visibility-og.jpg", width: 1200, height: 630 },
    schema: [
      { src: "/images/blog/ai-visibility-1x1.jpg", width: 1200, height: 1200 },
      { src: "/images/blog/ai-visibility-4x3.jpg", width: 1200, height: 900 },
      { src: "/images/blog/ai-visibility-16x9.jpg", width: 1200, height: 675 },
    ],
  },
  section: "AI Search",
  about: [
    { name: "AI visibility" },
    { name: "Generative engine optimization", sameAs: "https://en.wikipedia.org/wiki/Generative_engine_optimization" },
  ],
  mentions: [
    { name: "ChatGPT", sameAs: "https://en.wikipedia.org/wiki/ChatGPT" },
    { name: "Perplexity", sameAs: "https://en.wikipedia.org/wiki/Perplexity_AI" },
    { name: "Google AI Overviews", sameAs: "https://en.wikipedia.org/wiki/AI_Overviews" },
    { name: "Gemini", sameAs: "https://en.wikipedia.org/wiki/Google_Gemini" },
    { name: "Microsoft Copilot", sameAs: "https://en.wikipedia.org/wiki/Microsoft_Copilot" },
    { name: "Google Search Console", sameAs: "https://en.wikipedia.org/wiki/Google_Search_Console" },
    { name: "Google Analytics", sameAs: "https://en.wikipedia.org/wiki/Google_Analytics" },
    { name: "Bing Webmaster Tools", sameAs: "https://en.wikipedia.org/wiki/Bing_Webmaster_Tools" },
    { name: "Share of voice", sameAs: "https://en.wikipedia.org/wiki/Share_of_voice" },
  ],
};
