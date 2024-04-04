import { CardProps } from "./Card.props";
import s from "./Card.module.css";
import cn from "classnames";

export const Card = ({
  children,
  color = "white",
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(s.card, className, { [s.blue]: color === "blue" })}
      {...props}
    >
      {children}
    </div>
  );
};
