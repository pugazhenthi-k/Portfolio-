import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail, Palette } from 'lucide-react'

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Palette, label: 'Behance', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', project: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-abyss-line px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-flare">Contact</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Have a brand, feed or product that needs a visual language?
          </h2>
          <p className="mt-6 max-w-sm text-ink-dim">
            Tell me a little about the project and timeline. I read every message
            myself and usually reply within a couple of days.
          </p>

          <a
            href="mailto:hello@pugazhenthi.design"
            className="mt-8 inline-flex items-center gap-2 text-sm text-ink hover:text-flare"
          >
            <Mail size={16} />
            hello@pugazhenthi.design
          </a>

          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-abyss-line text-ink-dim transition-colors hover:border-flare hover:text-flare"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <motion.form
          name="contact"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-abyss-line bg-abyss-soft/50 p-6 sm:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              Name
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-lg border border-abyss-line bg-abyss px-4 py-2.5 text-ink outline-none transition-colors focus:border-flare"
                placeholder="Meera Iyer"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-lg border border-abyss-line bg-abyss px-4 py-2.5 text-ink outline-none transition-colors focus:border-flare"
                placeholder="meera@studio.co"
              />
            </label>
          </div>

          <label className="mt-5 flex flex-col gap-2 text-sm">
            Project type
            <select
              name="project"
              value={form.project}
              onChange={handleChange}
              className="rounded-lg border border-abyss-line bg-abyss px-4 py-2.5 text-ink outline-none transition-colors focus:border-flare"
            >
              <option value="">Select one</option>
              <option value="Branding & Identity">Branding & Identity</option>
              <option value="Social Media Design">Social Media Design</option>
              <option value="UI / Visual Design">UI / Visual Design</option>
              <option value="Something else">Something else</option>
            </select>
          </label>

          <label className="mt-5 flex flex-col gap-2 text-sm">
            Message
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="resize-none rounded-lg border border-abyss-line bg-abyss px-4 py-2.5 text-ink outline-none transition-colors focus:border-flare"
              placeholder="What are you building, and by when?"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 w-full rounded-full bg-flare px-6 py-3 text-sm font-semibold text-abyss transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === 'loading' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-sm text-lagoon">
              Thanks — your message is in. I'll get back to you shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-flare">
              Something went wrong sending that. Try again, or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
