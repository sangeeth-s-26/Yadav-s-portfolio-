import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Planners Group Calicut — BIM & CAD Training Center',
      period: '08/2025 – Present',
      isCurrent: true,
      role: null, // missing role in resume -> placeholder
      rolePlaceholder: '[Add Job Title]',
      location: 'Calicut, Kerala',
      responsibilities: [
        'Develop 2D and 3D architectural and structural designs in line with professional drafting standards.',
        'Use Revit, 3ds Max and Lumion for modelling, rendering and design execution.',
      ],
      skillsUsed: ['Autodesk Revit', '3ds Max', 'Lumion', 'AutoCAD', '2D & 3D Drafting'],
    },
    {
      company: 'ULCCS — Uralungal Labour Contract Co-operative Society',
      period: null, // missing dates in resume -> placeholder
      periodPlaceholder: '[Add Internship Dates]',
      role: 'Intern',
      location: 'Kerala, India',
      responsibilities: [
        'Gained hands-on exposure to on-site construction processes.',
        'Assisted with on-site construction planning.',
        'Assisted with site execution.',
        'Assisted with daily progress monitoring against structural blueprints.',
      ],
      skillsUsed: ['Site Execution', 'Construction Planning', 'Progress Monitoring', 'Blueprint Inspection'],
    },
  ];

  return (
    <section id="experience" className="py-5 bg-white border-top border-bottom border-slate-100">
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="section-tag">
            <i className="bi bi-briefcase"></i> EXPERIENCE & INTERNSHIPS
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-secondary fs-6">
            Practical training experience in BIM/CAD design and hands-on site execution background.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline-container">
              {experiences.map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot"></div>

                  <div className="engineering-card p-4">
                    <div className="engineering-card-accent"></div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                      <div>
                        <h4 className="fw-bold text-dark mb-1 fs-5">
                          {exp.company}
                        </h4>
                        <div className="d-flex flex-wrap align-items-center gap-2">
                          {exp.role ? (
                            <span className="badge bg-primary px-3 py-1.5 fw-semibold fs-6">
                              {exp.role}
                            </span>
                          ) : (
                            <span className="placeholder-badge">
                              <i className="bi bi-pencil-square me-1"></i>
                              Role: {exp.rolePlaceholder}
                            </span>
                          )}
                          <span className="text-muted small">
                            <i className="bi bi-geo-alt me-1"></i>
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="text-end">
                        {exp.period ? (
                          <span className="badge bg-light text-dark border px-3 py-2 fw-bold font-monospace">
                            <i className="bi bi-calendar3 me-1 text-primary"></i>
                            {exp.period}
                          </span>
                        ) : (
                          <span className="placeholder-badge">
                            <i className="bi bi-calendar-event me-1"></i>
                            Dates: {exp.periodPlaceholder}
                          </span>
                        )}
                        {exp.isCurrent && (
                          <span className="badge bg-success ms-2 px-2.5 py-1.5">Current</span>
                        )}
                      </div>
                    </div>

                    <h6 className="fw-bold text-slate-700 mb-2 border-bottom pb-2">
                      Key Responsibilities & Contributions:
                    </h6>
                    <ul className="list-unstyled mb-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li className="d-flex align-items-start gap-2 mb-2 text-slate-600 fs-6" key={rIdx}>
                          <i className="bi bi-arrow-right-circle-fill text-primary mt-1 flex-shrink-0"></i>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="d-flex flex-wrap align-items-center gap-2 pt-2 border-top">
                      <small className="fw-bold text-muted me-1">Tools & Skills:</small>
                      {exp.skillsUsed.map((tool, tIdx) => (
                        <span key={tIdx} className="badge bg-slate-100 text-slate-700 border font-monospace px-2.5 py-1">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
