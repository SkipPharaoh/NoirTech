"use client";

import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

interface PopularSectionProps {
  popularPosts: Post[];
}

export default function PopularSection({ popularPosts }: PopularSectionProps) {
  const PopularPosts = popularPosts.map((blogPost) => {
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
      <ClientSideRoute
        key={blogPost._id}
        route={`/post/${blogPost.slug.current}`}
      >
        <div className="group">
          <div className="bg-gray-400 bg-opacity-10 backdrop-blur-lg rounded drop-shadow-xl shadow-md group-hover:scale-105 transition-transform duration-200 ease-out">
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
                {blogCategories}
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
              <Author></Author>
            </div>
          </div>
        </div>
      </ClientSideRoute>
    );
  });

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-14">
        {PopularPosts}
      </div>
    </section>
  );
}
