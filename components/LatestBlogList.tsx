import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ChildComponents/ClientSideRoute";
import Author from "./ChildComponents/Author";

type LatestBlogListProps = {
  posts: Post[];
};

export default function LatestBlogList({ posts }: LatestBlogListProps) {
  const BlogPosts = posts.map((blogPost) => {
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
          <div className="bg-gray-400 bg-opacity-10 backdrop-blur-lg rounded drop-shadow-xl shadow-md group-hover:scale-105 transition-transform duration-200 ease-out w-full h-full">
            <div className="images">
              <Image
                className="rounded"
                src={urlFor(blogPost.mainImage)?.url() ?? ""}
                alt={blogPost.author.name}
                width={500}
                height={350}
              />
            </div>

            <div className="info flex justify-center flex-col py-4">
              <div className="cat flex">
                {blogCategories}
                {" - "}
                {new Date(blogPost._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="title text-xl font-bold text-gray-800 hover:text-gray-600">
                {blogPost.title}
              </div>
              <p className="text-gray-500 py-3 line-clamp-2">
                {blogPost.description}
              </p>
              {/* <Author /> */}
            </div>
          </div>
        </div>
      </ClientSideRoute>
    );
  });

  return (
    <section className="container mx-auto md:px-10 py-10">
      <h1 className="font-bold text-4xl py-2 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 my-10 sm:px-10 px-4">
        {BlogPosts}
      </div>
    </section>
  );
}
