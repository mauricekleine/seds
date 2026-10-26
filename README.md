# SEDS

The Social Education and Development Society website, serving rural communities in Andhra Pradesh since 1980. Production: https://sedsngo.org.

## Development and checks

Use the Bun version in package.json. `bun install --frozen-lockfile`, then `bun run dev` starts Start/Vite. `bun run build` generates the original Tailwind 3 CSS and the template's Cloudflare prebuilt output. `bun run typecheck`, `bun run test`, `bun run lint`, `bun run secrets:check` and `bun audit` verify the port. Tests use a closed fetch stub and never send mail.

`PREVIEW_URL=https://seds-preview.mk-065.workers.dev bun run parity` compares all page routes and all six updates with production at 1440×900 and 390×900. It saves HTTP status, title, all meta tags, main text, ARIA snapshots and full-page PNG pairs/diffs in `/tmp/seds-migration/parity` (override `PARITY_OUTPUT`). All POST requests are blocked. `PREVIEW_URL=https://seds-preview.mk-065.workers.dev bun run smoke:preview` records mobile navigation, theme persistence, filtering, update detail and both form error flows. It deliberately omits CAPTCHA tokens, so the server rejects before any Google or Mailchimp request. Existing counters settle before capture; no page region or content is masked.

The strict parity command currently exits 1 for explained differences: reports are empty until Contentful credentials are provisioned, Google injects an `origin-trial` tag into the preview DOM, and the reCAPTCHA badge displays an invalid-domain warning on workers.dev. The HTTP metadata matches production; the injected tag is not part of the server document. The raw captures and unmasked differences remain in the report.

## Template adoption

This existing site adopts mauricekleine/app-template in place. `.mk/app.json` pins the sync base, declares Cloudflare as its only build target, and narrows the sync contract. `mk apps sync seds --check` works through the stamped worktree until main carries the stamp. Start/Router, React, Bun, Vite, Cloudflare tooling, typecheck, Bun test, taze, the install gate and deploy verification follow the template. Tailwind 3, SEDS' components, copy, root document and styles stay app-owned. Superthread and Soliton are outside this site's target. Sync validation runs the site's build, typecheck, tests and lint.

## Preview deployment

`bun run deploy` deploys the prebuilt output as Worker `seds` through the `cf` wrapper, which maps this checkout to Maurice's Superthread account (`cd3869f6196b44d50b6ac4b77cb18511`) and its `superthread` profile. Production secrets live in the `SEDS` vault of Maurice's personal 1Password; `.env.tpl` references them. Upload or rotate them with `bun run deploy:secrets`: `tools/upload-secrets.sh` converts `op inject --account mauricekleine.1password.com` output with `tools/secrets-json.ts` into a private temporary file, removed on exit, for `cf workers secrets bulk`. Deploys keep them. Configuration includes no routes or custom domains, and no deploy workflow is configured: production cutover remains an attended step. `DEPLOY_URL=<worker url> bun run deploy:verify <full-sha>` verifies the build identity; `/healthz` returns `{"status":"ok"}`. The earlier temporary Worker `seds-preview` in Kaulos is deleted after cutover. Workers Logs and Traces are enabled.

## Server credentials

`CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` read reports. `MANDRILL_API_KEY` and `RECAPTCHA_SECRET_KEY` serve contact and collaboration inquiries. Missing CMS credentials preserve the existing empty-reports fallback. Missing mail/CAPTCHA credentials fail the form safely with the existing error message.

Credential migration is blocked: the installed `vercel` command is a Mockly read-only wrapper and refuses `vercel env ls` / `vercel env pull`. The existing `.env` contains empty values. No credentials were invented, stored in 1Password, or provisioned as Worker secrets. A maintainer with access to the SEDS Vercel project must retrieve its production values, store a deployable bundle per mk-1password in a SEDS Production vault as bundle `website`, then deploy with `cf deploy --prebuilt --secrets-file <private-file>`. Keep that file outside the repository and delete it after provisioning. Verify the 1Password references and rescan client assets with the real values available before cutover.

Both forms send from and to info@sedsngo.org and CC the sender. The live collaboration form used info@setzenjio.org, a typo for a domain that does not exist; the migration corrects it. Server validation additionally rejects malformed email addresses, escapes user text in HTML, and treats Mailchimp rejected/invalid recipients as failures. Production reCAPTCHA remains required; the preview hostname must be allowed in its configuration before a real approved cutover test.

The draft PR contains the exact cutover steps. `docs/migration/transip-dns.json` and `.zone` contain the complete 10-record TransIP API export, retrieved with GET only using the existing `TRANSIP_API_TOKEN` item. The token is not stored in the repository. The dig inventory separately confirms TransIP nameservers and an active parent DS record. Disable the old DNSSEC delegation and let its DS TTL expire before changing nameservers. No Cloudflare zone was created in any account. Create `sedsngo.org` only in the Superthread account. Provision production secrets there, not in Kaulos. Vercel, TransIP, DNS and live forms remain untouched.

Build-tool overrides patch transitive advisories while the template keeps its shared pins. Remove `postcss-selector-parser` when Tailwind resolves >=7.1.6, `sharp` when cf resolves >=0.35.5, `undici` when cf/workerd resolve >=7.30.1, and `zod` when Cloudflare/Start tooling resolves >=4.6.6 without overrides. The migration intentionally retains the template pins rather than doing an unrelated latest-version upgrade.

The original `/reports` has a Contentful loader and no mail action. The footer newsletter form also remains its original local success placeholder. Only contact and collaboration send Mailchimp messages. The legacy `/seds-years.js` asset stays reachable, but the root no longer loads its pre-hydration DOM rewrite: React and the request-time year helper render the same text directly.
