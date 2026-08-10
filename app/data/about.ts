export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

export const bio = {
  name: "Vishal Kumar Sahu",
  tagline: "Growth & Product Marketing Lead",
  location: "India",
  summary: `I'm a Growth & Product Marketing Lead with a passion for crafting compelling narratives that bridge the gap between products and people. I specialize in go-to-market strategy, product positioning, and building marketing engines that drive real business outcomes.

My approach combines data-driven insights with creative storytelling—I believe the best marketing makes complex products feel simple and inevitable. I leverage AI-powered tools like N8N, Claude, Replit, and Apify to automate content workflows, research scraping, and template-based image generation at scale.

Alongside that, I've owned influencer marketing end-to-end — a $1.3M creator budget and 100+ influencers onboarded across LinkedIn, Instagram, YouTube, and X. Running that volume manually wasn't realistic, so I built the stack for it: Apify to scrape creator profiles, automation to filter and run outreach, and a web app on Replit to track influencers, budget, and live performance in one place.

When I'm not deep in a positioning exercise or launch plan, you'll find me reading about behavioral psychology, exploring the intersection of AI and marketing, or writing about the craft of product marketing on my blog.`,
  philosophy: `I believe product marketing sits at the most exciting intersection in any organization—between what we build and who we build it for. Great product marketing doesn't just communicate value; it *creates* it by shaping how customers think about their problems and possibilities.

My core principles:
• **Customer obsession over competitor obsession** — Win by understanding your customers better than anyone else.
• **Simple over clever** — If your messaging needs explanation, it's not done yet.
• **Launch is just the beginning** — The best GTM strategies are living systems, not one-time events.
• **Data informs, instinct decides** — Use data to understand the landscape, then trust your marketing intuition.`,
};

export const timeline: TimelineEntry[] = [
  {
    year: "March 2026 — Present",
    role: "Growth & Product Marketing Lead",
    company: "TestMu AI (formerly LambdaTest)",
    description:
      "Leading growth and product marketing post-rebranding from LambdaTest to TestMu AI. Directing cross-channel positioning, website restructuring, digital presence alignment, content strategy, and sales enablement. Built AI agentic workflows using N8N, Claude, and Apify to automate content research, scraping, and template-based image generation. Alongside this, own end-to-end influencer marketing on a $1.3M creator budget, onboarding 100+ influencers across LinkedIn, Instagram, YouTube, and X. Built the tooling to run it at that volume — Apify and AI tools to scrape creator profiles, automation to filter the data and drive outreach, and a Replit-built web app to track influencers, budget, and live campaign performance including engagement, likes, and comments.",
    skills: ["GTM Strategy", "Product Positioning", "AI Automations", "N8N", "Claude AI", "Influencer Marketing", "Apify Scraping", "Replit App Building"],
  },
  {
    year: "Nov 2023 — March 2026",
    role: "Digital Marketing Executive",
    company: "LambdaTest",
    description:
      "Promoted to executive role after 6 months of internship. Managed paid media across Google, Meta, and LinkedIn ads optimizing B2B conversion metrics. Secured 'Position 0' on SERPs, optimized 100+ landing pages to maximize conversion rates, and managed Google My Business & Pinterest (achieving 10k+ monthly views). Led LambdaTest's Product Hunt launch to #1 Product of the Day.",
    skills: ["Paid Advertising", "SEO Optimization", "Conversion Rate Optimization (CRO)", "Google Ads", "Meta Ads"],
  },
  {
    year: "May 2023 — Nov 2023",
    role: "Digital Marketing Intern",
    company: "LambdaTest",
    description:
      "Landed internship to gain hands-on marketing experience. Directed on-page and off-page SEO strategies, including optimizing 150+ articles and creating 40+ content-focused webpages. Built outreach campaigns to secure high-quality backlinks and coordinated key influencer marketing collaborations across Instagram, Facebook, X, and LinkedIn.",
    skills: ["SEO Strategy", "Content Marketing", "Influencer Marketing", "Backlink Outreach", "Link Building"],
  },
  {
    year: "Sep 2022 — May 2023",
    role: "Digital Marketing Professional Program",
    company: "Kraftshala",
    description:
      "Rigorous digital marketing and strategy training. Developed deep competencies in product positioning, content strategy, user behavior, and consumer persona design. Created and pitch-presented full-funnel digital marketing campaigns for marquee brands like MG, TATA, and HCL.",
    skills: ["Digital Strategy", "User Personas", "Market Research", "Positioning Strategy", "Brand Campaigns"],
  },
  {
    year: "July 2022 — Sep 2022",
    role: "Sales Trainee",
    company: "Byju's",
    description:
      "Began career in direct outreach to understand consumer psychology, map user personas, identify pain points, and tackle real-time user questions. Partnered closely with the sales team to analyze market trends and generate warm leads, converting two key deals within the first six weeks.",
    skills: ["Consumer Psychology", "Persona Identification", "Customer Outreach", "Direct Sales", "Lead Generation"],
  },
];

export const skills = [
  "Product Positioning",
  "Go-to-Market Strategy",
  "Competitive Intelligence",
  "Sales Enablement",
  "Content Strategy",
  "Customer Research",
  "Market Analysis",
  "Launch Planning",
  "Messaging Frameworks",
  "Growth Marketing",
  "Team Leadership",
  "Cross-functional Collaboration",
  "Data-Driven Marketing",
  "Brand Strategy",
  "Influencer Marketing",
  "Creator Sourcing & Outreach",
  "Creator Negotiation & Onboarding",
  "Campaign Budget Management",
  "Video Content Production",
  "AI & MarTech",
  "Storytelling",
  "N8N Automation",
  "Claude AI",
  "Replit",
  "Apify Web Scraping",
  "ChatGPT / OpenAI",
  "AI Content Writing",
  "Content Research Scraping",
  "Template-based Image Generation",
  "Prompt Engineering",
  "AI Workflow Automation",
  "Marketing Analytics",
  "SEO & SEM",
  "Figma",
  "HubSpot",
];

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Influencer Budget Managed", value: "$1.3M" },
  { label: "Products Launched", value: "10+" },
  { label: "AI Workflows Automated", value: "50+" },
];
