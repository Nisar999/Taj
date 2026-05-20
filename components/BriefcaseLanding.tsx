'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useEffect, useState } from 'react'

interface BriefcaseLandingProps {
  onOpen: () => void
}

export function BriefcaseLanding({ onOpen }: BriefcaseLandingProps) {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onOpen()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [onOpen])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-charcoal flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Red Banner at Top */}
      <div className="absolute top-0 left-0 right-0 bg-red-600 py-3 px-4 overflow-hidden">
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="text-cream font-mono text-sm font-bold whitespace-nowrap"
        >
          ⚠ SUPREME DECREE // PRIORITY ALPHA | BY ORDER OF THE HIGH COUNCIL: ALL MEMBERS MUST REPORT TO THE GRAND FEAST BY MIDNIGHT. FAILURE TO COMPLY WILL RESULT IN IMMEDIATE STRIPPING OF RANK. ⚠ SUPREME DECREE // PRIORITY ALPHA | BY ORDER OF THE HIGH COUNCIL ⚠
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.button
          onClick={onOpen}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2 focus:ring-offset-charcoal rounded-lg"
        >
          {/* Glowing Effect Background */}
          <motion.div
            animate={{
              boxShadow: isHovered
                ? '0 0 60px 20px rgba(196, 30, 58, 0.4), 0 0 100px 40px rgba(212, 165, 116, 0.2)'
                : '0 0 40px 15px rgba(196, 30, 58, 0.25), 0 0 60px 30px rgba(212, 165, 116, 0.1)',
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-lg"
          />

          {/* Briefcase Container */}
          <div className="relative w-64 h-56 md:w-80 md:h-72 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-2xl flex items-center justify-center border-4 border-orange-400">
            {/* CLASSIFIED Stamp */}
            <motion.div
              animate={{ rotate: isHovered ? -5 : -12 }}
              transition={{ duration: 0.3 }}
              className="absolute top-6 right-8 z-10"
            >
              <div className="bg-red-600 text-cream px-3 py-1 font-bold text-sm md:text-base transform -rotate-12 border-2 border-red-700 shadow-lg">
                CLASSIFIED
              </div>
            </motion.div>

            {/* Briefcase Icon */}
            <motion.div
              animate={{
                y: isHovered ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Briefcase size={120} className="text-cream stroke-2" strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* Label */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-8 text-saffron-light font-mono tracking-widest uppercase text-sm md:text-base"
          >
            TAJ UNITED CLUB ARCHIVE
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-8 text-center text-cream-dark text-sm font-mono"
      >
        <p>CLICK TO OPEN ARCHIVE</p>
        <p className="text-xs mt-1">Press ENTER or SPACE to proceed</p>
      </motion.div>
    </motion.div>
  )
}
