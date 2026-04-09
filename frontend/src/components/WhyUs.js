import React, { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function WhyUs() {
  const isMobile = window.innerWidth <= 768;
  const [ref1, vis1] = useReveal();
  const [ref2, vis2] = useReveal();
  const [ref3, vis3] = useReveal();
  const [ref4, vis4] = useReveal();
  const [ref5, vis5] = useReveal();

  const revealStyle = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
  });

  return (
    <section style={styles.section} id="why">
      <div style={styles.container}>
        <div style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '2rem' : '4rem'
        }}>
          <div>
            <div ref={ref1} style={revealStyle(vis1, 0)}>
              <p style={styles.tag}>Why Choose Us</p>
              <h2 style={styles.title}>Batticaloa's Most Trusted Studio</h2>
              <p style={styles.desc}>Under the leadership of <strong>Mr. Umeshwaran Kaasilingam</strong>, we have been serving the Batticaloa community with dedication and professionalism for over 30 years.</p>
            </div>
            <div style={styles.features}>
              {[
                { icon: '⚡', title: 'Fast Turnaround', desc: 'Most photo services completed same day. No long waiting times.' },
                { icon: '🎯', title: 'Government Approved Standards', desc: 'All ID and passport photos meet official government requirements.' },
                { icon: '✈️', title: 'One Stop Travel Shop', desc: 'Photos, visa, and flights — all in one convenient location.' },
                { icon: '💬', title: 'Friendly Local Service', desc: 'Serving Batticaloa with warmth and professionalism since day one.' },
              ].map((f, i) => (
                <div key={i} ref={[ref2, ref3, ref4, ref5][i]} style={{ ...styles.feature, ...revealStyle([vis2, vis3, vis4, vis5][i], i * 0.15) }}>
                  <div style={styles.featureIcon}>{f.icon}</div>
                  <div>
                    <h4 style={styles.featureTitle}>{f.title}</h4>
                    <p style={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div ref={ref2} style={{ ...styles.card, ...revealStyle(vis2, 0.2) }}>
            <div style={styles.cardTitle}>Times Studio & T Marin Air Travels</div>
            <p style={styles.cardDesc}>Founded and led by Mr. Umeshwaran Kaasilingam, your trusted one-stop destination for photography and travel needs in Batticaloa for over 30 years.</p>
            <div style={styles.statsGrid}>
              {[
                { num: '30+', label: 'Years Serving' },
                { num: '5K+', label: 'Happy Clients' },
                { num: '100+', label: 'Destinations' },
                { num: '2', label: 'Services' },
              ].map((s, i) => (
                <div key={i} style={styles.stat}>
                  <div style={styles.statNum}>{s.num}</div>
                  <div style={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 1.25rem', background: '#ffffff' },
  container: { maxWidth: '1100px', margin: '0 auto' },
  grid: { display: 'grid', alignItems: 'center' },
  tag: { fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#3b82f6', fontWeight: '600', marginBottom: '0.75rem' },
  title: { fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', color: '#0a1628', marginBottom: '1rem' },
  desc: { color: '#64748b', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' },
  features: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  feature: { display: 'flex', gap: '1rem', alignItems: 'flex-start' },
  featureIcon: { width: '44px', height: '44px', background: '#e8f0fe', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, lineHeight: '44px', textAlign: 'center' },
  featureTitle: { fontWeight: '600', fontSize: '0.95rem', color: '#0a1628', marginBottom: '0.25rem' },
  featureDesc: { fontSize: '0.83rem', color: '#64748b', lineHeight: '1.6' },
  card: { background: 'linear-gradient(135deg, #0a1628, #1a3a6b)', borderRadius: '12px', padding: '2rem', color: 'white' },
  cardTitle: { fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem' },
  cardDesc: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '2rem' },
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  stat: { background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '6px' },
  statNum: { fontFamily: 'Georgia, serif', fontSize: '1.8rem', fontWeight: '700', color: '#f59e0b' },
  statLabel: { fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }
};

export default WhyUs;