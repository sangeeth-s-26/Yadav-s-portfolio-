import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const { projectCategories, projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-5 bg-light-gray">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="badge-technical mb-2">
            <i className="bi bi-briefcase-fill text-orange"></i>
            <span>Engineering & Design Portfolio</span>
          </div>
          <h2 className="display-6 fw-bold text-charcoal mb-3">
            Projects Portfolio
          </h2>
          <p className="text-muted col-lg-7 mx-auto mb-3">
            Direct showcase of architectural blueprints, municipal sanction drawings, residential layouts,
            commercial complexes, sacred architecture, and 3D interior/exterior visualizations from the portfolio.
          </p>
          <div
            className="mx-auto mb-4"
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#F28C28',
              borderRadius: '2px',
            }}
          ></div>

          {/* Category Filter Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-filter-btn ${
                  selectedCategory === cat ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
                <span
                  className="badge ms-2"
                  style={{
                    backgroundColor:
                      selectedCategory === cat
                        ? '#F28C28'
                        : 'rgba(37, 40, 45, 0.1)',
                    color: selectedCategory === cat ? '#FFFFFF' : '#343A40',
                    fontSize: '0.7rem',
                  }}
                >
                  {cat === 'All'
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Projects Grid: 3 cards desktop, 2 tablet, 1 mobile */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="project-card">
                {/* Project Image Box */}
                <div className="project-card-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                    loading="lazy"
                  />
                  <div className="project-category-tag">
                    {project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                  <div>
                    <h5 className="fw-bold text-charcoal mb-1">
                      {project.title}
                    </h5>
                    <p
                      className="text-orange fw-semibold small mb-2"
                      style={{ fontSize: '0.82rem' }}
                    >
                      {project.subtitle}
                    </p>
                    <p
                      className="text-muted small mb-3"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-2 border-top border-light mt-auto">
                    <button
                      type="button"
                      className="btn btn-sm btn-orange w-100 py-2"
                      onClick={() => setActiveProject(project)}
                    >
                      <i className="bi bi-arrows-fullscreen me-1"></i>
                      View Project Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Project Details & Full High-Resolution Sheet */}
        {activeProject && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{
              backgroundColor: 'rgba(28, 30, 34, 0.85)',
              zIndex: 1060,
              backdropFilter: 'blur(4px)',
            }}
            onClick={() => setActiveProject(null)}
          >
            <div
              className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
              role="document"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content modal-content-custom border-0 shadow-2xl">
                {/* Modal Header */}
                <div className="modal-header modal-header-custom d-flex justify-content-between align-items-center">
                  <div>
                    <div className="badge bg-orange text-white mb-1">
                      {activeProject.category}
                    </div>
                    <h4 className="modal-title fw-bold text-white mb-0">
                      {activeProject.title}
                    </h4>
                    <small className="text-white-50">
                      {activeProject.subtitle}
                    </small>
                  </div>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    aria-label="Close"
                    onClick={() => setActiveProject(null)}
                  ></button>
                </div>

                {/* Modal Body */}
                <div className="modal-body p-4 bg-white">
                  <div className="row g-4">
                    {/* Visual Preview */}
                    <div className="col-lg-7">
                      <div
                        className="rounded border p-2 bg-light text-center overflow-hidden position-relative"
                        style={{ minHeight: '350px' }}
                      >
                        <img
                          src={activeProject.image}
                          alt={activeProject.title}
                          className="img-fluid rounded"
                          style={{ maxHeight: '560px', objectFit: 'contain' }}
                        />
                        <div className="mt-2 text-center">
                          <a
                            href={activeProject.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-charcoal"
                          >
                            <i className="bi bi-box-arrow-up-right me-1 text-orange"></i>
                            Open Full Resolution (4K)
                          </a>
                        </div>
                      </div>

                      {/* Optional Render Pair */}
                      {activeProject.renderImage && (
                        <div className="mt-3 p-3 rounded border bg-light-gray">
                          <h6 className="fw-bold text-charcoal mb-2 d-flex align-items-center gap-2">
                            <i className="bi bi-camera-reels-fill text-orange"></i>
                            Corresponding 3D Exterior Visualization
                          </h6>
                          <div className="rounded overflow-hidden">
                            <img
                              src={activeProject.renderImage}
                              alt="Corresponding Render"
                              className="img-fluid rounded"
                              style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Information & Specs */}
                    <div className="col-lg-5">
                      <h5 className="fw-bold text-charcoal mb-2">
                        Project Description
                      </h5>
                      <p
                        className="text-secondary small mb-4"
                        style={{ lineHeight: 1.7 }}
                      >
                        {activeProject.description}
                      </p>

                      <h6 className="fw-bold text-charcoal border-bottom pb-2 mb-3">
                        <i className="bi bi-card-checklist text-orange me-2"></i>
                        Technical Specifications
                      </h6>

                      <div className="table-responsive">
                        <table className="table table-sm table-bordered">
                          <tbody>
                            {activeProject.specifications &&
                              activeProject.specifications.map((spec, sIdx) => (
                                <tr key={sIdx}>
                                  <td
                                    className="fw-semibold text-charcoal bg-light"
                                    style={{ width: '40%', fontSize: '0.82rem' }}
                                  >
                                    {spec.label}
                                  </td>
                                  <td
                                    className="text-secondary"
                                    style={{ fontSize: '0.82rem' }}
                                  >
                                    {spec.value}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-4 p-3 rounded bg-light border border-secondary border-opacity-25">
                        <small className="text-muted d-block mb-1">
                          Source Reference
                        </small>
                        <p className="small text-charcoal mb-0">
                          Extracted directly from Yadav Babu MK's official Civil Engineering and Design Portfolio document.
                        </p>
                      </div>

                      <div className="mt-4 d-flex gap-2">
                        <a
                          href="#contact"
                          className="btn btn-orange w-100"
                          onClick={() => setActiveProject(null)}
                        >
                          <i className="bi bi-envelope-fill me-1"></i>
                          Inquire About This Design
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="modal-footer bg-light-gray py-2 px-4 justify-content-between">
                  <span className="small text-muted">
                    Scale & dimensions verified against portfolio specifications.
                  </span>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-charcoal"
                    onClick={() => setActiveProject(null)}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
