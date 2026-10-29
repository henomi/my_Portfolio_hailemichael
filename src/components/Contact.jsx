import { useState } from 'react'
import Reveal from './Reveal'
import { profile } from '../data/portfolio'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '', company: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!emailOk(values.email)) next.email = 'Enter a valid email address.'
    if (values.message.trim().length < 10) next.message = 'Write at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values.company) return // honeypot: bots fill this hidden field
    if (!validate()) return

    // No Formspree ID set: fall back to the visitor's email app.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\n${values.name} (${values.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: values.name, email: values.email, message: values.message }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setValues({ name: '', email: '', message: '', company: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="section-title">Contact me</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            Hiring for an internship or a junior role? Send me a message and I will reply within two days.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
                LinkedIn
              </a>
            </li>
            <li className="text-muted">{profile.location}</li>
          </ul>
        </div>

        <Reveal>
          <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-line bg-surface p-6">
            {/* Honeypot field: hidden from people, visible to bots */}
            <div className="hidden" aria-hidden="true">
              <label>
                Company
                <input name="company" value={values.company} onChange={onChange} tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input id="name" name="name" value={values.name} onChange={onChange} className="field" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input id="email" name="email" type="email" value={values.email} onChange={onChange} className="field" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} className="field resize-y" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:opacity-60">
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
              {status === 'sent' && <span className="text-accent">Message sent. Thank you, I will reply soon.</span>}
              {status === 'error' && (
                <span className="text-red-500">
                  Message not sent. Try again, or email me at {profile.email}.
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
