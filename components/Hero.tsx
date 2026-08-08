'use client'

import { motion, useReducedMotion } from 'framer-motion'

const proofChips = [
  { label: 'Peach Jam MVP', heat: true },
  { label: '32.3 PPG', heat: false },
  { label: 'Nat\'l Jr of the Year', heat: false },
  { label: 'U17 Gold', heat: false },
  { label: 'State Champ ×2', heat: true },
]

export default function Hero() {
  const reduced = useReducedMotion()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: reduced ? 0 : 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.5 } },
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-paper text-ink px-6 md:px-12 lg:px-20">
      {/* Ambient energy layer placeholder – Canvas UI or particles later */}
      <div className="absolute inset-0 pointer-events-none opacity-30 motion-heavy">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ice/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-heat/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl"
      >
        <motion.p variants={item} className="text-ice font-medium tracking-widest text-sm md:text-base mb-4 uppercase">
          Class of 2027 · 5-Star Point Guard
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-4"
        >
          CAYDEN<br />DAUGHTRY
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl text-muted mb-8 max-w-xl">
          Cold-Blooded Scorer · Peach Jam Champion · National Junior of the Year
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
          {proofChips.map((chip) => (
            <span
              key={chip.label}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                chip.heat
                  ? 'border-heat/40 text-heat bg-heat/10'
                  : 'border-ice/40 text-ice bg-ice/10'
              }`}
            >
              {chip.label}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a
            href="#highlights"
            className="inline-flex items-center px-8 py-4 bg-ice text-paper font-semibold rounded-full hover:bg-white transition-colors"
          >
            Watch Highlights
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-ink/30 text-ink font-semibold rounded-full hover:border-ice hover:text-ice transition-colors"
          >
            Recruiting Contact
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
