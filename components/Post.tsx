import Image from "next/image";
import urlFor from "../lib/urlFor";
import LinkTo from "./core/LinkTo";

export const PostType = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  secondary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  basic: "bg-white hover:bg-gray-700 text-gray-700 font-bold rounded",
  delete: "bg-red-300 hover:bg-red-500 text-white font-bold rounded",
};

declare type PostSizeOption = "sm" | "md" | "lg" | "row" | "author";

interface PostProps {
  posts: Post;
  size: PostSizeOption;
}

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
      imageLink?: string;
      imageBox?: string;
      image?: string;
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
      imageLink: "image-link",
      imageBox: "image-box",
      image: "image",
      imageWidth: 600,
      imageHeight: 400,
      cardBody: "flex justify-center flex-col py-4",
      categoryContainer: "cat",
      category: "line-clamp-1 text-orange-600",
      title: "text-xl font-bold text-gray-800 hover:text-gray-600",
      author: "author",
    },
    md: {
      cardContainer:
        "hover:bg-gray-400 hover:bg-opacity-10 hover:backdrop-blur-lg rounded hover:drop-shadow-xl hover:shadow-md",
      imageContainer: "image",
      imageLink: "image-link",
      imageBox: "image-box",
      image: "image",
      imageWidth: 600,
      imageHeight: 400,
      cardBody: "flex justify-center flex-col py-4",
      categoryContainer: "cat",
      category: "cat text-orange-600",
      title: "title text-xl font-bold text-gray-800 hover:text-gray-600",
      author: "author",
    },
    lg: {
      cardContainer:
        "grid xl:grid-cols-2 hover:bg-gray-400 hover:bg-opacity-10 hover:backdrop-blur-lg rounded hover:drop-shadow-xl hover:shadow-md",
      imageContainer: "image",
      imageLink: "image-link",
      imageBox: "image-box",
      image: "image",
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
      imageLink: "image-link",
      imageBox: "image-box",
      image: "image ",
      imageWidth: 300,
      imageHeight: 200,
      cardBody: "flex justify-center flex-col",
      categoryContainer: "cat",
      category: "text-orange-600 hover:text-orange-800",
      title: "text-xl font-bold text-gray-800 hover:text-gray-600",
      author: "author",
    },
    author: {
      cardContainer:
        "flex flex-row-reverse lg:flex-col mb-6 pb-6 border-b border-gray-200 lg:mb-0 lg:pb-0 lg:border-none",
      imageContainer: "flex-none block ml-6 lg:ml-0",
      imageLink: "relative block",
      imageBox:
        "relative mb-4 shadow rounded-lg lg:aspect-[3/2] aspect-[1/1] overflow-hidden min-h-[120px] min-w-[120px]",
      image:
        "z-0 w-full hover:drop-shadow-md transition ease-in-out duration-150 cursor-pointer lazyloaded",
      imageWidth: 300,
      imageHeight: 200,
      cardBody: "flex flex-col flex-grow flex-1",
      categoryContainer: "cat",
      category:
        "text-orange-600 hover:text-orange-800 flex items-center hover:underline uppercase font-semibold tracking-widest leading-none text-xs lg:text-sm pb-2",
      title:
        "tracking-[-0.0375em] leading-6 font-semibold lg:leading-7 text-gray-800 hover:underline text-xl lg:text-2xl pb-2 title text-xl font-bold text-gray-800 hover:text-gray-600",
      author: "author",
    },
  };
  const imageComponent =
    size === "author" ? (
      <Image
        src={hasImage}
        alt={title}
        fill
        sizes="(max-width: 600px) 100vw, 600px"
        className={sizeClass[size].image}
      />
    ) : (
      <Image
        src={hasImage}
        alt={title}
        width={sizeClass[size].imageWidth}
        height={sizeClass[size].imageHeight}
        className={sizeClass[size].image}
      />
    );

  return (
    <LinkTo href={postRoute}>
      <div className="group">
        {/* Difference here between largePost & the sm/md post */}
        <div className={sizeClass[size].cardContainer}>
          <div className={sizeClass[size].imageContainer}>
            <div className={sizeClass[size].imageLink}>
              <div className={sizeClass[size].imageBox}>
                {/* difference here for the image width */}
                {imageComponent}
              </div>
            </div>
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
    </LinkTo>
  );
}
