import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
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

  const projects: Project[] = [
    {
      title: "GoUniver",
      description: "A real-time chat application with end-to-end encryption and cosmic-themed UI. Supports text, voice, and video communication.",
      image: "/images/gouniver.jpg",
      tags: ["HTML & CSS", "JavaScript", "PHP", "SQL"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      featured: true
    },
    {
      title: "ТурГид",
      description: "An interactive 3D visualization of our solar system with educational information about each planet and celestial body.",
      image: "/images/tour.jpg",
      tags: ["HTML & CSS", "JavaScript", "SQlite", "Python"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    {
      title: "MineGUI",
      description: "A lightweight content management system optimized for blogs and portfolio websites with a sleek admin interface.",
      image: "/images/mineguiin.jpg",
      tags: ["Java"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    /*{
      title: "Minecraft Galaxy Mod",
      description: "A popular Minecraft mod that adds space exploration, new planets, alien creatures, and cosmic resources to the game.",
      image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Java", "Forge API", "3D Modeling", "Game Design"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      featured: true
    }*/
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              My <span className="text-space-highlight">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-space-highlight mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Explore my digital creations. Each project represents a unique challenge and solution, 
              showcasing different aspects of my skills and creativity.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`group bg-space-medium bg-opacity-50 rounded-xl overflow-hidden border border-space-light hover:border-space-highlight transition-all duration-500 ${
                  project.featured ? 'shadow-cosmic hover:shadow-nebula' : ''
                }`}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-space-cosmic px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star size={14} />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-space-dark bg-opacity-80 px-3 py-1 rounded-full text-xs font-medium text-space-highlight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-space-highlight">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-space-highlight transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-space-highlight transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-space-highlight text-space-highlight rounded-lg hover:bg-space-highlight hover:text-space-dark transition-all duration-300"
            >
              <Github size={20} />
              <span>View More Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-48 h-48 bg-space-nebula rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-space-accent rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
    </section>
  );
};

export default Projects;