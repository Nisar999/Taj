'use client';

import { events } from '@/lib/data';
import { ClearanceSelector } from '@/components/ClearanceSelector';
import { useClearance } from '@/app/context/ClearanceContext';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Calendar, Lock } from 'lucide-react';
import { CornerLiquidMetal } from '@/components/CornerLiquidMetal';
import { AnimatedPageWrapper } from '@/components/AnimatedPageWrapper';

export default function EventsPage() {
  const { clearance } = useClearance();
  const clearanceLevels = { GUEST: 0, MEMBER: 1, DIVINE: 2 };
  const userLevel = clearanceLevels[clearance];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <AnimatedPageWrapper variant="fade-scale">
      <>
        <Navigation />
        <CornerLiquidMetal position="top-left" size="medium" />
        <CornerLiquidMetal position="top-right" size="medium" />
        <CornerLiquidMetal position="bottom-left" size="medium" />
        <CornerLiquidMetal position="bottom-right" size="medium" />
        
        <div className="pt-20 pb-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-charcoal border-b-4 border-chili-red py-12 px-4 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-3">
              UPCOMING EVENTS
            </h1>
            <p className="text-saffron font-serif italic max-w-2xl mx-auto">
              Exclusive gatherings and celebrations for our valued members
            </p>
            <div className="mt-4 h-1 w-24 bg-chili-red mx-auto" />
          </motion.div>

          {/* Events Timeline */}
          <div className="max-w-4xl mx-auto px-4 py-12" >
            {events.map((event, index) => {
              const requiredLevel = clearanceLevels[event.clearanceRequired];
              const hasAccess = userLevel >= requiredLevel;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    relative mb-8 p-6 border-4 border-charcoal rounded-lg
                    transition-all duration-300 font-serif
                    ${
                      hasAccess
                        ? 'bg-cream hover:shadow-lg'
                        : 'bg-gray-200 opacity-60'
                    }
                  `}
                >
                  {/* Timeline dot */}
                  <div
                    className={`
                      absolute -left-5 top-8 w-10 h-10 rounded-full border-4 border-charcoal
                      flex items-center justify-center
                      ${hasAccess ? 'bg-chili-red' : 'bg-gray-400'}
                    `}
                  >
                    <Calendar size={20} className="text-charcoal" />
                  </div>

                  <div className="ml-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-charcoal flex-1">
                        {event.title}
                      </h3>
                      {!hasAccess && (
                        <Lock className="text-gray-600 flex-shrink-0" size={20} />
                      )}
                    </div>

                    <span className="inline-block px-3 py-1 bg-saffron text-charcoal text-xs font-bold rounded-full mb-3 uppercase">
                      {event.category}
                    </span>

                    <p className="text-charcoal/80 text-sm mb-3">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-charcoal">
                        {formatDate(event.date)}
                      </span>
                      <span
                        className={`
                          font-bold uppercase
                          ${hasAccess ? 'text-chili-red' : 'text-gray-600'}
                        `}
                      >
                        {event.clearanceRequired}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-8 text-cream-dark font-serif italic text-sm"
          >
            <p>Upgrade your clearance to access exclusive events.</p>
          </motion.div>
        </div>
        <ClearanceSelector />
      </>
    </AnimatedPageWrapper>
  );
}
