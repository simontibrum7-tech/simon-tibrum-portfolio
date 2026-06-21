'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolioImages = [
  { id: 1, src: "/gallery_1.png", title: "Dramatic Headshot" },
  { id: 2, src: "/gallery_2.jpg", title: "Commercial Look" },
  { id: 3, src: "/gallery_3.jpg", title: "Casual Look" },
  { id: 4, src: "/gallery_4.png", title: "Theatrical Pose" },
  { id: 5, src: "/simon_real_headshot.png", title: "Corporate Look" },
  { id: 6, src: "/simon_real_hero.jpg", title: "Main Feature" },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-gold uppercase mb-2">Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Portfolio
          </h3>
          <p className="text-foreground/70 font-light text-lg">
            A visual journey through roles, headshots, and behind-the-scenes moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden bg-cardDark cursor-pointer"
            >
              <Image 
                src={image.src} 
                alt={image.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-medium text-lg tracking-wide uppercase">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
