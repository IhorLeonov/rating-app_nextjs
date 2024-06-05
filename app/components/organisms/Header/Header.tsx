import { HeaderProps } from "./Header.props";
// import s from "./Header.module.css";
import cn from "classnames";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, {})} {...props}>
      Header
    </header>
  );
};
