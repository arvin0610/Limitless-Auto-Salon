'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

function AnimatedStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let current = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = String(target);
              clearInterval(timer);
            } else {
              el.textContent = String(Math.floor(current));
            }
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat">
      <span className="stat-number" ref={numRef}>0</span>
      <span className="stat-suffix">{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-subtitle">Who We Are</p>
            <h2 className="section-title">About <span className="highlight">Limitless</span></h2>
          </div>
        </ScrollReveal>
        <div className="about-grid">
          <ScrollReveal direction="right">
            <div className="about-text">
              <div className="about-image">
                <Image
                  src="/images/image_7.jpeg"
                  alt="Limitless Auto Salon facility - paint correction with LED inspection lighting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p>We specialize in ceramic coatings, paint protection film, paint correction, and full-service detailing &mdash; using professional-grade products from Ceramic Pro, XPEL, and Gtechniq.</p>
              <p>Every vehicle is serviced by appointment in our climate-controlled facility with LED inspection lighting. Daily driver or weekend track car &mdash; same standard, every time.</p>
              <div className="about-stats">
                <AnimatedStat target={500} suffix="+" label="Vehicles Serviced" />
                <AnimatedStat target={5} suffix="+" label="Years in Business" />
                <AnimatedStat target={200} suffix="+" label="Coatings Applied" />
              </div>
            </div>
          </ScrollReveal>
          <div className="about-features">
            <ScrollReveal direction="left" delay={100}>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
                <div>
                  <h3>Certified Products</h3>
                  <p>Authorized Ceramic Pro, XPEL, and Gtechniq installer. Every product backed by a manufacturer warranty.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div>
                  <h3>Controlled Environment</h3>
                  <p>Climate-controlled bays with LED inspection panels and dust extraction. Flawless finish, guaranteed.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={300}>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>
                </div>
                <div>
                  <h3>Warranty-Backed</h3>
                  <p>All coatings and PPF include manufacturer warranties. Not a shop guarantee &mdash; the real thing.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
