"use client";

import { useScrollY } from "@/app/hooks/useScrollY";
import s from "./Up.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "@/app/components";

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });

    return () => {};
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div className={s.up} animate={controls} initial={{ opacity: 0 }}>
      <ButtonIcon onClick={scrollToTop} appearance="primary" icon="up" />
    </motion.div>
  );
};
