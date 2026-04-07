import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <div style={styles.brandMain}>Times Studio</div>
        <div style={styles.brandSub}>& T Marin Air Travels</div>
      </div>

      {/* Desktop links */}
      {!isMobile && (
        <ul style={styles.links}>
          <li><a href="#services" style={styles.link}>Services</a></li>
          <li><a href="#why" style={styles.link}>About</a></li>
          <li><a href="#gallery" style={styles.link}>Gallery</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>
      )}

      {/* Desktop CTA */}
      {!isMobile && (
        <a href="#contact" style={styles.cta}>Book Now</a>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
        </div>
      )}

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          <a href="#services" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#why" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>About</a>
          <a href="#gallery" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" style={styles.mobileCta} onClick={() => setMenuOpen(false)}>Book Now</a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: 'rgba(10,22,40,0.97)',
    padding: '0 1.5rem', display: 'flex',
    alignItems: 'center', justifyContent: 'space-between',
    height: '65px', borderBottom: '1px solid rgba(59,130,246,0.2)'
  },
  brand: { display: 'flex', flexDirection: 'column' },
  brandMain: { fontFamily: 'Georgia, serif', color: '#ffffff', fontSize: '1.1rem', fontWeight: '700' },
  brandSub: { fontSize: '0.6rem', color: '#3b82f6', letterSpacing: '0.15em', textTransform: 'uppercase' },
  links: { display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 },
  link: { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.82rem', fontWeight: '500', textTransform: 'uppercase' },
  cta: { background: '#3b82f6', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '3px', fontSize: '0.78rem', fontWeight: '600', textDecoration: 'none' },
  hamburger: { display: 'flex', flexDirection: 'column', gap: '5px', cursor: 'pointer', padding: '5px' },
  bar: { width: '25px', height: '2px', background: 'white', display: 'block' },
  mobileMenu: {
    position: 'fixed', top: '65px', left: 0, right: 0,
    background: 'rgba(10,22,40,0.98)',
    display: 'flex', flexDirection: 'column',
    padding: '1.5rem 2rem', gap: '1.25rem',
    borderBottom: '1px solid rgba(59,130,246,0.2)',
    zIndex: 999
  },
  mobileLink: { color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' },
  mobileCta: { background: '#3b82f6', color: '#fff', padding: '0.75rem 1.25rem', borderRadius: '3px', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none', textAlign: 'center', marginTop: '0.5rem' }
};

export default Navbar;