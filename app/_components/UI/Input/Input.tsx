import { InputProps } from "./Input.props";
import s from "./Input.module.css";
import cn from "classnames";

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return (
    <input className={cn(s.input, className)} {...props} placeholder="Имя" />
  );
};
