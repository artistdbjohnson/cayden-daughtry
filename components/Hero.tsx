'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { proofChips } from '@/data/stats'

export default function Hero() {
  const reduced = useReducedMotion()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduced ? 0 : 0.09,
        delayChildren: reduced ? 0 : 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end md:justify-center overflow-hidden bg-paper text-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Cayden Daughtry"
          fill
          priority
          className="object-cover object-[center_18%] md:object-center opacity-95"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/75 to-paper/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/85 via-paper/30 to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] rounded-full bg-ice/12 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/5 w-[22rem] h-[22rem] rounded-full bg-heat/12 blur-[90px]" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-16 md:pb-24 pt-32 max-w-7xl">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-ice font-medium tracking-[0.2em] text-xs md:text-sm mb-5 uppercase"
          >
            Class of 2027 · 5-Star Point Guard
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black leading-[0.88] tracking-tighter mb-5"
          >
            CAYDEN
            <br />
            DAUGHTRY
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-2xl text-muted mb-8 max-w-xl leading-snug"
          >
            Cold-Blooded Scorer · First-Ever Nike EYBL MVP · Peach Jam Champion
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-2.5 mb-10">
            {proofChips.map((chip) => (
              <span
                key={chip.label}
                className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium border ${
                  chip.heat
                    ? 'border-heat/45 text-heat bg-heat/10'
                    : 'border-ice/40 text-ice bg-ice/10'
                }`}
              >
                {chip.label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href="#highlights"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-ice text-paper font-semibold rounded-full text-sm md:text-base hover:bg-ice/90 transition-colors"
            >
              Watch Highlights
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-ink/25 text-ink font-semibold rounded-full text-sm md:text-base hover:border-ink/50 transition-colors"
            >
              Recruiting Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
