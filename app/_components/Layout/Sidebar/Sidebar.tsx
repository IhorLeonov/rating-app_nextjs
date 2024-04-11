"use client";

import { Menu } from "../../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import s from "./Sidebar.module.css";
import cn from "classnames";
import Search from "../../Search/Search";
// import Logo from "../../../_lib/icons/logo.svg";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <section className={cn(className, s.sidebar)} {...props}>
      {/* <Logo className={s.logo} /> */}
      <div className={s.logo}>MyLogo</div>
      <Search />
      <Menu />
    </section>
  );
};
