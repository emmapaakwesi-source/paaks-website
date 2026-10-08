# PAAKS Purified Water

Responsive Next.js website developed from `public/design-reference.jpg`.

## Development

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Visit http://localhost:3000. Run `npm run build` to build and type-check. The build exports a static website to `out/` for hosting. `npm run start` is not used for static exports; serve `out/` with a static host.

## Included

- Responsive homepage, products, services, quality, service areas and resources.
- Mobile navigation and keyboard-accessible dialogs.
- WhatsApp enquiry form: prepares a message; customers send it in WhatsApp. Orders require team confirmation.
- Original design image retained, with extracted reference artwork used throughout the homepage.
- Layout, colours, typography and section proportions revised to follow the supplied design.

## Before a public launch

Confirm the telephone/WhatsApp number inherited from the reference: `0244 025 199`. It currently appears in `src/app/page.tsx` and `src/app/order-dialog.tsx`.
Reference artwork has been extracted from the supplied design; replace it with original high-resolution assets when available. Supply the brand video, approved laboratory reports, verified testimonials, and finished articles. Confirm delivery coverage; expansion locations are enquiries only. Bottled products remain coming soon. No payment processing or backend order storage is implemented.

## GitHub

Source repository: https://github.com/emmapaakwesi-source/paaks-website. No credentials belong in this repository.

## Deployment

`next.config.ts` enables static export. `.openai/hosting.json` records the private Sites preview. A future public deployment and Squarespace DNS connection require the actual domain and hosting choice. Domain settings have not been changed.
