import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { projects } from '../data/projects.js'

const sizeClass = {
  lg: 'sm:col-span-2 sm:row-span-2 h-64 sm:h-full',
  md: 'sm:col-span-1 sm:row-span-2 h-56 sm:h-full',
  sm: 'sm:col-span-1 sm:row-span-1 h-56',
}

function Card({ project, onOpen }) {
  return (
    <motion.button
      layoutId={project.id}
      onClick={() => onOpen(project.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border border-abyss-line text-left ${sizeClass[project.size]}`}
      style={{
        background: `linear-gradient(150deg, ${project.palette[0]} 0%, ${project.palette[1]} 100%)`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-black/25 px-3 py-1 text-xs uppercase tracking-[0.12em] text-white/85">
            {project.tags[0]}
          </span>
          <span className="text-xs text-white/60">{project.year}</span>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-white/60">{project.client}</p>
          <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
    </motion.button>
  )
}

export default function Work() {
  const [activeId, setActiveId] = useState(null)
  const active = projects.find((p) => p.id === activeId)

  return (
    <section id="work" className="border-t border-abyss-line px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-flare">Selected work</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            A handful of recent projects.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:[grid-template-rows:repeat(3,minmax(0,1fr))]">
          {projects.map((project) => (
            <Card key={project.id} project={project} onOpen={setActiveId} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-abyss/80 p-6 backdrop-blur-sm"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              layoutId={active.id}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-abyss-line bg-abyss-soft"
            >
              <div
                className="h-40 w-full"
                style={{
                  background: `linear-gradient(150deg, ${active.palette[0]} 0%, ${active.palette[1]} 100%)`,
                }}
              />
              <button
                onClick={() => setActiveId(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-abyss-line px-3 py-1 text-xs text-ink-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-ink-dim">
                  {active.client} · {active.year}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold">{active.title}</h3>
                <p className="mt-3 text-sm text-ink-dim">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
