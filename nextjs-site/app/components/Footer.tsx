import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/image_1.png" alt="Limitless Auto Salon" width={150} height={40} style={{ height: '40px', width: 'auto' }} className="footer-logo" />
            <p>Ceramic Pro, XPEL, and Gtechniq authorized installer in Chatsworth, CA. Professional detailing and coating services for every vehicle.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 10.86 4.46V13a8.28 8.28 0 0 0 5.58 2.17V11.7a4.84 4.84 0 0 1-.01-5.01z" /></svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Exterior Detailing</a></li>
              <li><a href="#services">Interior Detailing</a></li>
              <li><a href="#services">Paint Correction</a></li>
              <li><a href="#services">Ceramic Coating</a></li>
              <li><a href="#services">Paint Protection Film</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Hours</h4>
            <ul className="hours-list">
              <li>Monday &ndash; Friday <span>8AM &ndash; 6PM</span></li>
              <li>Saturday <span>9AM &ndash; 5PM</span></li>
              <li>Sunday <span>By Appointment</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Limitless Auto Salon. All rights reserved. &bull; 20127 Nordhoff St, Chatsworth, CA 91311</p>
        </div>
      </div>
    </footer>
  );
}
