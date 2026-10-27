import React from 'react';
import BlueprintAnimation from '../BlueprintAnimation';
import ScrollIndicator from '../ScrollIndicator';

const Hero = ({ onDownloadResume }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-vh-100 d-flex flex-column justify-content-center position-relative bg-blueprint-grid pt-5 pb-3 overflow-hidden"
    >
      <div className="container my-auto pt-5">
        <div className="row align-items-center gy-5">
          {/* Left Side Content */}
          <div className="col-lg-6 z-2">
            <div className="pe-lg-3">
              {/* Heading */}
              <h1 className="display-3 fw-extrabold text-dark tracking-tight mb-1">
                YADAV BABU MK
              </h1>

              {/* Subheading Role */}
              <h2 className="h3 fw-bold text-primary mb-2">
                Junior BIM Engineer
              </h2>

              {/* Small Text */}
              <div className="badge bg-slate-900 text-info font-monospace fs-6 px-3 py-1.5 mb-3 fw-medium">
                Civil Engineering • BIM • CAD • 3D Visualization
              </div>

              {/* Description */}
              <p className="lead text-secondary mb-4 fs-6 fw-normal" style={{ maxWidth: '580px' }}>
                Civil Engineering diploma graduate with practical exposure to BIM, CAD, architectural and structural design, construction planning and site execution.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn btn-engineering-primary px-4 py-3"
                >
                  <i className="bi bi-kanban-fill me-1"></i>
                  View Projects
                </button>
                <button
                  onClick={onDownloadResume}
                  className="btn btn-engineering-outline px-4 py-3"
                >
                  <i className="bi bi-file-earmark-arrow-down me-1"></i>
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Right Side 3D Interactive Building Animation */}
          <div className="col-lg-6 position-relative">
            <BlueprintAnimation />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center pt-2 pb-1 z-2">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
