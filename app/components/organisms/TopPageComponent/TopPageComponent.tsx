"use client";

import s from "./TopPageComponent.module.css";

import { useEffect, useReducer, useState } from "react";
import { Htag, Tag, HhData, Advantages, Sort, Product } from "@/app/components";
import {
  TopLevelCategory,
  TopPageModel,
} from "@/app/interfaces/page.interface";
import { ProductModel } from "@/app/interfaces/product.interface";
import { SortEnum } from "../../molecules/Sort/Sort.props";
import { sortReducer } from "./sort.reducer";
import { useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m" aria-label={products.length + "элементов"}>
            {products.length}
          </Tag>
        )}
        {products.length > 1 && <Sort sort={sort} setSort={setSort} />}
      </div>

      <div role="list">
        {sortedProducts &&
          sortedProducts.map((p) => (
            <Product
              role="listitem"
              layout={shouldReduceMotion ? false : true}
              key={p._id}
              product={p}
            />
          ))}
      </div>

      <div className={s.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          work.com
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
