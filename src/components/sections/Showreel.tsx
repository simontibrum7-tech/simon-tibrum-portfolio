'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Showreel() {
  return (
    <section id="showreel" className="py-24 bg-cardDark">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-gold uppercase mb-2">Watch</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Acting Showreel
          </h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video max-w-5xl mx-auto bg-black border border-white/10 group cursor-pointer overflow-hidden flex items-center justify-center"
        >
          {/* Background Poster Placeholder */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundImage: 'url("/theatre_stage_dark.png")' }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-300">
              <Play fill="currentColor" size={32} className="ml-2" />
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6">
            <p className="text-white font-medium tracking-wider">Showreel 2026 - Selected Works</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
