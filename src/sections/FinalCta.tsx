import {
  finalCta,
  buildEnquiryMessage,
  openWhatsApp,
  CALL_LINK,
} from '../config/site'
import FadeIn from '../components/FadeIn'
import LeadForm from '../components/LeadForm'

export default function FinalCta() {
  return (
    <section className="bg-umber/15 px-6 py-[32px] sm:px-8 sm:py-[60px]">
      <div className="section-hairline -mx-6 mb-6 sm:-mx-8 sm:mb-8" />
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="text-4xl font-light leading-tight text-cream sm:text-5xl lg:text-6xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-cream/70 sm:text-lg">
            {finalCta.subline}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <LeadForm
            onSubmit={(name, phone) => openWhatsApp(buildEnquiryMessage(name, phone))}
            submitLabel={finalCta.formCtaLabel}
            className="mx-auto mt-10 max-w-[640px]"
          />
        </FadeIn>

        <FadeIn delay={0.25}>
          <a
            href={CALL_LINK}
            className="mt-8 inline-block text-sm font-light text-cream/60 underline-offset-4 hover:text-bronze hover:underline"
          >
            {finalCta.directLinkLabel}
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
