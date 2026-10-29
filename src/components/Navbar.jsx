import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { profile } from '../data/portfolio'

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-muted transition-colors hover:text-ink">
              {label}
            </a>
          ))}
          <a href={profile.cvUrl} download={profile.cvFileName} className="text-sm font-medium text-accent hover:underline">
            CV
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-5 py-2">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-muted hover:text-ink">
                {label}
              </a>
            ))}
            <a href={profile.cvUrl} download={profile.cvFileName} className="py-3 font-medium text-accent">
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
