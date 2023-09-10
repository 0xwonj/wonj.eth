import React, { FunctionComponent } from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./GiscusComponent.module.scss"; // SCSS 파일 import

const GiscusComponent: FunctionComponent = () => {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.giscusWrapper}>
      <Giscus
        id="comments"
        repo="wonj1012/wonj1012.github.io"
        repoId="R_kgDOKPQ1qg"
        category="Announcements"
        categoryId="DIC_kwDOKPQ1qs4CZFmv"
        mapping="pathname"
        term="Please leave your comment or question here."
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default GiscusComponent;
