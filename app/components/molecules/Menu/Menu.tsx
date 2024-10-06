import { AppContext } from "@/app/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/app/interfaces/menu.interface";
import { useContext, KeyboardEvent } from "react";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/app/lib/helpers";
import { motion } from "framer-motion";

import cn from "classnames";
import s from "./Menu.module.css";
import Link from "next/link";

export function Menu() {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const pathName = usePathname();

  const variantsParent = {
    visible: {
      marginBottom: 20,
      transition: {
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
    hidden: { opacity: 0, height: 0 },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
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
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
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
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={s.secondBlock}>
        {menu.map((m) => {
          if (m.pages.map((p) => p.alias).includes(pathName.split("/")[2])) {
            m.isOpened = true;
          }

          return (
            <div key={m._id.secondCategory}>
              <div
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) =>
                  openSecondLevelKey(key, m._id.secondCategory)
                }
                className={s.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>

              <motion.div
                layout
                variants={variantsParent}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={cn(s.secondLevelBlock, {
                  // [s.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </div>
          );
        })}
      </div>
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
        >
          {p.category}
        </Link>
      </motion.div>
    ));
  };

  return <div className={s.menu}>{buildFirstLevel()}</div>;
}
