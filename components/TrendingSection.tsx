import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "../lib/urlFor";

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

  const TrendingPosts = trendingPosts.map((blogPost) => {
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
        <div className="grid xl:grid-cols-2 hover:bg-gray-400 hover:bg-opacity-10 hover:backdrop-blur-lg rounded hover:drop-shadow-xl hover:shadow-md">
          <div className="image">
            <Image
              src={urlFor(blogPost.mainImage)?.url() ?? ""}
              alt={blogPost.author.name}
              width={600}
              height={600}
            />
          </div>
          <div className="info flex justify-center flex-col px-6">
            <div className="category flex flex-col">
              <div className="text-orange-600 hover:text-orange-800">
                {blogCategories}
              </div>
              <div className="text-gray-800 hover:text-gray-600">
                {new Date(blogPost._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>
            <div className="title text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {blogPost.title}
            </div>
            <p className="text-gray-500 py-3 line-clamp-2">
              {blogPost.description}
            </p>
            {/* <Author /> */}
          </div>
        </div>
      </ClientSideRoute>
    );
  });

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {TrendingPosts}
      </div>
    </section>
  );
}
