import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const { contact, personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto generation for seamless frontend contact
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="badge-technical mb-2">
            <i className="bi bi-chat-square-text-fill text-orange"></i>
            <span>Get In Touch</span>
          </div>
          <h2 className="display-6 fw-bold text-charcoal mb-3">Contact Information</h2>
          <p className="text-muted col-lg-6 mx-auto mb-3">
            Feel free to reach out for career opportunities, architectural drafting projects,
            BIM modeling, or 3D visualization consultations.
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

        <div className="row g-4 justify-content-center">
          {/* Left Column: Direct Contact Details Card */}
          <div className="col-lg-5 col-xl-4">
            <div
              className="p-4 rounded-3 h-100 text-white shadow"
              style={{
                backgroundColor: '#25282D',
                border: '1px solid #373B41',
              }}
            >
              <h4 className="fw-bold text-white mb-1">{contact.fullName}</h4>
              <p className="text-orange small fw-semibold mb-4">
                Civil Engineering | Interior & Exterior Designing
              </p>

              {/* Direct Info List */}
              <div className="d-flex flex-column gap-3 mb-4">
                {/* Email */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-2 d-flex align-items-center justify-content-center bg-orange text-white"
                    style={{ width: '42px', height: '42px', flexShrink: 0 }}
                  >
                    <i className="bi bi-envelope-fill fs-5"></i>
                  </div>
                  <div>
                    <small className="text-white-50 d-block" style={{ fontSize: '0.75rem' }}>
                      EMAIL ADDRESS
                    </small>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white text-decoration-none fw-semibold"
                      style={{ fontSize: '0.92rem' }}
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-2 d-flex align-items-center justify-content-center bg-orange text-white"
                    style={{ width: '42px', height: '42px', flexShrink: 0 }}
                  >
                    <i className="bi bi-telephone-fill fs-5"></i>
                  </div>
                  <div>
                    <small className="text-white-50 d-block" style={{ fontSize: '0.75rem' }}>
                      PHONE NUMBER
                    </small>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-white text-decoration-none fw-semibold"
                      style={{ fontSize: '0.92rem' }}
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-2 d-flex align-items-center justify-content-center bg-orange text-white"
                    style={{ width: '42px', height: '42px', flexShrink: 0 }}
                  >
                    <i className="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div>
                    <small className="text-white-50 d-block" style={{ fontSize: '0.75rem' }}>
                      LOCATION
                    </small>
                    <span className="text-white fw-semibold" style={{ fontSize: '0.92rem' }}>
                      {contact.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-grid gap-2 pt-3 border-top border-secondary border-opacity-25">
                <a
                  href={`mailto:${contact.email}?subject=Career%20Opportunity%20/%20Project%20Inquiry`}
                  className="btn btn-orange py-2 text-white"
                >
                  <i className="bi bi-envelope-check-fill me-2"></i>
                  Send Direct Email
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className="btn btn-outline-white py-2"
                >
                  <i className="bi bi-telephone-outbound-fill me-2 text-orange"></i>
                  Call Now ({contact.phone})
                </a>
                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary text-white py-2"
                  style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <i className="bi bi-download me-2 text-orange"></i>
                  Download PDF Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form UI */}
          <div className="col-lg-7 col-xl-7">
            <div
              className="p-4 p-md-5 rounded-3 border h-100 bg-light-gray"
              style={{ borderColor: '#DEE2E6' }}
            >
              <h4 className="fw-bold text-charcoal mb-2">Send a Message</h4>
              <p className="text-muted small mb-4">
                Fill in your project requirements or message below. Clicking submit initiates an email inquiry via your default mail client.
              </p>

              {submitted ? (
                <div className="alert alert-success d-flex align-items-center gap-3 p-3 rounded-3" role="alert">
                  <i className="bi bi-check-circle-fill fs-3 text-success"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Email Client Triggered!</h6>
                    <small>
                      Thank you for reaching out. If your mail client did not automatically open, please email directly to{' '}
                      <strong>{contact.email}</strong>.
                    </small>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-charcoal small">
                      Your Full Name <span className="text-orange">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="form-control form-control-custom w-100"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-charcoal small">
                      Email Address <span className="text-orange">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-control form-control-custom w-100"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold text-charcoal small">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Architectural Plan / BIM Inquiry"
                      className="form-control form-control-custom w-100"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold text-charcoal small">
                      Your Message <span className="text-orange">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your design project, drawing requirements, or job details..."
                      className="form-control form-control-custom w-100"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <small className="text-muted d-block mb-3" style={{ fontSize: '0.78rem' }}>
                      <i className="bi bi-info-circle text-orange me-1"></i>
                      Note: Frontend-only portfolio interface. Clicking below opens your email client directly addressing Yadav Babu MK.
                    </small>
                    <button type="submit" className="btn btn-orange px-4 py-3">
                      <i className="bi bi-send-fill me-2"></i>
                      Send Inquiry Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
