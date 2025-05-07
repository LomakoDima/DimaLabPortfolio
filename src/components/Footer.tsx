import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a href="#home" className="inline-block text-2xl font-heading font-bold text-space-highlight mb-6">
            Cosmic<span className="text-white">Dev</span>
          </a>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-space-highlight transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-space-highlight transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-space-highlight transition-colors">
              <Twitter size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-space-highlight transition-colors">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-4 mb-8">
            <a href="#home" className="text-gray-400 hover:text-space-highlight transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-space-highlight transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-space-highlight transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-space-highlight transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-space-highlight transition-colors">Contact</a>
          </div>
          
          <div className="h-px w-full max-w-md mx-auto bg-gray-700 mb-8"></div>
          
          <p className="text-gray-400">
            © {currentYear} CosmicDev. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm mt-2">
            Designed and built with ❤️ and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;