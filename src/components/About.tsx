import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
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

  const features = [
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description: "I write elegant, maintainable code that follows best practices and industry standards."
    },
    {
      icon: <Globe size={24} />,
      title: "Responsive Design",
      description: "Creating websites that look and function beautifully on all devices is my passion."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solver",
      description: "I thrive on tackling complex challenges and finding elegant solutions."
    },
    {
      icon: <Rocket size={24} />,
      title: "Fast Learner",
      description: "I quickly adapt to new technologies and methodologies to stay at the cutting edge."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              About <span className="text-space-highlight">Me</span>
            </h2>
            <div className="h-1 w-24 bg-space-highlight mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              I'm a passionate developer with a love for creating immersive digital experiences.
              When I'm not coding, you can find me exploring new technologies, gaming, or gazing at the stars.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-space-medium bg-opacity-50 p-8 rounded-xl border border-space-light">
              <h3 className="text-2xl font-heading font-bold mb-4 text-space-highlight">My Journey</h3>
              <p className="text-gray-300 mb-4">
                My adventure in the digital cosmos began when I was just 12 years old, tinkering with HTML and CSS to create my first website.
                That spark of creation ignited a lifelong passion for development.
              </p>
              <p className="text-gray-300">
                Over the years, I've expanded my skills across the full stack, embracing new technologies and methodologies
                while maintaining a focus on creating seamless, user-centric experiences.
              </p>
            </div>
            <div className="bg-space-medium bg-opacity-50 p-8 rounded-xl border border-space-light">
              <h3 className="text-2xl font-heading font-bold mb-4 text-space-highlight">My Approach</h3>
              <p className="text-gray-300 mb-4">
                I believe in building applications that not only function flawlessly but also delight users with their
                intuitive design and smooth interactions.
              </p>
              <p className="text-gray-300">
                My development philosophy centers around clean code, thoughtful architecture, and attention to detail.
                I'm passionate about creating solutions that solve real problems while providing exceptional user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-space-medium bg-opacity-30 p-6 rounded-xl border border-space-light hover:border-space-highlight transition-all duration-300 hover:shadow-cosmic"
              >
                <div className="w-12 h-12 bg-space-light rounded-lg flex items-center justify-center mb-4 text-space-highlight">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-space-cosmic rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-space-nebula rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
    </section>
  );
};

export default About;