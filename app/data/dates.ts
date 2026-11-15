// Kept apart from blogs.ts so client components can format dates without
// pulling every post body into their bundle.

// Post dates are calendar dates ("2026-11-15"). Formatting them in UTC keeps
// the server and the browser on the same day, whatever the reader's time zone.
export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
