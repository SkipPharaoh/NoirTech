"use client";

import { usePreview } from "../lib/sanity.preview";
import CategoriesSection from "./CategoriesSection";
import LatestBlogList from "./LatestBlogList";
import PopularSection from "./PopularSection";
import TrendingSection from "./TrendingSection";

type Props = {
  query: string;
  trendingQuery: string;
  popularQuery: string;
  categoryQuery: string;
};

export default function PreviewBlogList({
  query,
  trendingQuery,
  popularQuery,
  categoryQuery,
}: Props) {
  const posts = usePreview(null, query);
  const trendingPosts = usePreview(null, trendingQuery);
  const popularPosts = usePreview(null, popularQuery);
  const categoryInfo = usePreview(null, categoryQuery);

  return (
    <>
      <TrendingSection trendingPosts={trendingPosts} />
      <PopularSection popularPosts={popularPosts} />
      <LatestBlogList posts={posts} />
      <CategoriesSection categoryInfo={categoryInfo} />
    </>
  );
}
