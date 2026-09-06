import { motion } from 'framer-motion'
import { skills } from '../data/projects.js'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-abyss-line px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-flare">Skills</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Tools I reach for every week.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-dim">
            Comfortable moving between vector, raster and interface-design workflows —
            whichever the deliverable actually calls for.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="mb-2.5 flex items-baseline justify-between">
                <span className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                  {skill.label}
                </span>
                <span className="text-xs text-ink-dim">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-abyss-line">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-flare-soft to-flare"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
