import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection.jsx';
import CelebrationEvents from './components/CelebrationEvents.jsx';
import SacredAnimals from './components/SacredAnimals.jsx';
import Traditions from './components/Traditions.jsx';
import Blessings from './components/Blessings.jsx';
import Footer from './components/Footer.jsx';
import {
  animals,
  traditions,
  celebrations,
  islamicPatterns,
} from './data/data.js';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleLoad = () => setIsVisible(true);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleLoad);

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleLoad);
      clearInterval(timer);
    };
  }, []);


  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-yellow-50 to-rose-50 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection isVisible={isVisible} currentTime={currentTime} islamicPatterns={islamicPatterns} />
      <CelebrationEvents celebrations={celebrations} scrollY={scrollY} />
      <SacredAnimals animals={animals} scrollY={scrollY} />
      <Traditions traditions={traditions} scrollY={scrollY} />
      <Blessings scrollY={scrollY} />
      <Footer islamicPatterns={islamicPatterns} />
    </motion.div>
  );
}

export default App;