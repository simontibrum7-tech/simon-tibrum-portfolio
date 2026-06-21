'use client'

import { motion } from 'framer-motion'

const timelineItems = [
  {
    label: 'Future Goal',
    labelColor: 'text-gold',
    title: 'National Film and Television Institute (Ghana)',
    desc: 'Aspiring to hone skills in advanced acting techniques, script interpretation, and cinematic performance at NAFTI.',
  },
  {
    label: 'Current Focus',
    labelColor: 'text-foreground/50',
    title: 'Independent Scene Study & Workshops',
    desc: 'Intensive study of emotional range, character building, and acting methodologies.',
  },
]

export default function Training() {
  return (
    <section id="training" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* Text + Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-gold uppercase mb-2">Development</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 sm:mb-8">
              Training &amp; Journey
            </h3>

            <p className="text-foreground/80 leading-relaxed font-light text-base sm:text-lg mb-8 sm:mb-10">
              Continuous learning and dedication to the craft of acting are at the core of my journey. Building a strong foundation allows for greater emotional depth and versatility on screen and stage.
            </p>

            {/* Timeline */}
            <div className="space-y-4 sm:space-y-6">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-4 sm:gap-5"
                >
                  {/* Dot + line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-gold mt-1.5 shrink-0" />
                    {i < timelineItems.length - 1 && (
                      <div className="w-px flex-1 bg-white/10 mt-2" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="pb-6 sm:pb-8 w-full">
                    <div className="p-4 sm:p-6 bg-cardDark border border-white/5 hover:border-gold/30 transition-colors rounded-sm">
                      <span className={`text-xs sm:text-sm tracking-wider font-semibold ${item.labelColor}`}>
                        {item.label}
                      </span>
                      <h4 className="text-base sm:text-xl font-serif text-white mt-1 mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-foreground/60 font-light text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills section — replaces the hidden image on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-gold uppercase mb-2">Skills</h2>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6 sm:mb-8">
              Core Abilities
            </h3>

            <div className="space-y-4 sm:space-y-5">
              {[
                { skill: 'Emotional Acting', level: 92 },
                { skill: 'Character Development', level: 88 },
                { skill: 'Script Analysis', level: 80 },
                { skill: 'On-Camera Performance', level: 85 },
                { skill: 'Voice & Diction', level: 78 },
                { skill: 'Physical Expression', level: 82 },
              ].map(({ skill, level }) => (
                <div key={skill}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-white/80 text-sm sm:text-base font-medium">{skill}</span>
                    <span className="text-gold text-xs sm:text-sm font-semibold">{level}%</span>
                  </div>
                  <div className="h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-gold to-yellow-300 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
