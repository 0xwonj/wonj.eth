import React, { FunctionComponent } from "react";
import styles from "./Experience.module.scss";

export interface ExperienceProps {
  position: string;
  company: string;
  duration: string;
  description: React.ReactNode;
}

const Experience: FunctionComponent<ExperienceProps> = ({
  position,
  company,
  duration,
  description,
}) => {
  return (
    <div className={styles.experienceContainer}>
      <h3 className={styles.title}>
        {position} at {company}
      </h3>
      <p className={styles.duration}>{duration}</p>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Experience;
