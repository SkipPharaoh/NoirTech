import { Fragment } from "react";
import Post from "./Post";

type LatestBlogListProps = {
  posts: Post[];
};

export default function LatestBlogList({ posts }: LatestBlogListProps) {
  return (
    <section className="container mx-auto md:px-20 pb-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {posts.map((blogPost) => {
          return (
            <Fragment key={blogPost._id}>
              <Post posts={blogPost} size="md" />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
