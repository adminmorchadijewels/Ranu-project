# The Autograph — Landing Page

A single-page, mobile-first lead-generation site for **The Autograph** by Samanvay Group (Vaishali Nagar, Jaipur). The entire page exists to drive one action: a WhatsApp message or a phone call.

Stack: **Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion**. Fonts: Cormorant Garamond (display) + Inter (body/UI), loaded from Google Fonts in `src/index.css`.

## Run it

```bash
npm install
npm run dev
```

Opens on `http://localhost:5173`.

## Build for production

```bash
npm run build     # type-checks with tsc, then builds to /dist
npm run preview   # serve the production build locally
```

## Deploy

The `/dist` folder from `npm run build` is a static site — deploy it as-is.

- **Vercel**: import the repo, framework preset "Vite", build command `npm run build`, output directory `dist`.
- **Netlify**: build command `npm run build`, publish directory `dist`.

No environment variables or server are required.

## Project structure

```
src/
  config/site.ts       ← ALL editable content lives here (see below)
  components/          ← shared UI: Button, TopBar, FloatingActions, FadeIn, SectionLabel
  sections/            ← one component per landing-page section (Hero, Pitch, Gallery, ...)
  App.tsx              ← assembles sections in order
  index.css            ← Tailwind theme tokens (colors, fonts) + global styles
public/images/          ← all renders/photography used across the site
```

Each section is its own component under `src/sections/`, so any section can be reordered, restyled, or removed independently.

## Editing the site

### Change the phone number

Edit **one line**, `src/config/site.ts:16`:

```ts
export const PHONE = '918696918300'
```

Every phone-derived link on the site — the WhatsApp pill (top bar, hero, configuration cards, floating button, final CTA form), the Call icon/button (top bar, hero, floating button, final CTA), and the footer — is generated from this one constant plus `PHONE_DISPLAY` (`site.ts:17`, the human-readable `+91 86969 18300` shown in the final CTA). Update both together.

### Change prices, copy, or stats

All copy lives in `src/config/site.ts`, one exported object per section:

| Section | Export | Prices/key fields |
|---|---|---|
| Configurations | `configurations` (`site.ts:155`) | `price` and `size` per card |
| Stat strip | `stats` (`site.ts:102`) | unit counts |
| Amenities | `amenities` (`site.ts:182`) | plain string list |
| Location | `locationColumns` (`site.ts:221`) | landmark name + drive time |
| Developer | `developer` (`site.ts:273`) | legacy stats |

Edit the strings there; no component code needs to change.

### Swap in images

Every image path is centralized in the `IMAGES` object, `src/config/site.ts:42`:

```ts
export const IMAGES = {
  hero: '/images/aerial-towers-dusk.jpg',
  config3bhk: '/images/living-room.jpg',
  ...
}
```

**Important:** this build ships with no real photography of the project, so `public/images/*.jpg` are placeholder art — dark/bronze gradient-and-line compositions generated to match the site's own editorial palette, each labelled in-frame (e.g. "AERIAL VIEW, DUSK") so they read clearly as stand-ins rather than real renders. To swap in the real thing:

1. Drop your actual renders/photography into `public/images/`, using the **same filenames** listed in `IMAGES` (e.g. `aerial-towers-dusk.jpg`).
2. That's it — every section already imports its image from this object, so no component code changes.

### RERA number / project name / address

Top of `src/config/site.ts`, in the `PROJECT` object (`site.ts:75`):

```ts
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
```

This feeds the RERA line in the hero, the footer, and the top bar logo.

### Design tokens (colors / fonts)

`src/index.css` defines the Tailwind v4 theme via `@theme`:

- Dark-section palette: `--color-charcoal`, `--color-charcoal-light`, `--color-cream`, `--color-bronze`, `--color-bronze-light`, `--color-umber`
- Light-section palette: `--color-ivory`, `--color-ivory-dim`, `--color-ink`, `--color-bronze-dark` (the accessible bronze used for small bronze text on light backgrounds)
- `--font-serif` (Cormorant Garamond) / `--font-sans` (Inter)

Change a value there and it updates everywhere the corresponding Tailwind class (`bg-charcoal`, `text-ink`, `font-serif`, etc.) is used.

### Two-tone section rhythm

Dark sections: Hero, Stat Strip, The Pitch, Gallery, Vastu, Final CTA, Footer.
Light sections: Why The Autograph, Configurations, Amenities, Location, Developer.

Each tone change is separated by a `.section-hairline` div (a thin bronze gradient rule) rather than a hard color cut — see the top of each section component.

## Notes

- The final-CTA form validates that both name and phone are filled, then opens WhatsApp in a new tab with a pre-filled message containing the visitor's details — no backend, no data is stored anywhere except in that outgoing WhatsApp message.
- The Final CTA section reserves right-side clearance (`pr-20` on mobile) around the form fields so the fixed bottom-right Call/WhatsApp buttons never sit on top of an input.
- Scroll animations (Framer Motion `whileInView`) fire once per element, the first time it enters the viewport.
