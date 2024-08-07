import s from "./ButtonIcon.module.css";
import { ButtonIconProps, icons } from "./ButtonIcon.props";
import cn from "classnames";

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];

  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: appearance === "primary",
        [s.white]: appearance === "white",
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};
