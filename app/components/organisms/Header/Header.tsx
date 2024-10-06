"use client";

import styles from "./Header.module.css";
import cn from "classnames";
import Logo from "../../../lib/icons/logo.svg";

import { HeaderProps } from "./Header.props";
import { ButtonIcon } from "../../atoms/ButtonIcon/ButtonIcon";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <header className={cn(styles.header, className, {})} {...props}>
      <Logo />
      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setIsOpen(true)}
      />

      <div className={cn(styles.mobileMenu, isOpen && styles.isMenuOpen)}>
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="close"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </header>
  );
};
