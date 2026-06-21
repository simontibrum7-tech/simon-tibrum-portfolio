import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://simontibrum.com'),
  title: 'Simon Tibrum | Actor Portfolio',
  description: 'Actor | Storyteller | Filmmaker. Bringing emotions, passion, and authenticity to every role.',
  keywords: ['Actor', 'Simon Tibrum', 'Portfolio', 'Ghana', 'Performing Arts', 'Theatre', 'Filmmaker'],
  openGraph: {
    title: 'Simon Tibrum | Actor Portfolio',
    description: 'Actor | Storyteller | Filmmaker. Bringing emotions, passion, and authenticity to every role.',
    url: 'https://simontibrum.com', // Placeholder URL
    siteName: 'Simon Tibrum Portfolio',
    images: [
      {
        url: '/simon_hero_portrait.png',
        width: 1200,
        height: 630,
        alt: 'Simon Tibrum Actor Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simon Tibrum | Actor Portfolio',
    description: 'Actor | Storyteller | Filmmaker. Bringing emotions, passion, and authenticity to every role.',
    images: ['/simon_hero_portrait.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
