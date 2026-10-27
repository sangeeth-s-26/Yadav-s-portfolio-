import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Footer() {
  const { personalInfo, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white py-5"
      style={{
        backgroundColor: '#25282D',
        borderTop: '3px solid #F28C28',
      }}
    >
      <div className="container py-3">
        <div className="row gy-4 justify-content-between">
          {/* Brand & Designation */}
          <div className="col-lg-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="d-flex align-items-center justify-content-center bg-orange text-white rounded-1"
                style={{ width: '38px', height: '38px', fontWeight: '800' }}
              >
                YB
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-white" style={{ letterSpacing: '0.04em' }}>
                  {personalInfo.brandName}
                </h4>
                <small className="text-orange fw-semibold" style={{ letterSpacing: '0.06em' }}>
                  CIVIL ENGINEERING & DESIGN
                </small>
              </div>
            </div>

            <p className="text-white-50 small mb-3 col-xl-10" style={{ lineHeight: 1.7 }}>
              Professional Civil Engineering graduate and Interior & Exterior Designer specializing
              in Building Information Modeling (BIM), municipal sanction drawings, and 3D architectural visualization.
            </p>

            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-dark border border-secondary border-opacity-50 text-orange px-3 py-1">
                AutoCAD
              </span>
              <span className="badge bg-dark border border-secondary border-opacity-50 text-orange px-3 py-1">
                Revit BIM
              </span>
              <span className="badge bg-dark border border-secondary border-opacity-50 text-orange px-3 py-1">
                3ds Max
              </span>
              <span className="badge bg-dark border border-secondary border-opacity-50 text-orange px-3 py-1">
                V-Ray
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-sm-6 col-lg-3">
            <h6 className="fw-bold text-white text-uppercase mb-3" style={{ letterSpacing: '0.08em' }}>
              Quick Navigation
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '0.9rem' }}>
              <li>
                <a href="#home" className="text-white-50 text-decoration-none hover-orange">
                  <i className="bi bi-chevron-right text-orange me-1"></i> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white-50 text-decoration-none hover-orange">
                  <i className="bi bi-chevron-right text-orange me-1"></i> About Me
                </a>
              </li>
              <li>
                <a href="#education" className="text-white-50 text-decoration-none hover-orange">
                  <i className="bi bi-chevron-right text-orange me-1"></i> Education
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white-50 text-decoration-none hover-orange">
                  <i className="bi bi-chevron-right text-orange me-1"></i> Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white-50 text-decoration-none hover-orange">
                  <i className="bi bi-chevron-right text-orange me-1"></i> Projects Portfolio
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white-50 text-decoration-none hover-orange">
                  <i className="bi bi-chevron-right text-orange me-1"></i> Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white-50 text-decoration-none hover-orange">
                  <i className="bi bi-chevron-right text-orange me-1"></i> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="col-sm-6 col-lg-4">
            <h6 className="fw-bold text-white text-uppercase mb-3" style={{ letterSpacing: '0.08em' }}>
              Contact Details
            </h6>
            <div className="d-flex flex-column gap-2 small text-white-50 mb-3">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-person-fill text-orange"></i>
                <span className="text-white">{contact.fullName}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-orange"></i>
                <a href={`mailto:${contact.email}`} className="text-white-50 text-decoration-none">
                  {contact.email}
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-orange"></i>
                <a href={`tel:${contact.phone}`} className="text-white-50 text-decoration-none">
                  {contact.phoneDisplay}
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-orange"></i>
                <span>{contact.location}</span>
              </div>
            </div>

            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-orange text-white px-3 py-2"
            >
              <i className="bi bi-file-earmark-arrow-down-fill me-1"></i>
              View Official Portfolio PDF
            </a>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-4 mt-4 border-top border-secondary border-opacity-25 d-flex flex-wrap justify-content-between align-items-center gap-2">
          <small className="text-white-50" style={{ fontSize: '0.82rem' }}>
            © {currentYear} <strong>Yadav Babu MK</strong>. All Rights Reserved. Professional Civil Engineering Portfolio.
          </small>
          <small className="text-white-50" style={{ fontSize: '0.82rem' }}>
            Built with React.js, Vite & Bootstrap 5
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
