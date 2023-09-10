import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { AnnouncementData } from "./types";

import styles from "./Announcement.module.scss";

export interface AnnouncementProps extends AnnouncementData {}

export const Announcement: FunctionComponent<AnnouncementProps> = ({
  text,
  date,
  link,
}) => {
  const handleOnClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div
      className={clsx(styles.announcementRow)}
      onClick={handleOnClick}
      style={{ cursor: link ? "pointer" : "default" }}
    >
      <span className={clsx(styles.announcementText)}>
        {link ? <a href={link}>{text}</a> : text}
      </span>
      <span className={clsx(styles.announcementDate)}>{date}</span>
    </div>
  );
};
