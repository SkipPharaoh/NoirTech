"use client";

import Link from "next/link";

type Route = { pathname: string; query?: { search: string } };

interface ClientSideRouteProps {
  children: React.ReactNode;
  route: string | Route;
}

export default function ClientSideRoute({
  children,
  route,
}: ClientSideRouteProps) {
  return <Link href={route.pathname ?? route}>{children}</Link>;
}
