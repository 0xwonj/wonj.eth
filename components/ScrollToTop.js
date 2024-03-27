'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: '#3c82f6',
          color: 'white',
          borderRadius: '5px',
          border: '2px solid #2980b9',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          fontFamily: "'Press Start 2P', Sans Serif",
          fontSize: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 0 2.5px #fff',
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
