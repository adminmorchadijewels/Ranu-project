import { PROJECT, footer } from '../config/site'

export default function Footer() {
  return (
    <footer className="border-t border-bronze/10 bg-charcoal px-6 pt-[40px] pb-[calc(56px+env(safe-area-inset-bottom)+2rem)] sm:px-8 sm:pt-[60px] md:pb-[60px]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="font-serif text-2xl font-light text-cream">{PROJECT.name}</span>
          <span className="mt-1 font-serif text-sm italic font-light text-bronze-light">
            {PROJECT.tagline}
          </span>

          <div className="mt-8 divider-line w-full max-w-xs" />

          <p className="mt-8 text-sm font-light text-cream/50">{footer.addressLine}</p>
          <p className="mt-2 text-xs font-light text-cream/40">{footer.reraLine}</p>

          <p className="mx-auto mt-8 max-w-xl text-[11px] font-light leading-relaxed text-cream/30">
            {footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
