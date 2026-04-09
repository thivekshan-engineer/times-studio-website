import React, { useState, useEffect } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? 'rgba(10,22,40,0.99)' : 'rgba(10,22,40,0.97)',
    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
    padding: '0 1.5rem', display: 'flex',
    alignItems: 'center', justifyContent: 'space-between',
    height: '65px', borderBottom: '1px solid rgba(59,130,246,0.2)',
    transition: 'all 0.3s ease'
  };

  const bar1 = {
    width: '25px', height: '2px', background: 'white',
    display: 'block', borderRadius: '2px', transition: 'all 0.3s ease',
    transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
  };
  const bar2 = {
    width: '25px', height: '2px', background: 'white',
    display: 'block', borderRadius: '2px', transition: 'all 0.3s ease',
    opacity: menuOpen ? 0 : 1
  };
  const bar3 = {
    width: '25px', height: '2px', background: 'white',
    display: 'block', borderRadius: '2px', transition: 'all 0.3s ease',
    transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
  };

  const mobileMenuStyle = {
    position: 'fixed', top: '65px', left: 0, right: 0,
    background: 'rgba(10,22,40,0.99)',
    display: 'flex', flexDirection: 'column',
    padding: menuOpen ? '1.5rem 2rem' : '0 2rem',
    gap: '1.25rem',
    maxHeight: menuOpen ? '400px' : '0',
    opacity: menuOpen ? 1 : 0,
    overflow: 'hidden',
    transition: 'max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease',
    borderBottom: menuOpen ? '1px solid rgba(59,130,246,0.2)' : 'none',
    zIndex: 999
  };

  const links = ['Services', 'About', 'Gallery', 'Contact'];

  return (
    <div>
      <nav style={navStyle}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'Georgia, serif', color: '#ffffff', fontSize: '1.1rem', fontWeight: '700' }}>Times Studio</div>
          <div style={{ fontSize: '0.6rem', color: '#3b82f6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>& T Marin Air Travels</div>
        </div>

        {!isMobile && (
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map((item, i) => (
              <li key={i}>
                <a href={'#' + item.toLowerCase()} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.82rem', fontWeight: '500', textTransform: 'uppercase' }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}

        {!isMobile && (
          <a href="#contact" style={{ background: '#3b82f6', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '3px', fontSize: '0.78rem', fontWeight: '600', textDecoration: 'none' }}>Book Now</a>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'flex', flexDirection: 'column', gap: '5px', cursor: 'pointer', padding: '5px', background: 'none', border: 'none' }}>
            <span style={bar1}></span>
            <span style={bar2}></span>
            <span style={bar3}></span>
          </button>
        )}
      </nav>

      {isMobile && (
        <div style={mobileMenuStyle}>
          {links.map((item, i) => (
            <a key={i} href={'#' + item.toLowerCase()} onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {item}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{ background: '#3b82f6', color: '#fff', padding: '0.75rem 1.25rem', borderRadius: '3px', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none', textAlign: 'center' }}>
            Book Now
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;