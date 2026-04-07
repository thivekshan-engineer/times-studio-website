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
  const isMobile = window.innerWidth <= 768;

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
            <div key={i} style={{ ...styles.item, background: item.bg }}>
              <div style={styles.icon}>{item.icon}</div>
              <div style={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
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
    aspectRatio: '1', borderRadius: '8px', overflow: 'hidden',
    position: 'relative', cursor: 'pointer',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
  },
  icon: { fontSize: '2.5rem', zIndex: 1 },
  label: { color: 'white', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center', padding: '0 0.5rem' }
};

export default Gallery;