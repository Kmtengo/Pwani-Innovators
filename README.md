# Pwani Innovators

A coastal holiday technology programme website built with Next.js, React and TypeScript. Static export is deployed through Sites. Fonts and imagery are served locally.

## Develop

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

Production output is `out/`. The managed preview accepts its own host/port flags through `scripts/dev.mjs`.

## Content and integrations

- `lib/programme.ts`: programme details, cohorts, learning tracks, methodology and FAQs.
- `components/Home.tsx`: homepage sections, learning tracks and pricing.
- `components/FaqPage.tsx` and `components/ContactPage.tsx`: dedicated FAQ and enquiry pages.
- `components/SiteShell.tsx`: shared contracting navigation, footer and floating back-to-top control.
- `components/ScrollJourney.tsx`: native scroll timeline with a drawn circuit path, gold progress signal, gentle heading entry and hero parallax. Uses passive scrolling, a scheduled animation frame and resize measurements; it does not intercept wheel/touch scrolling. Reduced motion removes the animated signal and transforms.
- `components/FooterPattern.tsx` and `app/motion.css`: locally rendered wave/circuit artwork and responsive hero cutout composition.
- `components/ProductPreviews.tsx`: interactive directory, planner, coastal game, guided AI study concept and engineering workspace. The concepts use sample content; they are not claims about existing student projects or live AI services.
- `app/globals.css` and `app/refinements.css`: responsive design, typography, motion and reduced-motion support.
- `public/images/`: approved brand/learner assets, commissioned maker illustration and programme poster.
- `public/images/hero-robot-dhow.webp`: transparent sprite edited from the supplied robot/dhow reference. Asset provenance and editing prompt are in `docs/hero-asset-notes.md`.

The contact page embeds the published Typeform using live embed ID `01M69PZJ9HVRWB40R9K5X9XAWK` and the official embed script. It occupies the right column on desktop and stays inline below the contact details on mobile. `NEXT_PUBLIC_TYPEFORM_LIVE_ID` and `NEXT_PUBLIC_TYPEFORM_URL` optionally override the embed ID and direct-form fallback link; see `.env.example` and rebuild after changing them. Both values are public. The previous local enquiry composer has been replaced by Typeform.

Populate `programme.director.name` and `programme.director.quote` with the Director's approved testimonial. Until then, the page displays an honest coming-soon message. No endorsements or partner affiliations have been invented.

## Before the public launch

- Verify the published Typeform?s privacy notice and response destination.
- Supply the Director's approved quote and name.
- Confirm cohort times, device arrangements, attendance/payment policies and exact venue directions; the current FAQs direct parents to the team for these details.
- Connect the owned `innovate-pwani.co.ke` domain through hosting/DNS setup. The current deployment uses its Sites URL and remains owner-private.
- Confirm permission to publish the supplied learner image and poster.

Phone: 0791 532 391. Instagram: @pwaninnovate. First start: 9 November 2026. Four-hour sessions, Monday–Saturday, during school holidays. Weekly / monthly fees: ages 8?12 KSh 1,000 / 4,000; ages 13?17 KSh 1,200 / 4,800; ages 18+ KSh 1,500 / 6,000. Weekly covers 6 sessions and monthly covers 4 weeks (24 sessions). Calendar-month attendance may vary.

## Accessibility and performance

Semantic headings, skip link, keyboard-operated tabs, visible focus indicators, labelled form fields, FAQ expanded states, reduced-motion support, WebP imagery and locally served fonts. No tracking, cookies or analytics integrations are added. Decorative graphics are hidden from assistive technology. Static content remains visible before JavaScript loads.
