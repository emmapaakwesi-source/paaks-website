# PAAKS Purified Water website

A responsive Next.js static website for PAAKS, based in Tamale. The homepage follows a clear brand and enquiry journey, with dedicated product, quality, delivery, corporate, distributor, FAQ and contact pages.

## Run locally

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
npm run build
```

The build exports to `out/`; deploy that directory to a static host. `npm run start` is not used for static exports.

## Pages and functionality

- `/`: spacious homepage with product imagery, purification overview, service journeys, story, city map, FAQs and distributor invitation.
- `/products`, `/products/sachet`, `/products/dispenser`: product details and contextual enquiry buttons. Bottled products remain planned.
- `/quality`: treatment process and a request for available reports.
- `/delivery`: delivery enquiries, city map and dispenser services.
- `/corporate`: workplace and event quotes.
- `/distributors`: partnership enquiries.
- `/about`, `/faq`, `/contact`: company information and help.
- Shared WhatsApp enquiry dialog preselects the enquiry type. Corporate quotes collect business, date and frequency; distributor enquiries collect business details. Messages are sent only when customers send them in WhatsApp. There is no backend storage or payment processing.
- City map loads Google Maps only when requested. It shows city locations, not the factory address. Expansion locations do not imply confirmed delivery coverage.
- Responsive navigation, native accessible dialogs, keyboard skip link, FAQ disclosures, explicit image dimensions and lazy loading.

## Brand assets

The official user-approved logo is preserved unchanged in `public/brand/paaks-official-logo.jpeg`; the header uses a display crop of that same artwork. Generated product mockups and their prompt briefs are in `public/imagery/`. They are labelled illustrative in the site. Replace them with real product photography later. The original design reference and older reference assets are retained for history.

## Before public launch

Confirm the phone/WhatsApp number inherited from the design: `0244 025 199`, currently used in `site-content.tsx` and `order-dialog.tsx`. Supply factory coordinates, business email, opening hours, approved laboratory reports and verified testimonials. Confirm quantities per sachet bag, current pricing, bottle/exchange requirements, delivery terms and product packaging. Supply real photos and any brand video. The public domain and Squarespace DNS have not been connected.

Source repository: https://github.com/emmapaakwesi-source/paaks-website

`.openai/hosting.json` retains the existing private Sites project identity. Keep credentials outside the repository.


Confirmed company information (8 October 2026): phones 0596 531 880 / 0204 760 043; GhanaPost GPS NS-072-7649; Choggu Yipala on Gurugu Road; sales@paakspurifiedwater.com. WhatsApp uses the first number. Mission, vision and six values transcribed from supplied collateral; premises photograph supplied by PAAKS. Sachet bags contain 30 × 500ml. Do not use the tagline “Trust in every drop”. Current certification documents and precise factory map coordinates remain pending.
