import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { hero, IMAGES, WHATSAPP_LINK, CALL_LINK } from '../config/site'
import { useBrochureModal } from '../context/BrochureModalContext'
import Button from '../components/Button'

export default function Hero() {
  const { open: openBrochureModal } = useBrochureModal()

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-charcoal">
      <img
        src={IMAGES.hero}
        alt="Aerial view of The Autograph's towers at dusk, Vaishali Nagar, Jaipur"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="section-label text-[11px] sm:text-sm"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-5xl font-light leading-[1.05] text-cream sm:text-7xl lg:text-8xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-serif text-2xl italic font-light text-bronze-light sm:text-3xl"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-sm font-light tracking-wide text-cream/80 sm:text-base"
        >
          {hero.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            {hero.ctaLabel}
          </Button>
          <Button as="a" href={CALL_LINK} variant="outline">
            {hero.callCtaLabel}
          </Button>
        </motion.div>

        <motion.button
          type="button"
          onClick={openBrochureModal}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-light text-cream/70 underline-offset-4 transition-colors hover:text-bronze hover:underline"
        >
          <Download className="h-4 w-4" strokeWidth={1.75} />
          Download Brochure
        </motion.button>
      </div>

      <p className="absolute bottom-6 left-0 right-0 z-10 px-6 text-center text-[11px] font-light tracking-wide text-cream/50 sm:bottom-8">
        {hero.reraNote}
      </p>
    </section>
  )
}
