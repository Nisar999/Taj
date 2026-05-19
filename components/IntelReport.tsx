'use client';

import { motion } from 'framer-motion';
import { Stamp } from './Stamp';
import { useClearance } from '@/app/context/ClearanceContext';
import { ClearanceLevel } from '@/app/context/ClearanceContext';

interface IntelReportProps {
  id: string;
  name: string;
  category: string;
  description: string;
  speciality: string;
  availableClearance: ClearanceLevel;
  imageUrl?: string;
  index?: number;
}

export function IntelReport({
  id,
  name,
  category,
  description,
  speciality,
  availableClearance,
  imageUrl,
  index = 0,
}: IntelReportProps) {
  const { clearance: userClearance } = useClearance();

  const clearanceLevels = { GUEST: 0, MEMBER: 1, DIVINE: 2 };
  const canAccess = clearanceLevels[userClearance] >= clearanceLevels[availableClearance];

  const bgColor =
    availableClearance === 'DIVINE'
      ? 'bg-red-50'
      : availableClearance === 'MEMBER'
        ? 'bg-orange-50'
        : 'bg-cream';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={canAccess ? { y: -4 } : {}}
      className={`
        relative p-6 border-4 border-charcoal rounded-lg font-serif
        transition-all duration-300 ${bgColor}
        ${canAccess ? 'hover:shadow-xl cursor-pointer' : 'opacity-60 cursor-not-allowed'}
      `}
    >
      {/* Approval stamp - appears when accessible */}
      {canAccess && <Stamp text="APPROVED" color="red" angle={-20} />}

      {/* Clearance indicator */}
      <div className="absolute -top-3 -right-3 px-3 py-1 bg-charcoal text-cream text-xs font-bold border-2 border-charcoal rounded">
        {availableClearance}
      </div>

      {/* Reference number */}
      <div className="text-xs text-gray-600 font-mono mb-2 tracking-widest">
        FILE: {id.toUpperCase()}
      </div>

      {/* Name/Title */}
      <h3 className="text-2xl font-bold text-charcoal mb-1">{name}</h3>

      {/* Category tag */}
      <div className="inline-block px-3 py-1 bg-saffron text-charcoal text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
        {category}
      </div>

      {/* Description */}
      <p className="text-sm text-charcoal/80 mb-3">{description}</p>

      {/* Speciality */}
      <div className="border-l-4 border-chili-red pl-3 py-2 bg-charcoal/5">
        <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Speciality</p>
        <p className="font-bold text-charcoal text-sm">{speciality}</p>
      </div>

      {/* Access restriction notice */}
      {!canAccess && (
        <div className="mt-3 text-center">
          <p className="text-xs font-bold text-charcoal uppercase">CLASSIFIED</p>
          <p className="text-xs text-gray-600">Upgrade clearance to access</p>
        </div>
      )}

      {/* Decorative element */}
      <div className="absolute bottom-2 right-3 opacity-10 text-3xl">📋</div>
    </motion.div>
  );
}
