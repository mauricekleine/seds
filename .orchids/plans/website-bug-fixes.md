# Website Bug Fixes Plan

## Requirements

Fix all identified bugs on the SEDS website including:
1. Routes returning 404 errors that shouldn't
2. Routes returning 500 errors due to missing API credentials
3. React 18 hydration warnings in the console
4. Development server not recognizing newly added routes

## Current Issues Identified

### Bug 1: Multiple Routes Returning 404 (HIGH PRIORITY)
**Affected Routes:**
- `/updates` - Returns 404
- `/updates/:slug` - Returns 404  
- `/impact-map` - Returns 404
- `/volunteer-experience` - Returns 404

**Root Cause:** These routes were recently added (timestamps show Feb 7, 2026) but the Remix dev server cache has not picked them up. The route files exist in `app/routes/` but are not present in `public/build/routes/`.

**Solution:** Restart the development server to trigger a full rebuild that includes the new routes.

### Bug 2: Reports Page 500 Error (HIGH PRIORITY)
**Affected Route:** `/reports`

**Root Cause:** The `/reports` route uses Contentful CMS API but the `.env` file has empty credentials:
```
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_SPACE_ID=
```

The loader function fails because it cannot create a valid Contentful client without credentials.

**Solution Options:**
1. **Preferred:** Add valid Contentful credentials to `.env`
2. **Alternative:** Add graceful error handling in the reports loader to return an empty state when credentials are missing

### Bug 3: React 18 Hydration Warning (MEDIUM PRIORITY)
**Console Error:** 
```
Warning: ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead.
```

**Root Cause:** `app/entry.client.tsx` uses deprecated `hydrate()` API:
```tsx
import { hydrate } from "react-dom";
hydrate(<RemixBrowser />, document);
```

**Solution:** Update to use React 18's `hydrateRoot` API:
```tsx
import { hydrateRoot } from "react-dom/client";
hydrateRoot(document, <RemixBrowser />);
```

### Bug 4: ResizeObserver Warning (LOW PRIORITY)
**Console Error:**
```
ResizeObserver loop completed with undelivered notifications.
```

**Root Cause:** This is typically caused by a ResizeObserver callback triggering layout changes. It's a browser timing warning and generally not breaking.

**Solution:** This can usually be safely ignored in development, or suppressed if needed.

## Implementation Phases

### Phase 1: Fix React 18 Hydration (entry.client.tsx)
Update the client entry point to use the modern React 18 API.

**File to modify:** `app/entry.client.tsx`

**Changes:**
- Replace `import { hydrate } from "react-dom"` with `import { hydrateRoot } from "react-dom/client"`
- Replace `hydrate(<RemixBrowser />, document)` with `hydrateRoot(document, <RemixBrowser />)`

### Phase 2: Add Error Handling for Reports Page
Add graceful degradation when Contentful credentials are missing.

**File to modify:** `app/routes/reports.tsx`

**Changes:**
- Wrap Contentful client creation in try-catch
- Return empty items array when credentials are missing or API fails
- Display a user-friendly message when no reports are available

### Phase 3: Restart Dev Server (Manual Step)
The new routes (updates, impact-map, volunteer-experience) require a server restart to be recognized.

**Action Required:**
1. Stop the current dev server (Terminal 4)
2. Clear the `.cache` directory: `rm -rf .cache`
3. Restart with: `pnpm run dev`

### Phase 4: Verify All Routes Work
After fixes, test each route:
- `http://localhost:3000/` - Homepage
- `http://localhost:3000/about` - About page
- `http://localhost:3000/contact` - Contact page
- `http://localhost:3000/donate` - Donate page
- `http://localhost:3000/reports` - Reports page (should show graceful empty state)
- `http://localhost:3000/our-work` - Our Work page
- `http://localhost:3000/education` - Education page
- `http://localhost:3000/low-carbon-farming` - LCF page
- `http://localhost:3000/natural-resource-management` - NRM page
- `http://localhost:3000/clean-development-mechanism` - CDM page
- `http://localhost:3000/volunteers` - Volunteers page
- `http://localhost:3000/volunteer-experience` - Volunteer Experience page
- `http://localhost:3000/impact-map` - Impact Map page
- `http://localhost:3000/updates` - Updates/Field Notes page
- `http://localhost:3000/updates/new-check-dam-roddam` - Individual update page

## Technical Details

### Files Requiring Changes

1. **`app/entry.client.tsx`**
   - Update React hydration from deprecated API to React 18 API

2. **`app/routes/reports.tsx`**
   - Add error handling for missing Contentful credentials
   - Add empty state UI component

### Manual Actions Required

1. **Restart Development Server**
   - Required to pick up new routes in the build

2. **Environment Variables (Optional)**
   - Add Contentful credentials if CMS integration is needed
   - Add Mailchimp credentials if email functionality is needed

## Success Criteria

- [ ] All routes return 200 status (except expected 404s)
- [ ] No React hydration warnings in console
- [ ] Reports page loads without 500 error
- [ ] Updates page and all sub-routes are accessible
- [ ] Impact Map page loads and is interactive
- [ ] Volunteer Experience page loads correctly
