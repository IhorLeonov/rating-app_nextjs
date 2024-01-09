import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface HtagProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLTitleElement>, HTMLTitleElement> {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
}
