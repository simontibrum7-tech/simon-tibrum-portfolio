'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/simon_real_hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          <h2 className="text-gold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base font-semibold mb-3 sm:mb-4">
            Actor | Storyteller | Filmmaker
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            SIMON TIBRUM
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-foreground/80 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto font-light italic mb-8 sm:mb-10 px-2">
            &ldquo;Bringing emotions, passion, and authenticity to every role.&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Link
            href="#portfolio"
            className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-gold text-black font-semibold tracking-wide uppercase text-sm hover:bg-white transition-colors duration-300"
          >
            View Portfolio
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white font-semibold tracking-wide uppercase text-sm hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase hidden sm:block">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
