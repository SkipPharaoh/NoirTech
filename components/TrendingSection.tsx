import { Fragment } from "react";
import Post from "./Post";

interface TrendingSectionProps {
  trendingPosts: Post[];
}

export default function TrendingSection({
  trendingPosts,
}: TrendingSectionProps) {
  const bg = {
    // background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="pt-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {trendingPosts.map((blogPost) => {
          return (
            <Fragment key={blogPost._id}>
              <Post posts={blogPost} size="lg" />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
