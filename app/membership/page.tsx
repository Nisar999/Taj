'use client';

import { membershipPlans } from '@/lib/data';
import { ClearanceSelector } from '@/components/ClearanceSelector';
import { useClearance } from '@/app/context/ClearanceContext';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { CornerLiquidMetal } from '@/components/CornerLiquidMetal';
import { AnimatedPageWrapper, StaggerContainer, StaggerItem } from '@/components/AnimatedPageWrapper';

export default function MembershipPage() {
  const { clearance, setClearance } = useClearance();

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
              MEMBERSHIP PLANS
            </h1>
            <p className="text-saffron font-serif italic max-w-2xl mx-auto">
              Choose your level of access to The Taj United Club
            </p>
            <div className="mt-4 h-1 w-24 bg-chili-red mx-auto" />
          </motion.div>

          {/* Plans Grid */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <StaggerContainer delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {membershipPlans.map((plan, index) => {
                  const isPopular = plan.name === 'Premium Membership';
                  const clearanceLevels = { GUEST: 0, MEMBER: 1, DIVINE: 2 };
                  const userLevel = clearanceLevels[clearance];
                  const planLevel = clearanceLevels[plan.clearanceLevel];
                  const hasUnlocked = userLevel >= planLevel;

                  return (
                    <StaggerItem key={plan.id} direction="up">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`
                          relative border-4 rounded-lg overflow-hidden font-serif
                          transition-all duration-300
                          ${isPopular ? 'md:scale-105 md:shadow-2xl' : ''}
                          ${
                            hasUnlocked
                              ? 'border-charcoal bg-cream'
                              : 'border-gray-400 bg-gray-100'
                          }
                        `}
                      >
                  {/* Popular badge */}
                  {isPopular && (
                    <motion.div
                      className="absolute top-0 left-0 right-0 bg-chili-red text-cream py-2 flex items-center justify-center gap-2 font-bold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star size={16} fill="currentColor" />
                      MOST POPULAR
                      <Star size={16} fill="currentColor" />
                    </motion.div>
                  )}

                  <div className={`p-6 ${isPopular ? 'pt-16' : ''}`}>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">
                      {plan.name}
                    </h3>

                    <div className="mb-6">
                      <p className="text-gray-600 text-sm mb-1">Monthly</p>
                      <p className="text-3xl font-bold text-chili-red">
                        ₹{plan.monthlyFee}
                      </p>
                      <p className="text-gray-600 text-xs mt-1">
                        Or ₹{plan.annualFee}/year
                      </p>
                    </div>

                    <div className="mb-8 border-t-2 border-charcoal/20 pt-6">
                      <p className="text-xs text-gray-600 uppercase font-bold mb-4 tracking-wider">
                        Benefits
                      </p>
                      <ul className="space-y-3">
                        {plan.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check
                              size={16}
                              className="text-chili-red flex-shrink-0 mt-0.5"
                            />
                            <span className="text-sm text-charcoal/80">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      onClick={() => {
                        if (plan.clearanceLevel === 'MEMBER') {
                          setClearance('MEMBER');
                        } else if (plan.clearanceLevel === 'DIVINE') {
                          setClearance('DIVINE');
                        }
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        w-full py-2 rounded font-bold uppercase tracking-wider text-sm
                        transition-all duration-300
                        ${
                          hasUnlocked
                            ? 'bg-chili-red text-cream hover:bg-chili-dark'
                            : 'bg-gray-400 text-gray-700 opacity-50 cursor-not-allowed'
                        }
                      `}
                      disabled={!hasUnlocked}
                    >
                      {hasUnlocked ? 'Select Plan' : 'Locked'}
                    </motion.button>
                  </div>

                        <div className="absolute bottom-0 right-0 opacity-5 text-6xl">
                          ★
                        </div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
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
            <p>
              Contact our membership team to learn more or upgrade your plan.
            </p>
          </motion.div>
        </div>
        <ClearanceSelector />
      </>
    </AnimatedPageWrapper>
  );
}
