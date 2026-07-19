import { pitch } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

export default function Pitch() {
  return (
    <section className="bg-charcoal px-6 py-20 sm:px-8 sm:py-[120px]">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <SectionLabel>{pitch.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-light leading-tight text-cream sm:text-5xl lg:text-6xl">
            {pitch.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-cream/70 sm:text-lg">
            {pitch.paragraph}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
