"use client";

import s from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "../../../lib/icons/star.svg";

import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  useRef,
} from "react";
import { RatingProps } from "./Rating.props";

const RatingComponent = (
  {
    isEditable = false,
    setRating,
    rating = 0,
    error,
    className,
    tabIndex,
    ...props
  }: RatingProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, tabIndex]);

  const computeFocus = (r: number, idx: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && idx == 0) {
      return tabIndex ?? 0;
    }
    if (r == idx + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };

  const constructRating = (currentRating: number) => {
    const updatedArr = ratingArr.map((r: JSX.Element, idx: number) => {
      return (
        <span
          key={idx}
          className={cn(s.star, className, {
            [s.filled]: idx < currentRating,
            [s.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(idx + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(idx + 1)}
          tabIndex={computeFocus(rating, idx)}
          onKeyDown={handleKey}
          ref={(r) => ratingArrayRef.current?.push(r)}
          role={isEditable ? "slider" : ""}
          aria-invalid={!!error}
          aria-valuenow={rating}
          aria-valuemax={5}
          aria-label={isEditable ? "Put rating" : "rating" + rating}
          aria-valuemin={1}
        >
          <StarIcon />
        </span>
      );
    });
    setRatingArr(updatedArr);
  };

  const changeDisplay = (idx: number) => {
    if (!isEditable) return;
    constructRating(idx);
  };

  const onClick = (idx: number) => {
    if (!isEditable || !setRating) return;
    setRating(idx);
  };

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (e.code == "ArrowRight" || e.code == "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  return (
    <div
      className={cn(s.ratingWrapper, {
        [s.error]: error,
      })}
      ref={ref}
      {...props}
    >
      {ratingArr.map((icon, idx) => (
        <span key={idx}>{icon}</span>
      ))}
      {error && (
        <span role="alert" className={s.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export const Rating = forwardRef(RatingComponent);
