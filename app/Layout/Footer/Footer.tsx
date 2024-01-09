import { FooterProps } from "./Footer.props";
import s from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(s.p, className, s.footer)} {...props}>
      <p>TopRate © 2023 - {format(new Date(), "yyyy")} Все права защищены</p>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
