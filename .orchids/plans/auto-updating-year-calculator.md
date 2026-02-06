# Auto-Updating Year Calculator Integration

## Requirements
Integrate the auto-updating year calculator script throughout the SEDS website to ensure all references to "years since founding" are dynamically calculated based on the current year (2026 - 1980 = 46 years), and remain accurate in future years without manual updates.

## Current State Analysis

### Existing Infrastructure
The script `public/seds-years.js` is already implemented and loaded in `app/root.tsx` (line 56). It provides:
- `data-seds-years` attribute: Populates elements with the calculated years
- `data-seds-years-animated` attribute: Animates the counter from 0 to the target
- Regex replacement for patterns like "over 38 years" or "for 35 years"
- Global `SEDSYears` object with `calculate()`, `update()`, and `animate()` methods

### Current Usage
- **Homepage (`app/routes/index.tsx`)**: Already uses `<span data-seds-years>46</span>` (line 30)
- **Impact Banner (`app/components/impact-banner.tsx`)**: Uses `data-seds-years` attribute (line 16) for "Years of Impact" stat

### Hardcoded Values That Need Updates
1. **`app/root.tsx` (line 22)**: Meta description has "over 46 years" - static text, not updated by script
2. **`app/routes/index.tsx` (line 11)**: Meta description has "over 46 years" - static text
3. **`app/routes/about.tsx` (line 9)**: Meta description has "over 38 years" - outdated AND static
4. **`app/routes/about.tsx` (lines 17-19)**: Page intro prop has "over 38 years" - will be caught by regex replacement, but shows 38 initially before hydration
5. **`app/components/impact-banner.tsx` (line 32)**: Initial value prop is hardcoded as "46"

## Design Decisions

### Approach: Server-Side Calculation with Utility Function
Rather than relying solely on client-side JavaScript:
1. Create a shared TypeScript utility function for calculating years
2. Use this utility for server-rendered content (meta tags, initial values)
3. Keep the client-side script for any dynamic updates and animations

### Why This Approach?
- **SEO**: Meta descriptions are crawled before JavaScript executes
- **SSR**: Remix pre-renders content; initial HTML should have correct values
- **Consistency**: Single source of truth (FOUNDING_YEAR constant)
- **Hydration**: No flash of incorrect content before JavaScript runs

## Implementation Plan

### Phase 1: Create Shared Utility
Create `app/utils/seds-years.ts`:
```typescript
// SEDS founding year - single source of truth
export const SEDS_FOUNDING_YEAR = 1980;

/**
 * Calculate years since SEDS was founded
 * Works on both server and client
 */
export function calculateSEDSYears(): number {
  const currentYear = new Date().getFullYear();
  return currentYear - SEDS_FOUNDING_YEAR;
}
```

### Phase 2: Update Meta Descriptions
Update all meta descriptions to use the utility function:

**`app/root.tsx`**:
- Import `calculateSEDSYears` 
- Replace static "46 years" with template literal using `calculateSEDSYears()`

**`app/routes/index.tsx`**:
- Import `calculateSEDSYears`
- Update meta description similarly

**`app/routes/about.tsx`**:
- Import `calculateSEDSYears`
- Update meta description (currently shows outdated "38 years")
- Update the `intro` prop to use dynamic years

### Phase 3: Update Components
**`app/components/impact-banner.tsx`**:
- Import `calculateSEDSYears`
- Replace hardcoded `value="46"` with `value={String(calculateSEDSYears())}`

### Phase 4: Synchronize Client Script (Optional Enhancement)
Update `public/seds-years.js` comment header to note that the TypeScript utility should be the canonical source if the founding year ever changes.

## Files to Modify

| File | Change | Priority |
|------|--------|----------|
| `app/utils/seds-years.ts` | **CREATE** - New utility file | High |
| `app/root.tsx` | Update meta description | High |
| `app/routes/index.tsx` | Update meta description | High |
| `app/routes/about.tsx` | Update meta description AND intro prop (currently shows 38!) | High |
| `app/components/impact-banner.tsx` | Use dynamic value for "Years of Impact" stat | Medium |
| `public/seds-years.js` | Add comment about TypeScript utility | Low |

## Testing Checklist
- [ ] Verify meta descriptions show "46 years" in page source (View Source)
- [ ] Verify About page intro text shows "46 years" (not "38 years")
- [ ] Verify Impact Banner shows "46" on initial load
- [ ] Verify animated counter still works on homepage
- [ ] Verify `data-seds-years` attributes still work
- [ ] Test by temporarily changing FOUNDING_YEAR to verify calculation works

## Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| Two sources of truth (TS + JS) | Document in both files; low change frequency (founding year never changes) |
| Build-time vs runtime calculation | Using `new Date().getFullYear()` ensures runtime calculation on each request |
