"use client";

import s from "./Sidebar.module.css";
import cn from "classnames";
import Search from "../../Search/Search";
import Logo from "../../../_lib/icons/logo.svg";

import { Menu } from "../../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import Link from "next/link";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <section className={cn(className, s.sidebar)} {...props}>
      <Link href="/">
        <Logo className={s.logo} />
      </Link>
      <Search />
      <Menu />
    </section>
  );
};
