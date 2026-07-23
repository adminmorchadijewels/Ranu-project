import { stats } from '../config/site'
import FadeIn from '../components/FadeIn'

export default function StatStrip() {
  return (
    <section className="bg-charcoal py-[32px] sm:py-[60px]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="divider-line" />
        <FadeIn>
          <div className="grid grid-cols-2 gap-y-8 py-6 text-center sm:grid-cols-3 sm:py-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-2">
                <div className="flex h-10 items-center justify-center sm:h-12 lg:h-[3.75rem]">
                  <span
                    className={`whitespace-nowrap font-serif font-extralight text-bronze ${
                      'compact' in stat && stat.compact
                        ? 'text-2xl sm:text-5xl lg:text-6xl'
                        : 'text-4xl sm:text-5xl lg:text-6xl'
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>
                <span className="mt-3 max-w-[9rem] text-[11px] font-medium uppercase tracking-widest text-cream/70 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
        <div className="divider-line" />
      </div>
    </section>
  )
}
