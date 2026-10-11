# PAAKS Purified Water website

Next.js static marketing website. Node.js 22 is used in CI.

## Development and release

Run `npm ci`, then `npm run dev` for local development. Run `npm run build:release` for deployment: it builds, removes internal artifacts, adds CSP protection, checks all pages/assets and runs the dependency audit. Deploy only the hardened `out/` output. `npm run build` by itself is not a release build. `npm run verify:release` performs the same hardening/checks on an existing export. `npm run start` is not used for static exports.

## Current pages and features

Homepage; products; sachet, dispenser-refill and empty-bottle detail pages; quality; delivery and dispenser cleaning; corporate/event supply; distributors; referrals; about; FAQs; contact; privacy. Eight native disclosure cards explain the purification sequence. Planned 500ml/750ml bottled water is clearly labelled as a concept, not a currently orderable product.

Enquiries are prepared in the browser and opened in WhatsApp; customers must send the message themselves. No enquiry database or payment processing is implemented. Corporate/event/delivery enquiries support sachets, refills, empty bottles and mixed supply. Cleaning enquiries collect equipment, machine count and location. Preferred dates use the visitor's local date and are checked again at submission.

Approved contacts: 0596 531 880 / 0204 760 043; sales@paakspurifiedwater.com; Choggu Yipala, Gurugu Road, Tamale; GhanaPost GPS NS-072-7649. WhatsApp uses the first number. Business map coordinates: 9.4391811, -0.861773. Tagline: PURE. SAFE. TRUSTED.

Maps load after visitor action. Expansion city markers do not confirm delivery coverage. Certification documents are pending, customer logo permissions need confirmation, and the referral programme remains a proposed pilot. Product concept imagery is labelled illustrative.

## Hosting and outstanding work

The domain is connected to Sites. The current audience remains owner-private, and robots.txt blocks indexing. At an approved public launch, change access and indexing together and test both domain variants without signing in.

Application response headers require hosting-level verification/configuration; meta CSP cannot provide frame-ancestors. Browser, mobile, screen-reader and performance QA remain outstanding. Current export excludes the factory layout; historical repository copies have not been erased.

Source mirror: https://github.com/emmapaakwesi-source/paaks-website
`.openai/hosting.json` retains the Sites identity. Never commit credentials.
