'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/simon_real_hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-gold tracking-[0.2em] uppercase text-sm md:text-base font-semibold mb-4">
            Actor | Storyteller | Filmmaker
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight">
            SIMON TIBRUM
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light italic mb-10">
            "Bringing emotions, passion, and authenticity to every role."
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="#portfolio" className="px-8 py-4 bg-gold text-black font-semibold tracking-wide uppercase text-sm hover:bg-white transition-colors duration-300">
            View Portfolio
          </Link>
          <Link href="#contact" className="px-8 py-4 border border-white/30 text-white font-semibold tracking-wide uppercase text-sm hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
