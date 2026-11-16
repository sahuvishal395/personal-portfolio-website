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
