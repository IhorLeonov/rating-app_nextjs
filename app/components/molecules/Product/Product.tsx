"use client";

import s from "./Product.module.css";
import cn from "classnames";
import Image from "next/image";

import { declOfNum, priceGvn } from "@/app/lib/helpers";
import {
  Card,
  Rating,
  Tag,
  Button,
  Divider,
  Review,
  ReviewForm,
} from "../../index";
import { ProductProps } from "./Product.props";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { motion } from "framer-motion";

const ProductComponent = (
  { product, className, ...props }: ProductProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: { opacity: 1, height: "auto" },
    hidden: { opacity: 0, height: 0 },
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    reviewRef.current?.focus();
  };

  return (
    <div className={className} ref={ref} {...props}>
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
          <span>
            <span className="visualy-hidden">price</span>
            {priceGvn(product.price)}
          </span>
          {product.oldPrice && (
            <Tag className={s.oldPrice} color="green">
              {priceGvn(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>

        <div className={s.credit}>
          <span>
            <span className="visualy-hidden">credit</span>
            {priceGvn(product.credit)}
          </span>
          <span className={s.month}>/mth</span>
        </div>

        <div className={s.rating}>
          <span className="visualy-hidden">
            {"rating" + product.reviewAvg ?? product.initialRating}
          </span>
          <Rating rating={product.reviewAvg ?? product.initialRating}></Rating>
        </div>

        <div className={s.tags}>
          {product.categories.map((c) => (
            <Tag className={s.category} key={c} color="ghost">
              {c}
            </Tag>
          ))}
        </div>

        <div className={s.priceTitle} aria-hidden>
          price
        </div>
        <div className={s.creditTitle} aria-hidden>
          credit
        </div>
        <div className={s.rateTitle}>
          <a href="#ref" onClick={scrollToReview}>
            {product.reviewCount}{" "}
            {/* {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])} */}
            {declOfNum(product.reviewCount, ["review", "reviews", "reviews"])}
          </a>
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
            Get more
          </Button>
          <Button
            appearance="ghost"
            arrow={isReviewOpened ? "down" : "right"}
            className={s.reviewBtn}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
            aria-expanded={isReviewOpened}
          >
            Reviews
          </Button>
        </div>
      </Card>

      <motion.div
        animate={isReviewOpened ? "visible" : "hidden"}
        variants={variants}
        initial="hidden"
      >
        <Card
          color="blue"
          className={s.reviews}
          ref={reviewRef}
          tabIndex={isReviewOpened ? 0 : -1}
        >
          {product.reviews.map((r) => (
            <div key={r._id}>
              <Review review={r} />
              <Divider />
            </div>
          ))}
          <ReviewForm isOpened={isReviewOpened} productId={product._id} />
        </Card>
      </motion.div>
    </div>
  );
};

export const Product = motion(forwardRef(ProductComponent));
