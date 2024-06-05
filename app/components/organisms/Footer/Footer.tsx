import { FooterProps } from "./Footer.props";
import s from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, s.footer)} {...props}>
      <p>Rate.top © 2023 - {format(new Date(), "yyyy")} All rights reserved</p>
      <a href="#" target="_blank">
        Terms of use
      </a>
      <a href="#" target="_blank">
        Privacy policy
      </a>
    </footer>
  );
};
