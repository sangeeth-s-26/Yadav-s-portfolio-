import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="home"
      className="position-relative overflow-hidden text-white"
      style={{
        backgroundColor: '#25282D',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '3rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Background Architectural Render with Subtle Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(37, 40, 45, 0.95) 0%, rgba(37, 40, 45, 0.82) 50%, rgba(37, 40, 45, 0.70) 100%), url(${personalInfo.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.95,
          zIndex: 1,
        }}
      ></div>

      {/* Blueprint Grid Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          zIndex: 2,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="row align-items-center gy-5">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="col-lg-7 col-xl-8 animate-fade-in-up">
            {/* Top Category Badge */}
            <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill bg-dark border border-secondary text-orange" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', fontWeight: '700' }}>
              <i className="bi bi-compass-fill"></i>
              <span>PROFESSIONAL PORTFOLIO</span>
            </div>

            {/* Candidate Name */}
            <h1
              className="display-3 fw-bold text-white mb-2"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              {personalInfo.name.toUpperCase()}
            </h1>

            {/* Professional Title */}
            <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
              <span
                className="fs-4 fw-semibold text-orange"
                style={{ letterSpacing: '0.02em' }}
              >
                Civil Engineering
              </span>
              <span className="text-white-50 fs-5">|</span>
              <span
                className="fs-4 fw-semibold text-white"
                style={{ letterSpacing: '0.02em' }}
              >
                Interior & Exterior Designing
              </span>
            </div>

            {/* Introduction paragraph from PDF */}
            <p
              className="lead text-light mb-4 col-xl-11"
              style={{
                fontSize: '1.12rem',
                lineHeight: 1.7,
                color: '#E0E3E7',
                fontWeight: '400',
              }}
            >
              Passionate Civil Engineer with specialized expertise in Building Information
              Modeling (BIM), precision CAD drafting, and photorealistic 3D architectural visualization.
              Delivering accurate, functional, and visually compelling structural blueprints and modern design renders.
            </p>

            {/* Core Capability Pills */}
            <div className="d-flex flex-wrap gap-2 mb-5">
              {[
                'AutoCAD Drafting',
                'Revit BIM',
                '3ds Max Modeling',
                'V-Ray Rendering',
                'Lumion Visualization',
                'KPBR Sanction Drawings',
              ].map((skill, index) => (
                <span
                  key={index}
                  className="badge bg-secondary bg-opacity-25 text-white border border-secondary border-opacity-25 px-3 py-2 fw-normal"
                  style={{ fontSize: '0.82rem', letterSpacing: '0.03em' }}
                >
                  <i className="bi bi-check2 text-orange me-1"></i>
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <a href="#projects" className="btn btn-orange btn-lg px-4 py-3">
                <i className="bi bi-grid-3x3-gap-fill me-1"></i>
                View My Projects
              </a>
              <a href="#contact" className="btn btn-outline-white btn-lg px-4 py-3">
                <i className="bi bi-envelope-fill me-1"></i>
                Contact Me
              </a>
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link text-white text-decoration-none px-2 d-inline-flex align-items-center gap-2"
                style={{ fontSize: '0.95rem' }}
              >
                <i className="bi bi-download text-orange fs-5"></i>
                <span>Download PDF Portfolio</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Visual Highlight Card */}
          <div className="col-lg-5 col-xl-4 d-none d-lg-block">
            <div
              className="position-relative p-2 rounded-3 shadow-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                className="position-relative overflow-hidden rounded-2"
                style={{ height: '380px' }}
              >
                <img
                  src="/images/exterior/traditional_house_exterior.jpg"
                  alt="Architectural Visualization by Yadav Babu"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className="position-absolute bottom-0 start-0 end-0 p-3"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(37, 40, 45, 0.95), transparent)',
                  }}
                >
                  <span className="badge bg-orange text-white mb-1">
                    Featured Project
                  </span>
                  <h6 className="text-white mb-0 fw-bold">
                    Traditional Residence Exterior Render
                  </h6>
                  <small className="text-white-50">
                    3ds Max & V-Ray Visualization
                  </small>
                </div>
              </div>

              {/* Engineering Stats Box */}
              <div className="row g-2 mt-2 pt-1 text-center">
                <div className="col-4">
                  <div className="p-2 rounded bg-dark border border-secondary border-opacity-25">
                    <div className="fw-bold text-orange fs-5">25+</div>
                    <small className="text-white-50" style={{ fontSize: '0.72rem' }}>
                      Drawings & Renders
                    </small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2 rounded bg-dark border border-secondary border-opacity-25">
                    <div className="fw-bold text-orange fs-5">6</div>
                    <small className="text-white-50" style={{ fontSize: '0.72rem' }}>
                      Design Softwares
                    </small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2 rounded bg-dark border border-secondary border-opacity-25">
                    <div className="fw-bold text-orange fs-5">100%</div>
                    <small className="text-white-50" style={{ fontSize: '0.72rem' }}>
                      KPBR Compliant
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
