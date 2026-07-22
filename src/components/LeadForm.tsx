import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { CALL_LINK, PHONE_DISPLAY } from '../config/site'
import Button from './Button'

interface LeadFormProps {
  /** Called with the validated name and 10-digit phone once the form passes validation. */
  onSubmit: (name: string, phone: string) => void
  submitLabel: string
  className?: string
  /** Confirmation copy shown after submit. Defaults to the WhatsApp-only note. */
  successNote?: ReactNode
}

const defaultSuccessNote = (
  <>
    We&apos;re opening WhatsApp now. If it doesn&apos;t open automatically, please call us at{' '}
    <a href={CALL_LINK} className="text-bronze underline-offset-4 hover:underline">
      {PHONE_DISPLAY}
    </a>
    .
  </>
)

/** Compact name + phone form. Validates both fields, then hands off to `onSubmit` and shows a thank-you state. Shared by the top lead capture section, the Final CTA and the brochure download flow. */
export default function LeadForm({ onSubmit, submitLabel, className = '', successNote }: LeadFormProps) {
  const nameId = useId()
  const phoneId = useId()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const trimmedName = name.trim()
    const digitsOnlyPhone = phone.trim().replace(/\D/g, '')

    if (!trimmedName) {
      setError('Please enter your name.')
      return
    }
    if (digitsOnlyPhone.length !== 10) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }

    setError('')
    onSubmit(trimmedName, digitsOnlyPhone)
    setSubmittedName(trimmedName)
  }

  function handleReset() {
    setSubmittedName(null)
    setName('')
    setPhone('')
    setError('')
  }

  if (submittedName) {
    return (
      <div className={`text-center ${className}`}>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-bronze/40 text-bronze">
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <p className="mt-5 text-lg font-medium text-cream">Thank you, {submittedName}.</p>
        <p className="mx-auto mt-2 max-w-sm text-sm font-light leading-relaxed text-cream/70">
          {successNote ?? defaultSuccessNote}
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 text-sm font-light text-cream/60 underline-offset-4 hover:text-bronze hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 text-left ${className}`}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={nameId} className="mb-2 block text-xs font-medium uppercase tracking-widest text-cream/60">
            Full Name
          </label>
          <input
            id={nameId}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            autoComplete="name"
            className="w-full rounded-xl border border-bronze/25 bg-charcoal px-5 py-4 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-bronze"
          />
        </div>
        <div>
          <label htmlFor={phoneId} className="mb-2 block text-xs font-medium uppercase tracking-widest text-cream/60">
            Phone Number
          </label>
          <input
            id={phoneId}
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            autoComplete="tel"
            className="w-full rounded-xl border border-bronze/25 bg-charcoal px-5 py-4 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-bronze"
          />
        </div>
      </div>

      {error && <p className="text-sm font-medium text-red-400">{error}</p>}

      <Button type="submit" variant="primary" className="mt-2 w-full !py-5 text-base">
        {submitLabel}
      </Button>
    </form>
  )
}
