import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center space-x-8">
          {['About', 'Privacy', 'Terms', 'Advertising', 'Settings'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              <Link to="/">{item}</Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  );
}