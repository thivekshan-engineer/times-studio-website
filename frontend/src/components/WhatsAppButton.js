import React from 'react';

function WhatsAppButton() {
  var style = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50px',
    padding: '14px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    boxShadow: '0 4px 15px rgba(37,211,102,0.4)',
    zIndex: 9999
  };

  return (
    <a href="https://wa.me/94761082959" target="_blank" rel="noopener noreferrer" style={style}>
      Chat on WhatsApp
    </a>
  );
}

export default WhatsAppButton;