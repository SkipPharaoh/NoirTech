import { groq } from "next-sanity";
import { Fragment } from "react";
import { client } from "../lib/sanity.client";
import Post from "./Post";

export default async function RelatedBlog({ category }: { category: string }) {
  const query = groq`*[_type == "post" && $category in categories[]->title ][0...3]
    {
        ...,
        author->,
        categories[]->,
    }`;

  const posts: Post[] = await client.fetch(query, { category });

  return (
    <section>
      <h1 className="font-bold text-3xl pb-10">Related</h1>

      <div className="flex flex-col gap-10">
        {posts.map((relatedPost) => {
          return (
            <Fragment key={relatedPost._id}>
              <Post posts={relatedPost} size="row" />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
