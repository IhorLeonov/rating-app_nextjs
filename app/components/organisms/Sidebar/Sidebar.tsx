"use client";

import s from "./Sidebar.module.css";
import cn from "classnames";
import Search from "../../molecules/Search/Search";
import Logo from "../../../lib/icons/logo.svg";
import Link from "next/link";

import { Menu } from "../../molecules/Menu/Menu";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <section className={cn(className, s.sidebar)} {...props}>
      <Link aria-label="Link to home" href="/">
        <Logo />
      </Link>
      <Search />
      <Menu />
    </section>
  );
};
