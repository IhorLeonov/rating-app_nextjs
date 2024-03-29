import { AppContext } from "@/app/_context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/app/_lib/helpers";

import cn from "classnames";
import s from "./Menu.module.css";
import Link from "next/link";

export function Menu() {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const pathName = usePathname();

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
                className={s.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(s.secondLevelBlock, {
                  [s.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        key={p._id}
        href={`/${route}/${p.alias}`}
        className={cn(s.thirdLevel, {
          [s.thirdLevelActive]: `/${route}/${p.alias}` === pathName,
        })}
      >
        {p.category}
      </Link>
    ));
  };

  return <div className={s.menu}>{buildFirstLevel()}</div>;
}
