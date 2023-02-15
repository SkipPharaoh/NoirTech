import React, { useMemo } from "react";

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

type PostSizeOption = "sm" | "md" | "lg";
type PostTypeOption = "row" | "popular" | "trending" | "latest";

interface PostProps {
  type: PostTypeOption;
  size: PostSizeOption;
}

export default function Post({ type, size }: PostProps) {
  //   const classNames = PostType[type] + " " + PostSize[size];

  const divClass = useMemo(() => {
    switch (size) {
      case "sm":
        return "grid md:grid-cols-2 lg:grid-cols-3 gap-14";
      case "md":
        return "grid md:grid-cols-2 lg:grid-cols-2 gap-14";
      case "lg":
        return "";
      default:
        return "flex flex-col gap-10";
    }
  }, [size]);

  const divClassName = () => {
    if (size === "sm") {
      return "grid md:grid-cols-2 lg:grid-cols-3 gap-14";
    }
  };
  /*
    This is for all post (not details)
    1 - for related rows (row)
    2 - large card/row (trending)
    3 - medium card (popular)
    4 - small card (latest/all)
    */

  //   console.log(size, type);
  //   console.log(divClassName);

  return <div className={`${divClass}`}>Post</div>;
}
