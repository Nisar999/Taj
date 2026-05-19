'use client';

import { motion } from 'framer-motion';

interface StampProps {
  text: string;
  angle?: number;
  color?: 'red' | 'saffron' | 'charcoal';
}

const colorClasses = {
  red: 'text-chili-red border-chili-red',
  saffron: 'text-saffron border-saffron',
  charcoal: 'text-charcoal border-charcoal',
};

export function Stamp({ text, angle = -15, color = 'red' }: StampProps) {
  return (
    <motion.div
      className={`
        absolute px-4 py-2 border-2 font-serif font-bold text-lg
        ${colorClasses[color]}
        rounded-full mix-blend-multiply pointer-events-none
      `}
      style={{ transform: `rotate(${angle}deg)` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.8 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: 0.3,
      }}
    >
      {text}
    </motion.div>
  );
}
