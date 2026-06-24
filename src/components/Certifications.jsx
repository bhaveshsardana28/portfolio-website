import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  'IBM Data Analysis Using Python',
  'IBM Python for Data Science',
  'Cisco Python Essentials 1 & 2',
  'AWS Cloud Practitioner Essentials',
  'AWS Educate Cloud 101',
  'Introduction to MongoDB',
  'Introduction to DevOps',
  'Business Analytics with Excel',
  'Tata Cybersecurity Analyst Simulation',
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <FaCertificate className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm font-medium">{cert}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
