import { ProductModel } from "@/app/interfaces/product.interface";
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
  isReviewOpened: boolean;
  setIsReviewOpened: Dispatch<SetStateAction<boolean>>;
}
