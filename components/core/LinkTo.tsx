"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface LinkToProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  target?: string;
  title?: string;
}

export default function LinkTo({
  children,
  className,
  target,
  title,
  href,
  as,
}: LinkToProps) {
  // let pathArray = path.pathname?.split("/");
  // pathArray?.shift();

  // pathArray = pathArray?.filter(
  //   (pathName) => pathName !== "" && pathName !== "categories"
  // );
  // pathArray = pathArray?.map((path, index) => {
  //   return "/" + pathArray?.slice(0, index + 1).join("/");
  // });
  // console.log(pathArray?.toString(), path.pathname);

  /***
   * Temporary fix below for scroll to top on page change
   ***/
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <Link
      href={href}
      className={className}
      as={as}
      target={target}
      title={title}
    >
      {children}
    </Link>
  );
}
