import { ProductProps } from "./Product.props";
import s from "./Product.module.css";
import { Card, Rating, Tag, Button, Divider } from "../";
import Image from "next/image";
import { priceGvn } from "@/app/_lib/helpers";

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

      <div className={s.price}>
        {priceGvn(product.price)}
        {product.oldPrice && (
          <Tag className={s.oldPrice} color="green">
            {priceGvn(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>

      <div className={s.credit}>
        {priceGvn(product.credit)}
        <span className={s.month}>/мес</span>
      </div>

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

      <Divider className={s.hr} />

      <div className={s.description}>{product.description}</div>
      <div className={s.features}>features</div>

      <div className={s.advBlock}>
        <div className={s.advantages}>
          <div>Преимущества</div>
          <div>{product.advantages}</div>
        </div>

        <div className={s.disadvantages}>
          <div>Недостатки</div>
          <div>{product.disadvantages}</div>
        </div>
      </div>

      <Divider className={s.hr} />

      <div className={s.actions}>
        <Button appearance="primary" arrow="right">
          Узнать подробнее
        </Button>
        <Button appearance="ghost" arrow="right">
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
