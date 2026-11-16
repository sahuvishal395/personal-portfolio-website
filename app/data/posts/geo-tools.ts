import type { BlogPost } from "../blogs";

// Post 7 of 7 in the AI search cluster (pillar: generative-engine-optimization.ts).
export const geoTools: BlogPost = {
  slug: "geo-tools",
  title: "Best GEO Tools to Track AI Search Visibility",
  metaTitle: "Best GEO Tools to Track AI Search Visibility (2026)",
  date: "2026-11-16",
  updated: "2026-11-16",
  excerpt:
    "GEO tools compared from their makers' own docs: engines covered, how trackers collect AI answers, free options and what to check before you buy.",
  summary:
    "GEO tools are products that track how often AI systems such as ChatGPT, Perplexity, Gemini and Google AI Overviews mention or cite your brand. Start with the free reports in Google Search Console and Bing Webmaster Tools, then add one paid tracker, such as Semrush, Ahrefs, Profound or Peec AI, that covers the engines your buyers use.",
  content: `
Google Search Console, Ahrefs, Semrush and SE Ranking, four of the SEO tools I use, now offer some AI visibility reporting. At TestMu AI (formerly LambdaTest), a software testing platform, I also set up AI search tracking in Profound. TestMu AI [ranks 9th of 142 domains](/seo#ai-search-geo-aeo) there for [citation share](https://docs.tryprofound.com/getting-started/glossary), which Profound defines as the percentage of all citations that point to a given domain.

In a November 2026 check of Google's top five results for "GEO tools", three ranked their own product or a sister company's first. Below, I describe each tool from its maker's documentation, grouped by type, unranked and with no ratings or prices.

[[toc]]

## What are GEO tools?

GEO tools are products that show how AI systems such as ChatGPT, Perplexity, Gemini, Microsoft Copilot and Google AI Overviews mention or cite your brand, usually by running a fixed list of prompts and recording the answers. Google, Microsoft and OpenAI offer first-party reports, several SEO suites have added AI visibility features, dedicated trackers focus on AI answers, and enterprise platforms put AI visibility inside a wider search product.

GEO stands for [generative engine optimization](/blogs/generative-engine-optimization), the work of getting AI systems to cite and mention your brand. These products are also called AI visibility tools or LLM tracking tools. In [Ahrefs'](https://ahrefs.com/ai-visibility-checker) wording, a mention means the AI "named your brand in its response," and a citation means "it linked to your website as a source." My guide to [AI visibility](/blogs/ai-visibility) defines the metrics these tools report.

## How do AI visibility tools collect their data?

AI visibility tools send your prompts to each AI engine on a schedule, through the web interface a person uses, the engine's official API or both, then store the answers and count brand mentions and cited links. Vendors describe their own methods differently:

| Tracker | How it collects answers (vendor's description) | How often it reruns prompts (vendor's description) |
| --- | --- | --- |
| Profound | Queries the "front-end experiences that normal users see" rather than API calls | "every tracked prompt daily" |
| SE Visible (SE Ranking) | A "browser interface"; Claude "through the API" | "Daily by default"; some plans can switch a project to weekly |
| Peec AI | "UI scraping" that reflects "the reality for a logged-out user" | "once every 24 hours" |
| Scrunch | "browser automation and official platform APIs" | Daily for a new prompt's first 14 days, then every 72 hours by default |
| Conductor | "official LLM APIs" | Not stated on the linked page |
| Ahrefs Brand Radar | Runs prompts "through each AI platform and stores the responses"; also tracks searches that "trigger an AI answer inside Google Search"; browser or API not stated | Index "re-tested monthly on a 90-day reporting window"; custom prompts daily, weekly or monthly |
| Semrush AI Visibility Toolkit | Brand Performance reports run "a vast collection of common queries" through "LLMs like ChatGPT and Google's AI Mode"; browser or API not stated | Prompt Tracking daily; Brand Performance reports weekly |
| Similarweb AI Citation Analysis | Not stated on the linked page | Citations tracked daily |

Sources: [Profound](https://www.tryprofound.com/features/answer-engine-insights), [SE Visible](https://visible.seranking.com/), [Peec AI docs](https://docs.peec.ai/intro-to-peec-ai), [Peec AI](https://peec.ai/geo-report), [Scrunch](https://scrunch.com/faqs/what-methods-does-scrunch-use-to-collect-data-from-ai-platforms), [Conductor](https://www.conductor.com/lp/enterprise-ai-visibility-optimization/), [Ahrefs](https://ahrefs.com/brand-radar), [Semrush](https://www.semrush.com/kb/1493-ai-visibility-toolkit), [Similarweb](https://aisearch.similarweb.com/ai-brand-visibility/citation-analysis/).

[SparkToro](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/) lists "Do API calls mimic the variety real users are getting with manually-inputted prompts?" among the open questions it wants AI tracking tools or independent researchers to answer. [OtterlyAI](https://otterly.ai/) notes that your own checks in ChatGPT or Perplexity may not match what OtterlyAI shows, because those platforms use "a so-called Memory RAG" that stores information on you. Every tracker samples answers from outside the engine, and [Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says of its own systems: "No third-party tool has access to our internal ranking or AI systems."

## What are the best GEO tools for tracking AI search visibility?

For most teams, the best GEO tools are Google Search Console and Bing Webmaster Tools, which cost nothing, plus a single paid tracker matched to the AI engines their buyers use. Semrush, Ahrefs and SE Ranking suit teams already on those suites, while Profound, Peec AI, OtterlyAI, Scrunch and AthenaHQ are dedicated AI search trackers.

The table leaves out prices; check current pricing on each paid tool's site.

| Tool | Type | Best for | Engines covered (as stated) | Key metrics | Free option |
| --- | --- | --- | --- | --- | --- |
| Google Search Console (Generative AI performance report) | First-party report | Your own impressions in Google's AI features | AI Overviews, AI Mode, generative AI features in Discover | Impressions by page, country, device and date | Free service |
| Bing Webmaster Tools (AI Performance) | First-party report | Your citations in Microsoft's AI answers | Microsoft Copilot, AI summaries in Bing, select partners | Total citations, cited pages, grounding queries (a sample), Citation Share | Free service |
| OpenAI Business Hub (beta) | First-party report | How people engage with your business in ChatGPT | ChatGPT | Mentions, website clicks, discovery topics | No price stated |
| Semrush AI Visibility Toolkit and Enterprise AI Optimization (AIO) | SEO or traffic suite | Teams already on Semrush | Prompt Tracking: ChatGPT Search, Google AI Mode, Gemini; Enterprise AIO (page description): ChatGPT, Gemini, Claude, Perplexity | AI Visibility Score, mentions, citations, average position | Free checker, 3 uses a day; no toolkit trial |
| Ahrefs Brand Radar | SEO or traffic suite | Looking up brands in a prebuilt prompt index | AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini, Copilot; Claude for custom prompts | Mentions, citations, AI share of voice, estimated impressions | Free AI Visibility Checker |
| SE Visible (SE Ranking) | SEO or traffic suite | Unedited, browser-collected answers with an API on all plans | FAQ: AI Mode, AI Overviews, Gemini, ChatGPT, with Claude and Copilot "will be added soon"; plan lists already name Copilot, and Claude on the Agency plan | Visibility, share of voice, average position, net sentiment | 14-day trial |
| Similarweb AI Citation Analysis | SEO or traffic suite | Cited domains and URLs next to AI referral traffic | ChatGPT, Gemini, Perplexity, AI Mode | Cited domains and URLs, Domain and URL Influence Scores | Free trial |
| Profound | Dedicated tracker | Daily prompt tracking across many engines | ChatGPT, Perplexity, Claude, Google AI Overviews, Google AI Mode, Google Gemini, Exa, Muse Spark, Qwen, DeepSeek | Visibility score, share of voice, sentiment, citation sources, competitor rankings | Free trial |
| Peec AI | Dedicated tracker | A long list of engines and Looker Studio reports | ChatGPT, Perplexity, Gemini, AI Overviews, AI Mode, Copilot, Claude, Grok, DeepSeek, Muse Spark, Mistral, Qwen, Naver AI Briefing | Visibility (share of chats naming you), position | Free GEO report; 7-day trial |
| OtterlyAI | Dedicated tracker | Prompt tracking plus free utilities and a public API | ChatGPT, AI Overviews, AI Mode, Gemini, Claude, Perplexity, Copilot | Brand mentions, website citations | 7-day trial; free tools |
| Scrunch | Dedicated tracker | Full answer text and aggregated metrics by API | ChatGPT, Perplexity, Gemini, Claude, AI Mode, AI Overviews, Copilot, Grok, Meta AI | Brand presence, sentiment, citations | 7-day trial |
| AthenaHQ | Dedicated tracker | Starting on a free tier | All plans: ChatGPT, Perplexity, Gemini, AI Overviews, Copilot; paid plans add AI Mode, Claude, Grok, DeepSeek, Meta AI (FAQ; the Starter plan card also lists Mistral) | Prompt and response analysis, sources, competitor insights | Free Essential plan |
| Conductor | Enterprise platform | AI visibility next to web analytics and traditional search data | ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews (through official APIs) | Mentions, citations, sentiment, traffic through GA4 or Adobe | Free AI Visibility Analysis; 3-week trial |
| BrightEdge AI Catalyst | Enterprise platform | Mentions and citations reported separately | ChatGPT, Perplexity, AI Overviews, AI Mode, Gemini "and other AI platforms" | Mentions Presence, Citations Presence, competitor benchmarks | None stated |

Sources: [Search Console Help](https://support.google.com/webmasters/answer/16984139), [Search Console blog](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports), [Search Console](https://support.google.com/webmasters/answer/9128668), [Bing AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), [Bing Citation Share](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/), [Bing Webmaster Tools](https://blogs.bing.com/webmaster/2025/6/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility/), [OpenAI](https://openai.com/index/introducing-businesses-chatgpt/), [Profound](https://www.tryprofound.com/features/answer-engine-insights), [Semrush toolkit](https://www.semrush.com/kb/1493-ai-visibility-toolkit), [Semrush Prompt Tracking](https://www.semrush.com/kb/1496-getting-started-with-ai-visibility-toolkit), [Semrush metrics](https://www.semrush.com/kb/1594-ai-seo-metrics), [Semrush checker](https://www.semrush.com/free-tools/ai-search-visibility-checker/), [Semrush Enterprise AIO](https://enterprise.semrush.com/solutions/ai-optimization/), [Ahrefs Brand Radar](https://ahrefs.com/brand-radar), [Ahrefs checker](https://ahrefs.com/ai-visibility-checker), [SE Visible](https://visible.seranking.com/), [Similarweb](https://aisearch.similarweb.com/ai-brand-visibility/citation-analysis/), [Peec AI report](https://peec.ai/geo-report), [Peec AI](https://peec.ai/), [OtterlyAI](https://otterly.ai/), [OtterlyAI free tools](https://otterly.ai/geo-tools), [Scrunch platforms](https://scrunch.com/faqs/which-ai-platforms-and-llms-can-scrunch-track-and-monitor), [Scrunch APIs](https://scrunch.com/faqs/what-apis-does-scrunch-offer-and-how-do-they-work), [Scrunch trial](https://scrunch.com/faqs/does-scrunch-offer-a-free-trial), [AthenaHQ](https://athenahq.ai/), [Conductor](https://www.conductor.com/platform/intelligence/), [Conductor APIs](https://www.conductor.com/compare/profound-vs-conductor/), [Conductor platform](https://www.conductor.com/platform/), [BrightEdge](https://www.brightedge.com/products/ai-catalyst).

## Which AI visibility tools are free?

Free AI visibility tools include Google Search Console, which shows your impressions in AI Overviews and AI Mode; Bing Webmaster Tools, which shows your citations in Microsoft Copilot; and vendors' free checkers, which give a snapshot of your brand.

Search Console's [Generative AI performance report](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) had reached all websites as of August 31, 2026, and Bing added [Citation Share](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/) to its [AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) report in June 2026. OpenAI's [Business Hub](https://openai.com/index/introducing-businesses-chatgpt/), in beta since November 10, 2026, lists no price and shows mentions and website clicks only above activity thresholds. I cover how to read all three reports in my post on [AI visibility](/blogs/ai-visibility).

[Ahrefs' checker](https://ahrefs.com/ai-visibility-checker) needs no signup and gives "a one-time snapshot," [Semrush's checker](https://www.semrush.com/free-tools/ai-search-visibility-checker/) can be used three times a day "without registering or creating an account," and [SE Ranking](https://seranking.com/ai-visibility-tracker.html) allows five free checks a day. [Peec AI](https://peec.ai/geo-report) emails a free GEO report, and [Conductor](https://www.conductor.com/platform/) offers a free AI Visibility Analysis.

## Which SEO suites now include AI visibility tracking?

Semrush, Ahrefs, SE Ranking and Similarweb now sell AI visibility tracking alongside their SEO or traffic data, so check the suite you already pay for before you add a separate tool.

### Semrush AI Visibility Toolkit and Enterprise AIO

In the [Semrush AI Visibility Toolkit](https://www.semrush.com/kb/1493-ai-visibility-toolkit), the AI Visibility Score compares your mentions with "the median number of mentions for your top industry competitors," and [Prompt Tracking](https://www.semrush.com/kb/1496-getting-started-with-ai-visibility-toolkit) covers ChatGPT Search, Google's AI Mode and Gemini. The toolkit "does not currently offer a free trial." [Semrush Enterprise AI Optimization (AIO)](https://enterprise.semrush.com/solutions/ai-optimization/) puts AI visibility next to GA4 or Adobe Analytics traffic data.

### Ahrefs Brand Radar

Ahrefs says [Brand Radar](https://ahrefs.com/brand-radar) runs "572 million+ search-backed prompts" through six AI platforms and stores every response, with Claude available for custom prompts. The index "works best for established brands or topics with meaningful search demand" and "may have limited coverage for brands with little or no search volume."

### SE Ranking's SE Visible

SE Ranking customers who bought on or after October 29, 2026 [track AI visibility in SE Visible](https://help.seranking.com/hc/en-us/articles/16335384225948-What-is-the-AI-Results-Tracker) instead of the older AI Results Tracker. [SE Visible](https://visible.seranking.com/) stores each response "unedited, so you can trace any metric back to the answer it came from," and includes its API on all plans.

### Similarweb AI Citation Analysis

[Similarweb's AI Citation Analysis](https://aisearch.similarweb.com/ai-brand-visibility/citation-analysis/) shows which domains and URLs ChatGPT, Gemini, Perplexity and AI Mode cite, with Domain and URL Influence Scores.

## Which LLM tracking tools focus only on AI answers?

Profound, Peec AI, OtterlyAI, Scrunch and AthenaHQ are LLM tracking tools built only for AI search: each monitors a set of prompts across several AI engines and reports how your brand appears in the answers.

### Profound

Profound, the tracker I set up for TestMu AI, says it queries ten AI platforms, from ChatGPT and Perplexity to Qwen and DeepSeek. Its [Answer Engine Insights](https://www.tryprofound.com/features/answer-engine-insights) page lists "visibility scores and share of voice, brand sentiment and keyword themes, citation sources and their authority, and competitor rankings," with CSV export, and [Agent Analytics](https://www.tryprofound.com/features/agent-analytics) tracks "when, how often, and which AI bots access your content."

### Peec AI

[Peec AI](https://peec.ai/geo-report) lists 13 platforms and says six, including ChatGPT and Google AI Overviews, "are tracked through the same interfaces your customers use." Peec AI defines [Visibility](https://peec.ai/) as "the share of chats where your brand is mentioned" and offers CSV exports, a Looker Studio connector and an API.

### OtterlyAI

[OtterlyAI](https://otterly.ai/) tracks brand mentions and website citations on seven engines, with a public API and a 7-day free trial. Its [free tools](https://otterly.ai/geo-tools) include a calculator for how many prompts you need "to get statistically reliable AI visibility data" and a check on whether AI search crawlers can read your site.

### Scrunch

Scrunch tracks brand presence on [nine AI platforms](https://scrunch.com/faqs/which-ai-platforms-and-llms-can-scrunch-track-and-monitor), including Grok and Meta AI, and [says it](https://scrunch.com/faqs/how-accurate-is-scrunch-at-tracking-brand-presence-across-llms) counts only "explicit brand mentions," so a citation alone doesn't register as a mention. Its [responses API](https://scrunch.com/faqs/what-apis-does-scrunch-offer-and-how-do-they-work) captures "full AI answers, citations, sentiment, competitors, and metadata" for every prompt run.

### AthenaHQ

[AthenaHQ](https://athenahq.ai/) has a free Essential plan with prompt and response analysis and competitor insights, while paid plans add engines including Google AI Mode and Claude. AthenaHQ says it "tells you what to fix." API access is a paid add-on.

## Which AI visibility platforms suit enterprise teams?

Conductor and BrightEdge suit enterprise teams that want AI visibility inside a wider search platform: Conductor ties it to traditional search performance and to GA4 or Adobe analytics, and BrightEdge reports mentions and citations as separate measures.

### Conductor

[Conductor](https://www.conductor.com/platform/intelligence/) tracks "mentions, citations, and sentiment in AI answer engines like ChatGPT and Perplexity, right alongside your performance in traditional search," and links that data to GA4 or Adobe to show whether it leads to "traffic, engagement, and conversions." The [Conductor platform](https://www.conductor.com/platform/) adds an MCP Server and a Data API for AI agent platforms and BI tools, plus a three-week free trial.

### BrightEdge AI Catalyst

[BrightEdge AI Catalyst](https://www.brightedge.com/products/ai-catalyst) tracks how often a brand is mentioned and cited across ChatGPT, Perplexity, Google AI Overviews, Google AI Mode, Gemini "and other AI platforms," benchmarks that presence against competitors and splits it "into Mentions Presence and Citations Presence."

## How do you choose an AI visibility tool?

Choose an AI visibility tool by testing, during a trial, which engines your plan covers, how often prompts rerun, whether mentions and citations are counted separately, how answers are collected and what you can export.

1. Check the engines on your plan. AthenaHQ adds Google AI Mode, Claude and other engines only on paid plans, SE Visible's FAQ and plan list disagree on Claude and Copilot, and Semrush's engine list differs by product.
2. Ask how often prompts rerun: daily for Profound, SE Visible, Peec AI and Semrush's Prompt Tracking, and monthly for Ahrefs' prebuilt index.
3. Check whether mentions and citations get their own numbers; [Ahrefs](https://ahrefs.com/ai-visibility-checker) says "Brand Radar tracks both separately." Merged counts hide ghost citations (links in answers that never name the brand), which made up 61.7% of 3,981 domain appearances across 115 prompts in a [June 2026 Semrush and Growth Memo study](https://www.semrush.com/blog/the-ghost-citations-study/).
4. Give share metrics more weight than position. Semrush, Peec AI, SE Visible and [Profound](https://docs.tryprofound.com/answer-engine-insights/about) all report a position metric, though Profound [also says](https://www.tryprofound.com/features/answer-engine-insights) "AI platforms don't return the same answer twice." Read any position next to your [share of runs](/blogs/ai-visibility).
5. Ask how each engine's answers are collected, by browser or official API, and whether they reflect a logged-out user. [SparkToro's advice](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/) is to make sure your provider "shows their math."
6. Confirm exports and API access before you commit: [Semrush](https://www.semrush.com/kb/1493-ai-visibility-toolkit), for one, caps exports at 1,000 rows each and 10 a day per user.
7. Compare a trial's numbers with Search Console and Bing Webmaster Tools before you pay. [Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) tells site owners to "evaluate their advice against our official guidance" for any third-party tool.

## Where should you start with GEO tools?

Start with the free GEO tools: open Search Console's Generative AI performance report, add your site to Bing Webmaster Tools to see Copilot citations, and run a free checker from Ahrefs or Semrush on your brand. Then trial one paid tracker on a fixed set of prompts long enough to see averages, since single runs vary.

To raise the numbers, my guide to [LLM SEO](/blogs/llm-seo) covers getting cited by ChatGPT and Perplexity, and [AI search optimization](/blogs/ai-search-optimization) walks through the full process.
`.trim(),
  tags: ["GEO", "Tools", "AI Search"],
  readingTime: "13 min read",
  keyTakeaways: [
    "Most GEO tools run a fixed set of prompts through AI engines such as ChatGPT and Google AI Overviews and record brand mentions and citations.",
    "Google Search Console (impressions in AI Overviews and AI Mode) and Bing Webmaster Tools (citations in Microsoft Copilot) are both free.",
    "Trackers collect answers differently: Profound says it queries the interface people see, Conductor says it uses official LLM APIs, and Scrunch says it uses both.",
    "AI answers change from run to run, so trust a tracker's share across many runs more than any single \"position\".",
    "Semrush, Ahrefs and SE Ranking now sell AI visibility tracking alongside their SEO tools, so check what your current plan covers before buying a dedicated tracker.",
  ],
  faqs: [
    {
      question: "How do AI visibility tools work?",
      answer:
        "AI visibility tools send a fixed list of prompts to engines such as ChatGPT, Perplexity, Gemini and Google AI Overviews on a schedule and count the brand mentions and cited links in each answer. Profound says it collects answers through the interface people see, Conductor says it uses official LLM APIs, and Scrunch says it uses both.",
    },
    {
      question: "What are the best AI visibility tools for 2026?",
      answer:
        "No single AI visibility tool is best for every team in 2026, because engine coverage, refresh rates and exports differ by vendor and plan. Most teams can start with the free reports in Google Search Console and Bing Webmaster Tools, then add AI features from Semrush, Ahrefs or SE Ranking, or a dedicated tracker such as Profound, Peec AI or OtterlyAI.",
    },
    {
      question: "What is a free GEO tool?",
      answer:
        "Free options for GEO tracking include Google Search Console's Generative AI performance report, which shows impressions in AI Overviews and AI Mode, and Bing Webmaster Tools' AI Performance report, which shows Microsoft Copilot citations. Ahrefs and Semrush also offer free AI visibility checkers that need no account.",
    },
    {
      question: "How do you choose the right GEO tool for your business?",
      answer:
        "Choose a GEO tool by checking which AI engines your plan covers, how often the tool reruns prompts, and whether it reports citations separately from brand mentions. Then compare a trial's numbers with Google Search Console and Bing Webmaster Tools before paying.",
    },
    {
      question: "What tools help with GEO and SEO integration?",
      answer:
        "Semrush, Ahrefs and SE Ranking sell AI visibility tracking alongside their SEO tools, and Conductor shows AI mentions and citations next to traditional search performance. Semrush Enterprise AI Optimization (AIO) and Conductor also connect AI visibility with GA4 or Adobe Analytics traffic data.",
    },
    {
      question: "Which tools offer LLM visibility tracking?",
      answer:
        "LLM tracking tools such as Profound, Peec AI, OtterlyAI, Scrunch and AthenaHQ monitor prompts across ChatGPT, Perplexity, Gemini, Claude and other AI engines. Ahrefs Brand Radar, the Semrush AI Visibility Toolkit and SE Ranking's SE Visible offer similar tracking inside SEO suites.",
    },
  ],
  image: {
    alt: "Title card for Best GEO Tools to Track AI Search Visibility, covering first-party reports from Google, Microsoft and OpenAI plus 11 AI visibility trackers",
    social: { src: "/images/blog/geo-tools-og.jpg", width: 1200, height: 630 },
    schema: [
      { src: "/images/blog/geo-tools-1x1.jpg", width: 1200, height: 1200 },
      { src: "/images/blog/geo-tools-4x3.jpg", width: 1200, height: 900 },
      { src: "/images/blog/geo-tools-16x9.jpg", width: 1200, height: 675 },
    ],
  },
  section: "AI Search",
  about: [
    { name: "Generative engine optimization", sameAs: "https://en.wikipedia.org/wiki/Generative_engine_optimization" },
  ],
  mentions: [
    { name: "ChatGPT", sameAs: "https://en.wikipedia.org/wiki/ChatGPT" },
    { name: "Perplexity", sameAs: "https://en.wikipedia.org/wiki/Perplexity_AI" },
    { name: "Google AI Overviews", sameAs: "https://en.wikipedia.org/wiki/AI_Overviews" },
    { name: "Gemini", sameAs: "https://en.wikipedia.org/wiki/Google_Gemini" },
    { name: "Microsoft Copilot", sameAs: "https://en.wikipedia.org/wiki/Microsoft_Copilot" },
    { name: "Google Search Console", sameAs: "https://en.wikipedia.org/wiki/Google_Search_Console" },
    { name: "Bing Webmaster Tools", sameAs: "https://en.wikipedia.org/wiki/Bing_Webmaster_Tools" },
    { name: "Semrush", sameAs: "https://en.wikipedia.org/wiki/Semrush" },
    { name: "Similarweb", sameAs: "https://en.wikipedia.org/wiki/Similarweb" },
    { name: "Ahrefs" },
  ],
};
