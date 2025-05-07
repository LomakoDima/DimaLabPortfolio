import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink, Award, Layers } from 'lucide-react';
import Projects from './Projects';
import Certificates from './Certificates';
import TechStack from './TechStack';

const PortfolioShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const tabs = [
    { id: 'projects', label: 'Projects', icon: <Code size={20} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={20} /> },
    { id: 'techstack', label: 'Tech Stack', icon: <Layers size={20} /> },
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Portfolio <span className="text-space-highlight">Showcase</span>
            </h2>
            <div className="h-1 w-24 bg-space-highlight mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex justify-center space-x-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-space-highlight text-space-dark'
                      : 'bg-space-medium text-gray-300 hover:bg-space-light'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[600px]">
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'certificates' && <Certificates />}
              {activeTab === 'techstack' && <TechStack />}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-40 h-40 bg-space-nebula rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-space-cosmic rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
    </section>
  );
};

export default PortfolioShowcase;