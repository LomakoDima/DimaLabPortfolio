import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, FileJson, Globe, Database, GitBranch, Terminal, Blocks, Server, Cpu } from 'lucide-react';

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Categories for tech stack organization with icons
  const categories = {
    "Frontend": [
      { name: "HTML", icon: <Globe size={32} /> },
      { name: "CSS", icon: <Code2 size={32} /> },
      { name: "JavaScript", icon: <FileJson size={32} /> }
    ],
    "Backend": [
      { name: "PHP", icon: <Server size={32} /> },
      { name: "Python", icon: <Terminal size={32} /> },
      { name: "Java", icon: <Cpu size={32} /> },
      { name: "Flask", icon: <Blocks size={32} /> }
    ],
    "Database": [
      { name: "SQL", icon: <Database size={32} /> },
      { name: "SQLite", icon: <Database size={32} /> }
    ],
    "Tools": [
      { name: "Git", icon: <GitBranch size={32} /> }
    ]
  };

  // Get color based on technology
  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      "HTML": "from-orange-500 to-red-600",
      "CSS": "from-blue-500 to-blue-600",
      "JavaScript": "from-yellow-400 to-yellow-600",
      "PHP": "from-indigo-400 to-purple-600",
      "Python": "from-blue-400 to-green-600",
      "Java": "from-red-500 to-red-700",
      "Flask": "from-gray-500 to-gray-700",
      "SQL": "from-cyan-500 to-blue-700",
      "SQLite": "from-blue-400 to-indigo-600",
      "Git": "from-orange-600 to-red-700"
    };
    
    return colors[tech] || "from-space-accent to-space-highlight";
  };

  return (
    <section id="skills" className="py-20 relative">
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
              Technical <span className="text-space-highlight">Skills</span>
            </h2>
            <div className="h-1 w-24 bg-space-highlight mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              My toolkit for navigating the digital universe. These are the technologies I use to build robust, 
              efficient, and beautiful applications.
            </p>
          </motion.div>

          <div className="space-y-10">
            {Object.entries(categories).map(([category, techs]) => (
              <motion.div key={category} variants={itemVariants} className="mb-12">
                <h3 className="text-2xl font-heading font-bold mb-6 pl-4 border-l-4 border-space-highlight">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {techs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      className={`bg-gradient-to-r ${getTechColor(tech.name)} p-1 rounded-lg group`}
                    >
                      <div className="bg-space-medium h-full w-full rounded-md p-6 transition-transform group-hover:scale-[0.98]">
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-16 h-16 mb-4 flex items-center justify-center text-space-highlight">
                            {tech.icon}
                          </div>
                          <h4 className="text-lg font-medium text-center">{tech.name}</h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="bg-space-medium bg-opacity-50 p-8 rounded-xl border border-space-light mt-16">
            <h3 className="text-2xl font-heading font-bold mb-4 text-space-highlight">Always Learning</h3>
            <p className="text-gray-300">
              The technology landscape is constantly evolving, and so am I. I'm committed to continuous learning
              and staying updated with the latest tools and techniques. Currently exploring: TypeScript, React Native, and GraphQL.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative orbit element */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-2 border-dashed border-space-highlight/30 rounded-full animate-cosmic-spin"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-space-highlight rounded-full"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-20 w-40 h-40 bg-space-accent rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
    </section>
  );
};

export default TechStack;