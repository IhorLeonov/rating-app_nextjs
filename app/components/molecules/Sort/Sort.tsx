"use client";

import s from "./Sort.module.css";
import cn from "classnames";
import SortIcon from "../../../lib/icons/sort.svg";

import { SortEnum, SortProps } from "./Sort.props";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(s.sort, className)} {...props}>
      <div className={s.sortName}>Sort</div>
      <button
        id="raiting"
        onClick={() => setSort(SortEnum.Rating)}
        className={cn(s.type, { [s.active]: sort === SortEnum.Rating })}
        aria-labelledby="sort rating"
      >
        <SortIcon className={s.sortIcon} />
        By rating
      </button>

      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={cn(s.type, { [s.active]: sort === SortEnum.Price })}
        aria-labelledby="sort price"
      >
        <SortIcon className={s.sortIcon} />
        By price
      </button>
    </div>
  );
};
