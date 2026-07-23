/**
 * ============================================================================
 * CENTRAL CONFIG — THE AUTOGRAPH by Samanvay Group
 * ============================================================================
 * Every editable piece of copy, every price, every image path and the
 * WhatsApp number live in this single file. To update the site for a new
 * campaign, price list, or phone number — edit here only.
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// CONTACT — single source of truth for the phone number and every link
// derived from it (WhatsApp deep link, tel: link). Change the number here
// and it updates everywhere on the site.
// ---------------------------------------------------------------------------
export const PHONE = '918696918300'
export const PHONE_DISPLAY = '+91 86969 18300'
export const WHATSAPP_NUMBER = PHONE

/** Builds a wa.me deep link with a URL-encoded, pre-filled message. */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I'm interested in The Autograph (Vaishali Nagar). Please share details."

/** Default enquiry link used by the top bar, hero CTA and floating button. */
export const WHATSAPP_LINK = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)

/** Plain link with no pre-filled text, used for the "chat directly" footer link. */
export const WHATSAPP_PLAIN_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

/** tel: link used by every "Call" button and icon on the site. */
export const CALL_LINK = `tel:+${PHONE}`

/** Opens a WhatsApp chat with a pre-filled message in a new tab. Shared by every lead form's submit handler. */
export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
}

// ---------------------------------------------------------------------------
// IMAGES — local renders shipped in /public/images/. Swap any file at the
// path on the right with a new one of the same name — no code changes
// needed elsewhere.
// ---------------------------------------------------------------------------
export const IMAGES = {
  hero: '/images/aerial-towers-dusk.jpg',
  whyAutograph: '/images/exterior-towers-day.jpg',
  poolFeature: '/images/pool-deck.jpg',
  vastu: '/images/temple-pooja.jpg',

  config3bhk: '/images/living-room.jpg',
  config4bhk: '/images/dining-area.jpg',
  config5bhk: '/images/master-bedroom.jpg',

  gallery: {
    arrivalCourt: '/images/arrival-court.jpg',
    exteriorFacade: '/images/exterior-towers-day.jpg',
    lobbyReception: '/images/lobby-reception.jpg',
    landscapeGardenWalk: '/images/landscape-garden-walk.jpg',
    drawingRoom: '/images/drawing-room.jpg',
    masterBedroom: '/images/master-bedroom.jpg',
  },

  amenities: {
    poolDeck: '/images/pool-deck.jpg',
    bowlingAlley: '/images/bowling-alley.jpg',
    miniTheatre: '/images/mini-theatre.jpg',
    gameZone: '/images/game-zone.jpg',
    yogaStudio: '/images/yoga-studio.jpg',
  },
} as const

// ---------------------------------------------------------------------------
// PROJECT-WIDE CONSTANTS
// ---------------------------------------------------------------------------
export const PROJECT = {
  name: 'The Autograph',
  developer: 'Samanvay Group',
  developerLegalEntity: 'Samanvay Homes LLP',
  location: 'Vaishali Nagar, Jaipur',
  fullAddress: 'Kanakpura, Gandhi Path, Vaishali Nagar (W), Jaipur',
  reraNumber: 'RAJ/P/2026/4727',
  reraWebsite: 'rera.rajasthan.gov.in',
  tagline: 'A life. Signed by you.',
}

// ---------------------------------------------------------------------------
// 1. HERO
// ---------------------------------------------------------------------------
export const hero = {
  eyebrow: '(NEW LAUNCH · VAISHALI NAGAR, JAIPUR)',
  headline: 'Residences As Rare As You',
  tagline: 'A life. Signed by you.',
  subline: 'Only 144 Limited-Edition Residences · 3, 4 & 5 BHK',
  ctaLabel: 'Book a Site Visit on WhatsApp',
  callCtaLabel: 'Call Us',
  reraNote: `RERA Reg. No: ${PROJECT.reraNumber}`,
}

// ---------------------------------------------------------------------------
// 2. STAT STRIP
// ---------------------------------------------------------------------------
export const stats = [
  { value: '144', label: 'Limited-Edition Residences' },
  { value: '04', label: 'Iconic Towers' },
  { value: '40+', label: 'World-Class Amenities' },
  { value: '47,300', label: 'Sq.Ft. Clubhouse' },
  { value: '63%', label: 'Open Green Area' },
  { value: 'DEC 2029', label: 'Possession', compact: true },
]

// ---------------------------------------------------------------------------
// 2B. LEAD CAPTURE — compact form shown near the top, above the fold-ish.
// The same LeadForm component also powers the Final CTA form further down.
// ---------------------------------------------------------------------------
export const leadCapture = {
  label: '(LIMITED INVENTORY)',
  headline: 'Get Price Details & Floor Plans',
  subline:
    "Share your details and we'll send the complete price sheet and floor plans on WhatsApp.",
  formCtaLabel: 'Get Price & Floor Plans',
  trustRow: `RERA ${PROJECT.reraNumber} · CREDAI Rajasthan Member · 14 Years · 20 Lac Sq.Ft. Delivered`,
}

/** Builds the pre-filled WhatsApp message for the top lead capture form. */
export function buildPriceEnquiryMessage(name: string, phone: string): string {
  return `Hi, my name is ${name}, phone ${phone}. Please send me the price details and floor plans for The Autograph.`
}

// ---------------------------------------------------------------------------
// 2C. BROCHURE DOWNLOAD — path lives in /public, served at the site root.
// Triggered from the top bar, hero and the dedicated brochure CTA band via
// the shared handler in src/lib/brochure.ts.
// ---------------------------------------------------------------------------
export const BROCHURE_PDF_PATH = '/The-Autograph-Brochure.pdf'

export const brochureCta = {
  label: '(THE BROCHURE)',
  headline: 'Explore Every Detail',
  subline:
    'Get the complete brochure with floor plans, specifications and pricing — delivered instantly.',
  formCtaLabel: 'Download Brochure',
}

/** Builds the pre-filled WhatsApp message sent after a brochure download. */
export function buildBrochureMessage(name: string, phone: string): string {
  return `Hi, my name is ${name}, phone ${phone}. I've downloaded the brochure for The Autograph. Please share more details.`
}

// ---------------------------------------------------------------------------
// 3. THE PITCH
// ---------------------------------------------------------------------------
export const pitch = {
  label: '(THE PHILOSOPHY)',
  headline: 'Crafted For Lives That Reflect Distinction',
  paragraph:
    "The Autograph is more than a residence — it's a refined expression of modern living, where design, space and functionality come together in perfect harmony. Only 144 exclusive homes, each a canvas of expansive space, natural light and thoughtful detail. It is not just a home. It's a life you sign your name to.",
}

// ---------------------------------------------------------------------------
// 4. WHY THE AUTOGRAPH
// ---------------------------------------------------------------------------
export const whyFeatures = [
  {
    title: 'Only 144 Residences',
    description:
      'Limited-edition living, ensuring rare privacy and exclusivity.',
  },
  {
    title: '100% East-West Facing',
    description:
      'Every home bathed in natural light with cross ventilation.',
  },
  {
    title: '3.10m Ceiling Heights',
    description: '8–10% taller than standard, for a sense of grandeur.',
  },
  {
    title: '5-Star Private Lobby',
    description: 'A furnished private lobby on every single floor.',
  },
  {
    title: 'Absolute Privacy',
    description: 'No two main doors face each other, ever.',
  },
  {
    title: '2.7 Car Parks Per Home',
    description: 'With EV charging provision at every space.',
  },
]

// ---------------------------------------------------------------------------
// 5. CONFIGURATIONS — edit prices here.
// ---------------------------------------------------------------------------
export const configurations = [
  {
    name: '3 BHK Residences',
    size: '3,283–3,638 sq.ft',
    price: 'From ₹2.53 Cr*',
    image: IMAGES.config3bhk,
  },
  {
    name: '4 BHK Residences',
    size: '4,224–4,686 sq.ft',
    price: 'From ₹3.17 Cr*',
    image: IMAGES.config4bhk,
  },
  {
    name: '5 BHK Residences',
    size: '5,736–8,435 sq.ft',
    price: 'From ₹4.30 Cr*',
    image: IMAGES.config5bhk,
  },
]

export const configFootnote =
  '*Indicative base price. Taxes and other charges extra.'

export const possessionNote = 'Expected possession: December 2029.'

// ---------------------------------------------------------------------------
// 6. AMENITIES
// ---------------------------------------------------------------------------
export const amenities = [
  'Temperature-Controlled Pool',
  'Indoor & Outdoor Gym',
  'Aqua Spa & Jacuzzi',
  'Mini Theatre',
  'Bowling Alley',
  'Squash Court',
  'Indoor Badminton',
  'Pickleball Court',
  'VR Room',
  'Yoga & Dance Studio',
  'Kids Play Zone',
  'Amphitheatre',
  'Premium Guest Rooms',
  'Library & Reading Lounge',
  'Pet Zone',
  'Game Zone',
  'Departmental Store',
  "Elder's Corner",
  '7 Tier Security Surveillance',
  'Jain & Ram Darbar Temple',
]

/** The 4 amenities shown as photo cards in the featured strip above the full icon grid. */
export const featuredAmenities = [
  { name: 'Temperature-Controlled Pool', image: IMAGES.amenities.poolDeck },
  { name: 'Mini Theatre', image: IMAGES.amenities.miniTheatre },
  { name: 'Bowling Alley', image: IMAGES.amenities.bowlingAlley },
  { name: 'Yoga & Dance Studio', image: IMAGES.amenities.yogaStudio },
]

// ---------------------------------------------------------------------------
// 7. GALLERY
// ---------------------------------------------------------------------------
export const gallery = [
  { image: IMAGES.gallery.arrivalCourt, alt: 'Arrival court at The Autograph' },
  { image: IMAGES.gallery.exteriorFacade, alt: 'Exterior facade of The Autograph towers' },
  { image: IMAGES.gallery.lobbyReception, alt: '5-star private lobby reception' },
  { image: IMAGES.gallery.landscapeGardenWalk, alt: 'Landscaped garden walk' },
  { image: IMAGES.gallery.drawingRoom, alt: 'Drawing room interior' },
  { image: IMAGES.gallery.masterBedroom, alt: 'Master bedroom interior' },
]

// ---------------------------------------------------------------------------
// 8. LOCATION
// ---------------------------------------------------------------------------
export const locationColumns = [
  {
    title: 'Schools',
    items: [
      { name: 'Narayana E-Techno', time: '1 min' },
      { name: 'Sophia', time: '2 min' },
      { name: 'Teoler School', time: '5 min' },
      { name: 'Jaishree Periwal', time: '7 min' },
    ],
  },
  {
    title: 'Healthcare',
    items: [
      { name: 'Shalby', time: '5 min' },
      { name: 'Global Heart', time: '5 min' },
      { name: 'Cradle Children', time: '6 min' },
      { name: 'Fortis', time: '20 min' },
    ],
  },
  {
    title: 'Shopping',
    items: [
      { name: 'Mall of Jaipur', time: '5 min' },
      { name: 'Evershine Tower', time: '9 min' },
      { name: 'Decathlon', time: '10 min' },
      { name: 'World Trade Park', time: '25 min' },
    ],
  },
  {
    title: 'Connectivity',
    items: [
      { name: 'Railway Station', time: '10 min' },
      { name: 'Bus Depot', time: '10 min' },
      { name: 'IT Park', time: '20 min' },
      { name: 'Airport', time: '25 min' },
    ],
  },
]

// ---------------------------------------------------------------------------
// 9. VASTU
// ---------------------------------------------------------------------------
export const vastu = {
  label: '(VASTU ALIGNED)',
  headline: 'Every Home, Guided by Acharya Lavbhushan',
  paragraph:
    'Every residence at The Autograph is thoughtfully aligned with the principles of Vastu Shastra under the guidance of celebrity astrologer and Vastu expert Acharya Lavbhushan — for harmony, positive energy and holistic well-being.',
}

// ---------------------------------------------------------------------------
// 10. DEVELOPER
// ---------------------------------------------------------------------------
export const developer = {
  label: '(THE LEGACY)',
  headline: 'Designed by a Legacy of Trust',
  paragraph:
    'Samanvay Group has spent over a decade shaping the skyline of Jaipur with residences defined by architectural integrity, meticulous craftsmanship and an unwavering commitment to quality. Every project carries forward the same promise — spaces that stand the test of time.',
  stats: [
    { value: '14', label: 'Years' },
    { value: '10', label: 'Projects Completed' },
    { value: '20 Lac', label: 'Sq.Ft. Delivered' },
    { value: '16 Lac', label: 'Sq.Ft. Under Construction' },
  ],
  membership: 'Proud member of CREDAI Rajasthan.',
}

// ---------------------------------------------------------------------------
// 10B. FAQ
// ---------------------------------------------------------------------------
export const faq = {
  label: '(GOOD TO KNOW)',
  headline: 'Questions, Answered',
  items: [
    {
      question: 'When is possession?',
      answer:
        'The Autograph is expected to be ready for possession by December 2029.',
    },
    {
      question: 'Is the project RERA registered?',
      answer: `Yes. The Autograph is registered under RERA Reg. No. ${PROJECT.reraNumber}. You can verify it at ${PROJECT.reraWebsite}.`,
    },
    {
      question: 'What is the payment plan?',
      answer:
        'A construction-linked payment plan is available, starting with 10% on registration and staged payments linked to construction milestones. Share your details on WhatsApp for the complete schedule.',
    },
    {
      question: 'What costs are extra beyond the base price?',
      answer:
        'Car parking, club house development, electrification, VRF provision, STP, EDC, maintenance security deposit, applicable GST and registration charges are additional. Preferred location charges apply on higher floors.',
    },
    {
      question: 'Is home loan available?',
      answer:
        'Yes, home loans are available from leading banks and financial institutions. Our team can assist with the process.',
    },
    {
      question: 'Can I visit the site?',
      answer:
        "Absolutely. Message us on WhatsApp or call us and we'll arrange a private site visit at your convenience.",
    },
  ],
}

// ---------------------------------------------------------------------------
// 11. FINAL CTA
// ---------------------------------------------------------------------------
export const finalCta = {
  headline: 'Sign Your Name to Something Rare',
  subline:
    'Only 144 residences. Limited inventory. Book your private site visit today.',
  formCtaLabel: 'Send on WhatsApp',
  directLinkLabel: `Or call us at ${PHONE_DISPLAY}`,
}

/** Builds the pre-filled WhatsApp message for the final CTA form submission. */
export function buildEnquiryMessage(name: string, phone: string): string {
  return `Hi, my name is ${name}, phone ${phone}. I'm interested in The Autograph. Please share details.`
}

// ---------------------------------------------------------------------------
// FOOTER
// ---------------------------------------------------------------------------
export const footer = {
  addressLine: `${PROJECT.developerLegalEntity}, ${PROJECT.location}.`,
  reraLine: `RERA Reg. No: ${PROJECT.reraNumber} · ${PROJECT.reraWebsite}`,
  disclaimer:
    'This is not a legal document. Images are for illustration purposes only. Prices and specifications subject to change.',
}
