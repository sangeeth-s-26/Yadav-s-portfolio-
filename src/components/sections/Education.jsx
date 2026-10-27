import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Diploma in Civil Engineering (Polytechnic)',
      institution: 'M DIT Polytechnic College',
      board: 'State Board of Technical Education, Kerala',
      year: null,
      yearPlaceholder: '[Add Year]',
      icon: 'bi-mortarboard-fill',
      highlight: 'Specialized Civil Engineering Technical Curriculum',
    },
    {
      degree: 'Higher Secondary (12th), State Board',
      institution: 'VHSE Koyilandi',
      board: 'State Board',
      year: null,
      yearPlaceholder: '[Add Year]',
      icon: 'bi-journal-bookmark-fill',
      highlight: 'Vocational Higher Secondary Education',
    },
  ];

  return (
    <section id="education" className="py-5 bg-white border-top border-bottom border-slate-100">
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="section-tag">
            <i className="bi bi-book"></i> ACADEMIC QUALIFICATIONS
          </div>
          <h2 className="section-title">Education Background</h2>
          <p className="text-secondary fs-6">
            Formal Civil Engineering technical polytechnic diploma and secondary education background.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline-container">
              {educationData.map((edu, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot"></div>
                  <div className="engineering-card p-4">
                    <div className="engineering-card-accent"></div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <h4 className="fw-bold text-dark mb-0 fs-5 d-flex align-items-center gap-2">
                        <i className={`bi ${edu.icon} text-primary`}></i>
                        {edu.degree}
                      </h4>
                      <div>
                        {edu.year ? (
                          <span className="badge bg-light text-dark border px-3 py-1.5 font-monospace">
                            {edu.year}
                          </span>
                        ) : (
                          <span className="placeholder-badge">
                            <i className="bi bi-pencil-square me-1"></i>
                            Year: {edu.yearPlaceholder}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="fw-semibold text-slate-700 fs-6">{edu.institution}</div>
                      <small className="text-muted d-block">{edu.board}</small>
                    </div>

                    <div className="p-2.5 px-3 bg-light rounded-3 border d-flex align-items-center gap-2">
                      <i className="bi bi-award-fill text-warning"></i>
                      <span className="small text-slate-700 fw-medium">{edu.highlight}</span>
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

export default Education;
