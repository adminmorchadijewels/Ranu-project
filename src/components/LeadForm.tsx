import { useId, useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { buildWhatsAppLink, CALL_LINK, PHONE_DISPLAY } from '../config/site'
import Button from './Button'

interface LeadFormProps {
  /** Builds the pre-filled WhatsApp message from the submitted name and 10-digit phone. */
  buildMessage: (name: string, phone: string) => string
  submitLabel: string
  className?: string
}

/** Compact name + phone form that opens WhatsApp with a pre-filled message on submit. Shared by the top lead capture section and the Final CTA. */
export default function LeadForm({ buildMessage, submitLabel, className = '' }: LeadFormProps) {
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
    const link = buildWhatsAppLink(buildMessage(trimmedName, digitsOnlyPhone))
    window.open(link, '_blank', 'noopener,noreferrer')
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
          We&apos;re opening WhatsApp now. If it doesn&apos;t open automatically, please call us at{' '}
          <a href={CALL_LINK} className="text-bronze underline-offset-4 hover:underline">
            {PHONE_DISPLAY}
          </a>
          .
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
