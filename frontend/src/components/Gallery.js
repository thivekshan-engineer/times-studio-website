import React, { useState } from 'react';

const items = [
  { icon: '📸', label: 'Studio Portraits', bg: 'linear-gradient(135deg, #1a3a6b, #2563a8)', desc: 'Professional studio portrait sessions with expert lighting and backdrops.' },
  { icon: '🪪', label: 'ID Photos', bg: 'linear-gradient(135deg, #0a1628, #1a3a6b)', desc: 'Government approved ID and NIC photos with same-day delivery.' },
  { icon: '🛂', label: 'Passport Photos', bg: 'linear-gradient(135deg, #2563a8, #3b82f6)', desc: 'International standard passport and visa photos for all countries.' },
  { icon: '🖼️', label: 'Glass Frames', bg: 'linear-gradient(135deg, #f59e0b, #d97706)', desc: 'Premium quality glass frames for photos, certificates and artwork.' },
  { icon: '✈️', label: 'Air Travels', bg: 'linear-gradient(135deg, #1a3a6b, #0a1628)', desc: 'Flight bookings, visa arrangements and complete travel packages.' },
  { icon: '🏅', label: 'Certificate Frames', bg: 'linear-gradient(135deg, #3b82f6, #2563a8)', desc: 'Professional framing for certificates, awards and diplomas.' },
];

function Gallery() {
  const isMobile = window.innerWidth <= 768;
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section style={styles.section} id="gallery">
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.tag}>Our Work</p>
          <h2 style={styles.title}>Studio Gallery</h2>
          <p style={styles.desc}>A glimpse of our professional photography and framing work.</p>
        </div>
        <div style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'
        }}>
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelected(item)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...styles.item,
                background: item.bg,
                transform: hovered === i ? 'scale(1.04)' : 'scale(1)',
                boxShadow: hovered === i ? '0 12px 40px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={styles.icon}>{item.icon}</div>
              <div style={styles.label}>{item.label}</div>
              {hovered === i && (
                <div style={styles.overlay}>
                  <div style={styles.overlayText}>Click to View</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          style={styles.lightbox}
          onClick={() => setSelected(null)}
        >
          <div
            style={{ ...styles.lightboxCard, background: selected.bg }}
            onClick={e => e.stopPropagation()}
          >
            <button style={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
            <div style={styles.lightboxIcon}>{selected.icon}</div>
            <div style={styles.lightboxTitle}>{selected.label}</div>
            <div style={styles.lightboxDesc}>{selected.desc}</div>
            <a href="#contact" style={styles.lightboxBtn} onClick={() => setSelected(null)}>
              Book This Service
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: { padding: '5rem 1.25rem', background: '#e8f0fe' },
  container: { maxWidth: '1100px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '3rem' },
  tag: { fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#3b82f6', fontWeight: '600', marginBottom: '0.75rem' },
  title: { fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', color: '#0a1628', marginBottom: '1rem' },
  desc: { color: '#64748b', fontSize: '1rem', lineHeight: '1.8' },
  grid: { display: 'grid', gap: '0.75rem' },
  item: {
    aspectRatio: '1',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  icon: { fontSize: '2.5rem', zIndex: 1 },
  label: { color: 'white', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center', padding: '0 0.5rem', zIndex: 1 },
  overlay: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' },
  overlayText: { color: 'white', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid white', padding: '0.4rem 1rem', borderRadius: '3px' },
  lightbox: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '1rem' },
  lightboxCard: { borderRadius: '12px', padding: '3rem 2.5rem', maxWidth: '440px', width: '100%', textAlign: 'center', position: 'relative', animation: 'fadeIn 0.3s ease' },
  closeBtn: { position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold' },
  lightboxIcon: { fontSize: '4rem', marginBottom: '1rem' },
  lightboxTitle: { fontFamily: 'Georgia, serif', fontSize: '1.6rem', fontWeight: '700', color: 'white', marginBottom: '1rem' },
  lightboxDesc: { fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', marginBottom: '2rem' },
  lightboxBtn: { background: 'white', color: '#0a1628', padding: '0.85rem 2rem', borderRadius: '3px', textDecoration: 'none', fontWeight: '700', fontSize: '0.88rem', display: 'inline-block' },
};

export default Gallery;