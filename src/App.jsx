import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'education',
      'skills',
      'projects',
      'gallery',
      'why-choose-me',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      {/* Section 1: Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow-1">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: About Me */}
        <About />

        {/* Section 4: Education */}
        <Education />

        {/* Section 5: Technical Skills */}
        <Skills />

        {/* Section 6: Projects Portfolio */}
        <Projects />

        {/* Section 7: Project Gallery */}
        <Gallery />

        {/* Section 8: Why Choose Me */}
        <WhyChooseMe />

        {/* Section 9: Contact */}
        <Contact />
      </main>

      {/* Section 10: Footer */}
      <Footer />

      {/* Auxiliary Floating Utilities */}
      <BackToTop />
    </div>
  );
}

export default App;
