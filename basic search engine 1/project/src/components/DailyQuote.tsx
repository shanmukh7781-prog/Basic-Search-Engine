import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useQuote } from '../hooks/useQuote';

export default function DailyQuote() {
  const { quote, author } = useQuote();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="text-center mt-8 max-w-2xl mx-auto px-4"
    >
      <div className="flex items-center justify-center space-x-2 mb-2">
        <Quote className="h-5 w-5 text-blue-500" />
        <p className="text-sm text-gray-600">Quote of the Day</p>
      </div>
      <motion.p 
        className="text-lg text-gray-700 italic"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        "{quote}"
      </motion.p>
      <motion.p 
        className="text-sm text-gray-600 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        — {author}
      </motion.p>
    </motion.div>
  );
}