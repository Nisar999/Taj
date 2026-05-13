"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ShieldAlert, FileText, Lock } from 'lucide-react';

interface HeroFolderProps {
  onOpen?: () => void;
}

export const HeroFolder: React.FC<HeroFolderProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    if (onOpen) onOpen();
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-stone-900 overflow-hidden">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="relative group cursor-pointer"
            onClick={handleOpen}
          >
            <div className="absolute -inset-4 bg-amber-500/20 rounded-xl blur-xl group-hover:bg-amber-500/40 transition-all duration-500" />

            <div className="relative p-8 bg-amber-700 border-4 border-amber-900 rounded-lg shadow-2xl transform transition-transform group-hover:scale-105 group-hover:-rotate-1">
              <Folder
                size={120}
                className="text-amber-100 drop-shadow-lg"
                strokeWidth={1.5}
              />
              <div className="absolute top-4 right-4">
                <div className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter rotate-12 border border-red-800 shadow-sm">
                  Classified
                </div>
              </div}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-stone-400 font-mono text-sm tracking-widest uppercase">
                  Taj United Club Archive
                </span>
              </div}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
