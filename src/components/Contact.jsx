import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { contactInfo } from '../data/agencyData'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white'

const inputClasses =
  'mt-2 w-full rounded-xl border border-ink/15 bg-white p-3.5 text-sm text-ink placeholder-ink/30 outline-none transition-colors focus:border-accent'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

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
  const [status, setStatus] = useState('idle')

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')

    setTimeout(() => {
      setStatus('success')
      setSubmitted(true)
      setValues(initialForm)

      setTimeout(() => setStatus('idle'), 1800)
    }, 900)
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
    >
      <div className="mb-12 rounded-[32px] border border-ink/10 bg-white p-8 shadow-xl md:p-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariants}
          style={{ transformPerspective: 800 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
            <span aria-hidden="true">04</span>
            Contact
          </span>
          <h2 className="mt-6 font-display text-3xl text-ink md:text-4xl">
            {contactInfo.heading}
          </h2>
          <p className="mt-4 text-muted">{contactInfo.subheading}</p>
          <a
            href={`mailto:${contactInfo.email}`}
            className={`mt-4 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink ${focusRing}`}
          >
            <Mail size={16} aria-hidden="true" />
            {contactInfo.email}
          </a>
        </motion.div>

        {submitted && (
          <div
            role="status"
            className="mt-8 flex items-center gap-3 rounded-xl bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-700"
          >
            <CheckCircle2 size={20} className="shrink-0 text-emerald-600" aria-hidden="true" />
            Thank you! We've received your request and will respond within 24 hours.
          </div>
        )}

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariants}
          style={{ transformPerspective: 800 }}
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 space-y-6"
        >
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
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={inputClasses}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm font-medium text-red-600">
                  {errors.name}
                </p>
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
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClasses}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm font-medium text-red-600">
                  {errors.email}
                </p>
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
              <p id="budget-error" className="mt-1 text-sm font-medium text-red-600">
                {errors.budget}
              </p>
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
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={inputClasses}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm font-medium text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status !== 'idle'}
            className={`inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === 'idle' && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2"
                >
                  Send message
                  <Send size={16} aria-hidden="true" />
                </motion.span>
              )}
              {status === 'submitting' && (
                <motion.span
                  key="submitting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2"
                >
                  Sending...
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                </motion.span>
              )}
              {status === 'success' && (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2"
                >
                  Sent
                  <CheckCircle2 size={16} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Contact
