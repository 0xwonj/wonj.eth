import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx(styles.heroBanner)}>
      <h1 className={clsx(styles.title)}>
        <span>Wonjae Choi</span>
      </h1>
      <p className={clsx(styles.subtitle)}>👻 Blockchain Developer</p>
    </header>
  );
};
