# SEDS

The Social Education and Development Society website, serving rural communities in Andhra Pradesh since 1980. Production: https://sedsngo.org.

## Development and checks

Use the Bun version in package.json. `bun install --frozen-lockfile`, then `bun run dev` starts Start/Vite. `bun run build` generates the original Tailwind 3 CSS and the template's Cloudflare prebuilt output. `bun run typecheck`, `bun run test`, `bun run lint`, `bun run secrets:check` and `bun audit` verify the port. Tests use a closed fetch stub and never send mail.

`PREVIEW_URL=https://seds-preview.mk-065.workers.dev bun run parity` compares all page routes and all six updates with production at 1440×900 and 390×900. It saves HTTP status, title, all meta tags, main text, ARIA snapshots and full-page PNG pairs/diffs in `/tmp/seds-migration/parity` (override `PARITY_OUTPUT`). All POST requests are blocked. `PREVIEW_URL=https://seds-preview.mk-065.workers.dev bun run smoke:preview` records mobile navigation, theme persistence, filtering, update detail and both form error flows. It deliberately omits CAPTCHA tokens, so the server rejects before any Google or Mailchimp request. Existing counters settle before capture; no page region or content is masked.

The strict parity command currently exits 1 for explained differences: reports are empty until Contentful credentials are provisioned, Google injects an `origin-trial` tag into the preview DOM, and the reCAPTCHA badge displays an invalid-domain warning on workers.dev. The HTTP metadata matches production; the injected tag is not part of the server document. The raw captures and unmasked differences remain in the report.

## Template adoption

This existing site adopts mauricekleine/app-template in place. `.mk/app.json` pins the sync base, declares Cloudflare as its only build target, and narrows the sync contract. `mk apps sync seds --check` works through the stamped worktree until main carries the stamp. Start/Router, React, Bun, Vite, Cloudflare tooling, typecheck, Bun test, taze, the install gate and deploy verification follow the template. Tailwind 3, SEDS' components, copy, root document and styles stay app-owned. Superthread and Soliton are outside this site's target. Sync validation runs the site's build, typecheck, tests and lint.

## Deployment and domains

`bun run deploy` deploys the prebuilt output as Worker `seds` through the `cf` wrapper, which maps this checkout to Maurice's Superthread account (`cd3869f6196b44d50b6ac4b77cb18511`) and its `superthread` profile. Deploys are attended; no deploy workflow is configured, and Vercel's Git integration is disabled. `DEPLOY_URL=https://sedsngo.org bun run deploy:verify <full-sha>` verifies the build identity; `/healthz` returns `{"status":"ok"}`. Workers Logs and Traces are enabled.

`sedsngo.org` and `sedsngo.com` are zones in Superthread; TransIP stays the registrar and holds each domain's DS record. `cloudflare.config.ts` attaches `sedsngo.org` to the Worker as a custom domain. Zone rules handle the rest: `www.sedsngo.org`, `sedsngo.com` and `www.sedsngo.com` are proxied and redirect with 308 to `https://sedsngo.org`, keeping path and query, and Always Use HTTPS is on. Mail records (Google MX, SPF, Mandrill verification and DKIM) are DNS-only. `docs/migration/` keeps the TransIP export the zone was built from.

## Server credentials

`CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` read reports. `MANDRILL_API_KEY` and `RECAPTCHA_SECRET_KEY` serve contact and collaboration inquiries. Missing CMS credentials preserve the existing empty-reports fallback. Missing mail/CAPTCHA credentials fail the form safely with the existing error message.

Production values live in the `SEDS` vault of Maurice's personal 1Password; `.env.tpl` references them. Upload or rotate them with `bun run deploy:secrets`: `tools/upload-secrets.sh` converts `op inject --account mauricekleine.1password.com` output with `tools/secrets-json.ts` into a private temporary file, removed on exit, for `cf workers secrets bulk`. Deploys keep them.

Both forms send from and to info@sedsngo.org and CC the sender. The live collaboration form used info@setzenjio.org, a typo for a domain that does not exist; the migration corrects it. Server validation additionally rejects malformed email addresses, escapes user text in HTML, and treats Mailchimp rejected/invalid recipients as failures. Production reCAPTCHA remains required; its site key rejects workers.dev hostnames, so test forms on sedsngo.org.

Build-tool overrides patch transitive advisories while the template keeps its shared pins. Remove `postcss-selector-parser` when Tailwind resolves >=7.1.6, `sharp` when cf resolves >=0.35.5, `undici` when cf/workerd resolve >=7.30.1, and `zod` when Cloudflare/Start tooling resolves >=4.6.6 without overrides. The migration intentionally retains the template pins rather than doing an unrelated latest-version upgrade.

The original `/reports` has a Contentful loader and no mail action. The footer newsletter form also remains its original local success placeholder. Only contact and collaboration send Mailchimp messages. The legacy `/seds-years.js` asset stays reachable, but the root no longer loads its pre-hydration DOM rewrite: React and the request-time year helper render the same text directly.
