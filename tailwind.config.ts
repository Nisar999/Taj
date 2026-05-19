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
        sans: ['system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
      animation: {
        'folder-open': 'folderOpen 0.8s ease-out',
        'file-wiggle': 'fileWiggle 0.4s ease-in-out',
        'stamp-slam': 'stampSlam 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
}
export default config
