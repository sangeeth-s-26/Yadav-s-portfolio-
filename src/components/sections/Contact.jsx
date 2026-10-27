import React, { useState } from 'react';

const Contact = ({ onDownloadResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-5 bg-white border-top border-slate-100">
      <div className="container py-4">
        {/* Strong Final CTA Heading */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="section-tag">
            <i className="bi bi-envelope-check"></i> GET IN TOUCH
          </div>
          <h2 className="display-5 fw-extrabold text-dark mb-2">
            Let's Build Something Great
          </h2>
          <p className="text-secondary fs-6">
            Available for Junior BIM Engineer, BIM Trainee, CAD Draftsman, and Civil Engineering site opportunities.
          </p>
        </div>

        <div className="row gy-4">
          {/* Left Column: Direct Contact Info & Action Buttons */}
          <div className="col-lg-5">
            <div className="engineering-card p-4 h-100">
              <div className="engineering-card-accent"></div>
              <h4 className="fw-bold text-dark mb-4 border-bottom pb-2">
                Yadav Babu MK
              </h4>

              <div className="d-flex flex-column gap-3 mb-4">
                {/* Location */}
                <div className="p-3 bg-light rounded-3 border d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-white flex-shrink-0"
                    style={{ width: '44px', height: '44px' }}
                  >
                    <i className="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block font-monospace">Location</small>
                    <span className="fw-bold text-dark">Kozhikode, Kerala, India</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-3 bg-light rounded-3 border d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-success text-white flex-shrink-0"
                    style={{ width: '44px', height: '44px' }}
                  >
                    <i className="bi bi-telephone-fill fs-5"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block font-monospace">Phone / Mobile</small>
                    <a href="tel:8590698689" className="fw-bold text-dark text-decoration-none">
                      8590698689
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-3 bg-light rounded-3 border d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white flex-shrink-0"
                    style={{ width: '44px', height: '44px', backgroundColor: '#0284c7' }}
                  >
                    <i className="bi bi-envelope-fill fs-5"></i>
                  </div>
                  <div className="overflow-hidden">
                    <small className="text-muted d-block font-monospace">Email Address</small>
                    <a
                      href="mailto:yadavbabu3480@gmail.com"
                      className="fw-bold text-dark text-decoration-none text-truncate d-block"
                    >
                      yadavbabu3480@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Required 3 Action Buttons */}
              <div className="d-flex flex-column gap-2 mb-3">
                <a
                  href="mailto:yadavbabu3480@gmail.com"
                  className="btn btn-engineering-primary justify-content-center py-2.5"
                >
                  <i className="bi bi-send-fill me-1"></i> Email Me
                </a>
                <a
                  href="tel:8590698689"
                  className="btn btn-outline-success fw-bold justify-content-center py-2.5"
                >
                  <i className="bi bi-telephone-outbound-fill me-1"></i> Call Me
                </a>
                <button
                  onClick={onDownloadResume}
                  className="btn btn-engineering-outline justify-content-center py-2.5"
                >
                  <i className="bi bi-file-earmark-arrow-down-fill me-1"></i> Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="col-lg-7">
            <div className="engineering-card p-4 p-lg-5 h-100">
              <div className="engineering-card-accent"></div>
              <h4 className="fw-bold text-dark mb-2">Send a Message</h4>
              <p className="text-secondary small mb-4">
                Interested in recruiting or hiring for Civil Engineering and BIM roles? Send a direct message below.
              </p>

              {submitted ? (
                <div className="alert alert-success p-4 rounded-3 border-0 shadow-sm text-center my-4">
                  <i className="bi bi-check-circle-fill text-success display-4 d-block mb-2"></i>
                  <h5 className="fw-bold text-dark">Thank You for Reaching Out!</h5>
                  <p className="small text-secondary mb-3">
                    Your inquiry has been simulated successfully. Reach Yadav Babu MK at <strong>yadavbabu3480@gmail.com</strong> or <strong>8590698689</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-sm btn-outline-success fw-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark small">Your Name *</label>
                      <input
                        type="text"
                        className="form-control bg-light border-slate-200 py-2.5"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark small">Your Email *</label>
                      <input
                        type="email"
                        className="form-control bg-light border-slate-200 py-2.5"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark small">Subject / Position Title</label>
                      <input
                        type="text"
                        className="form-control bg-light border-slate-200 py-2.5"
                        placeholder="e.g., Junior BIM Engineer Vacancy"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark small">Message *</label>
                      <textarea
                        className="form-control bg-light border-slate-200"
                        rows="4"
                        placeholder="Write your inquiry or job opportunity details..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-engineering-primary w-100 py-3 justify-content-center">
                        <i className="bi bi-send-fill me-1"></i> Send Inquiry Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
