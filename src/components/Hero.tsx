import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const WORDS = ["Fullstack Developer", "Pixel & Bug Master", "Minecraft Modding Wizard"];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, currentWordIndex, isDeleting, currentWord]);

  const tick = () => {
    const fullWord = WORDS[currentWordIndex];
    const updatedText = isDeleting 
      ? fullWord.substring(0, text.length - 1) 
      : fullWord.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullWord) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
      setDelta(500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-16">
      {/* Hero content */}
      <motion.div 
        className="container mx-auto px-4 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-space-nebula to-space-accent rounded-lg blur opacity-50"></div>
            <span className="relative bg-space-medium px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wider">
              Welcome to my universe
            </span>
          </div>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white"
        >
          Hey, I'm <span className="text-space-highlight">DimaLab</span>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="h-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-heading">
            I'm a{' '}
            <span className="text-space-highlight inline-block min-w-48">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
        </motion.div>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg"
        >
          Exploring the digital cosmos, creating elegant solutions, and turning complex problems into beautiful, functional experiences.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-space-accent text-white font-medium rounded-lg transition-all hover:bg-space-highlight hover:shadow-cosmic"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border border-space-highlight text-space-highlight font-medium rounded-lg transition-all hover:bg-space-highlight/10"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
      >
        <ChevronDown size={32} className="text-space-highlight" />
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-space-nebula rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-space-accent rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;