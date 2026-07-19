import { configurations, configFootnote, possessionNote, buildWhatsAppLink } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/Button'

export default function Configurations() {
  return (
    <section className="bg-ivory px-6 py-20 sm:px-8 sm:py-[120px]">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <SectionLabel tone="light">(THE RESIDENCES)</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-light leading-tight text-ink sm:text-5xl">
            Choose Your Signature
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-3">
          {configurations.map((config, i) => (
            <FadeIn key={config.name} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-bronze-dark/20 bg-white transition-all duration-300 ease-out hover:border-bronze-dark/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={config.image}
                    alt={config.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-light text-ink">{config.name}</h3>
                  <p className="mt-2 text-sm font-light text-ink/60">{config.size}</p>
                  <p className="mt-3 font-serif text-2xl font-light text-bronze-dark">
                    {config.price}
                  </p>
                  <Button
                    as="a"
                    href={buildWhatsAppLink(
                      `Hi, I'm interested in the ${config.name} at The Autograph (Vaishali Nagar). Please share details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    className="mt-6 !text-bronze-dark"
                  >
                    Enquire on WhatsApp →
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center" delay={0.1}>
          <Button
            as="a"
            href={buildWhatsAppLink('Hi, please share the floor plans for The Autograph.')}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="!border-bronze-dark/60 !text-bronze-dark hover:!bg-bronze-dark/10"
          >
            Request Floor Plans on WhatsApp
          </Button>
        </FadeIn>

        <p className="mt-8 text-center text-xs font-light text-ink/40">
          {configFootnote}
          <br />
          {possessionNote}
        </p>
      </div>
    </section>
  )
}
