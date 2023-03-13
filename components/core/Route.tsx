"use client";

import { useRouter } from "next/navigation";

interface RouteProps {
  children: React.ReactNode;
  push: string;
}

export default function Route({ children, push }: RouteProps) {
  const router = useRouter();
  const pushTo = () => router.push(push);

  return (
    <button type="button" onClick={pushTo}>
      {children}
    </button>
  );
}
