# SEDS

See CLAUDE.md for application architecture and environment variables.

## Dependencies

Upgrades follow the global `mk-dependency-upgrades` skill; holds live in
`taze.config.mjs`. Vercel uses pnpm and the committed pnpm lockfile.

- Checks: `pnpm build`, `pnpm typecheck`, `pnpm lint`.
- Groups: keep all `@remix-run/*` packages at the same version; move React,
  React DOM and their types together; keep Tailwind and its plugins compatible.
- Smoke test: the Vercel build emits `api/index.js`. For `remix-serve`, build with
  a local config using `serverBuildTarget: "node-cjs"`, `server: undefined` and
  `serverBuildPath: "build/index.js"`; load `/`, `/about` and `/reports`.
  Remix serve does not load `.env`; preload `dotenv/config` to exercise Contentful.
