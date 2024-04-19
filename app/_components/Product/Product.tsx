import { declOfNum, priceGvn } from "@/app/_lib/helpers";
import {
  Card,
  Rating,
  Tag,
  Button,
  Divider,
  Review,
  ReviewForm,
} from "../index";
import { ProductProps } from "./Product.props";

import Image from "next/image";
import cn from "classnames";
import s from "./Product.module.css";

export const Product = ({
  product,
  className,
  isReviewOpened,
  setIsReviewOpened,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <div className={className} {...props}>
      <Card className={s.product}>
        <div className={s.logo}>
          <Image
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
            <Tag className={s.category} key={c} color="ghost">
              {c}
            </Tag>
          ))}
        </div>

        <div className={s.priceTitle}>цена</div>
        <div className={s.creditTitle}>кредит</div>
        <div className={s.rateTitle}>
          {product.reviewCount}{" "}
          {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
        </div>

        <Divider className={s.hr} />

        <div className={s.description}>{product.description}</div>
        <div className={s.features}>
          {product.characteristics.map((c) => (
            <div className={s.characteristics} key={c.name}>
              <span className={s.characteristicsName}>{c.name}</span>
              <span className={s.characteristicsDots}></span>
              <span className={s.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>

        <div className={s.advBlock}>
          {product.advantages && (
            <div className={s.advantages}>
              <div className={s.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}

          {product.disadvantages && (
            <div className={s.disadvantages}>
              <div>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>

        <Divider className={cn(s.hr, s.hr2)} />

        <div className={s.actions}>
          <Button appearance="primary" arrow="right">
            Узнать подробнее
          </Button>
          <Button
            appearance="ghost"
            arrow={isReviewOpened ? "down" : "right"}
            className={s.reviewBtn}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>

      <Card
        color="blue"
        className={cn(s.reviews, {
          [s.opened]: isReviewOpened,
          [s.closed]: !isReviewOpened,
        })}
      >
        {product.reviews.map((r) => (
          <div key={r._id}>
            <Review review={r} />
            <Divider />
          </div>
        ))}
        <ReviewForm productId={product._id} />
      </Card>
    </div>
  );
};
