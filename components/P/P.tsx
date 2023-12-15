import { PProps } from "./P.props";
import s from "./P.module.css";
import cn from "classnames";

export const P = ({ children, size = "m", className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={cn(s.p, className, {
        [s.s]: size === "s",
        [s.m]: size === "m",
        [s.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
