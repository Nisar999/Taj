'use client';

import { facilities } from '@/lib/data';
import { ClearanceSelector } from '@/components/ClearanceSelector';
import { useClearance } from '@/app/context/ClearanceContext';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function FacilitiesPage() {
  const { clearance } = useClearance();
  const clearanceLevels = { GUEST: 0, MEMBER: 1, DIVINE: 2 };
  const userLevel = clearanceLevels[clearance];

  return (
    <>
      <Navigation />
      <div className="pt-20 pb-12">
        {/* Header Section */}
        <div className="bg-charcoal border-b-4 border-chili-red py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-3">
            WORLD-CLASS FACILITIES
          </h1>
          <p className="text-saffron font-serif italic max-w-2xl mx-auto">
            Premium amenities designed for exceptional club experiences
          </p>
          <div className="mt-4 h-1 w-24 bg-chili-red mx-auto" />
        </div>

        {/* Facilities Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => {
              const requiredLevel = clearanceLevels[facility.clearanceRequired];
              const hasAccess = userLevel >= requiredLevel;

              return (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    p-6 border-4 border-charcoal rounded-lg font-serif
                    transition-all duration-300
                    ${
                      hasAccess
                        ? 'bg-saffron-light hover:shadow-lg hover:scale-105'
                        : 'bg-gray-200 opacity-50'
                    }
                  `}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-charcoal flex-1">
                      {facility.name}
                    </h3>
                    {hasAccess && (
                      <Check className="text-chili-red flex-shrink-0 ml-2" size={24} />
                    )}
                  </div>

                  <p className="text-charcoal/80 text-sm mb-4">
                    {facility.description}
                  </p>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase text-charcoal">
                      Clearance: {facility.clearanceRequired}
                    </span>
                    {!hasAccess && (
                      <span className="text-charcoal font-bold">RESTRICTED</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center py-8 text-cream-dark font-serif italic text-sm">
          <p>Upgrade your clearance level to access premium facilities.</p>
        </div>
      </div>
      <ClearanceSelector />
    </>
  );
}
