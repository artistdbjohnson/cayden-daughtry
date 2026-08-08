'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const reduced = useReducedMotion()
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section id="contact" className="relative py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-paper">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-ice text-sm tracking-widest uppercase mb-4"
        >
          Next Level
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-6"
        >
          The Work Continues
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-muted mb-12"
        >
          Cold blood. High motor. Let's talk.
        </motion.p>

        {status === 'idle' ? (
          <motion.form
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 text-left max-w-md mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-5 py-3 rounded-xl bg-surface border border-ink/15 text-ink placeholder:text-muted focus:outline-none focus:border-ice"
            />
            <input
              type="text"
              name="program"
              placeholder="Program / Organization"
              className="w-full px-5 py-3 rounded-xl bg-surface border border-ink/15 text-ink placeholder:text-muted focus:outline-none focus:border-ice"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full px-5 py-3 rounded-xl bg-surface border border-ink/15 text-ink placeholder:text-muted focus:outline-none focus:border-ice resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-ice text-paper font-semibold rounded-full hover:bg-white transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        ) : (
          <p className="text-ice text-lg">Message received. We'll be in touch.</p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="https://www.instagram.com/cay_d_baller"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ice hover:text-white font-medium transition-colors"
          >
            @cay_d_baller
          </a>
        </motion.div>
      </div>
    </section>
  )
}
