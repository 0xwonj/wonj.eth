'use client';

import React, { useEffect, useState } from 'react';

import TableOfContents from './TableOfContents';

const HeadingsFetcher = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const excludeClasses = [
      '-cbwsdk-connect-item-title',
      '-cbwsdk-try-extension-heading',
      '-cbwsdk-connect-content-heading',
    ];

    const headingsInDocument = Array.from(
      document.querySelectorAll('h2, h3, h4, h5, h6')
    )
      .filter(
        heading =>
          !excludeClasses.some(excludeClass =>
            heading.classList.contains(excludeClass)
          )
      )
      .map(heading => ({
        id: heading.id,
        text: heading.innerText,
        level: parseInt(heading.tagName[1], 10), // 'H2' -> 2
      }));

    setHeadings(headingsInDocument);
  }, []);

  return <TableOfContents headings={headings} />;
};

export default HeadingsFetcher;
