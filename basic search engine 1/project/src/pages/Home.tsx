import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import DailyQuote from '../components/DailyQuote';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import FeaturedContent from '../components/FeaturedContent';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <BackgroundAnimation />
      <Header />
      
      <motion.main 
        className="flex-grow flex flex-col items-center justify-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-2xl -mt-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SearchBox />
            <DailyQuote />
          </motion.div>
        </div>
        <FeaturedContent />
      </motion.main>

      <Footer />
    </div>
  );
}