// Topics offered in the enquiry pop-up. The contact API accepts only these
// values, so the email subject can't be filled with arbitrary text.
export const enquiryTopics = [
  "SEO audit",
  "GEO / AI search",
  "Site migration",
  "Content & keywords",
  "Hiring for a role",
  "Something else",
] as const;

export type EnquiryTopic = (typeof enquiryTopics)[number];

// How the visitor reached the form. Printed in the email, so Vishal can see
// which entry points bring enquiries without running analytics.
export const enquiryTriggers = {
  teaser: "auto-shown invitation",
  launcher: "Let's talk button",
  cta: "button on the page",
  "contact-page": "contact page",
} as const;

export type EnquiryTrigger = keyof typeof enquiryTriggers;

// Posts in the AI search cluster. On these the invitation offers GEO help.
export const aiSearchPostPaths = [
  "/blogs/generative-engine-optimization",
  "/blogs/geo-vs-seo",
  "/blogs/what-is-aeo",
  "/blogs/ai-search-optimization",
  "/blogs/llm-seo",
  "/blogs/ai-visibility",
  "/blogs/geo-tools",
];
