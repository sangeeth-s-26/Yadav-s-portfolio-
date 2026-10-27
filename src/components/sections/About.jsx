import React from 'react';

const About = () => {
  const highlights = [
    { title: 'Civil Engineering Diploma Background', icon: 'bi-mortarboard' },
    { title: 'BIM & CAD Training Experience', icon: 'bi-diagram-3' },
    { title: '2D & 3D Architectural & Structural Design', icon: 'bi-layers' },
    { title: 'Construction Drawing', icon: 'bi-pencil-ruler' },
    { title: 'Quantity Estimation', icon: 'bi-calculator' },
    { title: 'Site Execution', icon: 'bi-hammer' },
    { title: 'Construction Planning', icon: 'bi-calendar-check' },
    { title: 'Progress Monitoring', icon: 'bi-activity' },
  ];

  return (
    <section id="about" className="py-5 bg-white border-top border-bottom border-slate-100">
      <div className="container py-4">
        <div className="row align-items-center gy-4">
          {/* Left Column: Summary & Background */}
          <div className="col-lg-6">
            <div className="section-tag">
              <i className="bi bi-person-lines-fill"></i> ABOUT ME
            </div>
            <h2 className="section-title">
              Civil Diploma Graduate & Junior BIM Engineer
            </h2>
            <p className="lead text-secondary mb-3 fs-6">
              I am a motivated Civil Engineering diploma graduate with practical exposure to Building Information Modeling (BIM), Computer-Aided Design (CAD), architectural drafting, structural design, and hands-on site execution.
            </p>
            <p className="text-slate-600 mb-4 fs-6">
              My hands-on experience includes working at <strong>Planners Group Calicut</strong> (BIM & CAD Training Center) developing professional 2D/3D architectural and structural designs, and interning at <strong>ULCCS (Uralungal Labour Contract Co-operative Society)</strong> on the NH-66 highway construction project.
            </p>

            {/* Profile Quick Details Grid */}
            <div className="bg-light p-3 rounded-3 border mb-4">
              <div className="row g-3">
                <div className="col-6">
                  <span className="text-muted d-block small">Full Name:</span>
                  <span className="fw-bold text-dark">Yadav Babu MK</span>
                </div>
                <div className="col-6">
                  <span className="text-muted d-block small">Role:</span>
                  <span className="fw-bold text-primary">Junior BIM Engineer</span>
                </div>
                <div className="col-6">
                  <span className="text-muted d-block small">Qualification:</span>
                  <span className="fw-bold text-dark">Diploma in Civil Engineering</span>
                </div>
                <div className="col-6">
                  <span className="text-muted d-block small">Location:</span>
                  <span className="fw-bold text-dark">Kozhikode, Kerala, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Competencies Cards */}
          <div className="col-lg-6">
            <div className="p-4 bg-blueprint-grid rounded-4 border">
              <h5 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-check2-square text-primary fs-4"></i>
                Core Areas of Expertise
              </h5>
              <div className="row g-3">
                {highlights.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="p-3 bg-white rounded-3 border shadow-sm d-flex align-items-center gap-3 h-100">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-2 bg-primary/10 text-primary flex-shrink-0"
                        style={{ width: '40px', height: '40px', backgroundColor: 'rgba(2, 132, 199, 0.1)', color: '#0284c7' }}
                      >
                        <i className={`bi ${item.icon} fs-5`}></i>
                      </div>
                      <span className="fw-semibold text-dark fs-6" style={{ fontSize: '0.9rem' }}>
                        {item.title}
                      </span>
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

export default About;
