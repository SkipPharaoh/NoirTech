import type { Metadata } from "next";
import LatestBlogList from "../../../components/LatestBlogList";
import { client } from "../../../lib/sanity.client";
import { query } from "../page";

export const metadata: Metadata = {
  title: "Latest Noir Tech Tribe Posts",
  description: "Latest Noir Tech Tribe Posts",
};

export default async function page() {
  const posts = await client.fetch(query);

  return <LatestBlogList posts={posts} />;
}
