import React from "react";
import Post from "../../../components/Post";
import LatestBlogList from "../../../components/LatestBlogList";
import { query } from "../page";
import { client } from "../../../lib/sanity.client";

export default async function page() {
  const posts = await client.fetch(query);

  return <LatestBlogList posts={posts} />;
}
