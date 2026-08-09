'use client'

import Image from 'next/image'
import { awards, offers } from '@/data/recognition'

export default function Recognition() {
  return (
    <section id="recognition" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-ice text-sm tracking-widest uppercase mb-4">Proof</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">Recognition</h2>

        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 relative aspect-[3/4] rounded-2xl overflow-hidden border border-ink/10 bg-paper">
            <Image
              src="/images/trophy.jpg"
              alt="Peach Jam trophy"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-sm text-heat font-medium uppercase tracking-wider">Peach Jam 2026</p>
              <p className="text-lg font-bold">MVP · Champion</p>
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {awards.map((a) => (
              <div
                key={a.label}
                className={`p-5 rounded-xl border ${
                  a.heat ? 'border-heat/30 bg-heat/5' : 'border-ice/20 bg-ice/5'
                }`}
              >
                <p className="font-medium leading-snug">{a.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-muted text-sm tracking-widest uppercase mb-4">Major Offers</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {offers.map((o) => (
              <span
                key={o}
                className="px-4 py-2 rounded-full border border-ink/15 text-sm font-medium"
              >
                {o}
              </span>
            ))}
          </div>
          <p className="text-xl md:text-2xl font-bold tracking-tight">
            Uncommitted. The board is open.
          </p>
        </div>
      </div>
    </section>
  )
}
