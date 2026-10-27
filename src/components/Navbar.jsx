import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const { personalInfo } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top custom-navbar ${
        isScrolled ? 'shadow-lg py-2' : 'py-3'
      }`}
    >
      <div className="container">
        {/* Brand */}
        <a
          href="#home"
          className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
        >
          <div
            className="d-flex align-items-center justify-content-center bg-orange text-white rounded-1"
            style={{ width: '36px', height: '36px', fontWeight: '800' }}
          >
            YB
          </div>
          <div className="d-flex flex-column">
            <span className="navbar-brand-text mb-0 leading-none">
              {personalInfo.brandName}
            </span>
            <span
              className="text-white-50 text-uppercase"
              style={{ fontSize: '0.68rem', letterSpacing: '0.12em', marginTop: '-2px' }}
            >
              Civil & Architectural Design
            </span>
          </div>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 text-white p-2"
          type="button"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          style={{ outline: 'none', boxShadow: 'none' }}
        >
          <i
            className={`bi ${isNavCollapsed ? 'bi-list' : 'bi-x-lg'} text-orange fs-3`}
          ></i>
        </button>

        {/* Nav Links */}
        <div
          className={`collapse navbar-collapse ${!isNavCollapsed ? 'show bg-charcoal p-3 p-lg-0 rounded mt-2 mt-lg-0' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1 gap-lg-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link nav-link-custom ${
                    activeSection === link.id ? 'active' : ''
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-orange px-3 py-2 text-white"
                style={{ fontSize: '0.82rem' }}
              >
                <i className="bi bi-file-earmark-pdf me-1"></i>
                Portfolio PDF
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
