'use client'

import { motion, useReducedMotion } from 'framer-motion'

const awards = [
  { label: 'MaxPreps National Junior of the Year', heat: true },
  { label: 'Peach Jam 2026 MVP & Champion', heat: true },
  { label: 'USA Today All-American (only junior)', heat: false },
  { label: 'FIBA U17 World Cup Gold', heat: true },
  { label: 'Jr. NBA Court of Leaders', heat: false },
  { label: 'FHSAA Class 3A State Champion ×2', heat: true },
  { label: 'Broward / Florida POY', heat: false },
]

const offers = ['Kentucky', 'Miami', 'Michigan', 'Louisville', 'Florida', 'FSU', 'Iowa', 'UConn', 'Villanova', 'Illinois']

export default function Recognition() {
  const reduced = useReducedMotion()
  return (
    <section id="recognition" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.p initial={{ opacity: 0, y: reduced ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-ice text-sm tracking-widest uppercase mb-4">Proof</motion.p>
        <motion.h2 initial={{ opacity: 0, y: reduced ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-12">Recognition</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {awards.map((a, i) => (
            <motion.div key={a.label} initial={{ opacity: 0, y: reduced ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : i * 0.05 }} className={`p-5 rounded-xl border ${a.heat ? 'border-heat/30 bg-heat/5' : 'border-ice/20 bg-ice/5'}`}>
              <p className="font-medium leading-snug">{a.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: reduced ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-muted text-sm tracking-widest uppercase mb-4">Major Offers</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {offers.map((o) => (<span key={o} className="px-4 py-2 rounded-full border border-ink/15 text-sm font-medium">{o}</span>))}
          </div>
          <p className="text-xl md:text-2xl font-display font-bold tracking-tight">Uncommitted. The board is open.</p>
        </motion.div>
      </div>
    </section>
  )
}
