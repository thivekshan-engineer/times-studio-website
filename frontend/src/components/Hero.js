import React, { useState, useEffect, useRef } from 'react';

function useCounter(end, duration, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [started, end, duration]);
  return count;
}

function StatItem({ num, label, started }) {
  const numericStr = num.replace(/[^0-9]/g, '');
  const suffix = num.replace(/[0-9]/g, '');
  const numeric = parseInt(numericStr, 10);
  const count = useCounter(numeric, 2000, started);
  return (
    <div style={styles.stat}>
      <div style={styles.statNum}>{count}{suffix}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

const phrases = ['Professional Photography', 'Air Travel Services', 'Framing & More'];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 5,
}));

function Hero() {
  const isMobile = window.innerWidth <= 768;
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setPhraseIndex((phraseIndex + 1) % phrases.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, phraseIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { num: '30+', label: 'Years Experience' },
    { num: '5000+', label: 'Happy Clients' },
    { num: '100+', label: 'Destinations' },
    { num: '2', label: 'Services Under One Roof' },
  ];

  return (
    <section style={styles.hero} id="home">
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <div style={styles.overlay}></div>

      {/* Floating Particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.left}%`,
          top: `${p.top}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          borderRadius: '50%',
          background: 'rgba(245, 158, 11, 0.6)',
          animation: `floatUp ${p.duration}s ${p.delay}s infinite linear`,
          pointerEvents: 'none',
          zIndex: 0
        }} />
      ))}

      <div style={styles.content}>
        <div style={styles.badge}>📍 Batticaloa, Sri Lanka</div>
        <h1 style={styles.title}>Times <span style={styles.gold}>Studio</span></h1>
        <div style={styles.subtitle}>& T Marin Air Travels</div>
        <div style={styles.typingBox}>
          <span style={styles.typingText}>{displayed}</span>
          <span style={styles.cursor}>|</span>
        </div>
        <p style={styles.desc}>
          Your trusted destination for professional photography services
          and seamless air travel arrangements in Batticaloa.
          From passport photos to international flights — we handle it all.
        </p>
        <div style={styles.btns}>
          <a href="#services" style={styles.btnPrimary}>Explore Services</a>
          <a href="#contact" style={styles.btnOutline}>Contact Us</a>
        </div>
        <div ref={ref} style={{
          ...styles.stats,
          gap: isMobile ? '1.5rem' : '3rem',
          marginTop: isMobile ? '2.5rem' : '4rem',
          paddingTop: isMobile ? '2rem' : '3rem',
        }}>
          {stats.map((s, i) => (
            <StatItem key={i} num={s.num} label={s.label} started={started} />
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '6rem 1.25rem 4rem'
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 60%)'
  },
  content: {
    position: 'relative',
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
    zIndex: 1
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(59,130,246,0.2)',
    border: '1px solid rgba(59,130,246,0.4)',
    color: '#3b82f6',
    padding: '0.4rem 1.2rem',
    fontSize: '0.72rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    borderRadius: '100px',
    marginBottom: '1.5rem'
  },
  title: {
    fontFamily: 'Georgia, serif',
    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
    fontWeight: '900',
    color: '#ffffff',
    lineHeight: '1.1',
    marginBottom: '0.5rem'
  },
  gold: { color: '#f59e0b' },
  subtitle: {
    fontFamily: 'Georgia, serif',
    fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
    color: '#3b82f6',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '1rem'
  },
  typingBox: {
    height: '2rem',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  typingText: {
    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
    color: '#f59e0b',
    fontFamily: 'Georgia, serif',
    fontWeight: '600'
  },
  cursor: {
    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
    color: '#f59e0b',
    marginLeft: '2px'
  },
  desc: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
    lineHeight: '1.8',
    maxWidth: '560px',
    margin: '0 auto 2.5rem'
  },
  btns: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' },
  btnPrimary: {
    background: '#3b82f6',
    color: 'white',
    padding: '0.85rem 2rem',
    borderRadius: '3px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.88rem'
  },
  btnOutline: {
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    padding: '0.85rem 2rem',
    borderRadius: '3px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.88rem'
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  },
  stat: { textAlign: 'center' },
  statNum: {
    fontFamily: 'Georgia, serif',
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: '700',
    color: '#f59e0b'
  },
  statLabel: {
    fontSize: '0.72rem',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginTop: '0.25rem'
  }
};

export default Hero;