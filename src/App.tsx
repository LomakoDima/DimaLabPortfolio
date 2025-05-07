import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-space-medium text-white overflow-hidden relative">
      <ParticleBackground />
      <Layout>
        <Hero />
        <About />
        <PortfolioShowcase />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;