"use client";

import { Fragment } from "react";
import Post from "./Post";

interface PopularSectionProps {
  popularPosts: Post[];
}

export default function PopularSection({ popularPosts }: PopularSectionProps) {
  return (
    <section className="container mx-auto md:px-20 pt-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-14">
        {popularPosts.map((blogPost) => {
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
