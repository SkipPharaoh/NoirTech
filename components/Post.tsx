import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
import Author from "./Author";
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
  posts: Post;
  size: PostSizeOption;
}
type Prop = {
  posts: Post[];
};

export default function Post({ posts, size }: PostProps) {
  const {
    author,
    categories,
    mainImage,
    slug,
    title,
    description,
    _id,
    _createdAt,
  } = posts;
  const postRoute = `/posts/${slug.current}` ?? "/";
  const postCategory = categories[0].title;
  const hasImage = urlFor(mainImage)?.url() ?? "/images/img1.jpg";
  const hasCategory = postCategory ?? "Technology";
  const hasTitle = title ?? "Title";
  const hasDescription = description ?? "Description";
  const hasDate =
    new Date(_createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }) ?? "January 1, 2023";

  const sizeClass: Record<
    PostSizeOption,
    {
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
    <ClientSideRoute route={postRoute}>
      <div className="group">
        {/* Difference here between largePost & the sm/md post */}
        <div className={sizeClass[size].cardContainer}>
          <div className={sizeClass[size].imageContainer}>
            {/* difference here for the image width */}
            <Image
              src={hasImage}
              alt={title}
              width={sizeClass[size].imageWidth}
              height={sizeClass[size].imageHeight}
            />
          </div>

          {/* difference here between large & sm/md posts */}
          <div className={sizeClass[size].cardBody}>
            {/* difference here between large & sm/md posts */}
            <div className={sizeClass[size].categoryContainer}>
              {/* difference here between large & sm/md posts */}
              <div className={sizeClass[size].category}>{hasCategory}</div>
              <p className="text-gray-800 hover:text-gray-600">{hasDate}</p>
            </div>

            {/* difference here between large & sm/md posts */}
            <div className={sizeClass[size].title}>{hasTitle}</div>
            <p className="text-gray-500 py-3 line-clamp-2">{hasDescription}</p>
            {/* <Author></Author> */}
          </div>
        </div>
      </div>
    </ClientSideRoute>
  );
}
