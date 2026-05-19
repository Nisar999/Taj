'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Events', href: '#events' },
    { label: 'Membership', href: '#membership' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-background border-b border-primary/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="TUC Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">TUC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-primary hover:bg-primary-dark text-background px-6 py-2 rounded font-medium transition-colors duration-200">
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 relative"
          >
            <span className={`w-full h-0.5 bg-primary transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-primary transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-primary transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-primary/20 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full bg-primary hover:bg-primary-dark text-background px-6 py-2 rounded font-medium transition-colors duration-200 mt-2">
              Join Now
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
