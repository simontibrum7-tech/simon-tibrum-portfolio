'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Showreel() {
  return (
    <section id="showreel" className="py-16 sm:py-20 md:py-24 bg-cardDark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-gold uppercase mb-2">Watch</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">
            Acting Showreel
          </h3>
          <p className="text-foreground/60 font-light text-sm sm:text-base px-2">
            A collection of selected performances and scenes.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video max-w-5xl mx-auto bg-black border border-white/10 group cursor-pointer overflow-hidden flex items-center justify-center"
        >
          {/* Background Poster */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundImage: 'url("/theatre_stage_dark.png")' }}
          />

          {/* Play button — larger tap target on mobile */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gold/90 rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-300">
              <Play fill="currentColor" size={24} className="ml-1 sm:ml-2" />
            </div>
          </div>

          {/* Label */}
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
            <p className="text-white font-medium tracking-wider text-xs sm:text-sm md:text-base">
              Showreel 2026 — Selected Works
            </p>
          </div>
        </motion.div>

        {/* YouTube channel link below video */}
        <div className="text-center mt-6 sm:mt-8">
          <a
            href="https://www.youtube.com/@Simontibrum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm sm:text-base font-medium tracking-wide underline underline-offset-4"
          >
            Watch more on YouTube →
          </a>
        </div>

      </div>
    </section>
  )
}
