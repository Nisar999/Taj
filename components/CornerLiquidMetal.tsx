'use client'

import { motion } from 'framer-motion'

interface CornerLiquidMetalProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'small' | 'medium' | 'large'
}

export function CornerLiquidMetal({ position, size = 'medium' }: CornerLiquidMetalProps) {
  const sizeMap = {
    small: { width: 150, height: 150 },
    medium: { width: 250, height: 250 },
    large: { width: 350, height: 350 },
  }

  const { width, height } = sizeMap[size]

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }

  const rotationMap = {
    'top-left': '0deg',
    'top-right': '90deg',
    'bottom-right': '180deg',
    'bottom-left': '270deg',
  }

  return (
    <div
      className={`fixed ${positionClasses[position]} pointer-events-none overflow-hidden`}
      style={{ width, height }}
    >
      <motion.svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="absolute"
        style={{ rotate: rotationMap[position] }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Outer metallic glow */}
        <defs>
          <filter id={`metallic-glow-${position}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id={`metal-gradient-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4a574" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#c41e3a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b1538" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Curved liquid metal paths */}
        <motion.path
          d={`M ${width} 0 Q ${width * 0.7} ${height * 0.3} ${width * 0.4} ${height * 0.6} T 0 ${height}`}
          fill="none"
          stroke={`url(#metal-gradient-${position})`}
          strokeWidth="3"
          filter={`url(#metallic-glow-${position})`}
          animate={{
            strokeWidth: [3, 5, 3],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Secondary liquid curves */}
        <motion.path
          d={`M ${width * 0.8} 0 Q ${width * 0.5} ${height * 0.4} ${width * 0.2} ${height * 0.8} T 0 ${height}`}
          fill="none"
          stroke={`url(#metal-gradient-${position})`}
          strokeWidth="2"
          filter={`url(#metallic-glow-${position})`}
          animate={{
            strokeWidth: [2, 4, 2],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Flowing liquid blob shapes */}
        <motion.circle
          cx={width * 0.6}
          cy={height * 0.4}
          r="15"
          fill={`url(#metal-gradient-${position})`}
          filter={`url(#metallic-glow-${position})`}
          animate={{
            cx: [width * 0.6, width * 0.5, width * 0.6],
            cy: [height * 0.4, height * 0.5, height * 0.4],
            r: [15, 20, 15],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.circle
          cx={width * 0.3}
          cy={height * 0.7}
          r="12"
          fill={`url(#metal-gradient-${position})`}
          filter={`url(#metallic-glow-${position})`}
          animate={{
            cx: [width * 0.3, width * 0.4, width * 0.3],
            cy: [height * 0.7, height * 0.6, height * 0.7],
            r: [12, 18, 12],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
        />
      </motion.svg>
    </div>
  )
}
