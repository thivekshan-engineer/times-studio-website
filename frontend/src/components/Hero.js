import React from 'react';

function Hero() {
  const isMobile = window.innerWidth <= 768;

  return (
    <section style={styles.hero} id="home">
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <div style={styles.badge}>📍 Batticaloa, Sri Lanka</div>
        <h1 style={styles.title}>Times <span style={styles.gold}>Studio</span></h1>
        <div style={styles.subtitle}>& T Marin Air Travels</div>
        <p style={styles.desc}>
          Your trusted destination for professional photography services 
          and seamless air travel arrangements in Batticaloa. 
          From passport photos to international flights — we handle it all.
        </p>
        <div style={styles.btns}>
          <a href="#services" style={styles.btnPrimary}>Explore Services</a>
          <a href="#contact" style={styles.btnOutline}>Contact Us</a>
        </div>
        <div style={{
          ...styles.stats,
          gap: isMobile ? '1.5rem' : '3rem',
          marginTop: isMobile ? '2.5rem' : '4rem',
          paddingTop: isMobile ? '2rem' : '3rem',
        }}>
          {[
            { num: '30+', label: 'Years Experience' },
            { num: '5000+', label: 'Happy Clients' },
            { num: '100+', label: 'Destinations' },
            { num: '2', label: 'Services Under One Roof' },
          ].map((s, i) => (
            <div key={i} style={styles.stat}>
              <div style={styles.statNum}>{s.num}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a1628 0%, #1a3a6b 50%, #1e4080 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden', padding: '6rem 1.25rem 4rem'
  },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 60%)'
  },
  content: { position: 'relative', textAlign: 'center', maxWidth: '800px', width: '100%' },
  badge: {
    display: 'inline-block',
    background: 'rgba(59,130,246,0.2)',
    border: '1px solid rgba(59,130,246,0.4)',
    color: '#3b82f6', padding: '0.4rem 1.2rem',
    fontSize: '0.72rem', letterSpacing: '0.25em',
    textTransform: 'uppercase', borderRadius: '100px', marginBottom: '1.5rem'
  },
  title: {
    fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)',
    fontWeight: '900', color: '#ffffff', lineHeight: '1.1', marginBottom: '0.5rem'
  },
  gold: { color: '#f59e0b' },
  subtitle: {
    fontFamily: 'Georgia, serif', fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
    color: '#3b82f6', letterSpacing: '0.15em',
    textTransform: 'uppercase', marginBottom: '1.5rem'
  },
  desc: {
    color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
    lineHeight: '1.8', maxWidth: '560px', margin: '0 auto 2.5rem'
  },
  btns: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' },
  btnPrimary: {
    background: '#3b82f6', color: 'white', padding: '0.85rem 2rem',
    borderRadius: '3px', textDecoration: 'none', fontWeight: '600', fontSize: '0.88rem'
  },
  btnOutline: {
    border: '1px solid rgba(255,255,255,0.3)', color: 'white',
    padding: '0.85rem 2rem', borderRadius: '3px',
    textDecoration: 'none', fontWeight: '500', fontSize: '0.88rem'
  },
  stats: {
    display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  },
  stat: { textAlign: 'center' },
  statNum: { fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', color: '#f59e0b' },
  statLabel: { fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }
};

export default Hero;