import TopPageComponent from "@/app/components/organisms/TopPageComponent/TopPageComponent";

import { getMenu } from "@/app/api/menu-api";
import { getPage } from "@/app/api/page-api";
import { getProducts } from "@/app/api/products-api";
import { firstLevelMenu } from "@/app/lib/helpers";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Head from "next/head";

interface TopPageParams {
  params: { alias: string; type: string };
}

export async function generateMetadata({
  params,
}: TopPageParams): Promise<Metadata> {
  const page = await getPage(params.alias);

  return {
    title: page?.metaTitle,
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
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
      </Head>
      <TopPageComponent
        firstCategory={firstCategoryItem.id}
        page={page}
        products={products}
      />
    </>
  );
}
