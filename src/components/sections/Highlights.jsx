import React from 'react';

const Highlights = () => {
  const highlights = [
    {
      title: 'BIM & CAD Exposure',
      icon: 'bi-boxes',
      description: 'Hands-on practical training in Building Information Modeling and AutoCAD drafting principles.',
    },
    {
      title: '2D & 3D Design',
      icon: 'bi-layers-half',
      description: 'Development of 2D architectural blueprints, structural sections, and 3D realistic visualizations.',
    },
    {
      title: 'Construction Planning',
      icon: 'bi-calendar3-range',
      description: 'Assisting in project scheduling, workflow planning, and on-site task allocation.',
    },
    {
      title: 'Site Execution',
      icon: 'bi-hammer',
      description: 'On-site experience observing concrete work, structural assembly, and civil engineering processes.',
    },
    {
      title: 'Progress Monitoring',
      icon: 'bi-speedometer2',
      description: 'Tracking daily site milestones and verifying physical work against detailed structural blueprints.',
    },
    {
      title: 'Highway Project Exposure',
      icon: 'bi-signpost-split-fill',
      description: 'Internship exposure on ULCCS 39 km six-lane NH-66 highway construction project stretch.',
    },
  ];

  return (
    <section className="py-5 bg-white border-top border-bottom border-slate-100">
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="section-tag">
            <i className="bi bi-star"></i> CORE CAPABILITIES
          </div>
          <h2 className="section-title">Professional Highlights</h2>
          <p className="text-secondary fs-6">
            Key professional highlights based strictly on verified training and internship experience.
          </p>
        </div>

        <div className="row g-4">
          {highlights.map((item, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="engineering-card p-4 h-100">
                <div className="engineering-card-accent"></div>
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white mb-3"
                  style={{ width: '46px', height: '46px', backgroundColor: '#0284c7' }}
                >
                  <i className={`bi ${item.icon} fs-4`}></i>
                </div>
                <h5 className="fw-bold text-dark mb-2 fs-6">{item.title}</h5>
                <p className="text-slate-600 small mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
