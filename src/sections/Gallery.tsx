import { gallery } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'
import SwipeCarousel from '../components/SwipeCarousel'

export default function Gallery() {
  return (
    <section className="bg-charcoal py-[32px] sm:py-[60px]">
      <div className="section-hairline mb-6 sm:mb-8" />
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <FadeIn>
          <SectionLabel>(THE EXPERIENCE)</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-light leading-tight text-cream sm:text-5xl">
            Architecture That Speaks Without Saying A Word
          </h2>
          <p className="mt-2 text-xs tracking-wide text-cream/40 md:hidden">
            Swipe to explore
          </p>
        </FadeIn>
      </div>

      {/* Mobile: horizontal scroll-snap carousel with a peeking next image. Tablet/desktop: uniform landscape grid, 2x3 then 3x2. */}
      <FadeIn delay={0.15}>
        <div className="mt-8 md:hidden">
          <SwipeCarousel
            items={gallery}
            getKey={(item) => item.image}
            ariaLabel="The Experience gallery"
            renderItem={(item, index) => (
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            )}
          />
        </div>

        <div className="mx-auto mt-10 hidden max-w-6xl grid-cols-2 gap-4 px-8 md:grid lg:grid-cols-3">
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
