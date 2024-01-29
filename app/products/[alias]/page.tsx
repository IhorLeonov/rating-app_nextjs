import { getMenu } from "@/app/api/menu";
import { getPage } from "@/app/api/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProductsParams {
  params: { alias: string };
}

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: "Page",
  };
}

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
}

export default async function PageProducts({ params }: PageProductsParams) {
  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }

  return <div>{page.title}</div>;
}
