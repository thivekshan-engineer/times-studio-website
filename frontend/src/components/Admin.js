import React, { useState } from 'react';
import axios from 'axios';

function Admin() {
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('/api/bookings', {
        headers: { 'x-admin-password': password }
      });
      setBookings(res.data.data);
      setLoggedIn(true);
    } catch (err) {
      setError('Wrong password! Please try again.');
    }
    setLoading(false);
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/bookings', {
        headers: { 'x-admin-password': password }
      });
      setBookings(res.data.data);
    } catch (err) {
      setError('Failed to refresh.');
    }
    setLoading(false);
  };

  if (!loggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginBox}>
          <h2 style={styles.loginTitle}>🔐 Admin Login</h2>
          <p style={styles.loginSubtitle}>Times Studio Admin Panel</p>
          {error && <div style={styles.errorMsg}>{error}</div>}
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.loginInput}
              required
            />
            <button type="submit" style={styles.loginBtn} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.adminPage}>
      <div style={styles.adminHeader}>
        <div>
          <h1 style={styles.adminTitle}>📋 Bookings Dashboard</h1>
          <p style={styles.adminSubtitle}>Times Studio & T Marin Air Travels</p>
        </div>
        <div style={styles.headerRight}>
          <span style={styles.totalBadge}>{bookings.length} Total Bookings</span>
          <button onClick={handleRefresh} style={styles.refreshBtn} disabled={loading}>
            {loading ? '...' : '🔄 Refresh'}
          </button>
          <button onClick={() => setLoggedIn(false)} style={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div style={styles.noBookings}>
          <p>No bookings yet!</p>
        </div>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHead}>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Service</th>
                <th style={styles.th}>Message</th>
                <th style={styles.th}>Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={b._id} style={i % 2 === 0 ? styles.trEven : styles.trOdd}>
                  <td style={styles.td}>{i + 1}</td>
                  <td style={styles.td}><strong>{b.firstName}</strong></td>
                  <td style={styles.td}>{b.phone}</td>
                  <td style={styles.td}>{b.email}</td>
                  <td style={styles.td}>
                    <span style={styles.serviceBadge}>{b.service}</span>
                  </td>
                  <td style={styles.td}>{b.message || '-'}</td>
                  <td style={styles.td}>
                    {new Date(b.createdAt).toLocaleDateString('en-GB', {
                      day: '2-digit', month: 'short', year: 'numeric',
                      hour: '2-digit', minute: '2-digit'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {
  loginPage: { minHeight: '100vh', background: 'linear-gradient(135deg, #0a1628, #1a3a6b)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  loginBox: { background: 'white', padding: '3rem', borderRadius: '12px', width: '100%', maxWidth: '400px', textAlign: 'center' },
  loginTitle: { color: '#0a1628', fontSize: '1.8rem', marginBottom: '0.5rem' },
  loginSubtitle: { color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' },
  errorMsg: { background: '#fee2e2', color: '#991b1b', padding: '0.75rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.85rem' },
  loginInput: { width: '100%', padding: '0.85rem 1rem', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem', marginBottom: '1rem', boxSizing: 'border-box' },
  loginBtn: { width: '100%', padding: '0.85rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' },
  adminPage: { minHeight: '100vh', background: '#f1f5f9', padding: '2rem' },
  adminHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '1.5rem 2rem', borderRadius: '10px', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' },
  adminTitle: { color: '#0a1628', fontSize: '1.5rem', margin: 0 },
  adminSubtitle: { color: '#64748b', fontSize: '0.85rem', margin: '0.25rem 0 0' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '1rem' },
  totalBadge: { background: '#dbeafe', color: '#1d4ed8', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' },
  refreshBtn: { padding: '0.5rem 1rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' },
  logoutBtn: { padding: '0.5rem 1rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' },
  noBookings: { textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '10px', color: '#64748b', fontSize: '1.1rem' },
  tableWrapper: { background: 'white', borderRadius: '10px', overflow: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' },
  tableHead: { background: '#0a1628' },
  th: { padding: '1rem 1.25rem', color: 'white', textAlign: 'left', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' },
  trEven: { background: 'white' },
  trOdd: { background: '#f8fafc' },
  td: { padding: '1rem 1.25rem', color: '#334155', borderBottom: '1px solid #e2e8f0' },
  serviceBadge: { background: '#fef3c7', color: '#d97706', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '600' },
};

export default Admin;