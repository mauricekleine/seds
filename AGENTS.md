# SEDS

## Project Overview

SEDS (Social Education and Development Society) website - a Remix-based NGO website for an organization doing rural development work in Andhra Pradesh, India since 1980. Live at https://sedsngo.org.

## Commands

```bash
# Development
pnpm install          # Install dependencies
pnpm dev              # Start dev server (runs Tailwind watch + Remix dev concurrently)

# Build & Production
pnpm build            # Build for production (CSS + Remix)
pnpm start            # Serve production build locally

# Code Quality
pnpm lint             # Check ESLint + Prettier
pnpm lint:fix         # Auto-fix lint issues
pnpm typecheck        # TypeScript type checking
```

## Architecture

### Tech Stack
- **Framework**: Remix 1.19 with React 18
- **Styling**: Tailwind CSS with custom theming
- **CMS**: Contentful for dynamic content
- **Email**: Mailchimp/Mandrill for contact form
- **Forms**: reCAPTCHA (production only) + Yup validation
- **Hosting**: Vercel serverless

### Directory Structure
```
app/
├── routes/           # Remix file-based routes (pages)
├── components/       # React components
│   └── ui/          # Reusable UI primitives
├── utils/           # Server utilities
├── types/           # TypeScript types
├── root.tsx         # App shell (navigation, footer, theme)
└── app.css          # Generated Tailwind output (don't edit directly)

app.css               # Tailwind input file (edit this one)
public/              # Static assets
```

### Theming System

Uses CSS variables for dark/light mode with semantic color tokens:

```css
/* In app.css - light mode defaults, .dark class overrides */
--color-bg-primary/secondary/tertiary    /* surface-* in Tailwind */
--color-text-primary/secondary/tertiary  /* content-* in Tailwind */
--color-border/border-strong             /* outline/outline-strong in Tailwind */
```

Usage in components: `bg-surface-primary`, `text-content-secondary`, `border-outline`

Theme toggle persists to localStorage and uses inline script in `root.tsx` to prevent flash.

### Remix Patterns

- **Routes**: File-based routing in `app/routes/`. Homepage is `index.tsx`.
- **Actions**: Server-side form handlers export `action` function (see `contact.tsx`)
- **Loaders**: Data fetching exports `loader` function
- **Meta**: Each route exports `meta` function for SEO
- **Path alias**: `~/` maps to `app/` directory

### Dynamic Year Calculation

The organization founding year (1980) is used to calculate "X+ years of service". Implemented in:
- `app/utils/seds-years.ts` - server-side
- `public/seds-years.js` - client-side (updates elements with `data-seds-years` attribute)

## Environment Variables

Required for full functionality:
```
CONTENTFUL_ACCESS_TOKEN=    # CMS access
CONTENTFUL_SPACE_ID=        # CMS space
MANDRILL_API_KEY=           # Email service
RECAPTCHA_SECRET_KEY=       # Form protection (production)
```

## Key Conventions

- Mobile-first responsive design (sm:, md:, lg: breakpoints)
- Icons from phosphor-react library
- Fonts: Ubuntu (display/headings), Open Sans (body)
- Green (#16A34A) as primary action color, Blue (#1D6DC2) for links

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
