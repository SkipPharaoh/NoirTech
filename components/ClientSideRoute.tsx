"use client";

import Link from "next/link";

type Route = {
  pathname: string;
  query?: { search: string };
};

interface ClientSideRouteProps {
  children: React.ReactNode;
  route: Route | string;
}

export default function ClientSideRoute({
  children,
  route,
}: ClientSideRouteProps) {
  const path = route as Route;
  // let pathArray = path.pathname?.split("/");
  // pathArray?.shift();

  // pathArray = pathArray?.filter(
  //   (pathName) => pathName !== "" && pathName !== "categories"
  // );
  // pathArray = pathArray?.map((path, index) => {
  //   return "/" + pathArray?.slice(0, index + 1).join("/");
  // });
  // console.log(pathArray?.toString(), path.pathname);

  return <Link href={path.pathname ?? route}>{children}</Link>;
}
