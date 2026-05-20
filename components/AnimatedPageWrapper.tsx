'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedPageWrapperProps {
  children: ReactNode
  variant?: 'fade-scale' | 'slide-up' | 'blur-fade'
}

export function AnimatedPageWrapper({
  children,
  variant = 'fade-scale',
}: AnimatedPageWrapperProps) {
  const variants = {
    'fade-scale': {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
    'slide-up': {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
    },
    'blur-fade': {
      initial: { opacity: 0, filter: 'blur(10px)' },
      animate: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(10px)' },
    },
  }

  const selectedVariant = variants[variant]

  return (
    <motion.div
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      exit={selectedVariant.exit}
      transition={{
        duration: 0.6,
        ease: [0.23, 1, 0.320, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

// Container for staggered child animations
interface StaggerContainerProps {
  children: ReactNode
  delay?: number
}

export function StaggerContainer({ children, delay = 0 }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// Individual item for stagger animations
interface StaggerItemProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function StaggerItem({ children, direction = 'up' }: StaggerItemProps) {
  const directionMap = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  }

  const offset = directionMap[direction]

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: offset.y,
          x: offset.x,
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
