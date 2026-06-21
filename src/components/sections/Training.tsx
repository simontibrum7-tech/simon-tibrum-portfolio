'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Training() {
  return (
    <section id="training" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-gold uppercase mb-2">Development</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Training & Journey
            </h3>
            
            <p className="text-foreground/80 leading-relaxed font-light text-lg mb-8">
              Continuous learning and dedication to the craft of acting are at the core of my journey. Building a strong foundation allows for greater emotional depth and versatility on screen and stage.
            </p>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-cardDark text-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-cardDark border border-white/5 group-hover:border-gold/30 transition-colors">
                  <div className="flex flex-col mb-2">
                    <span className="text-gold text-sm tracking-wider font-semibold">Future Goal</span>
                    <h4 className="text-xl font-serif text-white mt-1">National Film and Television Institute (Ghana)</h4>
                  </div>
                  <p className="text-foreground/60 font-light text-sm">
                    Aspiring to hone skills in advanced acting techniques, script interpretation, and cinematic performance at NAFTI.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-cardDark text-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-cardDark border border-white/5 group-hover:border-gold/30 transition-colors">
                  <div className="flex flex-col mb-2">
                    <span className="text-foreground/50 text-sm tracking-wider font-semibold">Current Focus</span>
                    <h4 className="text-xl font-serif text-white mt-1">Independent Scene Study & Workshops</h4>
                  </div>
                  <p className="text-foreground/60 font-light text-sm">
                    Intensive study of emotional range, character building, and acting methodologies.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative h-full min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10 w-1/3" />
            <Image 
              src="/theatre_stage_dark.png" 
              alt="Theatre stage" 
              fill
              className="object-cover opacity-30 grayscale"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
