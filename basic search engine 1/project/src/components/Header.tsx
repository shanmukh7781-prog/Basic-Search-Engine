import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Gamepad2, Book } from 'lucide-react';

const links = [
  { name: 'Games', icon: Gamepad2, url: 'https://www.arkadium.com/free-online-games/' },
  { name: 'Encyclopedia', icon: Book, url: 'https://www.wikipedia.org' }
];

export default function Header() {
  return (
    <motion.header
      className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center space-x-2 mb-4 sm:mb-0"
        whileHover={{ scale: 1.05 }}
      >
        <Link to="/" className="flex items-center space-x-2">
          <Search className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-semibold">MySearch</span>
        </Link>
      </motion.div>

      <nav>
        <ul className="flex space-x-6">
          {links.map(({ name, icon: Icon, url }) => (
            <motion.li
              key={name}
              whileHover={{ scale: 1.1 }}
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <Icon className="h-4 w-4" />
                <span>{name}</span>
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <Link to="/">Sign In</Link>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
}