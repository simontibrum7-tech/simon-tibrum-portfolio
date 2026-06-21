'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-cardDark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image 
              src="/simon_real_headshot.png" 
              alt="Simon Tibrum Headshot" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-gold uppercase mb-2">About The Actor</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Biography
            </h3>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed font-light text-lg">
              <p>
                Simon Tibrum Nkugnami is an actor and filmmaker with a profound passion for storytelling. Born with a natural inclination towards the performing arts, Simon believes in the transformative power of cinema and theatre to reflect the human condition.
              </p>
              <p>
                With a strong focus on romantic and emotional roles, Simon brings a unique vulnerability and fierce authenticity to his performances. He delves deep into the psychology of his characters, aiming to create performances that resonate on a deeply emotional level with the audience.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Why Acting?</h3>
              <p className="text-foreground/80 leading-relaxed font-light text-lg italic border-l-2 border-gold pl-6">
                "Acting is not just about memorizing lines; it's about embodying truth. I am driven by the emotional connection that storytelling creates. Every character is a new life, a new perspective, and a chance to make someone in the audience feel seen and understood."
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
