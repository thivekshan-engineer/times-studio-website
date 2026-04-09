import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  var isAdmin = window.location.pathname === '/admin';

  if (isAdmin) {
    return <Admin />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;