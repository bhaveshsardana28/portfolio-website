import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              BS
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400 text-sm">Bhavesh Sardana</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/bhaveshsardana28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhaveshsardana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:bhaveshsardana28@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Made with</span>
            <FaHeart className="w-4 h-4 text-red-500" />
            <span>by Bhavesh Sardana</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Bhavesh Sardana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
