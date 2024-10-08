import { AppContext } from "@/app/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/app/interfaces/menu.interface";
import { useContext, KeyboardEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/app/lib/helpers";
import { motion, useReducedMotion } from "framer-motion";

import cn from "classnames";
import s from "./Menu.module.css";
import Link from "next/link";

export function Menu() {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>();

  const pathName = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const variantsParent = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion
        ? {}
        : {
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: "auto",
    },
    hidden: { opacity: shouldReduceMotion ? 1 : 0, height: 0 },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            setAnnounce(m.isOpened ? "closed" : "opened");
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === "Space" || key.code === "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={s.firstLevelList}>
        {firstLevelMenu.map((m) => (
          // eslint-disable-next-line jsx-a11y/role-supports-aria-props
          <li key={m.route} aria-expanded={m.id === firstCategory}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(s.firstLevel, {
                  [s.firstLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={s.secondBlock}>
        {menu.map((m) => {
          if (m.pages.map((p) => p.alias).includes(pathName.split("/")[2])) {
            m.isOpened = true;
          }

          return (
            <li key={m._id.secondCategory}>
              <button
                onKeyDown={(key: KeyboardEvent) =>
                  openSecondLevelKey(key, m._id.secondCategory)
                }
                className={s.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>

              <motion.div
                layout
                variants={variantsParent}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={s.secondLevelBlock}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (
    pages: PageItem[],
    route: string,
    isOpened: boolean
  ) => {
    return pages.map((p) => (
      <motion.div
        key={p._id}
        variants={variantsChildren}
        className={s.thirdLevelBox}
      >
        <Link
          tabIndex={isOpened ? 0 : -1}
          href={`/${route}/${p.alias}`}
          className={cn(s.thirdLevel, {
            [s.thirdLevelActive]: `/${route}/${p.alias}` === pathName,
          })}
          aria-current={`/${route}/${p.alias}` === pathName ? "page" : false}
        >
          {p.category}
        </Link>
      </motion.div>
    ));
  };

  return (
    <nav role="navigation" className={s.menu}>
      {announce && (
        <span className="visualy-hidden">
          {announce === "opened" ? "expended" : "closed"}
        </span>
      )}
      {buildFirstLevel()}
    </nav>
  );
}
