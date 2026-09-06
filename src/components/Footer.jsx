import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-abyss-line px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-ink-dim">
          © {new Date().getFullYear()} Pugazhenthi K. All rights reserved.
        </p>
        <a
          href="#top"
          className="flex items-center gap-1.5 text-xs text-ink-dim transition-colors hover:text-flare"
        >
          Back to top
          <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  )
}
