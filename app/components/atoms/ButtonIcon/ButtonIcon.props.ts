import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import up from "../../../lib/icons/up.svg";
import close from "../../../lib/icons/close.svg";
import menu from "../../../lib/icons/menu-burger.svg";

export const icons = {
  up,
  close,
  menu,
};

export type IconNameType = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconNameType;
  appearance: "primary" | "white";
}
