import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
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
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  );
}
