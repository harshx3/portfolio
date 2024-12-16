import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;