import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Image-Based Plant Disease Detection System',
    description: 'Developed a deep learning-based system to detect and classify plant diseases using image processing and CNN architectures.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Deep Learning'],
    link: '#',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 2,
    title: 'Blinkit Sales & Customer Analytics Dashboard',
    description: 'Analyzed customer behavior, purchasing trends, and product demand to generate business insights.',
    tech: ['Python', 'Pandas', 'NumPy', 'Excel', 'Data Visualization'],
    link: '#',
    gradient: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    id: 3,
    title: 'Loan Approval Prediction System',
    description: 'Built a predictive machine learning model for loan approval decisions using demographic and financial features.',
    tech: ['Python', 'Scikit-Learn', 'Machine Learning'],
    link: '#',
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl border border-white/5 group-hover:border-white/10 transition-all duration-300`} />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
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

export default Projects;
