import { developer, PROJECT } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

export default function Developer() {
  return (
    <section className="bg-ivory px-6 py-20 sm:px-8 sm:py-[120px]">
      <div className="section-hairline -mx-6 mb-16 sm:-mx-8 sm:mb-20" />
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <SectionLabel tone="light">{developer.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-light leading-tight text-ink sm:text-5xl">
            {developer.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-ink/70 sm:text-lg">
            {developer.paragraph}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
            {developer.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-2">
                <span className="font-serif text-4xl font-extralight text-bronze-dark sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-3 max-w-[9rem] text-[11px] font-medium uppercase tracking-widest text-ink/70 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-14 text-sm font-light tracking-wide text-ink/50">
            {developer.membership}
          </p>
          <p className="mt-2 text-xs font-light tracking-wide text-ink/35">
            {PROJECT.developer}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
