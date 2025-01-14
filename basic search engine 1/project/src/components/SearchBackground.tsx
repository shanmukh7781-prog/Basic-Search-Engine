import React from 'react';
import { motion } from 'framer-motion';

export default function SearchBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
            'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
            'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ opacity: 0.1 }}
      />

      {/* Animated circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border-2 border-blue-200 opacity-5"
          style={{
            width: 300 + i * 200,
            height: 300 + i * 200,
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-blue-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Light beam effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100 to-transparent"
        animate={{
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}