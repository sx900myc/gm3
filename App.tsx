import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-nexus-dark text-slate-200 font-sans selection:bg-nexus-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;