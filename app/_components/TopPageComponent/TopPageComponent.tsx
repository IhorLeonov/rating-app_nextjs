"use client";

import { useReducer, useState } from "react";
import { Htag, Tag, HhData, Advantages, Sort, Product } from "../index";

import { TopLevelCategory, TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { SortEnum } from "../Sort/Sort.props";
import { sortReducer } from "./sort.reducer";

import s from "./TopPageComponent.module.css";

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

export default function TopPageComponent({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m" aria-label={products.length + "элементов"}>
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {sortedProducts &&
          sortedProducts.map((p) => (
            <Product
              key={p._id}
              product={p}
              isReviewOpened={isReviewOpened}
              setIsReviewOpened={setIsReviewOpened}
            />
          ))}
      </div>

      <div className={s.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.gvn
        </Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={s.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      <Htag tag="h2">Получаемые навыки</Htag>

      {page.tags.map((t) => (
        <Tag key={t} color="accent">
          {t}
        </Tag>
      ))}
    </div>
  );
}
