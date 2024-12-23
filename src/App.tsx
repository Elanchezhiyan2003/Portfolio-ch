import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;