import { TopLevelCategory, TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { Htag, Tag, HhData } from "../../index";
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
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m" aria-label={products.length + "элементов"}>
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>

      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
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
    </div>
  );
}
