import { gallery } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

export default function Gallery() {
  return (
    <section className="bg-charcoal py-20 sm:py-[120px]">
      <div className="section-hairline mb-16 sm:mb-20" />
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <FadeIn>
          <SectionLabel>(THE EXPERIENCE)</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-light leading-tight text-cream sm:text-5xl">
            Architecture That Speaks Without Saying A Word
          </h2>
        </FadeIn>
      </div>

      {/* Mobile: horizontal scroll-snap filmstrip. Desktop: asymmetric magazine grid. */}
      <FadeIn delay={0.15}>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:mt-12 sm:hidden [&::-webkit-scrollbar]:hidden">
          {gallery.map((item) => (
            <div
              key={item.image}
              className="aspect-[4/5] w-[78vw] shrink-0 snap-center overflow-hidden rounded-xl"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 hidden max-w-6xl grid-cols-4 grid-rows-3 gap-4 px-8 sm:grid">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
            <img
              src={gallery[0].image}
              alt={gallery[0].alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="col-start-3 row-start-1 overflow-hidden rounded-xl">
            <img
              src={gallery[1].image}
              alt={gallery[1].alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="col-start-4 row-start-1 overflow-hidden rounded-xl">
            <img
              src={gallery[2].image}
              alt={gallery[2].alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="col-start-3 row-start-2 overflow-hidden rounded-xl">
            <img
              src={gallery[4].image}
              alt={gallery[4].alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="col-start-4 row-start-2 overflow-hidden rounded-xl">
            <img
              src={gallery[5].image}
              alt={gallery[5].alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="col-span-2 row-start-3 overflow-hidden rounded-xl">
            <img
              src={gallery[3].image}
              alt={gallery[3].alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="col-span-2 col-start-3 row-start-3 overflow-hidden rounded-xl">
            <img
              src={gallery[6].image}
              alt={gallery[6].alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
