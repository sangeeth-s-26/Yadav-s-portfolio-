import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-5 bg-light-gray">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="badge-technical mb-2">
            <i className="bi bi-mortarboard-fill text-orange"></i>
            <span>Academic Background</span>
          </div>
          <h2 className="display-6 fw-bold text-charcoal mb-3">Education</h2>
          <p className="text-muted col-lg-6 mx-auto mb-3">
            Formal technical qualification in Civil Engineering and specialized diploma in
            Interior & Exterior Architectural Designing.
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

        {/* Timeline Container */}
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="timeline-stem">
              {education.map((item, index) => (
                <div className="timeline-card" key={index}>
                  {/* Timeline Dot Indicator */}
                  <div className="timeline-marker"></div>

                  <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                    <div>
                      <span
                        className="badge bg-orange text-white mb-2 px-3 py-1"
                        style={{ fontSize: '0.8rem', letterSpacing: '0.04em' }}
                      >
                        {item.duration}
                      </span>
                      <h4 className="h5 fw-bold text-charcoal mb-1">
                        {item.degree}
                      </h4>
                      <div className="d-flex align-items-center gap-2 text-secondary mb-2">
                        <i className="bi bi-building text-orange"></i>
                        <span className="fw-semibold text-charcoal">
                          {item.institution}
                        </span>
                      </div>
                    </div>
                    <span
                      className="badge bg-light text-charcoal border px-2 py-1"
                      style={{ fontSize: '0.75rem' }}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                    {item.description}
                  </p>

                  {/* Core Subjects / Focus */}
                  <div className="d-flex flex-wrap gap-2 pt-2 border-top border-light">
                    {item.subjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="badge bg-light-gray text-charcoal border px-2 py-1"
                        style={{ fontSize: '0.75rem', fontWeight: '500' }}
                      >
                        <i className="bi bi-dot text-orange"></i>
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
