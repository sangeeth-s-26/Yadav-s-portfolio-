import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'BIM Architecture & Design Suites',
      institute: 'Planners Group Calicut',
      year: null,
      yearPlaceholder: '[Add Year]',
      icon: 'bi-award',
      badge: 'BIM Certified',
      topics: 'Autodesk Revit, BIM Standards, 3D Architectural Modeling',
    },
    {
      title: 'Interior and Exterior Design Certification',
      institute: null,
      institutePlaceholder: '[Add Issuing Institute]',
      year: null,
      yearPlaceholder: '[Add Year]',
      icon: 'bi-palette',
      badge: 'Design Suite',
      topics: '3ds Max, Lumion Rendering, V-Ray Architectural Visualization',
    },
  ];

  return (
    <section id="certifications" className="py-5 bg-blueprint-grid">
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="section-tag">
            <i className="bi bi-patch-check"></i> CERTIFICATIONS & CREDENTIALS
          </div>
          <h2 className="section-title">Professional Certifications</h2>
          <p className="text-secondary fs-6">
            Specialized training certificates in BIM architecture, CAD modeling, and exterior/interior visualization.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {certifications.map((cert, idx) => (
            <div className="col-md-6 col-lg-5" key={idx}>
              <div className="engineering-card h-100 p-4 d-flex flex-column">
                <div className="engineering-card-accent"></div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white"
                    style={{ width: '48px', height: '48px', backgroundColor: '#0284c7' }}
                  >
                    <i className={`bi ${cert.icon} fs-4`}></i>
                  </div>
                  <span className="badge bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 font-monospace">
                    {cert.badge}
                  </span>
                </div>

                <h4 className="fw-bold text-dark mb-2 fs-5">{cert.title}</h4>

                <div className="mb-3">
                  <small className="text-muted d-block font-monospace">Issuing Institute:</small>
                  {cert.institute ? (
                    <span className="fw-bold text-slate-700">{cert.institute}</span>
                  ) : (
                    <span className="placeholder-badge me-2">
                      <i className="bi bi-pencil-square me-1"></i>
                      Institute: {cert.institutePlaceholder}
                    </span>
                  )}
                </div>

                <div className="p-3 bg-light rounded-3 border mb-4 flex-grow-1">
                  <small className="text-muted d-block mb-1">Key Training Scope:</small>
                  <span className="small text-slate-700 fw-medium">{cert.topics}</span>
                </div>

                <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                  <small className="text-muted font-monospace">Completion Year:</small>
                  {cert.year ? (
                    <span className="badge bg-light text-dark border font-monospace">{cert.year}</span>
                  ) : (
                    <span className="placeholder-badge">
                      <i className="bi bi-pencil-square me-1"></i>
                      Year: {cert.yearPlaceholder}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
