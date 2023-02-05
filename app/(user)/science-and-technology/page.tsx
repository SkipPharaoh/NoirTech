import { groq } from "next-sanity";
import React from "react";
import { client } from "../../../lib/sanity.client";
import ClientSideRoute from "../../../components/ClientSideRoute";
import urlFor from "../../../lib/urlFor";
import Image from "next/image";

export default async function page() {
  const query = groq`*[_type == 'post' && categories[]->title match 'Science & Technology']{
    ...,
    author->,
    categories[]->
  }`;

  const techPost: Post[] = await client.fetch(query);

  const BlogPosts = techPost.map((blogPost) => {
    const blogCategories =
      blogPost.categories &&
      blogPost.categories.map((category) => (
        <div
          key={category ? category._id : undefined}
          className="text-orange-600 hover:text-orange-800"
        >
          {category && category.title}
        </div>
      ));

    return (
      <div className="group" key={blogPost._id}>
        <div className="hover:bg-gray-400 hover:bg-opacity-10 hover:backdrop-blur-lg rounded hover:drop-shadow-xl hover:shadow-md">
          <ClientSideRoute route={`/post/${blogPost.slug.current}`}>
            <div className="images">
              <Image
                src={urlFor(blogPost.mainImage)?.url() ?? ""}
                alt=""
                width={600}
                height={400}
              />
            </div>
            <div className="info flex justify-center flex-col py-4">
              <div className="cat">
                <div className="line-clamp-1">{blogCategories}</div>
                <p className="text-gray-800 hover:text-gray-600">
                  {new Date(blogPost._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="title text-xl font-bold text-gray-800 hover:text-gray-600">
                {blogPost.title}
              </div>
              <p className="text-gray-500 py-3 line-clamp-2">
                {blogPost.description}
              </p>
              {/* <Author></Author> */}
            </div>
          </ClientSideRoute>
        </div>
      </div>
    );
  });

  return (
    <section className="container mx-auto md:px-20 pb-10">
      <h1 className="font-bold text-4xl py-12 text-center">
        Science & Technology
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {BlogPosts}
      </div>
    </section>
  );
}
