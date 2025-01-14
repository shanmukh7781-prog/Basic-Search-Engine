import React from 'react';
import { motion } from 'framer-motion';
import { SearchResult } from '../types/search';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <p className="text-sm text-gray-600 mb-4">
        About {results.length} results for "{query}"
      </p>

      <div className="space-y-8">
        {results.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <a 
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-600">{result.source}</p>
                <p className="text-sm text-gray-600">•</p>
                <p className="text-sm text-gray-600 truncate">{result.url}</p>
              </div>
              <h2 className="text-xl text-blue-600 group-hover:underline mt-1">
                {result.title}
              </h2>
              <p 
                className="text-sm text-gray-700 mt-1"
                dangerouslySetInnerHTML={{ __html: result.description }}
              />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}