import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: 'Data Analyst Intern',
    company: 'Cognifyz Technologies',
    period: 'June 2025 – July 2025',
    highlights: ['Data Cleaning', 'Exploratory Data Analysis', 'Dashboard Creation', 'Statistical Analysis', 'Business Insights'],
    icon: FaBriefcase,
  },
  {
    id: 2,
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'Nov 2023 – May 2024',
    highlights: ['Delivered 5+ client websites', 'End-to-end development', 'Deployment and maintenance'],
    icon: FaCode,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all duration-300" />
              
              <div className="relative p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                      <exp.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                      <span className="hidden md:block text-gray-500">•</span>
                      <span className="text-blue-400 font-medium">{exp.company}</span>
                    </div>
                    
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
