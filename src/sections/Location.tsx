import { useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { locationColumns, PROJECT } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

function LocationList({ items }: { items: (typeof locationColumns)[number]['items'] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-baseline justify-between gap-4 text-sm font-light text-ink/75"
        >
          <span>{item.name}</span>
          <span className="whitespace-nowrap text-bronze-dark">{item.time}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Location() {
  const [activeTab, setActiveTab] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const shouldReduceMotion = useReducedMotion()

  const focusTab = (index: number) => {
    const next = (index + locationColumns.length) % locationColumns.length
    setActiveTab(next)
    tabRefs.current[next]?.focus()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      focusTab(index + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      focusTab(index - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusTab(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      focusTab(locationColumns.length - 1)
    }
  }

  return (
    <section className="bg-ivory px-6 py-[32px] sm:px-8 sm:py-[60px]">
      <div className="section-hairline -mx-6 mb-6 sm:-mx-8 sm:mb-8" />
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <SectionLabel tone="light">(THE ADDRESS)</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-light leading-tight text-ink sm:text-5xl">
            Seamless Connectivity, Serene Living
          </h2>
          <p className="mt-4 text-sm font-light tracking-wide text-ink/60 sm:text-base">
            {PROJECT.fullAddress}
          </p>
        </FadeIn>

        {/* Mobile: tabbed categories, one list visible at a time. Tablet/desktop: 4-column grid, unchanged. */}
        <FadeIn delay={0.1} className="mt-8 md:hidden">
          <div
            role="tablist"
            aria-label="Nearby categories"
            className="no-scrollbar flex gap-2 overflow-x-auto pb-1"
          >
            {locationColumns.map((col, i) => {
              const selected = activeTab === i
              return (
                <button
                  key={col.title}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  type="button"
                  role="tab"
                  id={`location-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`location-panel-${i}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveTab(i)}
                  onKeyDown={(event) => handleKeyDown(event, i)}
                  className={`inline-flex min-h-[44px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-5 text-sm font-medium transition-colors duration-200 ${
                    selected
                      ? 'border-bronze bg-bronze text-ink'
                      : 'border-bronze-dark/40 bg-transparent text-ink/70'
                  }`}
                >
                  {col.title}
                </button>
              )
            })}
          </div>

          <div className="relative mt-6 min-h-[190px] overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                id={`location-panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`location-tab-${activeTab}`}
                tabIndex={0}
                initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              >
                <LocationList items={locationColumns[activeTab].items} />
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

        <div className="mt-8 hidden gap-10 sm:mt-10 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {locationColumns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.08}>
              <div>
                <h3 className="section-label-on-light text-sm">{col.title}</h3>
                <div className="mt-5 h-px bg-bronze-dark/30" />
                <div className="mt-5">
                  <LocationList items={col.items} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-10 sm:mt-12">
          <div className="h-[300px] w-full overflow-hidden rounded-2xl border border-bronze-dark/20 sm:h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Kanakpura%2C%20Gandhi%20Path%2C%20Vaishali%20Nagar%2C%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="The Autograph location map"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-center text-xs font-light text-ink/40">
            The Autograph, Kanakpura, Gandhi Path, Vaishali Nagar (W), Jaipur
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
