import React from 'react';

const items = [
  { icon: '📸', label: 'Studio Portraits', bg: 'linear-gradient(135deg, #1a3a6b, #2563a8)' },
  { icon: '🪪', label: 'ID Photos', bg: 'linear-gradient(135deg, #0a1628, #1a3a6b)' },
  { icon: '🛂', label: 'Passport Photos', bg: 'linear-gradient(135deg, #2563a8, #3b82f6)' },
  { icon: '🖼️', label: 'Glass Frames', bg: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  { icon: '✈️', label: 'Air Travels', bg: 'linear-gradient(135deg, #1a3a6b, #0a1628)' },
  { icon: '🏅', label: 'Certificate Frames', bg: 'linear-gradient(135deg, #3b82f6, #2563a8)' },
];

function Gallery() {
  return (
    <section style={styles.section} id="gallery">
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.tag}>Our Work</p>
          <h2 style={styles.title}>Studio Gallery</h2>
          <p style={styles.desc}>A glimpse of our professional photography and framing work.</p>
        </div>
        <div style={styles.grid}>
          {items.map((item, i) => (
            <div key={i} style={{ ...styles.item, background: item.bg }}>
              <div style={styles.icon}>{item.icon}</div>
              <div style={styles.overlay}>
                <span style={styles.overlayText}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '6rem 2rem', background: '#e8f0fe' },
  container: { maxWidth: '1100px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '3rem' },
  tag: { fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#3b82f6', fontWeight: '600', marginBottom: '0.75rem' },
  title: { fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', color: '#0a1628', marginBottom: '1rem' },
  desc: { color: '#64748b', fontSize: '1rem', lineHeight: '1.8' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' },
  item: {
    aspectRatio: '1', borderRadius: '6px', overflow: 'hidden',
    position: 'relative', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  icon: { fontSize: '3rem', zIndex: 1 },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'rgba(10,22,40,0.7)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    opacity: 0, transition: 'opacity 0.3s'
  },
  overlayText: { color: 'white', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }
};

export default Gallery;