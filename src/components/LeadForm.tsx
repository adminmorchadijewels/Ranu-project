import { useId, useState, type FormEvent } from 'react'
import { buildWhatsAppLink } from '../config/site'
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
