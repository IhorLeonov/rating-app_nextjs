"use client";

import { Menu } from "../../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
// import s from "./Sidebar.module.css";
import cn from "classnames";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <section className={cn(className, {})} {...props}>
      <Menu />
    </section>
  );
};
