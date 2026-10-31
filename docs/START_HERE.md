# Start here — Pwani Innovators

Complete Next.js + React + TypeScript source export of the published website.

## Run locally

Install Node.js 22 LTS and npm. Extract this ZIP, open a terminal inside the `pwani-innovators` folder, and run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000 in your browser. Stop with Ctrl+C.

## Production build

```sh
npm run typecheck
npm run build
```

This project uses Next.js static export. The `out/` folder produced by the build is ready for static hosting. `next start` is not used with this configuration. Use a web server to serve `out/`, rather than opening HTML files directly.

## Included

- Home, FAQ and Contact routes, shared navigation and footer.
- All React components, TypeScript configuration, CSS and scroll animations.
- All site images, logo, robot/dhow artwork, learner photo and programme poster.
- Programme data, prices, FAQs, interactive project previews and embedded Typeform registration.
- npm lockfile for reproducible dependency installation, environment example and documentation.

## Finish the integrations

The supplied Typeform live embed is enabled by default in the contact page's right-hand column and stays inline on mobile. To change it, copy `.env.example` to `.env.local` and update `NEXT_PUBLIC_TYPEFORM_LIVE_ID` and `NEXT_PUBLIC_TYPEFORM_URL` (the direct-form fallback link), then restart development or rebuild. Form questions and responses are managed in Typeform.

The Director testimonial remains a placeholder: update `programme.director` in `lib/programme.ts` with the approved name and quote.

For your own domain, update `metadataBase` in `app/layout.tsx` and configure the domain with your hosting provider. The exported source does not require a ChatGPT sign-in; the current hosted Site's access gate belongs to its hosting platform.

Dependencies (`node_modules`), build/cache folders, Git history, internal QA screenshots and the Sites deployment identity are omitted. All website content and source assets are included. Fonts are npm dependencies and are installed by `npm ci`.
