'use client';

import React, { useEffect, useRef } from 'react';

const Comments = () => {
  const ref = useRef();

  useEffect(() => {
    const scriptId = 'utterances-script';
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;

    const config = {
      src: 'https://utteranc.es/client.js',
      repo: 'wonj1012/comments',
      'issue-term': 'pathname',
      theme: 'dark-blue',
      crossOrigin: 'anonymous',
      defer: true,
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
};

export default Comments;
