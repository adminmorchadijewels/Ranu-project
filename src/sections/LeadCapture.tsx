import { leadCapture, buildPriceEnquiryMessage } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'
import LeadForm from '../components/LeadForm'

export default function LeadCapture() {
  return (
    <section className="bg-charcoal-light px-6 py-[40px] sm:px-8 sm:py-[60px]">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionLabel>{leadCapture.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-light leading-tight text-cream sm:text-5xl">
            {leadCapture.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-light leading-relaxed text-cream/70">
            {leadCapture.subline}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <LeadForm
            buildMessage={buildPriceEnquiryMessage}
            submitLabel={leadCapture.formCtaLabel}
            className="mx-auto mt-8 max-w-[640px]"
          />
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-8 text-xs font-light tracking-wide text-cream/40">
            {leadCapture.trustRow}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
