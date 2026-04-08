import Image from 'next/image';

export default function Hero() {
  return (
    <header id="home">
      <div className="hero">
        <div className="hero-bg">
          <Image
            src="/images/image_63.jpeg"
            alt="Audi R8 V10 in Limitless Auto Salon facility"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            loading="eager"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-tagline">Ceramic Coating &bull; PPF &bull; Paint Correction</p>
            <h1 className="hero-title">
              Your Car Deserves<br />
              <span className="highlight">Limitless</span> Perfection.
            </h1>
            <p className="hero-description">
              Certified coating and PPF studio in Chatsworth, CA. Professional detailing, paint correction, and long-term protection &mdash; done right, every time.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">Explore Services</a>
              <a href="#contact" className="btn btn-outline">Book Appointment</a>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll Down</span>
          <div className="scroll-arrow" />
        </div>
      </div>
    </header>
  );
}
