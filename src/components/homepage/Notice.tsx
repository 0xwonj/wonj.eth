import clsx from "clsx";
import React, { FunctionComponent, useEffect, useState } from "react";
import { AnnouncementData } from "../announcements/types";

import styles from "./Notice.module.scss";

export const Notice: FunctionComponent = () => {
  const [latestAnnouncement, setLatestAnnouncement] =
    useState<AnnouncementData | null>(null);

  useEffect(() => {
    import("../../pages/assets/announcements/announcements.json").then(
      (data) => {
        if (data.default && data.default.length > 0) {
          setLatestAnnouncement(data.default[0]);
        }
      },
    );
  }, []);

  if (!latestAnnouncement) return null;

  return (
    <div className={clsx(styles.notice)}>
      <a href={latestAnnouncement.link || "/announcements"}>
        {latestAnnouncement.text}
      </a>
    </div>
  );
};
