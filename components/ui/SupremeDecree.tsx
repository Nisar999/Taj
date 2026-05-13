"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';

interface SupremeDecreeProps {
  enabled?: boolean;
  message?: string;
}

export function SupremeDecree({
  enabled = true,
  message = "BY ORDER OF THE HIGH COUNCIL: ALL MEMBERS MUST REPORT TO THE GRAND FEAST BY MIDNIGHT. FAILURE TO COMPLY WILL RESULT IN IMMEDIATE STRIPPING OF RANK."
}: SupremeDecreeProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!enabled || !isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="fixed top-0 left-0 right-0 z-[100] bg-red-700 text-white font-mono py-2 px-4 shadow-2xl border-b-4 border-black"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertCircle size={18} className="animate-pulse" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter">
            Supreme Decree // Priority Alpha
          </span>
        </div>

        <p className="hidden md:block text-xs font-bold italic flex-1 text-center px-4">
          {message}
        </p>

        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-red-800 rounded transition-colors"
          aria-label="Dismiss decree"
        >
          <X size={16} />
        </button>
      </div>
      {/* Mobile message - shown only on small screens below the header */}
      <div className="md:hidden text-center text-[9px] font-bold uppercase mt-1 opacity-90">
        {message.substring(0, 60)}...
      </div>
    </motion.div>
  );
}
