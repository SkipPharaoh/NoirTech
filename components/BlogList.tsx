import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import Divider from "./Divider";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  const Posts = posts.map((post) => {
    const Categories =
      post.categories &&
      post.categories.map((category) => (
        <div
          key={category._id}
          className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
        >
          <p>{category.title}</p>
        </div>
      ));

    return (
      <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
        <div className="group cursor-pointer flex flex-col">
          <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage)?.url() ?? ""}
              alt={post.author.name}
              fill
            />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
              <div>
                <p className="font-bold">{post.title}</p>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                {Categories}
              </div>
            </div>
          </div>

          <div className="mt-5 flex-1">
            <p className="underline text-lg font-bold">{post.title}</p>
            <p className="line-clamp-2 text-gray-500">{post.description}</p>
          </div>
          <p className="mt-5 font-bold flex items-center group-hover:underline">
            Read Post
            <ArrowUpRightIcon className="h-4 w-4 ml-2" />
          </p>
        </div>
      </ClientSideRoute>
    );
  });

  return (
    <div>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {Posts}
      </div>
      <Divider />
    </div>
  );
}
