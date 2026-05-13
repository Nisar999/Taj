"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StampProps {
  text: string;
  isVisible: boolean;
  color?: "red" | "green" | "blue";
}

export default function Stamp({ text, isVisible, color = "red" }: StampProps) {
  const colors = {
    red: "text-red-600 border-red-600",
    green: "text-green-600 border-green-600",
    blue: "text-blue-600 border-blue-600",
  };

  return (
    <motion.div
      initial={{ scale: 5, opacity: 0, rotate: -20, y: -100 }}
      animate={isVisible ? { scale: 1, opacity: 0.8, rotate: -15, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className={`absolute pointer-events-none z-50 flex items-center justify-center border-8 p-4 font-black uppercase tracking-tighter select-none ${colors[color]} border-double opacity-80`}
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
      }}
    >
      <span className="text-6xl md:text-8xl">{text}</span>
    </motion.div>
  );
}
