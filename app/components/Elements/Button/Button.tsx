import s from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import ArrowSvg from "../../../public/arrow.svg";

export const Button = ({
  children,
  arrow = "none",
  appearance,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: appearance === "primary",
        [s.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span className={cn(s.arrow, { [s.down]: arrow === "down" })}>
          <ArrowSvg className={s.svg} height={10} />
        </span>
      )}
    </button>
  );
};
