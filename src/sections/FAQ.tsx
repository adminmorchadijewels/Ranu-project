import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faq } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-ivory px-6 py-20 sm:px-8 sm:py-[120px]">
      <div className="section-hairline -mx-6 mb-16 sm:-mx-8 sm:mb-20" />
      <div className="mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <SectionLabel tone="light">{faq.label}</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-light leading-tight text-ink sm:text-5xl">
            {faq.headline}
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-12">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <FadeIn key={item.question} delay={i * 0.05}>
                <div className="border-b border-bronze-dark/20">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base font-medium text-ink sm:text-lg">
                      {item.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bronze-dark/40 text-bronze-dark">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" strokeWidth={2} />
                      ) : (
                        <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                      )}
                    </span>
                  </button>
                  <div className={`accordion-panel ${isOpen ? 'is-open' : ''}`}>
                    <div>
                      <p className="pb-6 pr-12 text-sm font-light leading-relaxed text-ink/65 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
