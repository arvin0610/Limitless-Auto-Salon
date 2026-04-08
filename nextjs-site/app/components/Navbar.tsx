'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll<HTMLElement>('.section, #home');
      let current = 'home';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <Image src="/images/image_1.png" alt="Limitless Auto Salon" width={150} height={45} style={{ height: '45px', width: 'auto' }} />
        </a>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav-link${activeSection === item.href.slice(1) ? ' active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
