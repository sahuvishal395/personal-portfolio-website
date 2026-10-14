import type { MetadataRoute } from "next";
import { site } from "./data/site";
import { blogPosts } from "./data/blogs";

const absolute = (path: string) => (path === "/" ? site.url : `${site.url}${path}`);

// lastModified is set only where a real date exists (post dates). A build
// timestamp on every page would change on each deploy and tell crawlers
// nothing.
export default function sitemap(): MetadataRoute.Sitemap {
  const latestPostDate = blogPosts.reduce(
    (latest, post) => (post.date > latest ? post.date : latest),
    "",
  );

  return [
    { url: absolute("/"), priority: 1 },
    { url: absolute("/seo"), priority: 0.9 },
    { url: absolute("/about"), priority: 0.8 },
    { url: absolute("/resume"), priority: 0.8 },
    { url: absolute("/influencer-marketing"), priority: 0.6 },
    {
      url: absolute("/blogs"),
      lastModified: latestPostDate || undefined,
      priority: 0.5,
    },
    ...blogPosts.map((post) => ({
      url: absolute(`/blogs/${post.slug}`),
      lastModified: post.date,
      priority: 0.5,
    })),
    { url: absolute("/reading-list"), priority: 0.3 },
    { url: absolute("/contact"), priority: 0.4 },
  ];
}
