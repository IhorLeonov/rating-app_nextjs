import { API } from "@/app/api/api";

import {
  IReviewForm,
  IReviewSentResponse,
} from "../components/molecules/ReviewForm/ReviewForm.interface";

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
