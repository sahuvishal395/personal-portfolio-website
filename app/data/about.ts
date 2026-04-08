export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

export const bio = {
  name: "Vishal Kumar Sahu",
  tagline: "Product Marketing Lead",
  location: "India",
  summary: `I'm a Product Marketing Lead with a passion for crafting compelling narratives that bridge the gap between products and people. I specialize in go-to-market strategy, product positioning, and building marketing engines that drive real business outcomes.

My approach combines data-driven insights with creative storytelling—I believe the best marketing makes complex products feel simple and inevitable. Over the years, I've helped launch products across B2B and B2C markets, built high-performing marketing teams, and developed frameworks that teams continue to use long after I've moved on.

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
    year: "2024 — Present",
    role: "Product Marketing Lead",
    company: "Current Company",
    description:
      "Leading product marketing strategy for the core platform. Driving go-to-market for major product launches, competitive positioning, and sales enablement across the organization.",
    skills: ["GTM Strategy", "Product Positioning", "Sales Enablement", "Content Strategy"],
  },
  {
    year: "2022 — 2024",
    role: "Senior Product Marketing Manager",
    company: "Previous Company",
    description:
      "Managed product marketing for a portfolio of B2B SaaS products. Led a team of 3 PMMs and drove a 40% increase in win rate through refreshed competitive positioning.",
    skills: ["Team Leadership", "Competitive Intelligence", "Launch Planning", "Analyst Relations"],
  },
  {
    year: "2020 — 2022",
    role: "Product Marketing Manager",
    company: "Growth Stage Startup",
    description:
      "First PMM hire. Built the product marketing function from scratch, including messaging frameworks, sales playbooks, and customer marketing programs.",
    skills: ["0-to-1 PMM", "Messaging Frameworks", "Customer Marketing", "Sales Playbooks"],
  },
  {
    year: "2018 — 2020",
    role: "Marketing Associate",
    company: "Tech Company",
    description:
      "Started my marketing career with a focus on content creation, campaign execution, and market research. Developed a deep understanding of B2B buying journeys.",
    skills: ["Content Marketing", "Campaign Management", "Market Research", "Analytics"],
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
  "Analyst Relations",
  "Team Leadership",
  "Cross-functional Collaboration",
  "Data-Driven Marketing",
  "Brand Strategy",
  "AI & MarTech",
  "Storytelling",
];

export const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Products Launched", value: "20+" },
  { label: "Win Rate Increase", value: "40%" },
  { label: "Team Members Led", value: "8+" },
];
