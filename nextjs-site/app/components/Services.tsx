const services = [
  {
    title: 'Exterior Detailing',
    description: 'Hand wash, clay bar, iron decontamination, machine polish, and paint sealant. Showroom-quality results, every wash.',
    price: 'Starting at $250',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /></svg>,
  },
  {
    title: 'Interior Detailing',
    description: 'Steam cleaning, leather conditioning, fabric shampoo, and UV protection on all surfaces. Deep clean, factory-fresh feel.',
    price: 'Starting at $200',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
  },
  {
    title: 'Full Detail Package',
    description: 'Complete interior and exterior detail with paint decontamination, one-step enhancement polish, and premium sealant.',
    price: 'Starting at $450',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    featured: true,
  },
  {
    title: 'Paint Correction',
    description: 'Single, two-stage, or multi-stage correction for swirl marks, scratches, and oxidation. Gloss meter verified.',
    price: 'Starting at $400',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  },
  {
    title: 'Ceramic Coating',
    description: 'Ceramic Pro and Gtechniq certified. Multi-layer SiO2 coating with hydrophobic finish. Up to 5+ year manufacturer warranty.',
    price: 'Starting at $800',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: 'Paint Protection Film',
    description: 'XPEL Ultimate Plus self-healing film. Partial front, full front, or full body coverage. 10-year manufacturer warranty.',
    price: 'Starting at $800',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">What We Offer</p>
          <h2 className="section-title">Our <span className="highlight">Services</span></h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className={`service-card${service.featured ? ' featured' : ''}`}>
              {service.featured && <div className="service-badge">Most Popular</div>}
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-price">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
