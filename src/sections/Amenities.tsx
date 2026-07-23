import { useState } from 'react'
import {
  Waves,
  Dumbbell,
  Droplet,
  Clapperboard,
  Dices,
  Activity,
  Feather,
  CircleDashed,
  Glasses,
  PersonStanding,
  Baby,
  Drama,
  BedDouble,
  BookOpen,
  PawPrint,
  Gamepad2,
  ShoppingBag,
  HeartHandshake,
  Cctv,
  Landmark,
  type LucideIcon,
} from 'lucide-react'
import { amenities, featuredAmenities, IMAGES } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'
import SwipeCarousel from '../components/SwipeCarousel'

// Index-aligned with `amenities`.
const icons: LucideIcon[] = [
  Waves,
  Dumbbell,
  Droplet,
  Clapperboard,
  Dices,
  Activity,
  Feather,
  CircleDashed,
  Glasses,
  PersonStanding,
  Baby,
  Drama,
  BedDouble,
  BookOpen,
  PawPrint,
  Gamepad2,
  ShoppingBag,
  HeartHandshake,
  Cctv,
  Landmark,
]

const featuredNames = new Set(featuredAmenities.map((item) => item.name))
const iconOnlyAmenities = amenities
  .map((amenity, i) => ({ amenity, Icon: icons[i % icons.length] }))
  .filter((item) => !featuredNames.has(item.amenity))

const MOBILE_VISIBLE_COUNT = 9

export default function Amenities() {
  const [expanded, setExpanded] = useState(false)
  const visibleItems = iconOnlyAmenities.slice(0, MOBILE_VISIBLE_COUNT)
  const moreItems = iconOnlyAmenities.slice(MOBILE_VISIBLE_COUNT)

  return (
    <section className="bg-ivory-dim px-6 py-[32px] sm:px-8 sm:py-[60px]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="order-2 lg:order-1">
            <SectionLabel tone="light">(40+ AMENITIES)</SectionLabel>
            <h2 className="mt-5 text-4xl font-light leading-tight text-ink sm:text-5xl">
              Every Indulgence, Within Reach
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={IMAGES.poolFeature}
                alt="Temperature-controlled pool deck at The Autograph"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* Block A — featured amenities: mobile swipe carousel (matches Gallery peek/snap/dots), tablet 2x2, desktop one row of 4. */}
        <FadeIn delay={0.15}>
          <div className="mt-8 -mx-6 sm:-mx-8 md:hidden">
            <SwipeCarousel
              items={featuredAmenities}
              getKey={(item) => item.name}
              ariaLabel="Featured amenities"
              tone="light"
              renderItem={(item) => (
                <div className="overflow-hidden rounded-xl border border-bronze-dark/20">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="block bg-white px-3 py-2.5 text-center text-xs font-medium leading-snug text-ink/80 sm:text-sm">
                    {item.name}
                  </span>
                </div>
              )}
            />
          </div>

          <div className="mt-8 hidden grid-cols-2 gap-4 md:grid md:gap-6 lg:grid-cols-4">
            {featuredAmenities.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-xl border border-bronze-dark/20"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="block bg-white px-3 py-2.5 text-center text-xs font-medium leading-snug text-ink/80 sm:text-sm">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Block B — remaining amenities not already shown as a photo card above, icon-only. Mobile: 3-col compact grid, first 9 + expandable rest. Desktop: unchanged. */}
        <div className="mt-10 grid grid-cols-3 gap-x-3 gap-y-6 md:hidden">
          {visibleItems.map(({ amenity, Icon }, i) => (
            <FadeIn key={amenity} delay={(i % 9) * 0.04}>
              <div className="flex h-full flex-col items-center gap-2 text-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze-dark/30">
                  <Icon className="h-4 w-4 text-bronze-dark" strokeWidth={1.25} />
                </div>
                <span className="text-[11px] font-medium leading-tight text-ink/75">
                  {amenity}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div id="amenities-more" className={`accordion-panel md:hidden ${expanded ? 'is-open' : ''}`}>
          <div>
            <div className="grid grid-cols-3 gap-x-3 gap-y-6 pt-6">
              {moreItems.map(({ amenity, Icon }) => (
                <div key={amenity} className="flex h-full flex-col items-center gap-2 text-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze-dark/30">
                    <Icon className="h-4 w-4 text-bronze-dark" strokeWidth={1.25} />
                  </div>
                  <span className="text-[11px] font-medium leading-tight text-ink/75">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="amenities-more"
            className="inline-flex min-h-[44px] items-center justify-center px-4 text-sm font-semibold text-bronze-dark underline-offset-4 hover:underline"
          >
            {expanded ? 'Show less' : 'View all amenities'}
          </button>
        </div>

        <div className="mt-12 hidden grid-cols-2 gap-x-6 gap-y-10 md:grid md:grid-cols-3 lg:grid-cols-4">
          {iconOnlyAmenities.map(({ amenity, Icon }, i) => (
            <FadeIn key={amenity} delay={(i % 8) * 0.04}>
              <div className="flex h-full flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze-dark/30">
                  <Icon className="h-5 w-5 text-bronze-dark" strokeWidth={1.25} />
                </div>
                <span className="text-xs font-medium leading-snug text-ink/75 sm:text-sm">
                  {amenity}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
