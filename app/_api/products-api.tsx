import { API } from "@/app/_api/api";
import { TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";

export async function getProducts(page: TopPageModel): Promise<ProductModel[] | null> {
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
