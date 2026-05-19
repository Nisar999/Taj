'use client';

import { motion } from 'framer-motion';
import { useClearance } from '@/app/context/ClearanceContext';
import { ClearanceLevel } from '@/app/context/ClearanceContext';

interface DossierProps {
  id: string;
  name: string;
  role: string;
  department: string;
  joinDate: string;
  clearance: ClearanceLevel;
  bio: string;
  imageUrl?: string;
  index?: number;
}

const clearanceColors = {
  GUEST: 'border-gray-400 bg-gray-50',
  MEMBER: 'border-saffron bg-saffron-light',
  DIVINE: 'border-chili-red bg-red-50',
};

const clearanceLabelColors = {
  GUEST: 'text-gray-700',
  MEMBER: 'text-saffron',
  DIVINE: 'text-chili-red',
};

export function Dossier({
  id,
  name,
  role,
  department,
  joinDate,
  clearance,
  bio,
  imageUrl,
  index = 0,
}: DossierProps) {
  const { clearance: userClearance } = useClearance();

  // Check if user has access to view this dossier
  const clearanceLevels = { GUEST: 0, MEMBER: 1, DIVINE: 2 };
  const canAccess = clearanceLevels[userClearance] >= clearanceLevels[clearance];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={canAccess ? { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' } : {}}
      className={`
        relative p-6 border-4 bg-cream rounded-lg font-serif
        transition-all duration-300
        ${canAccess ? clearanceColors[clearance] : 'border-gray-300 bg-gray-100 opacity-60'}
        ${canAccess ? 'cursor-pointer hover:shadow-lg' : 'cursor-not-allowed'}
      `}
    >
      {/* Clearance stamp */}
      <motion.div
        className={`absolute -top-4 -right-4 text-xs font-bold px-3 py-1 bg-charcoal text-cream border-2 border-charcoal rounded transform ${clearanceLabelColors[clearance]}`}
        initial={{ rotate: -15, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        {clearance}
      </motion.div>

      {!canAccess && (
        <div className="absolute inset-0 bg-charcoal/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div className="text-center">
            <p className="text-charcoal font-bold text-sm">CLASSIFIED</p>
            <p className="text-charcoal/70 text-xs mt-1">Insufficient Clearance</p>
          </div>
        </div>
      )}

      {/* Reference number */}
      <div className="text-xs text-gray-600 font-mono mb-3 tracking-widest">
        REF: {id.toUpperCase()}
      </div>

      {/* Name - main heading */}
      <h3 className="text-2xl font-bold text-charcoal mb-2 border-b-2 border-charcoal/30 pb-2">
        {name}
      </h3>

      {/* Role and Department */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-gray-600 uppercase tracking-wider">Position</p>
          <p className="font-bold text-charcoal">{role}</p>
        </div>
        <div>
          <p className="text-gray-600 uppercase tracking-wider">Department</p>
          <p className="font-bold text-charcoal">{department}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-charcoal/80 mb-4 italic">{bio}</p>

      {/* Footer with join date */}
      <div className="flex justify-between items-center pt-3 border-t border-charcoal/20 text-xs">
        <span className="text-gray-600 uppercase tracking-wider">Joined</span>
        <span className="font-bold text-charcoal">{joinDate}</span>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-2 right-2 opacity-20 text-4xl">★</div>
    </motion.div>
  );
}
