"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HeroFolder } from '@/components/ui/HeroFolder';
import { Shield, Lock, FileText, AlertTriangle } from 'lucide-react';

export default function LandingPage() {
  const [isCleared, setIsCleared] = useState(false);

  return (
    <main className="relative min-h-screen bg-stone-900 overflow-hidden font-serif">
      <AnimatePresence>
        {!isCleared && (
          <motion.div
            key="folder-screen"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50"
          >
            <HeroFolder onOpen={() => setIsCleared(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content revealed after "opening" the folder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isCleared ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`relative min-h-screen transition-colors duration-1000 ${isCleared ? 'bg-stone-100' : 'bg-stone-900'}`}
      >
        {/* Top Secret Header */}
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isCleared ? { scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded-sm mb-8 shadow-lg"
          >
            <Shield size={14} />
            Top Secret // Eyes Only
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-stone-900 mb-8 tracking-tight leading-tight">
            Taj United <span className="text-red-700">Club</span>
          </h1>

          {/* Mission Statement - Overly Serious & Absurd */}
          <div className="max-w-2xl bg-white p-8 md:p-12 border-l-8 border-red-700 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText size={120} className="text-stone-900" />
            </div>

            <h2 className="text-xl font-bold text-stone-800 mb-4 uppercase tracking-wider flex items-center gap-2">
              <Lock size={18} className="text-red-700" />
              Mission Directive 001-A
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed italic font-medium">
              "The Taj United Club is not merely a gathering of enthusiasts; it is a tactical alliance dedicated to the <span className="text-red-700 font-bold underline decoration-2">Strategic Non-Veg Domination</span> of all regional culinary frontiers. Our objective is the absolute hegemony of meat-centric gastronomic excellence, ensuring that no poultry, bovine, or porcine entity remains un-savored. We operate with surgical precision, absolute secrecy, and an uncompromising commitment to the art of the feast."
            </p>

            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-xs font-mono text-stone-500 uppercase tracking-tighter">
                Auth: HQ-Cuisine-Command <br />
                Clearance: Level 9 (Omega)
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest">
                <AlertTriangle size={14} />
                Unauthorized Leakage Punishable by Exile
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/join"
              className="group relative px-8 py-4 bg-stone-900 text-stone-100 font-bold uppercase tracking-widest transition-all hover:bg-red-700 hover:shadow-xl active:scale-95 flex items-center gap-3 mx-auto"
            >
              <span>Request Clearance</span>
              <motion.span
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
