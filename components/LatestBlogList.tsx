import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import Author from "./Author";

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
          <div className="hover:bg-gray-400 hover:bg-opacity-10 hover:backdrop-blur-lg rounded hover:drop-shadow-xl hover:shadow-md">
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
              {/* <Author></Author> */}
            </div>
          </div>
        </div>
      </ClientSideRoute>
    );
  });

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {BlogPosts}
      </div>
    </section>
  );
}
