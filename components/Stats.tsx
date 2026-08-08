'use client'

import { useReducedMotion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedNumber({ value, suffix = '', decimals = 1 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(value)
      return
    }
    const duration = 1400
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, reduced])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-paper text-ink">
      <div className="max-w-6xl mx-auto">
        <p className="text-ice text-xs tracking-[0.2em] uppercase mb-4">Proof</p>
        <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-4">THE NUMBERS</h2>
        <p className="text-muted text-lg mb-16 max-w-xl">Film is one thing. The box score is another. Both say the same thing.</p>
        <div className="mb-20">
          <p className="text-sm text-muted uppercase tracking-widest mb-2">Peach Jam 2026 · 8 games</p>
          <div className="flex flex-wrap items-end gap-4 md:gap-8">
            <span className="font-display text-7xl md:text-9xl font-black text-heat leading-none tracking-tighter">
              <AnimatedNumber value={32.3} />
            </span>
            <div className="pb-2">
              <p className="text-2xl md:text-3xl font-bold text-ink">PPG</p>
              <p className="text-heat font-medium">Tournament MVP · Champion · Record</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-5 p-6 md:p-8 rounded-2xl bg-surface border border-ink/5">
            <p className="text-sm text-muted mb-3">Junior Season · CCA</p>
            <p className="font-display text-5xl font-black text-ice mb-1"><AnimatedNumber value={26.5} /></p>
            <p className="text-lg font-medium mb-4">PPG</p>
            <ul className="space-y-1 text-muted text-sm">
              <li>5.2 APG · 4.5 RPG · 2.7 SPG</li>
              <li>54.5% FG · 36.8% 3PT</li>
              <li>State Champion · Nat’l Jr of the Year</li>
            </ul>
          </div>
          <div className="md:col-span-7 p-6 md:p-8 rounded-2xl bg-surface border border-ink/5">
            <p className="text-sm text-muted mb-3">Peach Jam Efficiency</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div><p className="font-display text-3xl font-black text-ice"><AnimatedNumber value={58.6} suffix="%" decimals={1} /></p><p className="text-xs text-muted mt-1">FG</p></div>
              <div><p className="font-display text-3xl font-black text-ice"><AnimatedNumber value={48.8} suffix="%" decimals={1} /></p><p className="text-xs text-muted mt-1">3PT</p></div>
              <div><p className="font-display text-3xl font-black text-heat"><AnimatedNumber value={91} suffix="%" decimals={0} /></p><p className="text-xs text-muted mt-1">FT</p></div>
            </div>
            <p className="text-muted text-sm">6.1 APG · 4.9 RPG · 2.9 SPG across eight games in six days.</p>
          </div>
          <div className="md:col-span-4 p-6 md:p-8 rounded-2xl bg-surface border border-ink/5">
            <p className="text-sm text-muted mb-3">USA U17 · Gold</p>
            <p className="font-display text-4xl font-black text-ice mb-1"><AnimatedNumber value={11.7} /></p>
            <p className="text-lg font-medium mb-2">PPG</p>
            <p className="text-muted text-sm">4.7 APG · FIBA U17 World Cup Champions</p>
          </div>
          <div className="md:col-span-8 p-6 md:p-8 rounded-2xl border border-ice/20 bg-ice/5">
            <p className="text-sm text-ice mb-2 uppercase tracking-widest">The Standard</p>
            <p className="text-xl md:text-2xl font-medium text-ink leading-snug">High motor. Elite handle. Cold-blooded finishing. The numbers are not the story — they are the proof.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
