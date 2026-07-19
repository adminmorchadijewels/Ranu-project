import { locationColumns, PROJECT } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

export default function Location() {
  return (
    <section className="bg-ivory px-6 py-20 sm:px-8 sm:py-[120px]">
      <div className="section-hairline -mx-6 mb-16 sm:-mx-8 sm:mb-20" />
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

        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {locationColumns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.08}>
              <div>
                <h3 className="section-label-on-light text-sm">{col.title}</h3>
                <div className="mt-5 h-px bg-bronze-dark/30" />
                <ul className="mt-5 space-y-3.5">
                  {col.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 text-sm font-light text-ink/75"
                    >
                      <span>{item.name}</span>
                      <span className="whitespace-nowrap text-bronze-dark">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
