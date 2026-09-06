import { motion } from 'framer-motion'
import { facts } from '../data/projects.js'

export default function About() {
  return (
    <section id="about" className="border-t border-abyss-line px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-flare">About</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Systems-minded design, made for teams too small for a full studio.
          </h2>
          <p className="mt-6 text-ink-dim">
            Most of my clients are founders and small teams — a roastery, a fitness
            studio, a two-person skincare brand — who need their visuals to carry
            real weight without a six-week timeline. I work across branding, social
            content and product UI, but the throughline is the same every time: build
            a small system once, so the next hundred assets take minutes instead of hours.
          </p>
          <p className="mt-4 text-ink-dim">
            Day to day that means identity guidelines, templated content libraries and
            interface components — all built in Illustrator, Photoshop and Figma, and
            handed off in whatever format the team can actually keep using.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-abyss-line bg-abyss-soft/50 p-6"
            >
              <div className="font-display text-4xl font-bold text-ink sm:text-5xl">
                {fact.value}
              </div>
              <div className="mt-2 text-sm text-ink-dim">{fact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
