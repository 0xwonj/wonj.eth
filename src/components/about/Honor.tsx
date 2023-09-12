import React, { FunctionComponent } from "react";
import styles from "./Honor.module.scss";

export interface HonorProps {
  title: string;
  issuer: string;
  date: string;
  description?: React.ReactNode;
}

const Honor: FunctionComponent<HonorProps> = ({
  title,
  issuer,
  date,
  description,
}) => {
  return (
    <div className={styles.honorContainer}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.issuerDate}>
        {issuer} - {date}
      </p>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
};

export default Honor;
