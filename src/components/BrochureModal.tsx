import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useBrochureModal } from '../context/BrochureModalContext'
import { triggerBrochureDownload } from '../lib/brochure'
import LeadForm from './LeadForm'

const successNote = (
  <>
    Your brochure download has started and we&apos;re opening WhatsApp now with your details.
  </>
)

/** Lead-capture dialog opened by every "Download Brochure" trigger that has no inline form nearby (top bar, hero, mobile sticky bar). */
export default function BrochureModal() {
  const { isOpen, close } = useBrochureModal()

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, close])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/80 px-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Download the brochure"
        className="relative w-full max-w-lg rounded-2xl border border-bronze/20 bg-charcoal-light p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-cream/50 transition-colors hover:bg-bronze/10 hover:text-bronze"
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>

        <h3 className="pr-10 text-2xl font-light text-cream sm:text-3xl">Download the Brochure</h3>
        <p className="mt-2 text-sm font-light leading-relaxed text-cream/70">
          Share your details and we&apos;ll send it straight to your WhatsApp too.
        </p>

        <LeadForm
          onSubmit={triggerBrochureDownload}
          submitLabel="Download Brochure"
          successNote={successNote}
          className="mt-6"
        />
      </div>
    </div>
  )
}
