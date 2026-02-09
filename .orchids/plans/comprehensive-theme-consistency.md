# Comprehensive Theme Consistency - Light & Dark Mode

## Requirements

Make the entire website uniform with a classic white theme as default, and properly support dark mode across all pages and components. Ensure text always has proper contrast against backgrounds in both modes.

## Theme System Reference

The tailwind config uses CSS variables for theming:

**Light Mode (Default):**
- `bg-surface-primary` = white (#ffffff)
- `bg-surface-secondary` = light gray (#f9fafb)  
- `bg-surface-tertiary` = lighter gray (#f3f4f6)
- `text-content-primary` = dark gray (#111827)
- `text-content-secondary` = medium gray (#374151)
- `text-content-tertiary` = light gray (#6b7280)
- `border-outline` = border gray (#e5e7eb)

**Dark Mode:**
- `bg-surface-primary` = dark gray (#111827)
- `bg-surface-secondary` = darker gray (#1f2937)
- `bg-surface-tertiary` = medium dark (#374151)
- `text-content-primary` = off-white (#f9fafb)
- `text-content-secondary` = light gray (#e5e7eb)
- `text-content-tertiary` = muted gray (#9ca3af)
- `border-outline` = dark border (#4b5563)

## Current Issues Summary

The following hardcoded colors need to be replaced with theme-aware tokens:

| Color | Replace With | Context |
|-------|--------------|---------|
| `bg-white` | `bg-surface-primary` | Section backgrounds |
| `bg-gray-50` | `bg-surface-secondary` | Card backgrounds, alternate sections |
| `bg-gray-100` | `bg-surface-tertiary` | Progress bars, inputs |
| `text-gray-800` | `text-content-primary` | Headings |
| `text-gray-700` | `text-content-primary` | Body text emphasis |
| `text-gray-600` | `text-content-secondary` | Body text |
| `text-gray-500` | `text-content-tertiary` | Muted text |
| `text-gray-400` | `text-content-tertiary` | Very muted text |
| `border-gray-200` | `border-outline` | Card borders |
| `border-gray-100` | `border-outline` | Subtle borders |
| `border-gray-300` | `border-outline-strong` | Button borders |

**Note:** Colors on green backgrounds (hero banners, CTAs) should stay as `text-white` since they need high contrast against the green.

## Implementation Phases

### Phase 1: Core Components (High Impact)
Fix shared components used across multiple pages:

1. **app/components/hero.tsx**
   - Line 15: `bg-gray-100` → `bg-surface-tertiary`
   - Line 23: `bg-white/95` → `bg-surface-primary/95` (keep backdrop-blur)
   - Line 30: `text-gray-600` → `text-content-secondary`

2. **app/components/cta-section.tsx**
   - Line 21: `bg-white` → `bg-surface-primary`
   - Line 24: `text-gray-800` → `text-content-primary`
   - Line 27: `text-gray-600` → `text-content-secondary`

3. **app/components/image.tsx**
   - Line 12: `bg-gray-100` → `bg-surface-tertiary`

4. **app/components/update-card.tsx**
   - Line 20: `bg-gray-50 text-gray-700 border-gray-200` → `bg-surface-secondary text-content-secondary border-outline`

5. **app/components/ui/card.tsx**
   - Line 7: `border-gray-200` → `border-outline` + add `bg-surface-primary`

### Phase 2: Homepage Sections
Fix homepage-specific sections:

6. **app/components/our-story-section.tsx** (partially done)
   - Lines 15, 19, 22, 30, 53-54, 63: Replace remaining `bg-white`/`text-gray-*` with theme tokens

7. **app/components/programs-section.tsx** (partially done)
   - Lines 16, 19, 22, 29, 32, 35: Ensure all colors use theme tokens

8. **app/components/testimonials-section.tsx** (partially done)
   - Lines 11, 13, 16-18, 26, 29, 32: Ensure consistency

9. **app/components/partners-section.tsx** (partially done)
   - Lines 12, 15, 18, 28, 33: Ensure consistency

10. **app/components/updates-preview.tsx** (partially done)
    - Lines 13, 16, 19: Ensure consistency

11. **app/components/impact-banner.tsx** (partially done)
    - Lines 15, 18, 25: Ensure consistency

### Phase 3: Route Pages
Fix page-specific styling:

12. **app/routes/our-work.tsx**
    - Line 61: `bg-white` → `bg-surface-primary`
    - Line 68: `bg-gray-50 border border-gray-200` → `bg-surface-secondary border border-outline`
    - Line 75: `text-gray-800` → `text-content-primary`
    - Line 78: `text-gray-600` → `text-content-secondary`

13. **app/routes/impact-map.tsx**
    - Line 30: `bg-white` → `bg-surface-primary`
    - Line 36: `bg-gray-50` → `bg-surface-secondary`
    - Line 38: `text-gray-800` → `text-content-primary`
    - Line 45: `bg-white border border-gray-200` → `bg-surface-primary border border-outline`
    - Line 49, 53: `text-gray-800`, `text-gray-600` → theme tokens

14. **app/routes/quiz.tsx**
    - Line 272: `bg-gray-100` → `bg-surface-tertiary`
    - Line 281: `bg-white` → `bg-surface-primary`
    - Line 284, 287: `text-gray-400`, `text-gray-800` → theme tokens
    - Lines 300, 303, 315, 336, 345, 348, 361, 373, 376, 380, 385, 391, 403: Replace all gray colors

15. **app/routes/sponsor-a-child.tsx**
    - Line 161, 271: `bg-white` → `bg-surface-primary`
    - Line 186, 309: `bg-gray-50` → `bg-surface-secondary`
    - Lines 163, 175, 178, 188, 191, 204, 210, 215, 223, 227, 234, 273, 276, 283, 290, 293, 299, 311, 335, 337, 338: Replace all gray colors

16. **app/routes/volunteer-experience.tsx**
    - Line 58, 102: `bg-white` → `bg-surface-primary`
    - Line 67: `bg-gray-50` → `bg-surface-secondary`
    - Lines 60, 69, 76, 82, 86, 88, 93, 104, 107, 121: Replace all gray colors

17. **app/routes/updates.$slug.tsx**
    - Line 93: `text-gray-800` → `text-content-primary`
    - Line 132: `bg-white` → `bg-surface-primary`
    - Lines 136, 142, 152: `text-gray-600`, `border-gray-200`, `text-gray-500` → theme tokens

18. **app/routes/contact.tsx**
    - Lines 191, 206, 219, 223, 243: `border-gray-400` → `border-outline-strong`
    - Line 219: `text-gray-700` → `text-content-secondary`

19. **app/routes/volunteers.tsx**
    - Line 30: `text-gray-800` → `text-content-primary`

20. **app/routes/reports.tsx**
    - Lines 59, 70: `text-gray-700` → `text-content-secondary`

### Phase 4: Interactive Components

21. **app/components/impact-map/impact-map.tsx**
    - Line 16: `bg-white border border-gray-200` → `bg-surface-primary border border-outline`
    - Line 84: `text-gray-500` → `text-content-tertiary`

22. **app/components/impact-map/mandal-modal.tsx**
    - Line 35: `bg-white` → `bg-surface-primary`
    - Lines 57, 64, 69, 76, 93, 99, 102, 105: Replace all gray colors

23. **app/components/volunteer-timeline.tsx**
    - Lines 96, 111, 118, 124, 129, 132: Replace all gray colors

24. **app/components/preset-donation-buttons.tsx**
    - Lines 21-22, 36, 51: Replace all gray colors

25. **app/components/fund-breakdown.tsx**
    - Lines 18, 24, 30, 33: Replace all gray colors

26. **app/components/funding-progress.tsx**
    - Lines 33, 35, 43: Replace all gray colors

27. **app/components/before-after-gallery.tsx**
    - Line 129: `hover:text-gray-300` → keep for contrast on black overlay

### Phase 5: Form and UI Components

28. **app/components/donation-calculator.tsx**
    - Audit for any hardcoded gray colors

29. **app/components/page.tsx** (intro banner)
    - Already uses green background, no changes needed

30. **app/components/navbar-sm.tsx**
    - Mobile nav uses green background, no changes needed for text colors there

## Files to Modify (Complete List)

**Components (17 files):**
1. `app/components/hero.tsx`
2. `app/components/cta-section.tsx`
3. `app/components/image.tsx`
4. `app/components/update-card.tsx`
5. `app/components/ui/card.tsx`
6. `app/components/our-story-section.tsx`
7. `app/components/programs-section.tsx`
8. `app/components/testimonials-section.tsx`
9. `app/components/partners-section.tsx`
10. `app/components/updates-preview.tsx`
11. `app/components/impact-banner.tsx`
12. `app/components/impact-map/impact-map.tsx`
13. `app/components/impact-map/mandal-modal.tsx`
14. `app/components/volunteer-timeline.tsx`
15. `app/components/preset-donation-buttons.tsx`
16. `app/components/fund-breakdown.tsx`
17. `app/components/funding-progress.tsx`

**Routes (9 files):**
18. `app/routes/our-work.tsx`
19. `app/routes/impact-map.tsx`
20. `app/routes/quiz.tsx`
21. `app/routes/sponsor-a-child.tsx`
22. `app/routes/volunteer-experience.tsx`
23. `app/routes/updates.$slug.tsx`
24. `app/routes/contact.tsx`
25. `app/routes/volunteers.tsx`
26. `app/routes/reports.tsx`

## Color Mapping Quick Reference

Use this when making changes:

```
bg-white         → bg-surface-primary
bg-gray-50       → bg-surface-secondary
bg-gray-100      → bg-surface-tertiary
bg-gray-200      → bg-surface-tertiary (for progress bars)

text-gray-800    → text-content-primary
text-gray-700    → text-content-primary or text-content-secondary
text-gray-600    → text-content-secondary
text-gray-500    → text-content-tertiary
text-gray-400    → text-content-tertiary

border-gray-100  → border-outline
border-gray-200  → border-outline
border-gray-300  → border-outline-strong
border-gray-400  → border-outline-strong
```

## Testing Checklist

- [ ] Homepage displays correctly in light mode
- [ ] Homepage displays correctly in dark mode
- [ ] All text is readable with proper contrast in both modes
- [ ] Our Work page themed correctly
- [ ] Impact Map page and modal themed correctly
- [ ] Quiz page themed correctly
- [ ] Sponsor a Child page themed correctly
- [ ] Volunteer Experience page themed correctly
- [ ] Update detail pages themed correctly
- [ ] Contact page form styled correctly
- [ ] Reports page themed correctly
- [ ] All cards and borders adapt to theme
- [ ] Interactive components (timeline, calculator) work in both themes
- [ ] Modal overlays display properly
- [ ] Theme toggle switches smoothly between modes
