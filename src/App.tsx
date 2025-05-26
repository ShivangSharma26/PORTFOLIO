import React, { useState, useEffect } from 'react';
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Projects,
  Skills,
  Timeline,
  StarsCanvas,
} from './components';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative z-0">
          <ParticleBackground />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </>
  );
}

export default App;