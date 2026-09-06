import { motion } from 'framer-motion'
import { ArrowDownRight, Sparkle } from 'lucide-react'

const swatchCards = [
  { rotate: -8, x: 0, y: 0, colors: ['#e8895a', '#2a2118'], label: 'Kavaru' },
  { rotate: 6, x: 46, y: 40, colors: ['#5fb8a8', '#12151f'], label: 'Verdant' },
  { rotate: -3, x: -12, y: 120, colors: ['#7c8cff', '#0b0d13'], label: 'Northline' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mesh-glow absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-abyss-line bg-abyss-soft/60 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-ink-dim"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lagoon/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lagoon" />
            </span>
            Open for freelance projects
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="font-display text-[13vw] font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Design that
            <br />
            speaks before
            <br />
            <span className="text-flare">words</span> do.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-md text-base text-ink-dim sm:text-lg"
          >
            I'm Pugazhenthi K, a graphic designer building brand identities, social
            content systems and product visuals for small teams who need their work
            to look considered from day one.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-flare px-6 py-3 text-sm font-semibold text-abyss transition-transform hover:-translate-y-0.5"
            >
              View selected work
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-abyss-line px-6 py-3 text-sm text-ink transition-colors hover:border-ink-dim"
            >
              <Sparkle size={15} className="text-flare" />
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto hidden h-[320px] w-full max-w-sm sm:block"
        >
          {swatchCards.map((card, i) => (
            <div
              key={card.label}
              style={{
                transform: `translate(${card.x}px, ${card.y}px) rotate(${card.rotate}deg)`,
                background: `linear-gradient(155deg, ${card.colors[0]} 0%, ${card.colors[1]} 100%)`,
              }}
              className="absolute left-0 top-0 flex h-44 w-56 flex-col justify-between rounded-2xl border border-white/10 p-4 shadow-2xl shadow-black/40"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-white/70">
                {card.label}
              </span>
              <div className="flex gap-1.5">
                {card.colors.map((c) => (
                  <span key={c} className="h-5 w-5 rounded-full border border-white/30" style={{ background: c }} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
