import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI & ML',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'NLP',
      'Predictive Modeling',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      'TensorFlow',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'OpenCV',
    ],
  },
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'C++'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Excel', 'Jupyter Notebook', 'Firebase', 'Figma', 'Vercel'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all duration-300" />
              <div className="relative p-8">
                <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
