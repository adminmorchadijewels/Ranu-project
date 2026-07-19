import { developer } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

export default function Developer() {
  return (
    <section className="bg-ivory px-6 py-[40px] sm:px-8 sm:py-[60px]">
      <div className="section-hairline -mx-6 mb-6 sm:-mx-8 sm:mb-8" />
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
          <div className="mx-auto mt-10 grid grid-cols-2 justify-items-center gap-y-10 sm:grid-cols-4 sm:gap-y-0">
            {developer.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-2">
                <span className="font-serif text-4xl font-extralight leading-none text-bronze-dark sm:text-5xl">
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
          <p className="mt-10 text-sm font-light tracking-wide text-ink/50">
            {developer.membership}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
