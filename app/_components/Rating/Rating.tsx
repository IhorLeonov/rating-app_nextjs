"use client";
import { useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import s from "./Rating.module.css";
import cn from "classnames";
import StarSvg from "../../_lib/icons/star.svg";

export const Rating = ({
  isEditable = false,
  // setRating,
  // rating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

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
        >
          <StarSvg
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(idx + 1, e)
            }
          />
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

  const handleSpace = (idx: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== "Space" || !setRating) return;
    setRating(idx);
  };
  return (
    <div {...props}>
      {ratingArr.map((icon, idx) => (
        <span key={idx}>{icon}</span>
      ))}
    </div>
  );
};
