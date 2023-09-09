import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Notice.module.scss";

interface NoticeProps {
  text: string;
  link: string;
}

export const Notice: FunctionComponent<NoticeProps> = ({ text, link }) => (
  <div className={clsx(styles.notice)}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </div>
);
