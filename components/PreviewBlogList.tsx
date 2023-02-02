"use client";

import { usePreview } from "../lib/sanity.preview";
import LatestBlogList from "./LatestBlogList";

type Props = {
  query: string;
  token: string;
};

export default function PreviewBlogList({ query, token }: Props) {
  const posts = usePreview(null, query);

  return <LatestBlogList posts={posts} />;
}
