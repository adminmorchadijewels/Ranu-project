import { useEffect, useRef, useState } from 'react'
import { gallery } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const ratios = new Map<number, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.index)
          ratios.set(index, entry.intersectionRatio)
        }
        let bestIndex = 0
        let bestRatio = -1
        for (const [index, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestIndex = index
          }
        }
        setActiveIndex(bestIndex)
      },
      { root: track, threshold: [0.25, 0.5, 0.75, 1] },
    )

    for (const el of slideRefs.current) {
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-charcoal py-[40px] sm:py-[60px]">
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
        <div
          ref={trackRef}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-6 pb-4 [-webkit-overflow-scrolling:touch] md:hidden"
        >
          {gallery.map((item, index) => (
            <div
              key={item.image}
              ref={(el) => {
                slideRefs.current[index] = el
              }}
              data-index={index}
              className="aspect-[4/3] w-[85vw] shrink-0 snap-center overflow-hidden rounded-xl first:ml-6 last:mr-6"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 md:hidden" aria-hidden="true">
          {gallery.map((_, index) => (
            <span
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'h-2 w-2 bg-bronze'
                  : 'h-1.5 w-1.5 bg-cream/25'
              }`}
            />
          ))}
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
