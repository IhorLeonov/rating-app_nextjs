import { ProductProps } from "./Product.props";
import s from "./Product.module.css";
import { Card, Rating, Tag } from "../";
import Image from "next/image";

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <Card className={s.product}>
      <div>
        <Image
          className={s.logo}
          src={product.image}
          width={70}
          height={70}
          alt={product.title}
        />
      </div>

      <div className={s.title}>{product.title}</div>
      <div className={s.price}>{product.price}</div>
      <div className={s.credit}>{product.credit}</div>

      <div className={s.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating}></Rating>
      </div>

      <div className={s.tags}>
        {product.categories.map((c) => (
          <Tag key={c} color="ghost">
            {c}
          </Tag>
        ))}
      </div>

      <div className={s.priceTitle}>цена</div>
      <div className={s.creditTitle}>кредит</div>
      <div className={s.rateTitle}>{product.reviewCount} отзывов</div>
    </Card>
  );
};
