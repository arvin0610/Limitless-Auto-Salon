'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const filters = ['all', 'correction', 'ceramic', 'ppf', 'detail'] as const;

const projects = [
  { src: '/images/image_30.jpeg', alt: 'Audi R8 Ceramic Coating', category: 'ceramic', title: 'Audi R8 V10', desc: 'Ceramic Pro Gold Package \u2022 Matte Finish Protection' },
  { src: '/images/image_10.jpeg', alt: 'Paint Correction in Progress', category: 'correction', title: 'Paint Correction', desc: 'Two-Stage Correction \u2022 Rupes Polisher \u2022 LED Inspection' },
  { src: '/images/image_24.jpeg', alt: 'Lamborghini PPF Installation', category: 'ppf', title: 'Lamborghini Aventador', desc: 'XPEL Ultimate Plus \u2022 Full Body PPF Installation' },
  { src: '/images/image_21.jpeg', alt: 'Porsche 911 Full Detail', category: 'detail', title: 'Porsche 911', desc: 'Full Detail \u2022 Paint Decontamination \u2022 Sealant' },
  { src: '/images/image_37.jpeg', alt: 'Lamborghini Aventador Window Tint', category: 'detail', title: 'Lamborghini Aventador', desc: 'Ceramic Window Tint \u2022 Full Vehicle' },
  { src: '/images/image_14.jpeg', alt: 'Audi R8 Paint Correction Result', category: 'correction', title: 'Audi R8 V10', desc: 'Multi-Stage Paint Correction \u2022 Swirl-Free Finish' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-subtitle">Our Work</p>
            <h2 className="section-title">Recent <span className="highlight">Projects</span></h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="gallery-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'all' ? 'All' : f === 'ppf' ? 'PPF' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </ScrollReveal>
        <div className="gallery-grid">
          {filtered.map((project, i) => (
            <div key={project.src + activeFilter} className="gallery-item" style={{ animationDelay: `${i * 80}ms` }}>
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="gallery-overlay">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
