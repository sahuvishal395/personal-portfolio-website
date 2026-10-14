export interface Metric {
  value: string;
  label: string;
}

export interface SeoCaseStudy {
  slug: string;
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  result?: string;
  metrics: Metric[];
  tags: string[];
}

export interface OtherWin extends Metric {
  href?: string;
}

// Every fact here comes from the CV. Keep numbers in sync with about.ts.
export const seoCaseStudies: SeoCaseStudy[] = [
  {
    slug: "rebrand-seo-migration",
    category: "Site Migration",
    title: "SEO for the LambdaTest → TestMu AI rebrand",
    summary:
      "Ran SEO for the rebrand: redirect maps, sitemap and robots.txt cleanup, Organization schema, and updated brand profiles on Wikidata, G2, LinkedIn and GitHub.",
    context:
      "A rebrand changes every URL and the name search engines and AI tools know the company by. Rankings and links earned under the old name only carry over if the move is mapped carefully.",
    actions: [
      "Built redirect maps from LambdaTest URLs to the matching pages on the new domain.",
      "Cleaned up the sitemap and robots.txt for the new site.",
      "Added Organization schema for the TestMu AI brand.",
      "Updated the brand profiles on Wikidata, G2, LinkedIn and GitHub, so the old name and the new one resolve to the same company.",
    ],
    metrics: [],
    tags: [
      "Site migration",
      "Redirect mapping",
      "Sitemap & robots.txt",
      "Organization schema",
      "Brand profiles",
    ],
  },
  {
    slug: "ai-search-geo-aeo",
    category: "GEO / AEO",
    title: "Getting cited in ChatGPT, Perplexity and Gemini answers",
    summary:
      "Set up AI search tracking in Profound, where TestMu AI ranks 9th of 142 domains for citation share, and planned Quora answers around 139 threads that AI tools already cite.",
    context:
      "Buyers now ask ChatGPT, Perplexity and Gemini for answers. If a brand is missing from the sources those tools cite, it is missing from the answer.",
    actions: [
      "Set up AI search tracking in Profound to see which domains AI answers cite, and how often.",
      "Benchmarked TestMu AI's citation share: 9th of 142 domains.",
      "Found 139 Quora threads that AI tools already cite, and planned answers around them.",
    ],
    metrics: [
      { value: "9th", label: "of 142 domains for citation share" },
      { value: "139", label: "AI-cited Quora threads targeted" },
    ],
    tags: [
      "AI search visibility",
      "AI citation tracking",
      "Profound",
      "ChatGPT",
      "Perplexity",
      "Gemini",
    ],
  },
  {
    slug: "templated-pages-indexation",
    category: "Technical SEO",
    title: "Fixing indexation on templated pages at scale",
    summary:
      "Merged 118 thin Chrome version pages into one hub with 301s, and wrote content and schema for 51 free-tool pages that had launched with no body copy.",
    context:
      "Templated pages multiply quickly. Near-identical pages split relevance between themselves, and pages with no copy give Google little reason to index them.",
    actions: [
      "Merged 118 thin Chrome version pages into a single hub, with 301 redirects from every old URL.",
      "Wrote body content and schema markup for 51 free-tool pages that had launched with no copy.",
    ],
    metrics: [
      { value: "118 → 1", label: "Thin Chrome version pages merged into one hub" },
      { value: "51", label: "Free-tool pages given content and schema" },
    ],
    tags: [
      "Indexation",
      "Content consolidation",
      "301 redirects",
      "Schema markup",
      "Templated pages",
    ],
  },
  {
    slug: "technical-seo-audits",
    category: "Technical SEO",
    title: "Technical audits across product, learning-hub and blog pages",
    summary:
      "Audited product, learning-hub and blog pages in Search Console, Ahrefs and Semrush; fixed cannibalization, wrong canonicals, stray noindex tags and redirect chains.",
    context:
      "Small technical errors compound on a large site. A wrong canonical or a stray noindex can quietly pull a page out of search.",
    actions: [
      "Audited product, learning-hub and blog pages in Google Search Console, Ahrefs and Semrush.",
      "Fixed keyword cannibalization between pages competing for the same queries.",
      "Corrected wrong canonical tags.",
      "Removed stray noindex tags.",
      "Cleaned up redirect chains.",
    ],
    metrics: [],
    tags: [
      "Google Search Console",
      "Ahrefs",
      "Semrush",
      "Cannibalization",
      "Canonicals",
      "Redirect chains",
    ],
  },
  {
    slug: "backlink-reclamation",
    category: "Off-page SEO",
    title: "Reclaiming backlinks after the domain move",
    summary:
      "Audited 449 “cross browser testing” backlinks after the move, found 376 still pointing to old or wrong URLs, and started repointing them to the right pages.",
    context:
      "After a domain move, links still aimed at old or wrong URLs pass less value, or none, to the pages that should be ranking.",
    actions: [
      "Audited 449 “cross browser testing” backlinks after the move.",
      "Found 376 of them still pointing to old or wrong URLs.",
      "Started repointing them to the right pages on the new domain.",
    ],
    result:
      "376 of 449 links (84%) needed fixing. Repointing them is in progress.",
    metrics: [
      { value: "449", label: "Backlinks audited" },
      { value: "376", label: "Pointing to old or wrong URLs" },
    ],
    tags: ["Backlink audits", "Link reclamation", "Link building", "Site migration"],
  },
  {
    slug: "keyword-research-pipeline",
    category: "Keyword Research",
    title: "A keyword research pipeline across 19 competitors",
    summary:
      "Built a keyword research pipeline across 19 competitor domains, narrowing 1,652 keywords into 14 topic clusters and 40 quick wins.",
    context:
      "Competitor keyword exports are long and noisy. The work is narrowing them down to what the site can realistically win.",
    actions: [
      "Built a pipeline that collects keywords across 19 competitor domains.",
      "Narrowed 1,652 keywords into 14 topic clusters.",
      "Picked 40 quick wins to go after first.",
    ],
    metrics: [
      { value: "19", label: "Competitor domains" },
      { value: "1,652", label: "Keywords analyzed" },
      { value: "14", label: "Topic clusters" },
      { value: "40", label: "Quick wins" },
    ],
    tags: [
      "Keyword research",
      "Competitor analysis",
      "Content gap analysis",
      "Topic clusters",
    ],
  },
  {
    slug: "content-featured-snippets",
    category: "Content SEO",
    title: "Content that wins Position 0",
    summary:
      "Optimized 150+ blog articles and built 40+ new SEO pages, winning featured snippets (Position 0) for target queries.",
    context:
      "A B2B content library only earns traffic if each page answers its query better than what already ranks.",
    actions: [
      "Optimized 150+ existing blog articles.",
      "Built 40+ new SEO pages.",
      "Won featured snippets (Position 0) for target queries.",
    ],
    metrics: [
      { value: "150+", label: "Blog articles optimized" },
      { value: "40+", label: "New SEO pages built" },
    ],
    tags: [
      "On-page SEO",
      "SEO content writing",
      "Featured snippets",
      "Content strategy",
    ],
  },
];

// Headline numbers for the /seo page.
export const seoStats: Metric[] = [
  { value: "3.5+", label: "Years in SEO" },
  { value: "150+", label: "Blog articles optimized" },
  { value: "40+", label: "New SEO pages built" },
  { value: "118 → 1", label: "Thin pages merged into one hub" },
  { value: "1,652", label: "Keywords clustered into 14 topics" },
  { value: "9th / 142", label: "Domains for AI citation share" },
];

export const seoProcess = [
  {
    title: "Find unmet demand",
    body: "Search Console, Ahrefs and Semrush show what people search for that nobody answers well, including the gaps competitors leave.",
  },
  {
    title: "Fix the foundations",
    body: "Redirects, canonicals, noindex tags, sitemaps and schema, so the pages that matter get crawled and indexed.",
  },
  {
    title: "Build pages that rank",
    body: "New pages and rewrites built around real queries and structured to win featured snippets.",
  },
  {
    title: "Get cited by AI",
    body: "Track citation share in Profound and show up in the sources ChatGPT, Perplexity and Gemini already cite.",
  },
  {
    title: "Convert the visit",
    body: "Landing pages reworked around campaign goals, so organic traffic turns into conversions.",
  },
];

export const seoToolkit = [
  {
    label: "Search & analytics",
    items: [
      "Google Search Console",
      "Google Analytics (GA4)",
      "Ahrefs",
      "Semrush",
      "SE Ranking",
    ],
  },
  { label: "AI search", items: ["Profound", "ChatGPT", "Perplexity", "Gemini"] },
  {
    label: "Build & publish",
    items: ["WordPress", "VS Code", "Claude", "Notion", "Replit"],
  },
  {
    label: "Distribution",
    items: [
      "Google My Business",
      "Pinterest",
      "Hootsuite",
      "MeetAlfred",
      "Product Hunt",
    ],
  },
];

// Wins outside core SEO, from the same CV.
export const otherWins: OtherWin[] = [
  {
    value: "100+",
    label: "Landing pages reworked around campaign goals to lift conversions",
  },
  { value: "#1", label: "On Product Hunt, launching LambdaTest" },
  { value: "10K+", label: "Monthly views on Google My Business and Pinterest" },
  { value: "Weekly", label: "Coding Jag, the developer newsletter I edit" },
  {
    value: "$1.3M",
    label: "Influencer budget, from finding creators to negotiating deals and producing videos",
    href: "/influencer-marketing",
  },
];
