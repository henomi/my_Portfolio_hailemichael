import { profile, now } from '../data/portfolio'

// One orchestrated entrance on page load: each piece rises in turn.
const step = (i) => ({ animationDelay: `${i * 110}ms` })

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted"
            style={step(0)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to internships and junior roles
          </p>

          <h1
            className="animate-rise mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
            style={step(1)}
          >
            {profile.name}
          </h1>

          <p className="animate-rise mt-3 font-display text-xl text-accent sm:text-2xl" style={step(2)}>
            {profile.role}
          </p>

          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={step(3)}>
            {profile.intro}
          </p>

          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={step(4)}>
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href={profile.cvUrl} download={profile.cvFileName} className="btn btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <aside className="animate-rise rounded-xl border border-line bg-surface p-6" style={step(5)} aria-label="Current focus">
          <dl className="space-y-5">
            {now.map((item) => (
              <div key={item.label} className="border-l-2 border-accent pl-4">
                <dt className="text-sm font-medium">{item.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
