'use client'

import { motion } from 'framer-motion'
import { JourneyNode } from '@/data/journeyNodes'

export default function ReducedMotionTimeline({ nodes }: { nodes: JourneyNode[] }) {
  return (
    <section id="journey" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[var(--paper)]">
      <div className="max-w-3xl mx-auto">
        <p className="text-[var(--ice)] text-sm tracking-widest uppercase mb-4">The Path</p>
        <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-12 text-[var(--ink)]">
          Momentum
        </h2>
        <div className="space-y-12">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-l-2 border-[var(--ice)]/40 pl-6"
            >
              <p className="text-xs uppercase tracking-wider text-[var(--muted)] mb-1">
                {node.year} · {node.title}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--ink)] mb-2">{node.headline}</h3>
              {node.proof && (
                <p className={`text-sm font-medium mb-2 ${
                  node.accent === 'heat' ? 'text-[var(--heat)]' : 'text-[var(--ice)]'
                }`}>
                  {node.proof}
                </p>
              )}
              <p className="text-[var(--muted)] leading-relaxed">{node.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
