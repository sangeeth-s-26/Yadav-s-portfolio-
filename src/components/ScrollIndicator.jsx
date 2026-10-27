import React from 'react';

const ScrollIndicator = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToAbout}
      className="btn btn-link text-decoration-none text-slate-500 d-inline-flex align-items-center gap-2 font-monospace px-3 py-2 rounded-pill hover-text-primary transition-all cursor-pointer border-0 bg-transparent"
      style={{ fontSize: '0.78rem', letterSpacing: '1px' }}
    >
      <span className="fw-semibold">SCROLL TO EXPLORE</span>
      <i className="bi bi-arrow-down animate-bounce text-primary fs-6"></i>
    </button>
  );
};

export default ScrollIndicator;
