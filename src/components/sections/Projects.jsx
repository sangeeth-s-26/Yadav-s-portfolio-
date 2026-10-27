import React, { useState } from 'react';
import highwayImg from '../../assets/highway_project.png';
import bimModelImg from '../../assets/bim_building_model.png';
import floorPlanImg from '../../assets/architectural_floor_plan.png';
import structuralImg from '../../assets/structural_drawing.png';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'ULCCS Kasargod Expressway Private Limited — NH-66 Highway Project',
      type: '39 km six-lane highway stretch from Thalapady to Chengala along NH-66, Kerala.',
      category: 'Highway Construction',
      featured: true,
      description: 'Assisted with construction planning, site execution and daily progress monitoring against structural blueprints.',
      software: null,
      softwarePlaceholder: '[Add Software]',
      image: highwayImg,
      isPlaceholder: false,
    },
    {
      id: 2,
      title: '3D Commercial Building BIM Model',
      type: 'Commercial Multi-Story Structure',
      category: 'BIM & 3D Modeling',
      featured: false,
      description: 'Parametric 3D building information model featuring structural framing, architectural facade, and interior layout coordination.',
      software: 'Autodesk Revit, 3ds Max, Lumion',
      image: bimModelImg,
      isPlaceholder: true,
      placeholderText: '[Add Project Details]',
    },
    {
      id: 3,
      title: '2D Architectural CAD Blueprint Drafting',
      type: 'Residential / Architectural Layouts',
      category: 'CAD Drafting',
      featured: false,
      description: 'Comprehensive 2D CAD architectural floor plans, cross-sections, exterior elevations, and dimensioning specifications.',
      software: 'AutoCAD',
      image: floorPlanImg,
      isPlaceholder: true,
      placeholderText: '[Add Project Details]',
    },
    {
      id: 4,
      title: 'Reinforced Concrete Structural Detailing',
      type: 'Civil Infrastructure / Structural',
      category: 'Structural Engineering',
      featured: false,
      description: 'Detailed structural drawings illustrating beam-column connections, foundation layouts, and rebar reinforcement schedules.',
      software: 'AutoCAD / Revit',
      image: structuralImg,
      isPlaceholder: true,
      placeholderText: '[Add Project Details]',
    },
  ];

  const categories = ['All', 'Highway Construction', 'BIM & 3D Modeling', 'CAD Drafting', 'Structural Engineering'];

  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-5 bg-blueprint-grid">
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="section-tag">
            <i className="bi bi-kanban"></i> PORTFOLIO SHOWCASE
          </div>
          <h2 className="section-title">Civil Engineering & BIM Projects</h2>
          <p className="text-secondary fs-6">
            Featured infrastructure highway exposure and technical CAD/BIM drawing samples.
          </p>

          {/* Category Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold transition-all ${
                  filter === cat
                    ? 'btn-primary shadow-sm'
                    : 'btn-light border text-slate-700'
                }`}
                style={filter === cat ? { backgroundColor: '#0284c7', borderColor: '#0284c7' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase */}
        {filter === 'All' && (
          <div className="mb-5">
            <div className="engineering-card p-0 shadow-lg border-primary/20">
              <div className="engineering-card-accent"></div>
              <div className="row g-0">
                <div className="col-lg-6 position-relative overflow-hidden bg-dark">
                  <img
                    src={highwayImg}
                    alt="NH-66 Highway Project"
                    className="img-fluid w-100 h-100 object-fit-cover min-h-300"
                  />
                  <div className="position-absolute top-0 start-0 p-3">
                    <span className="badge bg-primary px-3 py-2 fw-bold text-uppercase tracking-wider">
                      <i className="bi bi-star-fill me-1"></i> Featured Experience Project
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 p-4 p-lg-5 d-flex flex-column justify-content-center bg-white">
                  <div className="mb-2">
                    <span className="badge bg-info text-dark font-monospace me-2">
                      Civil Construction / Highway
                    </span>
                    <span className="text-muted small">ULCCS Kasargod Expressway</span>
                  </div>
                  <h3 className="fw-extrabold text-dark mb-3">
                    ULCCS Kasargod Expressway Private Limited — NH-66 Highway Project
                  </h3>
                  <div className="p-3 bg-light rounded-3 border mb-3">
                    <strong className="text-dark d-block mb-1">Stretch Details:</strong>
                    <p className="text-secondary small mb-0">
                      39 km six-lane highway stretch from Thalapady to Chengala along NH-66, Kerala.
                    </p>
                  </div>
                  <p className="text-slate-600 fs-6 mb-4">
                    Assisted with construction planning, site execution and daily progress monitoring against structural blueprints.
                  </p>
                  <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                    <div>
                      <small className="text-muted d-block font-monospace">Software Used:</small>
                      <span className="placeholder-badge">
                        <i className="bi bi-pencil-square me-1"></i>
                        {projects[0].softwarePlaceholder}
                      </span>
                    </div>
                    <span className="badge bg-dark px-3 py-2">NH-66 Stretch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="engineering-card h-100 d-flex flex-column">
                <div className="engineering-card-accent"></div>
                <div className="position-relative overflow-hidden bg-slate-900" style={{ height: '220px' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-dark/80 backdrop-blur-md text-white border font-monospace">
                      {project.category}
                    </span>
                  </div>
                  {project.isPlaceholder && (
                    <div className="position-absolute bottom-0 start-0 p-2">
                      <span className="placeholder-badge bg-warning/90 text-dark border-0 shadow-sm">
                        <i className="bi bi-info-circle me-1"></i> Sample Design Visual
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 d-flex flex-column flex-grow-1">
                  <span className="text-muted small font-monospace d-block mb-1">
                    {project.type}
                  </span>
                  <h5 className="fw-bold text-dark mb-2 fs-6">
                    {project.title}
                  </h5>
                  <p className="text-slate-600 small mb-3 flex-grow-1">
                    {project.description}
                  </p>

                  <div className="pt-3 border-top mt-auto d-flex align-items-center justify-content-between">
                    <div>
                      <small className="text-muted d-block font-monospace" style={{ fontSize: '0.72rem' }}>
                        Software Used:
                      </small>
                      {project.software ? (
                        <span className="fw-bold text-dark small">{project.software}</span>
                      ) : (
                        <span className="placeholder-badge">
                          <i className="bi bi-pencil-square me-1"></i>
                          {project.softwarePlaceholder}
                        </span>
                      )}
                    </div>
                    {project.placeholderText && (
                      <span className="badge bg-light text-muted border font-monospace" style={{ fontSize: '0.7rem' }}>
                        {project.placeholderText}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
