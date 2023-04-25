import type { Metadata } from "next";
import LatestBlogList from "../../../components/LatestBlogList";
import { client } from "../../../lib/sanity.client";
import { query } from "../page";

export const metadata: Metadata = {
  title: "Latest Blog Posts",
  description: "Find the latest blog posts from Noir Tech Tribe.",
  openGraph: {
    title: "Latest Blog Posts - Noir Tech Tribe",
    description: "Find the latest blog posts from Noir Tech Tribe.",
    url: "https://www.noirtechtribe.com/posts",
  },
};

export default async function page() {
  const posts = await client.fetch(query);

  return <LatestBlogList posts={posts} />;
}
