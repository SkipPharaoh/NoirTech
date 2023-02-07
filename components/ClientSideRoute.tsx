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
  return <Link href={path.pathname ?? route}>{children}</Link>;
}
