import Link from "next/link";
import Author from "./Author";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

export const PostType = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  secondary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  basic: "bg-white hover:bg-gray-700 text-gray-700 font-bold rounded",
  delete: "bg-red-300 hover:bg-red-500 text-white font-bold rounded",
};

export const PostSize = {
  sm: "py-2 px-4 text-xs",
  lg: "py-3 px-6 text-lg",
};

declare type PostSizeOption = "sm" | "md" | "lg" | "row";

interface PostProps {
  size: PostSizeOption;
}
type Prop = {
  posts: Post[];
};

export default function Post({ size }: PostProps) {
  //   const classNames = PostType[type] + " " + PostSize[size];

  const sizeClass: Record<
    PostSizeOption,
    {
      container: string;
      cardContainer: string;
      imageContainer: string;
      imageWidth: number;
      imageHeight: number;
      cardBody: string;
      categoryContainer: string;
      category: string;
      title: string;
      author: string;
    }
  > = {
    sm: {
      container: "grid md:grid-cols-2 lg:grid-cols-3 gap-14",
      cardContainer:
        "hover:bg-gray-400 hover:bg-opacity-10 hover:backdrop-blur-lg rounded hover:drop-shadow-xl hover:shadow-md",
      imageContainer: "image",
      imageWidth: 600,
      imageHeight: 400,
      cardBody: "flex justify-center flex-col py-4",
      categoryContainer: "cat",
      category: "line-clamp-1",
      title: "text-xl font-bold text-gray-800 hover:text-gray-600",
      author: "author",
    },
    md: {
      container: "grid md:grid-cols-2 lg:grid-cols-2 gap-14",
      cardContainer:
        "hover:bg-gray-400 hover:bg-opacity-10 hover:backdrop-blur-lg rounded hover:drop-shadow-xl hover:shadow-md",
      imageContainer: "image",
      imageWidth: 600,
      imageHeight: 400,
      cardBody: "flex justify-center flex-col py-4",
      categoryContainer: "cat",
      category: "cat",
      title: "title text-xl font-bold text-gray-800 hover:text-gray-600",
      author: "author",
    },
    lg: {
      container: "large",
      cardContainer:
        "grid xl:grid-cols-2 hover:bg-gray-400 hover:bg-opacity-10 hover:backdrop-blur-lg rounded hover:drop-shadow-xl hover:shadow-md",
      imageContainer: "image",
      imageWidth: 600,
      imageHeight: 600,
      cardBody: "flex justify-center flex-col px-6",
      categoryContainer: "flex flex-col",
      category:
        "text-orange-600 hover:text-orange-800 line-clamp-1 xl:line-clamp-none",
      title: "text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600",
      author: "author",
    },
    row: {
      container: "relatedPost",
      cardContainer: "flex gap-5",
      imageContainer: "image flex flex-col justify-start",
      imageWidth: 300,
      imageHeight: 200,
      cardBody: "flex justify-center flex-col",
      categoryContainer: "cat",
      category: "text-orange-600 hover:text-orange-800",
      title: "text-xl font-bold text-gray-800 hover:text-gray-600",
      author: "author",
    },
  };

  return (
    <div className={sizeClass[size].container}>
      <ClientSideRoute
        // key={blogPost._id}
        route={`/}`}
      >
        {/* <div className="group"> */}

        {/* Difference here between largePost & the sm/md post */}
        <div className={sizeClass[size].cardContainer}>
          <div className={sizeClass[size].imageContainer}>
            {/* difference here for the image width */}
            <Image
              src={"/images/img1.jpg"}
              alt=""
              width={sizeClass[size].imageWidth}
              height={sizeClass[size].imageHeight}
            />
          </div>

          {/* difference here between large & sm/md posts */}
          <div className={sizeClass[size].cardBody}>
            {/* difference here between large & sm/md posts */}
            <div className={sizeClass[size].categoryContainer}>
              {/* difference here between large & sm/md posts */}
              <div className={sizeClass[size].category}>Business</div>
              <p className="text-gray-800 hover:text-gray-600">
                {/* {new Date(blogPost._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })} */}
                Jan. 1, 2021
              </p>
            </div>

            {/* difference here between large & sm/md posts */}
            <div className={sizeClass[size].title}>
              {/* {blogPost.title} */}
              Title
            </div>
            <p className="text-gray-500 py-3 line-clamp-2">
              {/* {blogPost.description} */}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              facilis voluptate qui quae autem tempora aut est minima? Molestias
              vero quis, doloremque harum totam hic quasi tempora adipisci
              quidem dolore.
            </p>
            {/* <Author></Author> */}
          </div>
        </div>
        {/* </div> */}
      </ClientSideRoute>
    </div>
  );
}
