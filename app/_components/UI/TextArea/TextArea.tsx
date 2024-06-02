import { TextAreaProps } from "./TextArea.props";
import s from "./TextArea.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

const TextAreaComponent = (
  { className, error, ...props }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element => {
  return (
    <div className={cn(s.textareaWrapper, className)}>
      <textarea
        className={cn(s.textarea, {
          [s.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={s.errorMessage}>{error.message}</span>}
    </div>
  );
};

export const TextArea = forwardRef(TextAreaComponent);
