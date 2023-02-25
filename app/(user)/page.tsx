import { groq } from "next-sanity";
import { previewData } from "next/headers";
import CategoriesSection from "../../components/CategoriesSection";
import LatestBlogList from "../../components/LatestBlogList";
import PopularSection from "../../components/PopularSection";
import PreviewBlogList from "../../components/PreviewBlogList";
import PreviewSuspense from "../../components/PreviewSuspense";
import TrendingSection from "../../components/TrendingSection";
import { client } from "../../lib/sanity.client";

export const query = groq`*[_type == "post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

export const trendingQuery = groq`*[Trending == true]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

export const popularQuery = groq`*[Popular == true]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

export const categoryQuery = groq`*[_type == "category"]{
  ...,
} | order(title)`;

export const revalidate = 60;

type AppPreviewData = { token: string } | undefined;

export default async function HomePage() {
  if ((previewData() as AppPreviewData)?.token) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList
          query={query}
          trendingQuery={trendingQuery}
          popularQuery={popularQuery}
          categoryQuery={categoryQuery}
          token={(previewData() as AppPreviewData)!.token}
        />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  const trendingPosts = await client.fetch(trendingQuery);
  const popularPosts = await client.fetch(popularQuery);
  const categoryInfo = await client.fetch(categoryQuery);

  return (
    <>
      <TrendingSection trendingPosts={trendingPosts} />
      <PopularSection popularPosts={popularPosts} />
      <LatestBlogList posts={posts} />
      <CategoriesSection categoryInfo={categoryInfo} />
    </>
  );
}
