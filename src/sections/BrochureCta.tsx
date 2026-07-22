import { brochureCta } from '../config/site'
import { triggerBrochureDownload } from '../lib/brochure'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'
import LeadForm from '../components/LeadForm'

const successNote = (
  <>
    Your brochure download has started and we&apos;re opening WhatsApp now with your details.
  </>
)

export default function BrochureCta() {
  return (
    <section id="brochure" className="bg-umber/15 px-6 py-[40px] sm:px-8 sm:py-[60px]">
      <div className="section-hairline -mx-6 mb-6 sm:-mx-8 sm:mb-8" />
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionLabel>{brochureCta.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-light leading-tight text-cream sm:text-5xl">
            {brochureCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-light leading-relaxed text-cream/70">
            {brochureCta.subline}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <LeadForm
            onSubmit={triggerBrochureDownload}
            submitLabel={brochureCta.formCtaLabel}
            successNote={successNote}
            className="mx-auto mt-8 max-w-[640px]"
          />
        </FadeIn>
      </div>
    </section>
  )
}
