'use client'

import { motion } from 'framer-motion'
import { HeroFolder } from '@/components/HeroFolder'
import { ClearanceSelector } from '@/components/ClearanceSelector'
import Navigation from '@/components/Navigation'

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full"
    >
      <Navigation />
      <HeroFolder />
      <ClearanceSelector />
    </motion.div>
  )
}
