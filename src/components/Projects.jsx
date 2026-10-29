import Reveal from './Reveal'
import { projects } from '../data/portfolio'


function EateryVisual() {
  
  return (

    <img src="/Adis eatery.png"  />

  )
}

function EmsVisual() {
  const rows = [
    ['FB', 'Fkr B.', 'Designer'],
    ['DK', 'Daniel K.', 'Developer'],
    ['SM', 'Selam M.', 'HR'],
  ]
  return (
    <div className="w-64 rounded-xl border border-line bg-bg p-3 shadow-lg shadow-black/10">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold">Employees</span>
        <span className="rounded-md bg-accent px-2 py-1 text-[11px] font-medium text-on-accent">+ Add</span>
      </div>
      <div className="mt-3 rounded-md border border-line px-2 py-1.5 text-[11px] text-muted">Search employees</div>
      <ul className="mt-2 divide-y divide-line text-xs">
        {rows.map(([initials, name, role]) => (
          <li key={name} className="flex items-center gap-2 py-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-surface text-[10px] font-medium text-accent">
              {initials}
            </span>
            <span className="flex-1 font-medium">{name}</span>
            <span className="text-muted">{role}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const visuals = { eatery: EateryVisual, ems: EmsVisual }

function LinkButton({ href, children }) {
  if (!href) return null
  return (
    <a href={href} target="_blank" rel="noreferrer" className="btn btn-ghost py-2">
      {children}
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="section-title">Projects</h2>
        <p className="mt-3 max-w-xl text-muted">Two projects I built to practise real application features, not just layouts.</p>

        <div className="mt-12 space-y-8">
          {projects.map((p, i) => {
            const Visual = visuals[p.visual]
            const flip = i % 2 === 1
            return (
              <Reveal key={p.id}>
                <article className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/60 md:grid-cols-5">
                  <div
                    className={`grid place-items-center bg-bg/60 p-8 md:col-span-2 ${flip ? 'md:order-2' : ''}`}
                    aria-hidden="true"
                  >
                    <div className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
                      {Visual && <Visual />}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 md:col-span-3">
                    <p className="text-sm text-muted">{p.kind}</p>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>

                    <ul className="mt-4 space-y-2 text-sm">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <LinkButton href={p.repo}>View code</LinkButton>
                      <LinkButton href={p.live}>Live demo</LinkButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
