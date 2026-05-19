import type { Metadata } from 'next'
import './globals.css'
import { ClearanceProvider } from './context/ClearanceContext'

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
    <html lang="en" className="bg-charcoal">
      <body>
        <ClearanceProvider>
          {children}
        </ClearanceProvider>
      </body>
    </html>
  )
}
