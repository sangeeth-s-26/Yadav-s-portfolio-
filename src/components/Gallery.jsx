import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Gallery() {
  const { galleryImages } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryCategories = ['All', 'Architectural Drawings', 'Exterior', 'Interior', 'Religious', 'Commercial'];

  const filteredGallery =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="badge-technical mb-2">
            <i className="bi bi-images text-orange"></i>
            <span>Visual Showcase</span>
          </div>
          <h2 className="display-6 fw-bold text-charcoal mb-3">Project Gallery</h2>
          <p className="text-muted col-lg-7 mx-auto mb-3">
            High-definition gallery of architectural drawings, 3D exterior renders, interior concepts,
            and sacred architecture directly extracted from the portfolio.
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

          {/* Gallery Category Filter */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-filter-btn ${
                  activeFilter === cat ? 'active' : ''
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="row g-3 g-md-4">
          {filteredGallery.map((item) => (
            <div className="col-sm-6 col-md-4 col-lg-4" key={item.id}>
              <div
                className="gallery-card shadow-sm"
                onClick={() => setLightboxImg(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span
                    className="badge bg-orange text-white mb-1 align-self-start"
                    style={{ fontSize: '0.72rem' }}
                  >
                    {item.category}
                  </span>
                  <h6 className="text-white fw-bold mb-1" style={{ fontSize: '0.95rem' }}>
                    {item.title}
                  </h6>
                  <p
                    className="text-white-50 small mb-2 text-truncate"
                    style={{ fontSize: '0.8rem' }}
                  >
                    {item.caption}
                  </p>
                  <div className="d-flex align-items-center gap-1 text-orange small fw-bold">
                    <i className="bi bi-zoom-in"></i>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{
              backgroundColor: 'rgba(20, 22, 26, 0.94)',
              zIndex: 1070,
              backdropFilter: 'blur(6px)',
            }}
            onClick={() => setLightboxImg(null)}
          >
            <div
              className="modal-dialog modal-xl modal-dialog-centered"
              role="document"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="modal-content border-0 shadow-2xl"
                style={{ backgroundColor: '#25282D', borderRadius: '12px' }}
              >
                <div className="modal-header border-0 pb-0 d-flex justify-content-between align-items-center px-4 pt-3">
                  <div>
                    <span className="badge bg-orange text-white mb-1">
                      {lightboxImg.category}
                    </span>
                    <h5 className="modal-title fw-bold text-white mb-0">
                      {lightboxImg.title}
                    </h5>
                  </div>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    aria-label="Close"
                    onClick={() => setLightboxImg(null)}
                  ></button>
                </div>

                <div className="modal-body p-3 p-md-4 text-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded overflow-hidden"
                    style={{
                      maxHeight: '72vh',
                      backgroundColor: '#1C1E22',
                    }}
                  >
                    <img
                      src={lightboxImg.image}
                      alt={lightboxImg.title}
                      className="img-fluid"
                      style={{
                        maxHeight: '70vh',
                        objectFit: 'contain',
                        width: 'auto',
                      }}
                    />
                  </div>
                  <p className="text-light mt-3 mb-1" style={{ fontSize: '0.92rem' }}>
                    {lightboxImg.caption}
                  </p>
                </div>

                <div className="modal-footer border-0 pt-0 px-4 pb-3 justify-content-between">
                  <span className="small text-white-50">
                    High-resolution portfolio render
                  </span>
                  <div className="d-flex gap-2">
                    <a
                      href={lightboxImg.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-white"
                    >
                      <i className="bi bi-box-arrow-up-right me-1 text-orange"></i>
                      View Full Size
                    </a>
                    <button
                      type="button"
                      className="btn btn-sm btn-orange"
                      onClick={() => setLightboxImg(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
