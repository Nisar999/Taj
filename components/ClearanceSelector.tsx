'use client';

import { motion } from 'framer-motion';
import { useClearance, ClearanceLevel } from '@/app/context/ClearanceContext';
import { Lock } from 'lucide-react';

const clearances: ClearanceLevel[] = ['GUEST', 'MEMBER', 'DIVINE'];

export function ClearanceSelector() {
  const { clearance, setClearance } = useClearance();

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-charcoal border-2 border-chili-red rounded-lg p-4 shadow-2xl">
        <div className="flex items-center gap-2 mb-3">
          <Lock size={16} className="text-chili-red" />
          <p className="text-cream text-sm font-mono font-bold uppercase tracking-wider">
            Clearance Level
          </p>
        </div>
        <div className="flex gap-2">
          {clearances.map((level) => (
            <motion.button
              key={level}
              onClick={() => setClearance(level)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-3 py-1 rounded text-xs font-bold font-mono uppercase tracking-wider
                transition-all duration-300 border-2
                ${
                  clearance === level
                    ? 'bg-chili-red text-cream border-chili-red'
                    : 'bg-charcoal-light text-cream border-cream/30 hover:border-chili-red'
                }
              `}
            >
              {level}
            </motion.button>
          ))}
        </div>
        <p className="text-cream/60 text-xs mt-2 font-serif italic">
          [Testing Mode] Change to see restricted content
        </p>
      </div>
    </motion.div>
  );
}
