'use client'

import { mediaItems, mediaLinks } from '@/data/media'

export default function Media() {
  return (
    <section id="highlights" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-paper">
      <div className="max-w-6xl mx-auto">
        <p className="text-ice text-sm tracking-widest uppercase mb-4">Film</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          The Film Doesn&apos;t Lie
        </h2>
        <p className="text-muted text-lg mb-12 max-w-2xl">
          High-motor possessions. Record-setting runs. The work on tape.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {mediaItems.map((h) => (
            <a
              key={h.id}
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video rounded-2xl overflow-hidden border border-ink/10 bg-surface hover:border-ice/30 transition-colors"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-ice text-paper flex items-center justify-center font-bold text-xl shadow-lg shadow-ice/20">
                  ▶
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="font-semibold text-lg">{h.title}</p>
                <p className="text-sm text-muted">{h.note}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={mediaLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ice font-medium hover:underline"
          >
            More film · @cay_d_baller →
          </a>
        </div>
      </div>
    </section>
  )
}
