import { Gem, SunMedium, ArrowUpNarrowWide, DoorOpen, ShieldCheck, CarFront } from 'lucide-react'
import { whyFeatures, IMAGES } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

// Index-aligned with whyFeatures.
const icons = [Gem, SunMedium, ArrowUpNarrowWide, DoorOpen, ShieldCheck, CarFront]

export default function WhyAutograph() {
  return (
    <section className="bg-ivory px-6 py-20 sm:px-8 sm:py-[120px]">
      <div className="section-hairline -mx-6 mb-16 sm:-mx-8 sm:mb-20" />
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={IMAGES.whyAutograph}
                alt="Exterior facade of The Autograph towers in daylight"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionLabel tone="light">(WHY THE AUTOGRAPH)</SectionLabel>
            <h2 className="mt-5 text-4xl font-light leading-tight text-ink sm:text-5xl">
              Details That Set It Apart
            </h2>
          </FadeIn>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {whyFeatures.map((feature, i) => {
            const Icon = icons[i]

            return (
              <FadeIn key={feature.title} delay={i * 0.06} className="h-full">
                <div className="group flex h-full min-h-[220px] flex-col rounded-2xl border border-bronze-dark/20 bg-white/60 p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-bronze-dark/50 hover:bg-white">
                  <Icon className="h-7 w-7 text-bronze-dark" strokeWidth={1.25} />
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-ink/60">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
