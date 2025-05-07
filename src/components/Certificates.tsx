import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
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

  const certificates = [
    {
      title: "Advanced Web Development",
      issuer: "Udacity",
      date: "2023",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://example.com/cert1"
    },
    {
      title: "Python Programming Masterclass",
      issuer: "Coursera",
      date: "2023",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://example.com/cert2"
    },
    {
      title: "Java Development Professional",
      issuer: "Oracle",
      date: "2022",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://example.com/cert3"
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
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
              My <span className="text-space-highlight">Certificates</span>
            </h2>
            <div className="h-1 w-24 bg-space-highlight mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Professional certifications and achievements that validate my expertise and commitment to continuous learning.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-space-medium bg-opacity-50 rounded-xl overflow-hidden border border-space-light hover:border-space-highlight transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="text-space-highlight" size={24} />
                    <span className="text-sm text-gray-400">{cert.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold mb-2 text-space-highlight">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    Issued by {cert.issuer}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-space-highlight hover:text-space-accent transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-40 h-40 bg-space-nebula rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-space-cosmic rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
    </section>
  );
};

export default Certificates;