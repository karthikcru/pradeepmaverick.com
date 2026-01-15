import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Global Net Zero for Emissions',
      duration: '16 Months',
      company: 'Promantus India',
      description: 'Enterprise-scale emissions tracking and reporting platform with comprehensive data visualization and role-based access control.',
      achievements: [
        'Integrated new technologies into existing systems, increasing capabilities and improving overall performance',
        'Built dynamic PDF report generation with emissions data, charts, and tabular insights',
        'Implemented role-based access control and user-specific visualizations',
        'Ensured high code quality through comprehensive unit testing and static analysis',
      ],
      tags: ['Angular', 'TypeScript', 'RxJS', 'PDF Generation', 'Data Visualization', 'SonarQube', 'Jasmine'],
      icon: '🌍',
      color: 'from-green-400 to-emerald-600',
    },
    {
      title: 'EMPS Dashboard',
      duration: '3 Months',
      company: 'Promantus India',
      description: 'Real-time fleet tracking and management system with advanced mapping capabilities and performance optimization for large datasets.',
      achievements: [
        'Developed real-time fleet tracking using Google Maps with dynamic marker updates',
        'Visualized routes, pickup, and drop points for large datasets',
        'Implemented ETA calculations and route optimization',
        'Optimized map rendering for performance with high-volume data',
      ],
      tags: ['Angular', 'TypeScript', 'Google Maps API', 'Real-time Updates', 'Performance Optimization'],
      icon: '🚚',
      color: 'from-blue-400 to-indigo-600',
    },
    {
      title: 'BeeSense',
      duration: '3 Months',
      company: 'Boodskap',
      description: 'IoT data analytics platform with interactive visualizations and advanced filtering capabilities for statistical analysis.',
      achievements: [
        'Designed and implemented dynamic visual representations of statistics',
        'Created interactive charts and tables for data exploration',
        'Incorporated advanced filtering options for intuitive data analysis',
        'Enabled users to analyze complex datasets efficiently',
      ],
      tags: ['Angular', 'TypeScript', 'Data Visualization', 'Charts', 'Filtering', 'IoT'],
      icon: '📊',
      color: 'from-purple-400 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 w-full" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Real-world enterprise applications delivering measurable business value
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              variants={projectVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="md:flex">
                {/* Project Icon/Visual */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className={`md:w-1/4 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}
                >
                  <div className="text-center">
                    <motion.span 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: "spring" }}
                      className="text-7xl mb-4 block"
                    >
                      {project.icon}
                    </motion.span>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      className="text-white font-bold text-lg"
                    >
                      {project.duration}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
                  className="md:w-3/4 p-8"
                >
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 break-words">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium break-words">
                        {project.company}
                      </p>
                    </div>
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.4, type: "spring" }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium flex-shrink-0"
                    >
                      #{index + 1}
                    </motion.span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <span className="mr-2">✨</span> Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.6 }}
                          className="text-gray-700 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▹</span>
                          <span className="break-words">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + tagIndex * 0.05 + 1.2 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          whileHover={{ scale: 1.02 }}
          className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 text-center shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Proven Track Record
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Delivered <span className="font-bold text-blue-600 dark:text-blue-400">22+ months</span> of production-ready features 
            across enterprise applications, serving real users with measurable business impact
          </p>
        </motion.div>
      </div>
    </section>
  );
}
