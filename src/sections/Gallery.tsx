import { gallery } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

export default function Gallery() {
  return (
    <section className="bg-charcoal py-[40px] sm:py-[60px]">
      <div className="section-hairline mb-6 sm:mb-8" />
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <FadeIn>
          <SectionLabel>(THE EXPERIENCE)</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-light leading-tight text-cream sm:text-5xl">
            Architecture That Speaks Without Saying A Word
          </h2>
        </FadeIn>
      </div>

      {/* Mobile: horizontal scroll-snap filmstrip. Tablet/desktop: uniform landscape grid, 2x3 then 3x2. */}
      <FadeIn delay={0.15}>
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:hidden [&::-webkit-scrollbar]:hidden">
          {gallery.map((item) => (
            <div
              key={item.image}
              className="aspect-[4/3] w-[78vw] shrink-0 snap-center overflow-hidden rounded-xl"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 hidden max-w-6xl grid-cols-2 gap-4 px-8 sm:grid lg:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.image} className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
