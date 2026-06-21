'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Showreel', href: '#showreel' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Close menu on scroll
      if (isMobileMenuOpen) setIsMobileMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#home"
          className="text-lg sm:text-2xl font-serif font-bold text-gold tracking-wider shrink-0"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          SIMON TIBRUM
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-gold transition-colors font-medium tracking-wide uppercase text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground hover:text-gold transition-colors p-2 -mr-2 tap-target flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu — Full screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 bg-black/98 z-40 md:hidden flex flex-col"
          >
            {/* Header row inside mobile menu */}
            <div className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 border-b border-white/10">
              <span className="text-lg font-serif font-bold text-gold tracking-wider">SIMON TIBRUM</span>
              <button
                className="text-white p-2 tap-target flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col justify-center flex-1 px-8 gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-3xl font-serif text-white/80 hover:text-gold transition-colors tracking-wide border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social hint at bottom */}
            <div className="px-8 py-8 text-white/30 text-sm tracking-widest uppercase">
              Actor · Storyteller · Filmmaker
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
