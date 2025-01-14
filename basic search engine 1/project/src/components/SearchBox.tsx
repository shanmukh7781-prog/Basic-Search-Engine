import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBackground from './SearchBackground';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleLucky = () => {
    const sites = [
      'https://www.amazon.com',
      'https://www.github.com',
      'https://www.netflix.com'
    ];
    window.location.href = sites[Math.floor(Math.random() * sites.length)];
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <SearchBackground />
      
      <motion.form
        onSubmit={handleSearch}
        className="relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex items-center px-6 w-full h-14 rounded-full border border-gray-200 bg-white/90 backdrop-blur-md hover:shadow-lg focus-within:shadow-lg transition-all duration-300"
          animate={{ 
            scale: isExpanded ? 1.02 : 1,
            boxShadow: isExpanded ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)'
          }}
        >
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
            className="flex-grow px-4 py-2 outline-none bg-transparent text-gray-800 placeholder-gray-500"
            placeholder="Search the web"
          />
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <Mic className="h-5 w-5 text-blue-500" />
          </motion.button>
        </motion.div>

        <div className="flex justify-center space-x-4 mt-8">
          <motion.button
            type="submit"
            className="px-6 py-2.5 bg-white/80 backdrop-blur-sm text-sm text-gray-700 hover:bg-white/90 rounded-full shadow-sm hover:shadow transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
          <motion.button
            type="button"
            onClick={handleLucky}
            className="px-6 py-2.5 bg-white/80 backdrop-blur-sm text-sm text-gray-700 hover:bg-white/90 rounded-full shadow-sm hover:shadow transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            I'm Feeling Lucky
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}