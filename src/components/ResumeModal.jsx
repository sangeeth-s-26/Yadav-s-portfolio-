import React from 'react';

const ResumeModal = ({ show, onClose }) => {
  if (!show) return null;

  const handleDownload = () => {
    const resumeText = `YADAV BABU MK
Junior BIM Engineer | Civil Diploma
Location: Kozhikode, Kerala, India
Phone: 8590698689
Email: yadavbabu3480@gmail.com

SUMMARY:
Civil Engineering diploma graduate with practical exposure to BIM, CAD, architectural and structural design, construction planning and site execution.

TECHNICAL SKILLS:
- BIM & Design: Building Information Modeling (BIM), Autodesk Revit
- CAD: AutoCAD
- 3D Visualisation: 3ds Max, Lumion, V-Ray
- Civil Skills: Construction Drawing, Quantity Estimation, Site Execution, Site Inspection, Daily Progress Monitoring

EXPERIENCE:
1. Planners Group Calicut — BIM & CAD Training Center
   08/2025 – Present
   Role: [Add Job Title]
   - Develop 2D and 3D architectural and structural designs in line with professional drafting standards.
   - Use Revit, 3ds Max and Lumion for modelling, rendering and design execution.

2. ULCCS — Uralungal Labour Contract Co-operative Society
   Role: Intern
   Dates: [Add Internship Dates]
   - Gained hands-on exposure to on-site construction processes.
   - Assisted with on-site construction planning, site execution, and daily progress monitoring against structural blueprints.

PROJECTS:
- ULCCS Kasargod Expressway Private Limited — NH-66 Highway Project
  Type: 39 km six-lane highway stretch from Thalapady to Chengala along NH-66, Kerala.
  Category: Civil Construction / Highway Project
  Description: Assisted with construction planning, site execution and daily progress monitoring against structural blueprints.
  Software: [Add Software]

EDUCATION:
- Diploma in Civil Engineering (Polytechnic) | M DIT Polytechnic College | State Board of Technical Education, Kerala | Year: [Add Year]
- Higher Secondary (12th) | VHSE Koyilandi | State Board | Year: [Add Year]

CERTIFICATIONS:
- BIM Architecture & Design Suites | Planners Group Calicut | Year: [Add Year]
- Interior and Exterior Design Certification | Issuing Institute: [Add Issuing Institute] | Year: [Add Year]

LANGUAGES:
- English, Malayalam
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Yadav_Babu_MK_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', zIndex: 1050 }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          {/* Modal Header */}
          <div className="modal-header bg-dark text-white p-4">
            <div className="d-flex align-items-center gap-3">
              <div
                className="d-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-2"
                style={{ backgroundColor: '#0284c7' }}
              >
                <i className="bi bi-file-earmark-person fs-4"></i>
              </div>
              <div>
                <h5 className="modal-title fw-bold text-white mb-0">
                  YADAV BABU MK — RESUME SUMMARY
                </h5>
                <small className="text-info font-monospace">
                  Junior BIM Engineer | Civil Diploma
                </small>
              </div>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body p-4 bg-light">
            <div className="p-4 bg-white rounded-3 border shadow-sm mb-4">
              <div className="row g-3">
                <div className="col-sm-6">
                  <span className="text-muted d-block small font-monospace">Full Name:</span>
                  <strong className="text-dark fs-6">Yadav Babu MK</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small font-monospace">Role:</span>
                  <strong className="text-primary fs-6">Junior BIM Engineer</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small font-monospace">Phone:</span>
                  <strong className="text-dark fs-6">+91 8590698689</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small font-monospace">Email:</span>
                  <strong className="text-dark fs-6">yadavbabu3480@gmail.com</strong>
                </div>
                <div className="col-12">
                  <span className="text-muted d-block small font-monospace">Location:</span>
                  <strong className="text-dark">Kozhikode, Kerala, India</strong>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-3 border shadow-sm">
              <h6 className="fw-bold text-dark border-bottom pb-2 mb-3">
                <i className="bi bi-journal-text text-primary me-2"></i> Document Content Overview
              </h6>
              <p className="small text-secondary mb-3">
                This resume document compiles all verified educational credentials, BIM/CAD technical skills, training at Planners Group Calicut, and site experience at ULCCS. Missing fields use clear <span className="placeholder-badge">[Add Details]</span> tags for easy updating.
              </p>
              <ul className="small text-slate-700 list-unstyled mb-0">
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Verified Contact Information & Location</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Technical Skills: Revit, AutoCAD, 3ds Max, Lumion, V-Ray</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Civil Skills: Quantity Estimation, Site Execution, Inspection & Progress Monitoring</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> ULCCS Intern — NH-66 39km Highway Expressway Project</li>
                <li><i className="bi bi-check-circle text-success me-2"></i> Diploma in Civil Engineering & BIM Certifications</li>
              </ul>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer bg-white p-3 border-top d-flex justify-content-between">
            <button type="button" className="btn btn-light border" onClick={onClose}>
              Close
            </button>
            <div className="d-flex gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="btn btn-outline-secondary fw-semibold"
              >
                <i className="bi bi-printer me-1"></i> Print / Save PDF
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="btn btn-engineering-primary"
              >
                <i className="bi bi-download me-1"></i> Download Text Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
