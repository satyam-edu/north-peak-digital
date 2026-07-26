import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { contactInfo } from '../data/agencyData'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

const inputClasses =
  'mt-2 w-full rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500'

const initialForm = { name: '', email: '', budget: '', message: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'That email address looks off.'
  }

  if (!values.budget) {
    errors.budget = 'Pick a budget range.'
  }

  if (!values.message.trim()) {
    errors.message = 'Tell us a little about the project.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'A few more details would help (10 characters min).'
  }

  return errors
}

function Contact() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setValues(initialForm)
    }
  }

  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
            {contactInfo.heading}
          </h2>
          <p className="mt-4 text-slate-300">{contactInfo.subheading}</p>
        </div>

        {submitted && (
          <div
            role="status"
            className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-300"
          >
            <CheckCircle2 size={20} className="shrink-0 text-emerald-400" aria-hidden="true" />
            Thank you! We've received your request and will respond within 24 hours.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={handleChange('name')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={inputClasses}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-rose-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClasses}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-rose-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="text-sm font-medium text-slate-200">
              Budget range
            </label>
            <select
              id="budget"
              value={values.budget}
              onChange={handleChange('budget')}
              aria-invalid={Boolean(errors.budget)}
              aria-describedby={errors.budget ? 'budget-error' : undefined}
              className={inputClasses}
            >
              <option value="">Select a range</option>
              {contactInfo.budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p id="budget-error" className="mt-1 text-sm text-rose-400">
                {errors.budget}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-slate-200">
              Project details
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={handleChange('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={inputClasses}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-rose-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 ${focusRing}`}
          >
            Send message
            <Send size={16} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
