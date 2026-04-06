import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <div style={styles.brandMain}>Times Studio</div>
        <div style={styles.brandSub}>& T Marin Air Travels</div>
      </div>
      <ul style={{...styles.links, ...(menuOpen ? styles.linksOpen : {})}}>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#why" style={styles.link}>About</a></li>
        <li><a href="#gallery" style={styles.link}>Gallery</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
      <a href="#contact" style={styles.cta}>Book Now</a>
      <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: 'rgba(10,22,40,0.97)',
    padding: '0 2rem', display: 'flex',
    alignItems: 'center', justifyContent: 'space-between',
    height: '70px', borderBottom: '1px solid rgba(59,130,246,0.2)'
  },
  brand: { display: 'flex', flexDirection: 'column' },
  brandMain: { fontFamily: 'Georgia, serif', color: '#ffffff', fontSize: '1.1rem', fontWeight: '700' },
  brandSub: { fontSize: '0.6rem', color: '#3b82f6', letterSpacing: '0.2em', textTransform: 'uppercase' },
  links: { display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 },
  linksOpen: { flexDirection: 'column', position: 'absolute', top: '70px', left: 0, right: 0, background: 'rgba(10,22,40,0.98)', padding: '1rem 2rem', gap: '1rem' },
  link: { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.82rem', fontWeight: '500', textTransform: 'uppercase' },
  cta: { background: '#3b82f6', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '3px', fontSize: '0.78rem', fontWeight: '600', textDecoration: 'none' },
  hamburger: { display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer' },
  bar: { width: '25px', height: '2px', background: 'white', display: 'block' }
};

export default Navbar;