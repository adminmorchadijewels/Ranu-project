import { Download, Phone } from 'lucide-react'
import { WHATSAPP_LINK, CALL_LINK, PROJECT } from '../config/site'
import { useBrochureModal } from '../context/BrochureModalContext'
import Button from './Button'

export default function TopBar() {
  const { open: openBrochureModal } = useBrochureModal()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-bronze/10 bg-charcoal/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
        <span className="font-serif text-xl font-light tracking-wide text-cream sm:text-2xl">
          {PROJECT.name}
        </span>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            as="a"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="!px-4 !py-2.5 text-xs sm:!px-6 sm:!py-3 sm:text-sm"
          >
            Enquire on WhatsApp
          </Button>
          <button
            type="button"
            onClick={openBrochureModal}
            className="hidden h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-bronze/40 px-5 text-sm text-bronze transition-colors duration-300 hover:bg-bronze/10 active:scale-95 sm:flex"
          >
            <Download className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            Download Brochure
          </button>
          <a
            href={CALL_LINK}
            aria-label="Call The Autograph"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bronze/40 text-bronze transition-colors duration-300 hover:bg-bronze/10 active:scale-95"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </header>
  )
}
