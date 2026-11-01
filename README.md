# Pwani Innovators

A coastal holiday technology programme website built with Next.js, React and TypeScript. Railway builds and serves the static export. Fonts and imagery are served locally.

## Develop

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

Production output is `out/`. The managed preview accepts its own host/port flags through `scripts/dev.mjs`.

## Railway deployment

- Live site: https://pwani-innovators-production.up.railway.app
- Project: **Pwani Innovators**, environment: **production**, service: **pwani-innovators**.
- Source: `Kmtengo/Pwani-Innovators`, branch `main`. Railway's GitHub integration deploys pushes directly; a GitHub Actions deployment workflow is not required.
- Automatic deployments require the [Railway GitHub App](https://github.com/apps/railway-app) to be installed with access to this repository, a project member's connected GitHub account with contributor access, and an enabled `main` deployment trigger. Authorizing GitHub sign-in alone does not install the app. If pushes stop deploying, check these permissions and the service's source settings.
- `railway.json` configures Railpack, the production build and the health check. `.node-version` selects Node 24. Railpack serves the Next.js `out/` export with Caddy; `Staticfile` disables the home-page fallback so unknown routes return 404.
- Railway variables: `PORT=8080`, `RAILPACK_SPA_OUTPUT_DIR=out` and `NEXT_PUBLIC_SITE_URL=https://pwani-innovators-production.up.railway.app`.
- Typeform uses the public defaults in `.env.example`. Set overrides as Railway variables and redeploy to apply them. `.env.local` stays on your machine.

To deploy the current local checkout manually after `railway login`:

```sh
railway up --project c11a5c03-f6fa-4ee1-bfa2-5ee281537029 --environment 401f15ac-ff61-4e53-9b76-815f19231959 --service 94154f6c-77f1-4e02-b987-9c8f325638bc --ci
```

Check that the deployment reaches `SUCCESS` in Railway before considering a release complete. For a custom domain, configure Railway/DNS, update `NEXT_PUBLIC_SITE_URL`, then redeploy.

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

The testimonial features Lennox Mtengo, Director of Smartbrains Academy, with the supplied message and portrait. Edit `programme.director` in `lib/programme.ts` to update the name, quote or image.

## Before the public launch

- Verify the published Typeform's privacy notice and response destination.
- Confirm cohort times, device arrangements, attendance/payment policies and exact venue directions; the current FAQs direct parents to the team for these details.
- Connect the owned `innovate-pwani.co.ke` domain through Railway/DNS setup. The current deployment uses the public Railway URL above.
- Confirm permission to publish the supplied learner image and poster.

Phone: 0791 532 391. Instagram: @pwaninnovate. First start: 9 November 2026. Four-hour sessions, Monday–Saturday, during school holidays. Weekly / monthly fees: ages 8?12 KSh 1,000 / 4,000; ages 13?17 KSh 1,200 / 4,800; ages 18+ KSh 1,500 / 6,000. Weekly covers 6 sessions and monthly covers 4 weeks (24 sessions). Calendar-month attendance may vary.

## Accessibility and performance

Semantic headings, skip link, keyboard-operated tabs, visible focus indicators, labelled form fields, FAQ expanded states, reduced-motion support, WebP imagery and locally served fonts. No tracking, cookies or analytics integrations are added. Decorative graphics are hidden from assistive technology. Static content remains visible before JavaScript loads.
