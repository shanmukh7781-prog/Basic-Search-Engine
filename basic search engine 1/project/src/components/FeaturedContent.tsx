import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Film, Trophy, Puzzle } from 'lucide-react';

const games = [
  {
    title: "2048",
    url: "https://play2048.co/",
    icon: Puzzle,
    color: "bg-amber-500"
  },
  {
    title: "Wordle",
    url: "https://www.nytimes.com/games/wordle",
    icon: Trophy,
    color: "bg-green-500"
  }
];

const streaming = [
  {
    title: "Internet Archive Movies",
    url: "https://archive.org/details/movies",
    icon: Film,
    color: "bg-blue-500"
  },
  {
    title: "Pluto TV",
    url: "https://pluto.tv",
    icon: Film,
    color: "bg-purple-500"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function FeaturedContent() {
  return (
    <div className="mt-12 w-full max-w-4xl mx-auto px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div variants={item} className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Gamepad2 className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Featured Games</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {games.map(({ title, url, icon: Icon, color }) => (
              <motion.a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} p-4 rounded-lg text-white hover:scale-105 transition-transform`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-8 w-8 mb-2" />
                <p className="font-medium">{title}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Film className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Free Streaming</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {streaming.map(({ title, url, icon: Icon, color }) => (
              <motion.a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} p-4 rounded-lg text-white hover:scale-105 transition-transform`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-8 w-8 mb-2" />
                <p className="font-medium">{title}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}