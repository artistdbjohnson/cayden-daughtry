'use client'

import { motion, useReducedMotion } from 'framer-motion'

const highlights = [
  {
    id: '1',
    title: 'Primary Highlight Reel',
    url: 'https://www.youtube.com/watch?v=a_QRyQrsIfM',
    note: 'Cold-blooded scoring · pace control',
  },
  {
    id: '2',
    title: 'Secondary Highlight Reel',
    url: 'https://www.youtube.com/watch?v=sEAB8U6zjVE',
    note: 'Handle · IQ · finishing',
  },
]

export default function Media() {
  const reduced = useReducedMotion()

  return (
    <section id="highlights" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-paper">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-ice text-sm tracking-widest uppercase mb-4"
        >
          Film
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-4"
        >
          The Film Doesn't Lie
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted text-lg mb-12 max-w-2xl"
        >
          High-motor possessions. Record-setting runs. The work on tape.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((h, i) => (
            <motion.a
              key={h.id}
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: reduced ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduced ? 0 : i * 0.1 }}
              whileHover={reduced ? {} : { scale: 1.02 }}
              className="group relative aspect-video rounded-2xl overflow-hidden border border-ink/10 bg-surface"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 rounded-full bg-ice/90 text-paper flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  ▶
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-semibold text-lg">{h.title}</p>
                <p className="text-sm text-muted">{h.note}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.instagram.com/cay_d_baller"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ice hover:text-white transition-colors font-medium"
          >
            More film · @cay_d_baller →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
