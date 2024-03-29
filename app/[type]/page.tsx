import { notFound } from "next/navigation";
import React from "react";
import { firstLevelMenu } from "../_lib/helpers";

interface Page {
  params: { type: string };
}

export default function Page({ params }: Page) {
  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

  if (!firstCategoryItem) {
    notFound();
  }

  return <div>Page {params.type}</div>;
}
