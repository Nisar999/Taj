'use client';

import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import Link from 'next/link';

export function HeroFolder() {
  return (
    <section className="min-h-screen bg-charcoal flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl text-saffron font-serif">CLASSIFIED</div>
        <div className="absolute bottom-10 right-10 text-6xl text-saffron font-serif">CLASSIFIED</div>
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Folder Icon - 3D rotation effect */}
        <motion.div
          className="mb-8 flex justify-center"
          animate={{
            rotateY: [0, 15, -15, 0],
            rotateX: [0, 5, -5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <Folder size={120} className="text-chili-red" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          className="text-center max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-4">
            THE TAJ UNITED CLUB
          </h1>
          <motion.div
            className="h-1 w-32 bg-chili-red mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <p className="text-lg md:text-xl text-saffron-light font-serif italic mb-8">
            Est. 1947 | A Legacy of Excellence
          </p>
        </motion.div>

        {/* Subtitle with typewriter effect */}
        <motion.p
          className="text-center text-cream-dark text-base md:text-lg font-mono mb-12 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          ACCESS THE ARCHIVES. EXPLORE THE HERITAGE. JOIN THE LEGACY.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/directory">
            <motion.button
              className="px-8 py-3 bg-chili-red text-cream font-serif font-bold text-lg hover:bg-chili-dark transition-colors border-2 border-chili-red"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(196, 30, 58, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE COMMITTEE
            </motion.button>
          </Link>
          <Link href="/food">
            <motion.button
              className="px-8 py-3 bg-transparent text-chili-red font-serif font-bold text-lg border-2 border-chili-red hover:bg-chili-red hover:text-cream transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FOOD ARCHIVES
            </motion.button>
          </Link>
        </motion.div>

        {/* Security stamp */}
        <motion.div
          className="mt-16 text-center text-saffron opacity-40 font-serif"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="text-sm tracking-widest">★ OFFICIAL DOCUMENT ★</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
