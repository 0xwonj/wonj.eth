import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { AnnouncementData } from "./types";
import { Announcement } from "./Announcement";

import styles from "./AnnouncementList.module.scss";

interface AnnouncementListProps {
  announcements: AnnouncementData[];
}

const AnnouncementList: FunctionComponent<AnnouncementListProps> = ({
  announcements,
}) => {
  return (
    <div className={clsx(styles.announcementList)}>
      {announcements.map((announcement) => (
        <Announcement key={announcement.id} {...announcement} />
      ))}
    </div>
  );
};

export default AnnouncementList;
