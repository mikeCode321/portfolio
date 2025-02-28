// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css'; // Optional: If you have separate styles for the button

const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > (window.innerHeight / 4)) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const footerElement = document.querySelector('footer');
    if (footerElement) {
      setFooterHeight(footerElement.clientHeight);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isScrolled && (
      <button
        className={`scroll-to-top ${isScrolled ? 'show' : ''}`}
        style={{ bottom: footerHeight + 20 }} // Adjust position based on footer height
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
