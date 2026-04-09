import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

function App() {
  var isAdmin = window.location.pathname === '/admin';
  var loadingState = useState(true);
  var loading = loadingState[0];
  var setLoading = loadingState[1];

  useEffect(function() {
    var timer = setTimeout(function() {
      setLoading(false);
    }, 2000);
    return function() {
      clearTimeout(timer);
    };
  }, [setLoading]);

  if (isAdmin) {
    return React.createElement(Admin, null);
  }

  if (loading) {
    return React.createElement(LoadingScreen, null);
  }

  return React.createElement(
    'div',
    null,
    React.createElement(Navbar, null),
    React.createElement(Hero, null),
    React.createElement(Services, null),
    React.createElement(WhyUs, null),
    React.createElement(Gallery, null),
    React.createElement(Contact, null),
    React.createElement(Footer, null),
    React.createElement(WhatsAppButton, null)
  );
}

export default App;