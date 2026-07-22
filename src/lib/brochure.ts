import { BROCHURE_PDF_PATH, buildBrochureMessage, openWhatsApp } from '../config/site'

/**
 * The single "Download Brochure" handler — reused by every trigger on the
 * site (top bar, hero, floating actions, dedicated CTA band). Downloads the
 * brochure PDF and opens WhatsApp with the lead's details pre-filled. Call
 * only after name + phone have been validated.
 */
export function triggerBrochureDownload(name: string, phone: string): void {
  const link = document.createElement('a')
  link.href = BROCHURE_PDF_PATH
  link.download = 'The-Autograph-Brochure.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()

  openWhatsApp(buildBrochureMessage(name, phone))
}
