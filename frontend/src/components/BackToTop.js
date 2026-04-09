import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '30px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#1a3a6b',
        color: 'white',
        border: 'none',
        fontSize: '1.2rem',
        cursor: 'pointer',
        zIndex: 9998,
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#3b82f6'}
      onMouseLeave={e => e.currentTarget.style.background = '#1a3a6b'}
    >
      ↑
    </button>
  );
}

export default BackToTop;