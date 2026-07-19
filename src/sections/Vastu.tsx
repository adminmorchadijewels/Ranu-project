import { vastu, IMAGES } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

export default function Vastu() {
  return (
    <section className="bg-charcoal-light px-6 py-[40px] sm:px-8 sm:py-[60px]">
      <div className="section-hairline -mx-6 mb-6 sm:-mx-8 sm:mb-8" />
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="text-center lg:text-left">
          <SectionLabel>{vastu.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-light leading-tight text-cream sm:text-5xl">
            {vastu.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-cream/70 sm:text-lg lg:mx-0">
            {vastu.paragraph}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={IMAGES.vastu}
              alt="Jain and Ram Darbar temple at The Autograph"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
