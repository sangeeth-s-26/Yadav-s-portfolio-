import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'BIM & Design',
      icon: 'bi-boxes',
      badgeClass: 'bg-primary',
      skills: [
        { name: 'Building Information Modeling (BIM)', level: 'Core Expertise', desc: 'Parameters, 3D Elements & Coordination' },
        { name: 'Autodesk Revit', level: 'Architectural & Structural', desc: 'Modeling & Documentation' },
      ],
    },
    {
      category: 'CAD Drafting',
      icon: 'bi-vector-pen',
      badgeClass: 'bg-info text-dark',
      skills: [
        { name: 'AutoCAD', level: '2D & 3D Drafting', desc: 'Architectural & Structural Blueprints' },
      ],
    },
    {
      category: '3D Modelling & Visualization',
      icon: 'bi-display',
      badgeClass: 'bg-secondary',
      skills: [
        { name: '3ds Max', level: '3D Geometry & Rendering', desc: 'Realistic Architectural Views' },
        { name: 'Lumion', level: 'Visualization & Animation', desc: 'Real-time Architectural Renderings' },
        { name: 'V-Ray', level: 'Photorealistic Rendering', desc: 'Lighting & Texturing' },
      ],
    },
    {
      category: 'Civil & On-Site Skills',
      icon: 'bi-building-gear',
      badgeClass: 'bg-dark',
      skills: [
        { name: 'Construction Drawing', desc: 'Interpretation & Standard Drafting' },
        { name: 'Quantity Estimation', desc: 'Material & Cost Calculations' },
        { name: 'Site Execution', desc: 'On-site Construction Processes' },
        { name: 'Site Inspection', desc: 'Quality Check & Structural Blueprint Verification' },
        { name: 'Daily Progress Monitoring', desc: 'Tracking Milestones Against Blueprints' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-5 bg-blueprint-grid">
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="section-tag">
            <i className="bi bi-tools"></i> SKILLS & COMPETENCIES
          </div>
          <h2 className="section-title">Technical & Engineering Expertise</h2>
          <p className="text-secondary fs-6">
            Comprehensive skill set acquired through specialized Civil Engineering diploma education, BIM/CAD training, and site execution exposure.
          </p>
        </div>

        <div className="row g-4">
          {skillCategories.map((cat, idx) => (
            <div className="col-lg-6" key={idx}>
              <div className="engineering-card h-100 p-4">
                <div className="engineering-card-accent"></div>
                <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white"
                      style={{ width: '44px', height: '44px', backgroundColor: '#0284c7' }}
                    >
                      <i className={`bi ${cat.icon} fs-5`}></i>
                    </div>
                    <h4 className="fw-bold mb-0 text-dark fs-5">{cat.category}</h4>
                  </div>
                  <span className={`badge ${cat.badgeClass} px-3 py-2 font-monospace`}>
                    {cat.skills.length} {cat.skills.length === 1 ? 'Skill' : 'Skills'}
                  </span>
                </div>

                <div className="row g-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div className="col-12" key={sIdx}>
                      <div className="p-3 rounded-3 bg-light border d-flex align-items-start justify-content-between gap-3">
                        <div>
                          <div className="fw-bold text-dark fs-6 mb-1">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            {skill.name}
                          </div>
                          <small className="text-muted d-block">{skill.desc}</small>
                        </div>
                        {skill.level && (
                          <span className="badge bg-white text-secondary border shadow-sm px-2.5 py-1.5 rounded-pill text-nowrap align-self-center">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
