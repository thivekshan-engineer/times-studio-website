import React, { useState } from 'react';

const tabs = {
  photography: [
    { icon: '🪪', name: 'NIC Photos', desc: 'Professional National Identity Card photos taken to exact government specifications. Quick service with same-day delivery.', tag: '✓ Same Day Ready' },
    { icon: '🛂', name: 'Passport Size Photos', desc: 'High quality passport and visa photos meeting international standards for all countries. Multiple sizes available.', tag: '✓ International Standards' },
    { icon: '📸', name: 'Studio Sittings', desc: 'Professional studio photography sessions with expert lighting and backdrops. Perfect for formal portraits.', tag: '✓ Professional Setup' },
    { icon: '🎓', name: 'Formal & Academic Photos', desc: 'Graduation, school, and formal ID photographs taken with precision and care. Printed and delivered quickly.', tag: '✓ Bulk Orders Welcome' },
  ],
  airtravel: [
    { icon: '✈️', name: 'Flight Bookings', desc: 'Domestic and international flight bookings at the best available prices. We compare fares to get you the best deal.', tag: '✓ Best Price Guarantee' },
    { icon: '🌍', name: 'Visa Arrangements', desc: 'Full visa application assistance for all major destinations. We guide you through every step of the process.', tag: '✓ All Countries' },
    { icon: '🏨', name: 'Travel Packages', desc: 'Complete holiday and business travel packages including flights, accommodation and transfers.', tag: '✓ Complete Packages' },
    { icon: '📋', name: 'Travel Documentation', desc: 'Assistance with all travel related documentation including insurance, itineraries and travel advisories.', tag: '✓ Full Support' },
  ],
  framing: [
    { icon: '🪟', name: 'Glass Frames', desc: 'Premium quality glass frames for photos, certificates and artwork. Available in a wide range of sizes and styles.', tag: '✓ Custom Sizes' },
    { icon: '🚪', name: 'Door Frames', desc: 'Beautiful door frame photo displays to showcase your cherished memories. High quality printing and framing.', tag: '✓ Premium Quality' },
    { icon: '🖼️', name: 'Photo Printing', desc: 'High resolution photo printing in all standard and custom sizes. Vibrant colours and long lasting prints.', tag: '✓ HD Printing' },
    { icon: '🏅', name: 'Certificate Framing', desc: 'Professional framing for certificates, awards and diplomas. Preserve and display your achievements beautifully.', tag: '✓ Preservation Quality' },
  ]
};

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '6px',
        padding: '1.75rem',
        border: hovered ? '1px solid #3b82f6' : '1px solid rgba(59,130,246,0.1)',
        boxShadow: hovered ? '0 12px 40px rgba(59,130,246,0.15)' : '0 2px 20px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{service.icon}</div>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', fontWeight: '700', color: '#0a1628', marginBottom: '0.5rem' }}>{service.name}</div>
      <div style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.7', marginBottom: '1rem' }}>{service.desc}</div>
      <div style={{ fontSize: '0.78rem', fontWeight: '600', color: hovered ? '#1d4ed8' : '#3b82f6' }}>{service.tag}</div>
    </div>
  );
}

function Services() {
  const [activeTab, setActiveTab] = useState('photography');
  const isMobile = window.innerWidth <= 768;

  return (
    <section style={styles.section} id="services">
      <div style={styles.container}>
        <p style={styles.tag}>What We Offer</p>
        <h2 style={styles.title}>Our Services</h2>
        <p style={styles.desc}>Professional photography and travel services all available under one roof in the heart of Batticaloa.</p>
        <div style={styles.tabs}>
          {['photography', 'airtravel', 'framing'].map(tab => (
            <button
              key={tab}
              style={{ ...styles.tabBtn, ...(activeTab === tab ? styles.tabBtnActive : {}) }}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'photography' ? '📸 Photography' : tab === 'airtravel' ? '✈️ Air Travels' : '🖼️ Framing'}
            </button>
          ))}
        </div>
        <div style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))'
        }}>
          {tabs[activeTab].map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 1.25rem', background: '#e8f0fe' },
  container: { maxWidth: '1100px', margin: '0 auto' },
  tag: { fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#3b82f6', fontWeight: '600', marginBottom: '0.75rem' },
  title: { fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', color: '#0a1628', marginBottom: '1rem' },
  desc: { color: '#64748b', fontSize: '1rem', lineHeight: '1.8', maxWidth: '560px', marginBottom: '2.5rem' },
  tabs: { display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' },
  tabBtn: { padding: '0.65rem 1.25rem', border: '2px solid #3b82f6', background: 'transparent', color: '#3b82f6', fontSize: '0.82rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '3px', flex: '1', minWidth: '120px', textAlign: 'center' },
  tabBtnActive: { background: '#3b82f6', color: 'white' },
  grid: { display: 'grid', gap: '1.25rem' },
};

export default Services;