import { Phone } from 'lucide-react'
import { WHATSAPP_LINK, CALL_LINK } from '../config/site'

const whatsappIconPath =
  'M16.001 3C9.373 3 4 8.373 4 15c0 2.34.664 4.523 1.813 6.379L4 29l7.805-1.773A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.353l-.355-.21-4.634 1.052 1.08-4.518-.232-.37A9.71 9.71 0 0 1 5.25 15c0-5.936 4.815-10.75 10.751-10.75S26.75 9.064 26.75 15 21.937 24.75 16.001 24.75Zm5.334-7.484c-.293-.147-1.73-.854-1.998-.951-.268-.098-.463-.147-.658.147-.195.293-.756.951-.927 1.146-.171.196-.342.22-.635.073-.293-.147-1.235-.455-2.352-1.45-.87-.775-1.457-1.732-1.628-2.025-.171-.293-.018-.452.129-.598.132-.132.293-.342.44-.513.146-.171.195-.293.293-.488.098-.196.049-.367-.024-.514-.073-.147-.658-1.587-.902-2.174-.238-.571-.48-.494-.658-.503l-.561-.01c-.196 0-.514.073-.783.367-.268.293-1.025 1.002-1.025 2.443 0 1.44 1.05 2.833 1.196 3.028.146.196 2.066 3.156 5.008 4.427.7.302 1.246.483 1.672.618.702.224 1.342.192 1.848.117.564-.084 1.73-.707 1.974-1.39.244-.684.244-1.27.171-1.39-.073-.122-.268-.196-.561-.343Z'

/**
 * Contact actions, split by breakpoint:
 * - Desktop (md+): fixed bottom-right stack of circular Call/WhatsApp buttons.
 * - Mobile (below md): full-width sticky bar fixed to the bottom of the
 *   viewport. Pages must reserve bottom space (see Footer.tsx) so this bar
 *   never covers the last on-screen content.
 */
export default function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 hidden flex-col items-center gap-3 sm:bottom-8 sm:right-8 md:flex">
        <a
          href={CALL_LINK}
          aria-label="Call The Autograph"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-bronze text-charcoal shadow-lg shadow-black/40 transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
        >
          <Phone className="h-6 w-6" strokeWidth={1.75} fill="currentColor" />
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40 transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7" fill="#FFFFFF" aria-hidden="true">
            <path d={whatsappIconPath} />
          </svg>
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 flex-1 items-center justify-center gap-2 bg-[#25D366] pb-[env(safe-area-inset-bottom)] text-sm font-semibold text-white"
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="#FFFFFF" aria-hidden="true">
            <path d={whatsappIconPath} />
          </svg>
          WhatsApp
        </a>
        <a
          href={CALL_LINK}
          className="flex min-h-14 flex-1 items-center justify-center gap-2 bg-bronze pb-[env(safe-area-inset-bottom)] text-sm font-semibold text-charcoal"
        >
          <Phone className="h-5 w-5" strokeWidth={1.75} fill="currentColor" />
          Call Now
        </a>
      </div>
    </>
  )
}
