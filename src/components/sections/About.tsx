'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-cardDark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src="/simon_real_headshot.png"
              alt="Simon Tibrum Headshot"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-gold uppercase mb-2">
              About The Actor
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 sm:mb-8">
              Biography
            </h3>

            <div className="space-y-4 sm:space-y-6 text-foreground/80 leading-relaxed font-light text-base sm:text-lg">
              <p>
                Simon Tibrum Nkugnami is an actor and filmmaker with a profound passion for storytelling. Born with a natural inclination towards the performing arts, Simon believes in the transformative power of cinema and theatre to reflect the human condition.
              </p>
              <p>
                With a strong focus on romantic and emotional roles, Simon brings a unique vulnerability and fierce authenticity to his performances. He delves deep into the psychology of his characters, aiming to create performances that resonate on a deeply emotional level with the audience.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 sm:mb-6">Why Acting?</h3>
              <p className="text-foreground/80 leading-relaxed font-light text-base sm:text-lg italic border-l-2 border-gold pl-4 sm:pl-6">
                &ldquo;Acting is not just about memorizing lines; it&apos;s about embodying truth. I am driven by the emotional connection that storytelling creates. Every character is a new life, a new perspective, and a chance to make someone in the audience feel seen and understood.&rdquo;
              </p>
            </div>

            {/* Stats row — mobile friendly */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-6">
              {[
                { value: '5+', label: 'Projects' },
                { value: '3+', label: 'Years' },
                { value: '100%', label: 'Passion' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 sm:p-4 border border-white/10 rounded">
                  <p className="text-xl sm:text-3xl font-serif font-bold text-gold">{stat.value}</p>
                  <p className="text-white/50 text-xs sm:text-sm uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
