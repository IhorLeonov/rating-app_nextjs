import { TextAreaProps } from "./TextArea.props";
import s from "./TextArea.module.css";
import cn from "classnames";

export const TextArea = ({
  className,
  ...props
}: TextAreaProps): JSX.Element => {
  return <textarea className={cn(s.textarea, className)} {...props} />;
};
