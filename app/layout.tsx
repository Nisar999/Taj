import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
