import { getMenu } from "@/app/_api/menu-api";
import { getPage } from "@/app/_api/page-api";
import { firstLevelMenu } from "@/app/_lib/helpers";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProductsParams {
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

  return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
}

export default async function PageProducts({ params }: PageProductsParams) {
  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }

  return <div>{page.title}</div>;
}
