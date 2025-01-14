import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            'linear-gradient(45deg, #4ecdc4, #45b7d1)',
            'linear-gradient(45deg, #45b7d1, #ff6b6b)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

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
            marginLeft: -(150 + i * 100),
            marginTop: -(150 + i * 100),
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
    </div>
  );
}