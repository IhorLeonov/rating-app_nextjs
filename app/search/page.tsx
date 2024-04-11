"use client";

import { useSearchParams } from "next/navigation";

export default function PageSearch() {
  const searchParams = useSearchParams();

  const paramQ = searchParams.get("q");

  return <div>Page Search. Query: {paramQ}</div>;
}
