'use client'

import { foodArchives } from '@/lib/data';
import { IntelReport } from '@/components/IntelReport';
import { ClearanceSelector } from '@/components/ClearanceSelector';
import Navigation from '@/components/Navigation';
import { CornerLiquidMetal } from '@/components/CornerLiquidMetal';
import { AnimatedPageWrapper, StaggerContainer, StaggerItem } from '@/components/AnimatedPageWrapper';
import { motion } from 'framer-motion';

export default function FoodPage() {
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
            CULINARY ARCHIVES
          </h1>
            <p className="text-saffron font-serif italic max-w-2xl mx-auto">
              Discover the exceptional dining venues and food destinations available to our members
            </p>
            <div className="mt-4 h-1 w-24 bg-chili-red mx-auto" />
          </motion.div>

          {/* Food Grid */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <StaggerContainer delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodArchives.map((food, index) => (
                  <StaggerItem key={food.id} direction="up">
                    <IntelReport
                      {...food}
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
            <p>Note: Some venues may be restricted based on your membership clearance level.</p>
          </motion.div>
        </div>
        <ClearanceSelector />
      </>
    </AnimatedPageWrapper>
  );
}
