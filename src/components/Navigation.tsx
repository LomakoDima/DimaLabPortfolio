import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const navClasses = scrolled 
    ? 'fixed top-0 left-0 right-0 bg-space-medium bg-opacity-80 backdrop-blur-md shadow-lg z-50 transition-all duration-300'
    : 'fixed top-0 left-0 right-0 bg-transparent z-50 transition-all duration-300';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="text-2xl font-heading font-bold text-space-highlight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cosmic<span className="text-white">Dev</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-space-highlight transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-space-highlight transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-space-highlight transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-space-highlight transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-space-medium bg-opacity-95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="block text-gray-300 hover:text-space-highlight transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-space-highlight transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-space-highlight transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-space-highlight transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;