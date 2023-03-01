import { groq } from "next-sanity";
import { Fragment } from "react";
import { client } from "../lib/sanity.client";
import Post from "./Post";

export default async function AuthorRelatedPost({
  author,
}: {
  author: string;
}) {
  const query = groq`*[_type == "post" && author->name == $author ]
    {
        ...,
        author->,
        categories[]->,
    }`;

  const posts: Post[] = await client.fetch(query, { author });

  return posts.map((relatedPost) => {
    return (
      <Fragment key={relatedPost._id}>
        <Post posts={relatedPost} size="author" />
      </Fragment>
    );
  });
}
