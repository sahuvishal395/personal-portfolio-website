export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  kind: "work" | "education";
  description: string;
  highlights?: string[];
  skills: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Credential {
  title: string;
  org?: string;
  date?: string;
}

export const bio = {
  name: "Vishal Kumar Sahu",
  title: "SEO & Organic Growth | Product Marketing Lead",
  tagline: "SEO & Organic Growth · Product Marketing Lead",
  location: "Noida, India",
  summary: `I'm an SEO specialist with 3.5+ years at TestMu AI (formerly LambdaTest), a B2B software testing platform. I've grown from the fundamentals of technical SEO, keyword research, content and link building into what search is becoming.

Now I also work on GEO/AEO, making sure the brand is cited when buyers ask ChatGPT, Perplexity and Gemini for answers. I set up AI search tracking in Profound, where TestMu AI ranks 9th of 142 domains for citation share.

My approach is the same across both: use Search Console, Ahrefs and Semrush to find where demand is going unmet, then build pages that rank, get cited and convert. In practice that has meant running SEO for the LambdaTest to TestMu AI rebrand, fixing indexation on templated pages at scale, and narrowing 1,652 competitor keywords into 14 topic clusters and 40 quick wins.

Outside SEO, I've handled a $1.3M influencer budget, from finding creators to negotiating deals and producing videos. I've also reworked 100+ landing pages around campaign goals, taken LambdaTest to #1 on Product Hunt, and I edit Coding Jag, our weekly developer newsletter.`,
  philosophy: `Search now has two front pages: the results Google ranks, and the answers ChatGPT, Perplexity and Gemini write. I work on both with the same method.

My core principles:
• **Start where demand is unmet** — Search Console, Ahrefs and Semrush show what people search for that nobody answers well. That is where the work starts.
• **Fix the foundations first** — Redirects, canonicals, noindex tags and crawl paths decide whether good pages get indexed at all.
• **Give every page three jobs** — Rank in Google, get cited in AI answers, and convert the reader.
• **Measure AI visibility like rankings** — Track citation share, then show up in the sources AI tools already cite.`,
};

// Mirrors the TestMu AI bullets on the CV, in the same order.
export const testmuHighlights = [
  "Ran SEO for the LambdaTest to TestMu AI rebrand: redirect maps, sitemap and robots.txt cleanup, Organization schema, and updated brand profiles on Wikidata, G2, LinkedIn and GitHub.",
  "Audited 449 “cross browser testing” backlinks after the move, found 376 still pointing to old or wrong URLs, and started repointing them to the right pages on the new domain.",
  "Optimized 150+ blog articles and built 40+ new SEO pages, winning featured snippets (Position 0) for target queries.",
  "Fixed indexation on templated pages at scale: merged 118 thin Chrome version pages into one hub with 301s, and wrote content and schema for 51 free-tool pages that had launched with no body copy.",
  "Built a keyword research pipeline across 19 competitor domains, narrowing 1,652 keywords into 14 topic clusters and 40 quick wins.",
  "Audited product, learning-hub and blog pages in Search Console, Ahrefs and Semrush; fixed cannibalization, wrong canonicals, stray noindex tags and redirect chains.",
  "Set up AI search tracking in Profound, where TestMu AI ranks 9th of 142 domains for citation share, and planned Quora answers around 139 threads that AI tools already cite.",
  "Reworked 100+ landing pages around campaign goals to lift conversions, and took LambdaTest to #1 on Product Hunt.",
  "Handled a $1.3M influencer budget, from finding creators to negotiating deals and producing videos.",
  "Grew Google My Business and Pinterest to 10K+ monthly views; edit Coding Jag, our weekly developer newsletter.",
];

export const timeline: TimelineEntry[] = [
  {
    year: "July 2023 — Present",
    role: "Product Marketing Lead · SEO & Organic Growth",
    company: "TestMu AI (formerly LambdaTest)",
    kind: "work",
    description:
      "SEO and organic growth for a B2B software testing platform: technical SEO, keyword research, content and link building, and now GEO/AEO so the brand is cited when buyers ask ChatGPT, Perplexity and Gemini. Ran SEO for the rebrand from LambdaTest to TestMu AI, alongside landing pages, launches, and a $1.3M influencer program.",
    highlights: testmuHighlights,
    skills: [
      "Technical SEO",
      "Site Migration",
      "GEO / AEO",
      "Keyword Research",
      "Schema Markup",
      "Backlink Audits",
      "Featured Snippets",
      "Influencer Marketing",
    ],
  },
  {
    year: "Sep 2022 — May 2023",
    role: "Digital Marketing Program",
    company: "Kraftshala (Online)",
    kind: "education",
    description:
      "Digital marketing training, completed May 2023. Planned social media strategies for brands like MG, TATA, and HCL, focusing on content planning, creatives, and engagement-driven growth, and used analytics tools to pull the data behind them.",
    skills: [
      "Digital Marketing",
      "Social Media Strategy",
      "Content Planning",
      "Analytics",
    ],
  },
  {
    year: "July 2022 — Sep 2022",
    role: "Sales Trainee",
    company: "Byju's",
    kind: "work",
    description:
      "Started in sales, learning how customers make decisions before moving into marketing.",
    highlights: [
      "Completed classroom and on-the-job training to enhance customer outreach.",
      "Collaborated with sales to generate warm leads, converting two into revenue within six weeks.",
    ],
    skills: ["Customer Outreach", "Lead Generation", "Sales"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "SEO",
    items: [
      "SEO strategy",
      "Technical SEO",
      "On-page SEO",
      "Off-page SEO",
      "Site migration",
      "Redirect mapping",
      "Indexation & crawl management",
      "Keyword research",
      "Content gap analysis",
      "Schema markup",
      "Featured snippets",
      "Link building",
      "Backlink audits",
    ],
  },
  {
    label: "GEO / AEO",
    items: [
      "AI search visibility",
      "ChatGPT",
      "Perplexity",
      "Gemini",
      "AI citation tracking",
    ],
  },
  {
    label: "Marketing",
    items: [
      "SEO content strategy & writing",
      "Landing page & conversion optimization",
      "Product launches",
      "Influencer marketing",
    ],
  },
  {
    label: "Tools",
    items: [
      "Google Search Console",
      "Google Analytics (GA4)",
      "Ahrefs",
      "Semrush",
      "SE Ranking",
      "Profound",
      "WordPress",
      "VS Code",
      "Claude",
      "Notion",
      "Replit",
      "Hootsuite",
      "MeetAlfred",
      "Google My Business",
      "Product Hunt",
    ],
  },
  {
    label: "Soft skills",
    items: [
      "Stakeholder coordination",
      "Negotiation",
      "Problem-solving",
      "Data-driven decision making",
    ],
  },
];

export const skills = skillGroups.flatMap((group) => group.items);

export const education: Credential[] = [
  { title: "Bachelor of Commerce", org: "BBMKU", date: "2020" },
  {
    title: "Professional Certification in Digital Marketing & Strategy",
    org: "IIDE",
    date: "Dec 2024",
  },
  { title: "Digital Marketing", org: "Kraftshala (Online)", date: "May 2023" },
  { title: "Basic knowledge of paid media: Google, Meta and LinkedIn Ads" },
];

export const coursework = [
  "Planned social media strategies for brands like MG, TATA, and HCL, focusing on content planning, creatives, and engagement-driven growth.",
  "Utilized advanced analytics tools to extract valuable data, driving substantial growth and engagement.",
];

// Hero "Key Numbers" on the homepage: three SEO proofs, one influencer.
export const stats = [
  { label: "Years in SEO", value: "3.5+" },
  { label: "Blog articles optimized", value: "150+" },
  { label: "of 142 domains for AI citation share", value: "9th" },
  { label: "Influencer budget managed", value: "$1.3M" },
];
