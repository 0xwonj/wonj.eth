import React, { FunctionComponent } from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import styles from "./AboutMe.module.scss";

export interface AboutMeProps {
  avatar: string;
  descriptionComponent: React.ReactNode;
}

export const AboutMe: FunctionComponent<AboutMeProps> = ({
  avatar,
  descriptionComponent,
}) => {
  return (
    <div className={clsx("margin-top--lg", styles.aboutMeContainer)}>
      <h2 className={styles.title}>About me</h2>
      <div className={styles.contentRow}>
        <div className={styles.textContent}>{descriptionComponent}</div>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            <Image img={avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};
