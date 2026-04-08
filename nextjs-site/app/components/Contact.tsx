'use client';

import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Book Your <span className="highlight">Appointment</span></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>20127 Nordhoff St<br />Chatsworth, CA 91311</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <div>
                <h4>Call Us</h4>
                <p>(818) 555-0147</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <p>info@limitlessautosalon.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <div>
                <h4>Hours</h4>
                <p>Mon &ndash; Fri: 8:00 AM &ndash; 6:00 PM<br />Sat: 9:00 AM &ndash; 5:00 PM<br />Sun: By Appointment Only</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <select required defaultValue="">
                <option value="" disabled>Select a Service</option>
                <option value="exterior">Exterior Detailing</option>
                <option value="interior">Interior Detailing</option>
                <option value="full">Full Detail Package</option>
                <option value="correction">Paint Correction</option>
                <option value="ceramic">Ceramic Coating</option>
                <option value="ppf">Paint Protection Film (PPF)</option>
              </select>
            </div>
            <div className="form-group">
              <textarea rows={4} placeholder="Tell us about your vehicle (year, make, model) and any specific concerns..." />
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={submitted}>
              {submitted ? 'Message Sent!' : 'Request Appointment'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
