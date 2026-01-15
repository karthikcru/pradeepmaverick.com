import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 w-full" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Professional Summary
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Front-End Engineer with <span className="font-semibold text-blue-600 dark:text-blue-400">3+ years of experience</span> building 
                high-performance, enterprise-grade web applications using Angular, TypeScript, and RxJS. Specialized in scalable component 
                architecture, performance optimization, data visualization, and unit testing.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">🎯</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Expertise</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Scalable component architecture, performance optimization, and reactive programming with RxJS
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">🚀</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Impact</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Enhanced development efficiency by ~30% through reusable components and comprehensive testing strategies
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-t border-blue-200 dark:border-gray-700 pt-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Experienced in collaborating with backend teams to deliver reliable, production-ready systems used by real users. 
                Passionate about writing clean, efficient code and implementing best practices in testing and quality assurance.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="mt-8 grid md:grid-cols-2 gap-6"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "30%", label: "Efficiency Boost" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                  className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
