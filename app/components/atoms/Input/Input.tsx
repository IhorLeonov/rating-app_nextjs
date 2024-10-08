import s from "./Input.module.css";
import cn from "classnames";

import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";

const InputComponent = (
  { className, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  return (
    <div className={cn(s.inputWrapper, className)}>
      <input
        className={cn(s.input, {
          [s.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && (
        <span role="alert" className={s.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export const Input = forwardRef(InputComponent);
