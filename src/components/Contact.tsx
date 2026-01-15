import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { 
      name: 'Email', 
      value: 'n.pradeep199669@gmail.com',
      url: 'mailto:n.pradeep199669@gmail.com', 
      icon: '📧',
      color: 'from-red-400 to-pink-500'
    },
    { 
      name: 'LinkedIn', 
      value: 'pradeepnatarajan',
      url: 'https://www.linkedin.com/in/pradeepnatarajan/', 
      icon: '💼',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Phone', 
      value: '+91 8610137410',
      url: 'tel:+918610137410', 
      icon: '📱',
      color: 'from-green-400 to-emerald-500'
    },
    { 
      name: 'Location', 
      value: 'Chennai, India',
      url: '#', 
      icon: '📍',
      color: 'from-purple-400 to-indigo-500'
    },
  ];

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 w-full" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Let's Connect
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
        >
          Open to exciting opportunities and collaborations. Feel free to reach out!
        </motion.p>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.name}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                href={contact.url}
                target={contact.url.startsWith('http') ? '_blank' : undefined}
                rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                    className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center text-3xl mr-4 group-hover:scale-110 transition-transform`}
                  >
                    {contact.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {contact.name}
                    </div>
                    <div className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                      {contact.value}
                    </div>
                  </div>
                  {contact.url !== '#' && (
                    <span className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-xl">
                      →
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-3">
              Interested in working together?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              I'm always interested in hearing about new projects and opportunities in front-end development.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:n.pradeep199669@gmail.com"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                Send Email
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/pradeepnatarajan/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold"
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* Work Experience Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "2", label: "Companies" },
                { value: "3", label: "Major Projects" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1, type: "spring" }}
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Pradeep Natarajan. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Associate Software Engineer | Chennai, India
          </p>
        </motion.div>
      </div>
    </section>
  );
}
