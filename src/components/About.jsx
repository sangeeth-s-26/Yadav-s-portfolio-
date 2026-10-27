import React from 'react';
import { portfolioData } from '../data/portfolioData';

function About() {
  const { personalInfo, about } = portfolioData;

  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="badge-technical mb-2">
            <i className="bi bi-person-badge text-orange"></i>
            <span>Professional Profile</span>
          </div>
          <h2 className="display-6 fw-bold text-charcoal mb-3">About Me</h2>
          <div
            className="mx-auto"
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#F28C28',
              borderRadius: '2px',
            }}
          ></div>
        </div>

        <div className="row align-items-center gy-5">
          {/* Left Column: Authentic Portrait from PDF */}
          <div className="col-lg-5 col-xl-4 text-center">
            <div className="position-relative d-inline-block">
              {/* Decorative Frame */}
              <div
                className="position-absolute"
                style={{
                  top: '-12px',
                  left: '-12px',
                  width: '100%',
                  height: '100%',
                  border: '3px solid #F28C28',
                  borderRadius: '16px',
                  zIndex: 0,
                }}
              ></div>

              {/* Candidate Image */}
              <div
                className="position-relative overflow-hidden rounded-4 shadow-lg"
                style={{
                  width: '100%',
                  maxWidth: '340px',
                  height: '440px',
                  backgroundColor: '#F1F3F5',
                  zIndex: 1,
                }}
              >
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Status Badge */}
              <div
                className="position-absolute bottom-0 start-50 translate-middle-x mb-n2 bg-charcoal text-white px-3 py-2 rounded-pill shadow d-flex align-items-center gap-2 border border-secondary border-opacity-50"
                style={{ zIndex: 2, whiteSpace: 'nowrap' }}
              >
                <span
                  className="rounded-circle bg-orange"
                  style={{ width: '10px', height: '10px' }}
                ></span>
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>
                  Civil Engineer & Designer
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Competencies */}
          <div className="col-lg-7 col-xl-8">
            <div className="ps-lg-4">
              <h3 className="h4 fw-bold text-charcoal mb-3">
                {about.heading}
              </h3>

              {/* Biography strictly from PDF */}
              <p
                className="lead mb-4"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#343A40',
                }}
              >
                {about.biography}
              </p>

              {/* Core Strengths Grid */}
              <div className="row g-3 mb-4">
                {about.coreStrengths.map((strength, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div
                      className="p-3 rounded-3 h-100 border"
                      style={{
                        backgroundColor: '#F1F3F5',
                        borderColor: '#DEE2E6',
                      }}
                    >
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <i className="bi bi-check-circle-fill text-orange fs-5"></i>
                        <h6 className="mb-0 fw-bold text-charcoal">
                          {strength.title}
                        </h6>
                      </div>
                      <p
                        className="mb-0 small text-muted"
                        style={{ lineHeight: 1.5 }}
                      >
                        {strength.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Info Strip */}
              <div
                className="p-3 rounded-3 border d-flex flex-wrap justify-content-between align-items-center gap-3"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E2E8F0',
                  boxShadow: '0 4px 12px rgba(37,40,45,0.04)',
                }}
              >
                <div>
                  <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>
                    QUALIFICATIONS
                  </small>
                  <span className="fw-semibold text-charcoal" style={{ fontSize: '0.9rem' }}>
                    Diploma in Civil Eng. & Diploma in Design
                  </span>
                </div>
                <div>
                  <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>
                    BASE LOCATION
                  </small>
                  <span className="fw-semibold text-charcoal" style={{ fontSize: '0.9rem' }}>
                    {personalInfo.location}
                  </span>
                </div>
                <div>
                  <a
                    href="#contact"
                    className="btn btn-sm btn-orange px-3 py-2 text-white"
                  >
                    <i className="bi bi-chat-dots-fill me-1"></i>
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
