import { API } from "@/app/api/api";
import { TopPageModel } from "@/app/interfaces/page.interface";
import { ProductModel } from "@/app/interfaces/product.interface";

export async function getProducts(
  page: TopPageModel
): Promise<ProductModel[] | null> {
  const res = await fetch(API.product.find, {
    method: "POST",
    body: JSON.stringify({
      category: page.category,
      limit: 10,
    }),
    headers: new Headers({ "content-type": "application/json" }),
  });

  return res.json();
}
