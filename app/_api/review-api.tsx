import { API } from "@/app/_api/api";

import {
  IReviewForm,
  IReviewSentResponse,
} from "../_components/ReviewForm/ReviewForm.interface";

export async function sendReview(
  formData: IReviewForm,
  productId: string
): Promise<IReviewSentResponse> {
  const res = await fetch(API.review.createDemo, {
    method: "POST",
    body: JSON.stringify({
      ...formData,
      productId,
    }),
    headers: new Headers({ "content-type": "application/json" }),
  });

  return res.json();
}
