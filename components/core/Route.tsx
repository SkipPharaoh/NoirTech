"use client";

import { useRouter } from "next/navigation";

interface RouteProps {
  children: React.ReactNode;
  push: string;
}

export default function Route({ children, push }: RouteProps) {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push(push)}>
      {children}
    </button>
  );
}
