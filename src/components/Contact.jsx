import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { contactInfo } from '../data/agencyData'

const initialForm = { name: '', email: '', budget: '', message: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
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
  } else if (values.message.trim().length < 20) {
    errors.message = 'A few more details would help (20 characters min).'
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
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {contactInfo.heading}
        </h2>
        <p className="mt-4 text-slate-600">{contactInfo.subheading}</p>
      </div>

      {submitted && (
        <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
          <CheckCircle2 size={20} />
          Thanks — we'll be in touch within one business day.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange('name')}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-ink"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-ink"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="text-sm font-medium text-ink">
            Budget range
          </label>
          <select
            id="budget"
            value={values.budget}
            onChange={handleChange('budget')}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-ink"
          >
            <option value="">Select a range</option>
            {contactInfo.budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="mt-1 text-xs text-red-600">{errors.budget}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Project details
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={handleChange('message')}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-ink"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
        >
          Send message
          <Send size={16} />
        </button>
      </form>
    </section>
  )
}

export default Contact
