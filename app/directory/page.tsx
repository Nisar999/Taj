'use client'

import { committeeMembers } from '@/lib/data';
import { Dossier } from '@/components/Dossier';
import { ClearanceSelector } from '@/components/ClearanceSelector';
import Navigation from '@/components/Navigation';
import { CornerLiquidMetal } from '@/components/CornerLiquidMetal';
import { AnimatedPageWrapper, StaggerContainer, StaggerItem } from '@/components/AnimatedPageWrapper';
import { motion } from 'framer-motion';

export default function DirectoryPage() {
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
              COMMITTEE DIRECTORY
            </h1>
            <p className="text-saffron font-serif italic max-w-2xl mx-auto">
              The distinguished leaders and visionaries guiding The Taj United Club
            </p>
            <div className="mt-4 h-1 w-24 bg-chili-red mx-auto" />
          </motion.div>

          {/* Members Grid */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <StaggerContainer delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {committeeMembers.map((member, index) => (
                  <StaggerItem key={member.id} direction="up">
                    <Dossier
                      {...member}
                      index={index}
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-8 text-cream-dark font-serif italic text-sm"
          >
            <p>Note: Some profiles may be restricted based on your clearance level.</p>
          </motion.div>
        </div>
        <ClearanceSelector />
      </>
    </AnimatedPageWrapper>
  );
}
