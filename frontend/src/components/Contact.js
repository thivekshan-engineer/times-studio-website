import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', phone: '', email: '', service: '', message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/bookings', formData);
      setStatus('success');
      setFormData({ firstName: '', phone: '', email: '', service: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
    setLoading(false);
  };

  return (
    <section style={styles.section} id="contact">
      <div style={styles.container}>
        <div style={styles.grid}>
          <div>
            <p style={styles.tag}>Get In Touch</p>
            <h2 style={styles.title}>Book An Appointment</h2>
            <p style={styles.desc}>Visit us in Batticaloa or send us a message and we will get back to you shortly.</p>
            <div style={styles.contactItems}>
              {[
                { icon: '📍', title: 'Address', text: '21/3 Munai Street, Batticaloa, Sri Lanka' },
                { icon: '📞', title: 'Phone', text: '076 108 2959 / 077 200 9686' },
                { icon: '📧', title: 'Email', text: 'timesbatti@gmail.com' },
              ].map((item, i) => (
                <div key={i} style={styles.contactItem}>
                  <div style={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <h4 style={styles.contactTitle}>{item.title}</h4>
                    <p style={styles.contactText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.hours}>
              <div style={styles.hoursRow}>
                <span>Monday — Saturday</span>
                <span style={styles.hoursTime}>9:00 AM — 8:00 PM</span>
              </div>
              <div style={styles.hoursRow}>
                <span>Sunday</span>
                <span style={styles.hoursTime}>Closed</span>
              </div>
            </div>
          </div>
          <div style={styles.form}>
            <h3 style={styles.formTitle}>Send Us a Message</h3>
            {status === 'success' && (
              <div style={styles.successMsg}>
                ✅ Message sent successfully! We will contact you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={styles.errorMsg}>
                ❌ Something went wrong. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>First Name</label>
                  <input
                    style={styles.input} type="text"
                    name="firstName" value={formData.firstName}
                    onChange={handleChange} placeholder="Your name"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number</label>
                  <input
                    style={styles.input} type="tel"
                    name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="07X XXX XXXX"
                  />
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  style={styles.input} type="email"
                  name="email" value={formData.email}
                  onChange={handleChange} placeholder="your@email.com"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Service Required</label>
                <select
                  style={styles.input} name="service"
                  value={formData.service} onChange={handleChange}
                >
                  <option value="">Select a service...</option>
                  <option>NIC Photos</option>
                  <option>Passport Size Photos</option>
                  <option>Studio Sitting</option>
                  <option>Glass / Door Frames</option>
                  <option>Flight Booking</option>
                  <option>Visa Arrangement</option>
                  <option>Travel Package</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  style={{ ...styles.input, height: '100px', resize: 'none' }}
                  name="message" value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about what you need..."
                />
              </div>
              <button
                type="submit"
                style={styles.submitBtn}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message ✈️'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '6rem 2rem', background: 'linear-gradient(135deg, #0a1628, #1a3a6b)' },
  container: { maxWidth: '1100px', margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' },
  tag: { fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#f59e0b', fontWeight: '600', marginBottom: '0.75rem' },
  title: { fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', color: 'white', marginBottom: '1rem' },
  desc: { color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' },
  contactItems: { display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' },
  contactItem: { display: 'flex', gap: '1rem', alignItems: 'flex-start' },
  contactIcon: { width: '42px', height: '42px', background: 'rgba(59,130,246,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0, lineHeight: '42px', textAlign: 'center' },
  contactTitle: { fontWeight: '600', fontSize: '0.88rem', color: 'white', marginBottom: '0.2rem' },
  contactText: { fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6' },
  hours: { background: 'rgba(255,255,255,0.08)', padding: '1.25rem', borderRadius: '6px' },
  hoursRow: { display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', marginBottom: '0.5rem' },
  hoursTime: { color: '#f59e0b', fontWeight: '600' },
  form: { background: 'white', borderRadius: '8px', padding: '2.5rem' },
  formTitle: { fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: '#0a1628', marginBottom: '1.5rem' },
  successMsg: { background: '#d1fae5', color: '#065f46', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '1rem' },
  errorMsg: { background: '#fee2e2', color: '#991b1b', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '1rem' },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  formGroup: { marginBottom: '1.25rem' },
  label: { display: 'block', fontSize: '0.78rem', fontWeight: '600', color: '#0a1628', marginBottom: '0.4rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  input: { width: '100%', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '4px', fontSize: '0.88rem', color: '#1e293b', background: '#f8fafc', fontFamily: 'inherit' },
  submitBtn: { width: '100%', padding: '0.9rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer', letterSpacing: '0.05em' }
};

export default Contact;