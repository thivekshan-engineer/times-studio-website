import React from 'react';

function Footer() {
  const isMobile = window.innerWidth <= 768;

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Google Maps Section */}
        <div style={styles.mapSection}>
          <div style={styles.mapHeader}>
            <p style={styles.mapTag}>Find Us</p>
            <h3 style={styles.mapTitle}>Visit Our Studio</h3>
            <p style={styles.mapDesc}>21/3 Munai Street, Batticaloa, Sri Lanka</p>
          </div>
          <div style={styles.mapWrapper}>
            <iframe
              title="Times Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.234!2d81.6924!3d7.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDMnMDIuMCJOIDgxwrA0MSczMi42IkU!5e0!3m2!1sen!2slk!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Footer Grid */}
        <div style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr',
          gap: isMobile ? '2rem' : '3rem'
        }}>
          <div>
            <div style={styles.brandName}>Times Studio</div>
            <div style={styles.brandSub}>& T Marin Air Travels</div>
            <p style={styles.desc}>
              Founded by Mr. Umeshwaran Kaasilingam, your trusted
              photography studio and travel agency in Batticaloa
              for over 30 years. Professional, reliable, and always
              at your service.
            </p>
            <div style={styles.socialRow}>
              <a href="https://wa.me/94761082959" target="_blank" rel="noopener noreferrer" style={styles.socialBtn}>WhatsApp</a>
              <a href="mailto:timesbatti@gmail.com" style={styles.socialBtn}>Email</a>
            </div>
          </div>
          <div>
            <div style={styles.heading}>Quick Links</div>
            <ul style={styles.links}>
              {['Photography', 'Air Travels', 'Framing', 'Gallery', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase()}`} style={styles.link}>→ {link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={styles.heading}>Contact Us</div>
            <ul style={styles.links}>
              <li><span style={styles.link}>📍 21/3 Munai Street, Batticaloa</span></li>
              <li><a href="tel:0761082959" style={styles.link}>📞 076 108 2959</a></li>
              <li><a href="tel:0772009686" style={styles.link}>📞 077 200 9686</a></li>
              <li><a href="mailto:timesbatti@gmail.com" style={styles.link}>✉️ timesbatti@gmail.com</a></li>
              <li><span style={styles.link}>🕐 Mon–Sat: 9AM – 8PM</span></li>
              <li><span style={{ ...styles.link, color: '#ef4444' }}>🔴 Sunday: Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          ...styles.bottom,
          flexDirection: isMobile ? 'column' : 'row',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <span>© 2025 Times Studio & T Marin Air Travels. All rights reserved.</span>
          <span>Built with ❤️ by <a href="https://github.com/thivekshan-engineer" style={styles.creditLink}>Thivekshan Rajkumar</a></span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { background: '#0a1628', color: 'rgba(255,255,255,0.7)', padding: '4rem 1.25rem 2rem' },
  container: { maxWidth: '1100px', margin: '0 auto' },
  mapSection: { marginBottom: '3rem' },
  mapHeader: { textAlign: 'center', marginBottom: '1.5rem' },
  mapTag: { fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#3b82f6', fontWeight: '600', marginBottom: '0.5rem' },
  mapTitle: { fontFamily: 'Georgia, serif', color: 'white', fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem' },
  mapDesc: { color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' },
  mapWrapper: { borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' },
  grid: { display: 'grid', marginBottom: '3rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)' },
  brandName: { fontFamily: 'Georgia, serif', color: 'white', fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.25rem' },
  brandSub: { fontSize: '0.7rem', color: '#3b82f6', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' },
  desc: { fontSize: '0.83rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem' },
  socialRow: { display: 'flex', gap: '0.75rem' },
  socialBtn: { padding: '0.4rem 1rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '3px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.75rem' },
  heading: { fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', marginBottom: '1rem' },
  links: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' },
  link: { color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.83rem' },
  bottom: { paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', gap: '0.5rem' },
  creditLink: { color: '#3b82f6', textDecoration: 'none' }
};

export default Footer;