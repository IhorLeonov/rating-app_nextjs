import { ReviewModel } from "@/app/interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
  isOpened: boolean;
}
