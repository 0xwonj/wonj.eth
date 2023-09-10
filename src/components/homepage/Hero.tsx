import clsx from "clsx";
import React, { FunctionComponent, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import styles from "./Hero.module.scss";
import { Notice } from "./Notice";

export const Hero: FunctionComponent = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [subtitleText, setSubtitleText] = useState("👻");

  const toggleAnimation = () => {
    setShowAnimation(!showAnimation);
    setSubtitleText(showAnimation ? "👻 Blockchain Developer" : "👻");
  };

  return (
    <header className={clsx(styles.heroBanner)}>
      <Notice />

      <div className={clsx(styles.playStopButton)} onClick={toggleAnimation}>
        {showAnimation ? "⏸" : "▶️"}
      </div>
      <h1 className={clsx(styles.title)}>
        {showAnimation ? (
          <TypeAnimation
            sequence={[
              "Wonjae Choi",
              3000,
              "Blockchain\nDeveloper",
              1250,
              "Blockchain\nEngineer",
              1250,
              "Blockchain\nResearcher",
              2000,
            ]}
            wrapper="span"
            speed={30}
            style={{
              whiteSpace: "pre-line",
              fontSize: "1em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        ) : (
          <span>Wonjae Choi</span>
        )}
      </h1>
      <p className={clsx(styles.subtitle)}>{subtitleText}</p>
    </header>
  );
};
