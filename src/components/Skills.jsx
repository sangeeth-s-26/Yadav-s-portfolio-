import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="badge-technical mb-2">
            <i className="bi bi-tools text-orange"></i>
            <span>Engineering & Design Tools</span>
          </div>
          <h2 className="display-6 fw-bold text-charcoal mb-3">Technical Skills</h2>
          <p className="text-muted col-lg-6 mx-auto mb-3">
            Industry-standard software packages for 2D technical drafting, 3D parametric BIM modeling,
            and photorealistic architectural visualization as presented in the portfolio.
          </p>
          <div
            className="mx-auto"
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#F28C28',
              borderRadius: '2px',
            }}
          ></div>
        </div>

        {/* Skill Cards Grid */}
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="skill-card">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  {/* Skill Icon / Logo */}
                  <div className="skill-card-icon-wrap mb-0">
                    {skill.isImg ? (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        style={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'contain',
                        }}
                      />
                    ) : (
                      <i className={`bi ${skill.icon} text-orange fs-2`}></i>
                    )}
                  </div>
                  <span
                    className="badge bg-light-gray text-charcoal border px-3 py-1"
                    style={{ fontSize: '0.75rem', fontWeight: '600' }}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h4 className="h5 fw-bold text-charcoal mb-2">
                  {skill.name}
                </h4>

                {/* Technical Application Description */}
                <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                  {skill.description}
                </p>

                {/* Construction Orange Accent Bar */}
                <div
                  className="w-100"
                  style={{
                    height: '3px',
                    backgroundColor: '#F1F3F5',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '40%',
                      height: '100%',
                      backgroundColor: '#F28C28',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Integration Banner */}
        <div
          className="mt-5 p-4 rounded-3 border"
          style={{
            backgroundColor: '#F1F3F5',
            borderColor: '#DEE2E6',
          }}
        >
          <div className="row align-items-center gy-3 text-center text-md-start">
            <div className="col-md-8">
              <h5 className="fw-bold text-charcoal mb-1">
                Integrated BIM & Visualization Workflow
              </h5>
              <p className="text-muted small mb-0">
                From precision 2D drafting in AutoCAD and parametric modeling in Revit to high-end realistic rendering in 3ds Max, V-Ray, and Lumion.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <a href="#projects" className="btn btn-outline-charcoal btn-sm px-3 py-2">
                <i className="bi bi-eye-fill me-1 text-orange"></i>
                Inspect Portfolio Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
