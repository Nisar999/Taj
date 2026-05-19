import type { Metadata } from 'next'
import { Playfair_Display, Raleway } from 'next/font/google'
import './globals.css'
import { ClearanceProvider } from './context/ClearanceContext'

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-recoletta',
})

const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-berthold',
})

export const metadata: Metadata = {
  title: 'The Taj United Club',
  description: 'Experience excellence, tradition, and community at The Taj United Club.',
  openGraph: {
    title: 'The Taj United Club',
    description: 'Experience excellence, tradition, and community at The Taj United Club.',
    url: 'https://taj-united-club.com',
    siteName: 'The Taj United Club',
    images: [
      {
        url: '/logo.png',
        width: 400,
        height: 400,
        alt: 'The Taj United Club Logo',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-charcoal ${playfairDisplay.variable} ${raleway.variable}`}>
      <body className="font-sans">
        <ClearanceProvider>
          {children}
        </ClearanceProvider>
      </body>
    </html>
  )
}
