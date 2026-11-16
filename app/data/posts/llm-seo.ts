import type { BlogPost } from "../blogs";

// Post 5 of 7 in the AI search cluster (pillar: generative-engine-optimization.ts).
export const llmSeo: BlogPost = {
  slug: "llm-seo",
  title: "LLM SEO: How to Get Cited by ChatGPT and Perplexity",
  metaTitle: "LLM SEO: How to Get Cited by ChatGPT and Perplexity",
  date: "2026-11-16",
  updated: "2026-11-16",
  excerpt:
    "LLM SEO, step by step: the crawlers to allow, the sites ChatGPT and Perplexity cite most, and how to earn citations from each engine.",
  summary:
    "LLM SEO is the practice of getting your brand mentioned, and your pages cited as sources, in answers from large language model engines such as ChatGPT and Perplexity. The two engines run separate crawlers and favor different domains, so the work starts with letting both crawlers in and listing the sources each engine already cites.",
  content: `
At TestMu AI (formerly LambdaTest), a B2B software testing platform, I found 139 Quora threads that AI tools already cite and planned answers around them. Before you copy that plan, find out which AI engines cite Quora most.

In Ahrefs' November 2026 lists of the most-cited domains, Quora ranks 6th in [Google AI Overviews](https://ahrefs.com/blog/most-cited-domains-ai-overviews/) and 7th in [Google AI Mode](https://ahrefs.com/blog/most-cited-domains-ai-mode/) but sits outside the top 50 for ChatGPT and Perplexity. On Ahrefs' data, a Quora plan mostly serves Google's AI features.

[[toc]]

## What is LLM SEO?

LLM SEO is the practice of getting your brand mentioned and your pages cited in answers written by large language model (LLM) engines such as ChatGPT, Perplexity and Google's AI features, and it is part of [generative engine optimization](/blogs/generative-engine-optimization). This guide covers ChatGPT and Perplexity.

A large language model, in [Wikipedia's definition](https://en.wikipedia.org/wiki/Large_language_model), is "a machine learning model (typically a neural network) trained on a vast amount of text for natural language processing tasks, especially language generation." Wikipedia names ChatGPT among the chatbots built on LLMs. Perplexity's [help center](https://www.perplexity.ai/help-center/en/articles/10352155-what-is-perplexity) says its platform integrates AI models "including OpenAI's GPT models and Anthropic's Claude."

The name for this work hasn't settled: in a November 2026 check of Google (US, desktop), People Also Ask included "What is SEO for LLMs called?" and related searches paired the term with GEO. My post on [GEO vs SEO](/blogs/geo-vs-seo) covers how this work differs from classic SEO and from [answer engine optimization](/blogs/what-is-aeo).

### What do LLMO and LLM optimization mean?

LLMO is short for LLM optimization, the marketing work of appearing in answers written by large language models. [Semrush](https://www.semrush.com/blog/llm-optimization/) defines LLM optimization (LLMO) as "a marketing tactic that aims to improve a brand's visibility and portrayal in LLM-generated responses," and [Surfer](https://surfer.ai/blog/llm-optimization-seo/) says "LLM SEO is another name for LLMO." Surfer adds that in machine learning, the same phrase "also means making models run faster and cheaper."

## How do ChatGPT and Perplexity find the pages they cite?

ChatGPT and Perplexity both find pages through live web searches and can link the ones their answers draw on. Perplexity [searches as you ask](https://www.perplexity.ai/help-center/en/articles/10352155-what-is-perplexity) and cites sources in every response, while ChatGPT may search when a question would benefit from current information.

OpenAI's [help page](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt) says ChatGPT search "sometimes partners with other search providers" and typically rewrites your question into "one or more targeted queries" for them. The page lists Microsoft's and Shopify's privacy policies for those providers and doesn't name Bing.

[Ahrefs' study](https://ahrefs.com/blog/query-fan-out-chatgpt/) of 66.6 million free, logged-out ChatGPT responses from August and September 2026 looked at fan-out queries, the searches ChatGPT writes from a prompt. Of 15 million fan-outs, 6.8% used the site: operator to search a single website. Among the roughly 160 most-searched domains, three in four of those queries targeted a brand site, meaning a company's own website. The word "official" appeared in 13.1% of English fan-outs in September, up from 10.1% in August, and Ahrefs says "ChatGPT seems to be moving from sites that summarize information to the sources that produce it."

## Which crawlers do ChatGPT and Perplexity need access to?

ChatGPT search relies on OAI-SearchBot and Perplexity on PerplexityBot, and both companies recommend allowing those crawlers in robots.txt and letting their published IP ranges through your CDN or firewall. OpenAI says a robots.txt change can take about 24 hours to reach ChatGPT search results, and Perplexity says changes may take up to 24 hours.

Robots.txt is the first file to check. I cleaned up ours, along with the sitemap, as part of the LambdaTest to TestMu AI rebrand. [OpenAI's crawler docs](https://developers.openai.com/api/docs/bots) say each setting is independent, so you can allow OAI-SearchBot and disallow GPTBot, OpenAI's training crawler. A site that blocks OAI-SearchBot is left out of ChatGPT search answers, though ChatGPT can still show it as a plain link.

ChatGPT-User and Perplexity-User can fetch pages in response to a user's request. OpenAI says robots.txt rules "may not apply" to ChatGPT-User, and [Perplexity says](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) its fetcher "generally ignores robots.txt rules," so robots.txt alone may not keep either one out.

Perplexity says sites behind a web application firewall (WAF) "may need to explicitly allow" its bots, recommends matching the user agent and the IP address together, and warns that Cloudflare's Bot Fight Mode "can't be skipped with WAF custom rules." In [Cloudflare's AI crawler settings](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/), "chat fetch bots" fall under the Agent group. Cloudflare's page, updated November 2, 2026, says new domains allow Search, Agent and Training bots by default. A [July 2026 changelog](https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/) said that from September 15, 2026, new domains would get defaults that block Training and Agent bots on pages that display ads while allowing Search, so check your own settings.

## Which sources do ChatGPT and Perplexity cite most?

ChatGPT and Perplexity favor different domains. In Ahrefs' November 2026 US data, Wikipedia led [ChatGPT](https://ahrefs.com/blog/most-cited-domains-in-chatgpt/) with 10.1% of the top 50's citations, while Reddit (24.6%) and YouTube (14.2%) led [Perplexity](https://ahrefs.com/blog/most-cited-domains-perplexity/).

Ahrefs calls its measure mention share, "a domain's citations as a percentage of the summed citations of the top sources," and regenerates the lists every month. The Ahrefs lists cover all US topics and include consumer sites such as Walmart and Amazon, so a B2B team should pull the cited domains for its own category.

[Profound's analysis](https://www.tryprofound.com/blog/where-do-ai-citations-come-from) of 11.84 billion citations from eight engines, collected April 16 to July 16, 2026, found that about 57% go to brand sites, which Profound defines as sites run by any company, competitors included. Brand sites still get 47% of ChatGPT's citations, the lowest share among the major engines, and ChatGPT has the most earned media of any engine, at 30%. Profound counts "third-party editorial coverage, institutional sources, and PR wire" as earned media. SaaS and software companies get a median of only 11.4% of their citations from earned media across all platforms.

[Ahrefs' October 2026 citation-tracking study](https://ahrefs.com/blog/how-stable-are-ai-citations/) found that around 75% of pages cited by ChatGPT and Google AI Mode didn't rank in Google for the same question, though its ranking analysis "covered only 230 questions." For reviews and comparisons of Ahrefs itself, Google's AI tools preferred third-party sources while ChatGPT "continued to cite Ahrefs frequently," a finding based on "just 22 questions about one brand."

Here are each engine's crawler rules and citation figures:

| What to check | ChatGPT | Perplexity |
| --- | --- | --- |
| Search crawler to allow | OAI-SearchBot, from the IPs in [openai.com/searchbot.json](https://openai.com/searchbot.json) | PerplexityBot, from the IPs in [www.perplexity.ai/perplexitybot.json](https://www.perplexity.ai/perplexitybot.json) |
| User-triggered fetcher | ChatGPT-User; robots.txt rules "may not apply" | Perplexity-User; "generally ignores robots.txt rules" |
| Training crawler | GPTBot, a separate setting from search | PerplexityBot is "not used to crawl content for AI foundation models" |
| Time for a robots.txt change to apply | Can take about 24 hours | May take up to 24 hours |
| Most-cited domains (Ahrefs, US, all topics, November 2026; share of the top 50's citations) | Wikipedia 10.1%, Reddit 6.2%, Consumer Reports 4.4%, Walmart 4.1% | Reddit 24.6%, YouTube 14.2%, Wikipedia 7.2%, Amazon 4.3% |
| Quora in Ahrefs' top 50, November 2026? | No | No (Quora is 6th in Google AI Overviews) |
| Cited pages updated in the past year (Seer, four brands, March to June 2026) | 73% | 65% |

Sources: [OpenAI crawlers](https://developers.openai.com/api/docs/bots), [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), [Ahrefs ChatGPT list](https://ahrefs.com/blog/most-cited-domains-in-chatgpt/), [Ahrefs Perplexity list](https://ahrefs.com/blog/most-cited-domains-perplexity/), [Ahrefs AI Overviews list](https://ahrefs.com/blog/most-cited-domains-ai-overviews/), [Seer Interactive](https://www.seerinteractive.com/insights/study-content-recencys-impact-on-ai-visibility-in-2026).

### Which engines cite Quora?

In Ahrefs' November 2026 lists, Quora is mainly a source for Google's AI features. The lists put it 6th in Google AI Overviews, with a 4.4% mention share, and 7th in [Google AI Mode](https://ahrefs.com/blog/most-cited-domains-ai-mode/), with 1.8%, while neither the ChatGPT nor the Perplexity top 50 includes it. Reddit, by contrast, makes both chat engines' lists: 2nd in ChatGPT's, with 6.2%, and 1st in Perplexity's, with 24.6%. If you plan community answers for ChatGPT and Perplexity, start with the Reddit threads those engines cite for your buyers' questions.

## How do you get cited by ChatGPT and Perplexity, step by step?

Getting cited by ChatGPT and Perplexity comes down to letting both crawlers in, earning mentions on the sources each engine already cites, keeping the facts on your own site accurate and current, and measuring the two engines separately. My guide to [AI search optimization](/blogs/ai-search-optimization) covers the wider process, including Google's AI features and Microsoft Copilot.

1. Let OAI-SearchBot and PerplexityBot in. Allow both in robots.txt and let their published IP ranges through your firewall; on Cloudflare, also check Bot Fight Mode, which can still challenge Perplexity's bots. Wait a day before you test.
2. List the sources each engine cites for your buyers' questions. Run the same prompts in ChatGPT and Perplexity several times and record every cited domain per engine, because citations churn: in [Ahrefs' tracking](https://ahrefs.com/blog/how-stable-are-ai-citations/), 59% of ChatGPT's citations were gone by the next day. I set up AI search tracking for TestMu AI in Profound, where we rank [9th of 142 domains](/seo#ai-search-geo-aeo) for citation share, the percentage of all citations that point to a domain. Whichever tracker you use, split the cited domains by engine.
3. Make your own site the official source of facts about you. Keep pricing, plans, features and comparison pages accurate and easy for crawlers to fetch, since ChatGPT sometimes runs site: searches on company websites. If your business is eligible, claim it in OpenAI's [Business Hub](https://openai.com/index/introducing-businesses-chatgpt/), part of a beta launched November 10, 2026, where verified businesses can "update key details." OpenAI's [help page](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt) warns that "Search results and citations can be incomplete, outdated, or incorrect." Ask ChatGPT about your product and compare its answers with your pages.
4. Earn mentions on the sites each engine cites for your category; in Ahrefs' all-topic US lists, Wikipedia, Reddit and Consumer Reports top ChatGPT's, and Reddit and YouTube top Perplexity's. In [Ahrefs' study of 10,000 brands](https://ahrefs.com/blog/mention-types-ai-visibility/) across ChatGPT, Google AI Mode and Google AI Overviews, off-site mentions correlated with AI visibility, though ChatGPT "tracks off-site mentions slightly less closely." Ahrefs says "We can't say mentions cause AI visibility" and advises tracking progress "over months rather than weeks."
5. Refresh the pages you want cited, especially for ChatGPT. In [Seer Interactive's study](https://www.seerinteractive.com/insights/study-content-recencys-impact-on-ai-visibility-in-2026) of four brands from March to June 2026, 73% of ChatGPT's cited pages had been updated in the past year, against 65% for Perplexity, which "pulls older reference material the others skip." Update the page you have before writing a new one; one of Seer's headings reads "The old page you refreshed beats the new one you wrote."
6. Measure each engine separately. OpenAI's Business Hub reports the mentions and website clicks a business receives in ChatGPT, once there are enough conversations or interactions to meet certain thresholds. For both engines, track a fixed set of prompts over repeated runs. My guide to measuring [AI visibility](/blogs/ai-visibility) covers the metrics, and my roundup of [GEO tools](/blogs/geo-tools) compares trackers.

## Where should you start with LLM SEO?

Start LLM SEO by confirming that robots.txt allows OAI-SearchBot and PerplexityBot and that your firewall lets their published IP ranges reach your most important pages. A day after any robots.txt change, run ten buyer questions in ChatGPT and Perplexity several times and keep a separate list of the domains each engine cites.

Put those lists next to your outreach plan and add the cited domains it leaves out.
`.trim(),
  tags: ["GEO", "AI Search", "SEO"],
  readingTime: "11 min read",
  keyTakeaways: [
    "LLM SEO, also called LLMO or LLM optimization, is the work of getting your brand mentioned and your pages cited by large language model engines such as ChatGPT and Perplexity.",
    "ChatGPT search relies on OAI-SearchBot and Perplexity on PerplexityBot, while GPTBot, OpenAI's training crawler, is a separate setting.",
    "In Ahrefs' November 2026 lists, Wikipedia led ChatGPT's citations and Reddit and YouTube led Perplexity's, while Quora, sixth in Google AI Overviews, missed both engines' top 50.",
    "ChatGPT sometimes runs site: searches on company websites, so accurate pricing, feature and comparison pages matter for questions about your brand.",
    "Measure ChatGPT and Perplexity separately over repeated runs; OpenAI's Business Hub (beta) now reports ChatGPT mentions and website clicks once a business has enough conversations or interactions to meet OpenAI's thresholds.",
  ],
  faqs: [
    {
      question: "What is LLM in SEO?",
      answer:
        "LLM stands for large language model, the type of AI behind chatbots such as ChatGPT, Claude and Gemini. LLM SEO is the work of getting those chatbots, and answer engines such as Perplexity, to mention your brand and cite your pages.",
    },
    {
      question: "What is SEO for LLMs called?",
      answer:
        "SEO for LLMs is called LLM SEO, LLMO (large language model optimization) or LLM optimization, and the three names describe the same work. Generative engine optimization (GEO) is the broader term that covers all AI search engines.",
    },
    {
      question: "Is LLM SEO the same as GEO?",
      answer:
        "LLM SEO is part of generative engine optimization (GEO), and both aim for mentions and citations in AI answers from engines such as ChatGPT, Perplexity and Google's AI Overviews. The tactics are shared, and LLM SEO adds detail for each engine, such as its crawler and most-cited sites.",
    },
    {
      question: "How do you get your content cited by AI?",
      answer:
        "To get content cited by AI engines, let each engine's search crawler reach the page (OAI-SearchBot for ChatGPT, PerplexityBot for Perplexity) and keep the facts about your company accurate on your own site. Then earn mentions on the sites each engine cites: in Ahrefs' November 2026 data, Wikipedia led ChatGPT and Reddit led Perplexity.",
    },
    {
      question: "Can you rank first in ChatGPT?",
      answer:
        "ChatGPT has no stable first place to win, because the sources it cites change from day to day. In Ahrefs' tracking, 59% of ChatGPT's citations were gone by the next day and only 4.0% lasted all 20 days tracked, so measure how often you are cited across many prompts and runs.",
    },
    {
      question: "How long does LLMO take to work?",
      answer:
        "For LLMO, crawler access fixes are the fast part: OpenAI says a robots.txt change can take about 24 hours to reach ChatGPT search, and Perplexity says up to 24 hours. Earning mentions takes longer, and Ahrefs advises tracking progress over months rather than weeks.",
    },
  ],
  image: {
    alt: "Title card for LLM SEO: How to Get Cited by ChatGPT and Perplexity, an engine-by-engine guide",
    social: { src: "/images/blog/llm-seo-og.jpg", width: 1200, height: 630 },
    schema: [
      { src: "/images/blog/llm-seo-1x1.jpg", width: 1200, height: 1200 },
      { src: "/images/blog/llm-seo-4x3.jpg", width: 1200, height: 900 },
      { src: "/images/blog/llm-seo-16x9.jpg", width: 1200, height: 675 },
    ],
  },
  section: "AI Search",
  about: [
    { name: "LLM SEO" },
    { name: "Generative engine optimization", sameAs: "https://en.wikipedia.org/wiki/Generative_engine_optimization" },
  ],
  mentions: [
    { name: "ChatGPT", sameAs: "https://en.wikipedia.org/wiki/ChatGPT" },
    { name: "Perplexity AI", sameAs: "https://en.wikipedia.org/wiki/Perplexity_AI" },
    { name: "Large language model", sameAs: "https://en.wikipedia.org/wiki/Large_language_model" },
    { name: "OpenAI", sameAs: "https://en.wikipedia.org/wiki/OpenAI" },
    { name: "Quora", sameAs: "https://en.wikipedia.org/wiki/Quora" },
    { name: "AI Overviews", sameAs: "https://en.wikipedia.org/wiki/AI_Overviews" },
  ],
};
