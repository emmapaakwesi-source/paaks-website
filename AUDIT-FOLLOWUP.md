# Current remediation status — 11 October 2026

## Completed in this update
- Added build:release and verify:release: sequential build/hardening/export/security/dependency checks with failure exit codes. CI uses the release command.
- Preferred dates are calculated locally when the enquiry opens, with a fresh local-date check at submission; no build-time date minimum.
- Corporate/event/delivery supply selectors and messages now support empty bottles and mixed quantities.
- Referral fields are omitted from information-only and distributor enquiries; placeholder examples match enquiry types.
- Homepage process introduction precedes a full-width four-column stage grid; two columns on mobile and one on very narrow screens.
- Neutral Stage details labels remain accurate for open and closed disclosures.
- Replaced obsolete README contacts, domain status and route documentation.

## Still pending
- Public audience and search indexing: deliberate private-development settings; requires public-launch instruction.
- Actual FDA/GSA documents, laboratory reports, approved testimonials, customer-logo permissions and confirmed operating hours/terms: business inputs needed.
- Hosting response headers including frame-ancestors: not configurable through the available static Sites source contract; verify on application responses when accessible.
- Factory diagram historical copies: current deployment excludes them; history rewriting needs separate authorization and cannot retract downloaded copies.
- Browser/device/screen-reader, live external review/social links and Core Web Vitals: supported browser QA unavailable in this environment. Source/export checks do not replace those tests.

## Previous remediation record

# Website audit and remediation — 9 October 2026

## Fixed in this pass
- PostCSS 8.4.31 had four reported advisories, including high-severity source-map file disclosure. Override to patched 8.5.23; npm audit now reports zero known vulnerabilities. Next remains 15.5.27, avoiding an unnecessary major framework migration. Keep the override under review when Next upgrades.
- No privacy notice existed for the WhatsApp/Maps flows. Added /privacy, footer/form links, sitemap and unique page metadata. Notice describes browser-prepared messages, third-party processing, opt-in maps and hosting/access cookies without claiming those services are cookie-free.
- No application CSP existed. Added a post-export CSP meta policy with hashes for generated inline scripts, self-hosted scripts, no inline script event handlers, no plugin objects, no base element, restricted frames and connections. Hashes include all static routes to support navigation. Inline CSS remains permitted for React/Next styles. This is page-level protection, not a substitute for hosting response headers.
- Referrer metadata and map iframes now use no-referrer.
- Internal asset provenance README files were being copied to the public export. Deployment pruning now removes Markdown and source-map files while keeping tracked source documentation.
- Export checks now cover main headings, titles, image alt attributes and srcset variants, alongside local routes, IDs, anchors and safe new-tab links. Separate security checks validate CSP hashes, referrer metadata, URL schemes and artifact hygiene. CI runs those checks and npm audit.
- Empty-bottle photograph explicitly uses contain sizing to avoid cropping the open neck. Products metadata now mentions empty bottles; cleaning enquiries have equipment-specific guidance.

## Source review
- Static export: no application database, upload endpoint, payment processing or server API. Form values are React-rendered or percent-encoded into WhatsApp URLs, not interpreted as HTML. Quantity/name/location/notes limits and optional referral validation are present.
- The only dangerouslySetInnerHTML is static business JSON-LD, with '<' escaped. It does not interpolate visitor input.
- No application eval, browser storage, analytics or third-party executable script identified in inspected source. No credential-like public asset filenames identified. This is a source review, not a guarantee that no secret or vulnerability exists.
- Generated bottle images and pending document labels remain disclosed. No fake testimonials or current certification status added. FirstBank remains a text fallback until its official logo is available.

## Hosting observations and limits
- Existing access remains owner-private: one allowed owner. No public launch or audience change performed.
- HTTP apex request redirected to HTTPS, then returned an access-wall 403. HTTPS apex and www also returned access-wall 403. Those responses included X-Frame-Options SAMEORIGIN and Referrer-Policy same-origin; they are access-wall observations, not private application header measurements.
- Authenticated CSP/header behavior, HSTS, nosniff and apex/www canonical redirect behavior still need browser/hosting verification. Supported static hosting tools did not expose a response-header configuration; do not claim unsupported _headers files or Next headers() secure a static export.
- No browser automation skill available in this managed environment. Actual mobile/tablet layout, focus restoration, CSP hydration/navigation, Maps, WhatsApp and clipboard handoffs remain untested in a browser. Static build and policy checks are the current evidence.

## Still requires evidence or future work
- Current FDA/GSA certificates with scope/validity and approved laboratory reports; customer-logo permissions before public launch; genuine consented testimonials; business hours; direct Google review link.
- Purification text now follows the supplied factory diagram: sand, carbon, resin, six filters, RO, UV, tank and packaging branches. Ozonation is no longer asserted.
- Keep robots disallow while owner-private; update it together with an explicitly approved public launch.
- Manual referral pilot operations: codes, attribution, verification and credits need team management. No automated reward claims.
- Header video, authentic photography, CSS consolidation and static/client component separation are future improvements, not security blockers found in this pass.

References: https://github.com/advisories/GHSA-fxqj-rqcc-2cmp and https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy
