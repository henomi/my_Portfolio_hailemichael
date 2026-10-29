import { about, skills } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="section-title">About me</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="space-y-8 md:pt-2">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="font-display text-lg font-medium">{s.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
