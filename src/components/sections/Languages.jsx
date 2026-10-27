import React from 'react';

const Languages = () => {
  const languages = [
    {
      name: 'English',
      type: 'Professional Proficiency',
      icon: 'bi-translate',
      badgeClass: 'bg-primary',
    },
    {
      name: 'Malayalam',
      type: 'Native / Mother Tongue',
      icon: 'bi-chat-quote',
      badgeClass: 'bg-dark',
    },
  ];

  return (
    <section className="py-4 bg-blueprint-grid">
      <div className="container py-3">
        <div className="p-4 bg-white rounded-4 border shadow-sm">
          <div className="row align-items-center gy-3">
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white"
                  style={{ width: '48px', height: '48px', backgroundColor: '#0284c7' }}
                >
                  <i className="bi bi-globe-americas fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-0 text-dark">Languages</h5>
                  <small className="text-muted">Communication Proficiency</small>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="d-flex flex-wrap gap-3 justify-content-md-end">
                {languages.map((lang, idx) => (
                  <div className="p-3 bg-light rounded-3 border d-flex align-items-center gap-3" key={idx}>
                    <i className={`bi ${lang.icon} text-primary fs-5`}></i>
                    <div>
                      <span className="fw-bold text-dark d-block me-2">{lang.name}</span>
                      <small className="text-muted">{lang.type}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
