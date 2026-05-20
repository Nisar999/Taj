import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neo-Bureaucratic Palette
        charcoal: '#1a1a1a',
        'charcoal-light': '#2d2d2d',
        cream: '#f5f1e8',
        'cream-dark': '#e8dcc8',
        saffron: '#d4a574',
        'saffron-light': '#e6c9a0',
        'chili-red': '#c41e3a',
        'chili-dark': '#8b1538',
        
        background: '#000F08',
        foreground: '#EBEBDF',
        primary: '#FB3640',
        'primary-dark': '#9A0002',
        accent: '#EFE6DE',
      },
      fontFamily: {
        sans: ['var(--font-berthold)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-recoletta)', 'Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
      animation: {
        'folder-open': 'folderOpen 0.8s ease-out',
        'file-wiggle': 'fileWiggle 0.4s ease-in-out',
        'stamp-slam': 'stampSlam 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'liquid-flow': 'liquidFlow 6s ease-in-out infinite',
        'metallic-shimmer': 'metallicShimmer 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'blur-in': 'blurIn 0.8s ease-out',
        'slide-up-fade': 'slideUpFade 0.8s ease-out',
      },
      keyframes: {
        folderOpen: {
          '0%': { transform: 'rotateX(0deg)', opacity: '0' },
          '100%': { transform: 'rotateX(90deg)', opacity: '1' },
        },
        fileWiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
        stampSlam: {
          '0%': { transform: 'scale(0) rotate(-15deg)', opacity: '0' },
          '70%': { transform: 'scale(1.1) rotate(5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(196, 30, 58, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(196, 30, 58, 0.6)' },
        },
        liquidFlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translate(10px, 10px) scale(1.1)', opacity: '0.8' },
        },
        metallicShimmer: {
          '0%, 100%': { opacity: '0.4', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        slideUpFade: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
