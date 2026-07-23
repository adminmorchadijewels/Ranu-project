import { useEffect, useRef, useState, type ReactNode } from 'react'

interface SwipeCarouselProps<T> {
  items: T[]
  getKey: (item: T, index: number) => string
  renderItem: (item: T, index: number) => ReactNode
  ariaLabel: string
  /** Use 'light' on light-section backgrounds so inactive dots stay visible. */
  tone?: 'dark' | 'light'
}

/**
 * Shared horizontal swipe carousel used by Gallery, Configurations and Amenities
 * so every carousel on the page shares identical peek/gap/snap/dot behaviour.
 */
export default function SwipeCarousel<T>({
  items,
  getKey,
  renderItem,
  ariaLabel,
  tone = 'dark',
}: SwipeCarouselProps<T>) {
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
  }, [items])

  return (
    <div>
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-6 pb-4 [-webkit-overflow-scrolling:touch]"
      >
        {items.map((item, index) => (
          <div
            key={getKey(item, index)}
            ref={(el) => {
              slideRefs.current[index] = el
            }}
            data-index={index}
            className="w-[85vw] shrink-0 snap-center first:ml-6 last:mr-6"
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2" aria-hidden="true">
        {items.map((_, index) => {
          const isActive = index === activeIndex
          const activeClass = tone === 'light' ? 'h-2 w-2 bg-bronze-dark' : 'h-2 w-2 bg-bronze'
          const inactiveClass = tone === 'light' ? 'h-1.5 w-1.5 bg-bronze-dark/25' : 'h-1.5 w-1.5 bg-cream/25'
          return (
            <span
              key={index}
              className={`rounded-full transition-all duration-300 ${isActive ? activeClass : inactiveClass}`}
            />
          )
        })}
      </div>
    </div>
  )
}
