import BlogsIndexClient from "./BlogsIndexClient";
import { blogPosts, getAllTags, toSummary } from "../data/blogs";

// Server Component: the client list gets titles and excerpts only, not every
// post body. Newest first.
export default function BlogsPage() {
  const posts = blogPosts
    .map(toSummary)
    .sort((a, b) => b.date.localeCompare(a.date));

  return <BlogsIndexClient posts={posts} tags={getAllTags()} />;
}
