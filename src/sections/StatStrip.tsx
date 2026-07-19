import { stats } from '../config/site'
import FadeIn from '../components/FadeIn'

export default function StatStrip() {
  return (
    <section className="bg-charcoal py-20 sm:py-[120px]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="divider-line" />
        <FadeIn>
          <div className="grid grid-cols-2 gap-y-10 py-8 text-center sm:grid-cols-3 sm:py-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-2">
                <span className="whitespace-nowrap font-serif text-4xl font-extralight text-bronze sm:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
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
