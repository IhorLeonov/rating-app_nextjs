import { CardProps } from "./Card.props";
import s from "./Card.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

const CardComponent = (
  { children, color = "white", className, ...props }: CardProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  return (
    <div
      className={cn(s.card, className, { [s.blue]: color === "blue" })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

export const Card = forwardRef(CardComponent);
