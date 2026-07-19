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

export default function Amenities() {
  return (
    <section className="bg-ivory-dim px-6 py-[40px] sm:px-8 sm:py-[60px]">
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

        {/* Block A — featured amenities: mobile snap-scroll, tablet 2x2, desktop one row of 4. Image cards only, never mixed with the icon grid below. */}
        <FadeIn delay={0.15}>
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden [&::-webkit-scrollbar]:hidden">
            {featuredAmenities.map((item) => (
              <div
                key={item.name}
                className="w-[70vw] shrink-0 snap-center overflow-hidden rounded-xl border border-bronze-dark/20"
              >
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
            ))}
          </div>

          <div className="mt-8 hidden grid-cols-2 gap-4 sm:grid sm:gap-6 lg:grid-cols-4">
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

        {/* Block B — remaining amenities not already shown as a photo card above, icon-only. Never mixes photo cards in with these. */}
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
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
