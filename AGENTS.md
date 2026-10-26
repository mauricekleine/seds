# SEDS

SEDS is the public NGO website at sedsngo.org. Preserve its own design, copy, URLs and SEO metadata. Its fonts are Ubuntu and Open Sans, with green actions, blue links and the light/dark theme in app.css.

The app runs TanStack Start on Bun and builds only for Cloudflare Workers. app/pages holds the page bodies; src/routes owns Start routes, heads, loaders and native POST handlers. src/functions.ts exposes server functions; Contentful and Mailchimp code lives in *.server.ts. app/navigation.tsx adapts shared link styling and form submission to Start.

Use package.json for commands. Build before checking client assets with bun run secrets:check. Form tests stub fetch completely; verification never submits live forms. PREVIEW_URL=https://…workers.dev bun run parity compares every page and update with production at desktop and mobile widths, saving text, metadata, screenshots and diagnostics under /tmp/seds-migration/parity by default.

.mk/app.json records adoption in place from app-template. mk apps sync carries the selected runtime pins and tooling; the stamp opts out of superthread, Tailwind 4 and Soliton. template.json is the upstream contract. README.md describes deployment and the credential boundary.

## Dependencies

The Bun version, runtime pins, taze and three-day release-age gate follow app-template. Keep Start and Router coupled. Keep Tailwind 3 and its forms/typography plugins together to preserve the site. Overrides in package.json address build-tool advisories; remove each when its parents resolve a patched release without it.

Checks: bun run build, bun run typecheck, bun run test, bun run lint, bun run secrets:check and bun audit. Smoke the workers.dev preview, /healthz and /api/deploy.json; deploy:verify checks its exact commit SHA.

Deployment and the attended cutover are documented in README.md and the migration PR.
