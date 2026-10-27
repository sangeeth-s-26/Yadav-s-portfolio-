import React from 'react';
import { portfolioData } from '../data/portfolioData';

function WhyChooseMe() {
  const { whyChooseMe } = portfolioData;

  return (
    <section id="why-choose-me" className="py-5 bg-light-gray">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="badge-technical mb-2">
            <i className="bi bi-shield-check text-orange"></i>
            <span>Professional Strengths</span>
          </div>
          <h2 className="display-6 fw-bold text-charcoal mb-3">Why Choose Me</h2>
          <p className="text-muted col-lg-6 mx-auto mb-3">
            Grounded capabilities combining formal civil engineering education, rigorous CAD drafting,
            and creative interior/exterior architectural visualization.
          </p>
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

        {/* 5 Feature Cards Grid */}
        <div className="row g-4 justify-content-center">
          {whyChooseMe.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="feature-card">
                <div className="feature-icon-box">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 className="fw-bold text-charcoal mb-2">
                  {item.title}
                </h5>
                <p className="text-muted small mb-0" style={{ lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Call-to-action Card */}
          <div className="col-md-6 col-lg-4">
            <div
              className="p-4 rounded-3 h-100 d-flex flex-column justify-content-between text-white"
              style={{
                backgroundColor: '#25282D',
                border: '2px dashed #F28C28',
              }}
            >
              <div>
                <span className="badge bg-orange text-white mb-2">
                  READY TO CONTRIBUTE
                </span>
                <h5 className="fw-bold text-white mb-2">
                  Seeking Entry-Level Roles & Projects
                </h5>
                <p className="text-white-50 small mb-3">
                  Eager to apply technical drafting, BIM modeling, and 3D architectural visualization skills to dynamic engineering teams and client projects.
                </p>
              </div>
              <a href="#contact" className="btn btn-orange w-100 py-2">
                <i className="bi bi-send-fill me-1"></i>
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMe;
