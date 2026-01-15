import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: '⚛️',
      skills: [
        { name: 'Angular', level: 'expert' },
        { name: 'TypeScript', level: 'expert' },
        { name: 'RxJS', level: 'expert' },
        { name: 'JavaScript', level: 'expert' },
        { name: 'HTML5 & CSS3', level: 'expert' },
        { name: 'Responsive Design', level: 'expert' },
      ],
    },
    {
      title: 'Backend & Databases',
      icon: '🗄️',
      skills: [
        { name: 'REST API Integration', level: 'expert' },
        { name: 'MySQL', level: 'advanced' },
        { name: 'MongoDB', level: 'advanced' },
        { name: 'Redis', level: 'advanced' },
        { name: 'Java', level: 'intermediate' },
        { name: 'Spring Boot', level: 'intermediate' },
        { name: 'OAuth 2.0 / PKCE', level: 'advanced' },
      ],
    },
    {
      title: 'Testing & Quality',
      icon: '🧪',
      skills: [
        { name: 'Jasmine', level: 'expert' },
        { name: 'Unit Testing', level: 'expert' },
        { name: 'Selenium', level: 'advanced' },
        { name: 'SonarQube', level: 'advanced' },
        { name: 'Code Quality', level: 'expert' },
        { name: 'Performance Optimization', level: 'advanced' },
      ],
    },
    {
      title: 'DevOps & Analytics',
      icon: '📊',
      skills: [
        { name: 'Elasticsearch', level: 'advanced' },
        { name: 'Kibana', level: 'advanced' },
        { name: 'Google Maps API', level: 'expert' },
        { name: 'Git & Version Control', level: 'advanced' },
        { name: 'Data Visualization', level: 'advanced' },
        { name: 'Agile/Scrum', level: 'advanced' },
      ],
    },
    {
      title: 'Design & Multimedia',
      icon: '🎨',
      skills: [
        { name: 'Adobe Photoshop', level: 'intermediate' },
        { name: 'Adobe After Effects', level: 'intermediate' },
        { name: 'UI/UX Design', level: 'advanced' },
        { name: 'Responsive Design', level: 'expert' },
      ],
    },
    {
      title: 'Architecture & Patterns',
      icon: '🏗️',
      skills: [
        { name: 'Component Architecture', level: 'expert' },
        { name: 'Reactive Programming', level: 'expert' },
        { name: 'Single Page Applications', level: 'expert' },
        { name: 'Design Patterns', level: 'advanced' },
        { name: 'Cross-Browser Testing', level: 'expert' },
      ],
    },
  ];

  const levelColors = {
    expert: 'bg-green-500',
    advanced: 'bg-blue-500',
    intermediate: 'bg-yellow-500',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 w-full" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Comprehensive expertise across the full stack, from frontend to backend, testing, and design
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center mb-5">
                <motion.span 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                  className="text-4xl mr-3"
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 + 0.5 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <motion.span 
                        whileHover={{ scale: 1.5 }}
                        className={`w-2 h-2 rounded-full ${levelColors[skill.level as keyof typeof levelColors]}`}
                      ></motion.span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white dark:bg-gray-900 px-8 py-4 rounded-lg shadow-md">
            {[
              { color: 'bg-green-500', label: 'Expert' },
              { color: 'bg-blue-500', label: 'Advanced' },
              { color: 'bg-yellow-500', label: 'Intermediate' },
            ].map((level, index) => (
              <motion.div 
                key={level.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1, type: "spring" }}
                className="flex items-center gap-2"
              >
                <span className={`w-3 h-3 rounded-full ${level.color}`}></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{level.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
