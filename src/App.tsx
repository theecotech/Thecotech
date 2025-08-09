import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBotEmbed from './components/ChatBotEmbed'; // 👈 added

import WhatsAppButton from './components/WhatsAppButton'; 
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <ChatBotEmbed /> {/* 👈 chatbot appears here */}
      <WhatsAppButton />
    </div>
  );
}

export default App;


