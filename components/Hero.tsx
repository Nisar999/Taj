'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary-dark rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Welcome to <span className="text-primary">The Taj</span> United Club
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Step into a world of elegance, tradition, and exceptional experiences. 
              The Taj United Club stands as a beacon of excellence and community, 
              where members enjoy unparalleled facilities and unforgettable moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary hover:bg-primary-dark text-background px-8 py-3 rounded font-semibold transition-all duration-200 transform hover:scale-105">
                Join the Club
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 rounded font-semibold transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-20 blur-2xl"></div>
              <Image
                src="/logo.png"
                alt="The Taj United Club Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
