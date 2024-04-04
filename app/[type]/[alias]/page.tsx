import { getMenu } from "@/app/_api/menu-api";
import { getPage } from "@/app/_api/page-api";
import { getProducts } from "@/app/_api/products-api";
import { firstLevelMenu } from "@/app/_lib/helpers";
import TopPageComponent from "@/app/_components/page-components/TopPageComponent/TopPageComponent";

import { Metadata } from "next";
import { notFound } from "next/navigation";

interface TopPageParams {
  params: { alias: string; type: string };
}

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: "Page",
  };
}

export async function generateStaticParams() {
  const firstCategory = 0;
  const menu = await getMenu(firstCategory);

  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}

export default async function TopPage({ params }: TopPageParams) {
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  const page = await getPage(params.alias);

  if (!page || !firstCategoryItem) {
    notFound();
  }

  const products = await getProducts(page);

  if (!products) {
    notFound();
  }

  return (
    <TopPageComponent
      firstCategory={firstCategoryItem.id}
      page={page}
      products={products}
    />
  );
}
