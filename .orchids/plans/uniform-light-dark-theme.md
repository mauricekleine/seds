# Uniform Light and Dark Theme Implementation

## Requirements

Implement consistent light and dark theming across the entire website:
- Light mode (default): Classic white background with proper text contrast
- Dark mode: Properly contrasted dark backgrounds with light text
- Ensure all components use semantic theme tokens instead of hardcoded colors
- Maintain text readability in both modes with proper contrast ratios

## Current Theme System

### CSS Variables (app.css)
```css
:root {
  --color-bg-primary: 255 255 255;      /* white */
  --color-bg-secondary: 249 250 251;    /* gray-50 */
  --color-bg-tertiary: 243 244 246;     /* gray-100 */
  --color-text-primary: 17 24 39;       /* gray-900 */
  --color-text-secondary: 55 65 81;     /* gray-700 */
  --color-text-tertiary: 107 114 128;   /* gray-500 */
  --color-border: 229 231 235;          /* gray-200 */
  --color-border-strong: 209 213 219;   /* gray-300 */
}

.dark {
  --color-bg-primary: 17 24 39;         /* gray-900 */
  --color-bg-secondary: 31 41 55;       /* gray-800 */
  --color-bg-tertiary: 55 65 81;        /* gray-700 */
  --color-text-primary: 249 250 251;    /* gray-50 */
  --color-text-secondary: 229 231 235;  /* gray-200 */
  --color-text-tertiary: 156 163 175;   /* gray-400 */
  --color-border: 75 85 99;             /* gray-600 */
  --color-border-strong: 107 114 128;   /* gray-500 */
}
```

### Tailwind Semantic Colors (tailwind.config.js)
- `bg-surface-primary` / `bg-surface-secondary` / `bg-surface-tertiary`
- `text-content-primary` / `text-content-secondary` / `text-content-tertiary`
- `border-outline` / `border-outline-strong`

## Color Mapping Reference

| Hardcoded Light Mode | Theme Token | Usage |
|---------------------|-------------|-------|
| `bg-white` | `bg-surface-primary` | Main backgrounds |
| `bg-gray-50` | `bg-surface-secondary` | Alternate sections, cards |
| `bg-gray-100` | `bg-surface-tertiary` | Progress bars, inputs |
| `bg-gray-200` | `bg-surface-tertiary` | Progress bar backgrounds |
| `text-gray-800` | `text-content-primary` | Headings, primary text |
| `text-gray-700` | `text-content-primary` | Important text |
| `text-gray-600` | `text-content-secondary` | Body text |
| `text-gray-500` | `text-content-tertiary` | Muted text, captions |
| `text-gray-400` | `text-content-tertiary` | Very muted text |
| `border-gray-200` | `border-outline` | Standard borders |
| `border-gray-300` | `border-outline-strong` | Emphasized borders |
| `border-gray-400` | `border-outline-strong` | Form inputs |
| `border-gray-100` | `border-outline` | Subtle borders |

## Files to Modify

### Routes (Pages)

#### 1. `app/routes/quiz.tsx`
- Line 272: `bg-gray-100` → `bg-surface-tertiary`
- Line 281: `bg-white` → `bg-surface-primary`
- Line 284: `text-gray-400` → `text-content-tertiary`
- Line 287: `text-gray-800` → `text-content-primary`
- Line 300: `border-gray-200 bg-white` → `border-outline bg-surface-primary`
- Line 303: `text-gray-700` → `text-content-primary`
- Line 315: `text-gray-500 hover:text-gray-700` → `text-content-tertiary hover:text-content-primary`
- Line 336: `bg-white` → `bg-surface-primary`
- Line 345: `text-gray-800` → `text-content-primary`
- Line 348: `text-gray-600` → `text-content-secondary`
- Line 361: `text-gray-800` → `text-content-primary`
- Line 373: `border-gray-200 hover:border-gray-300` → `border-outline hover:border-outline-strong`
- Line 376: `text-gray-400` → `text-content-tertiary`
- Line 380: `text-gray-800` → `text-content-primary`
- Line 385: `bg-gray-100` → `bg-surface-tertiary`
- Line 391: `text-gray-500` → `text-content-tertiary`
- Line 403: `text-gray-500 hover:text-gray-700 border-gray-300` → `text-content-tertiary hover:text-content-primary border-outline`

#### 2. `app/routes/our-work.tsx`
- Line 61: `bg-white` → `bg-surface-primary`
- Line 68: `bg-gray-50 border-gray-200` → `bg-surface-secondary border-outline`
- Line 75: `text-gray-800` → `text-content-primary`
- Line 78: `text-gray-600` → `text-content-secondary`

#### 3. `app/routes/sponsor-a-child.tsx`
- Line 161: `bg-white` → `bg-surface-primary`
- Line 163: `text-gray-800` → `text-content-primary`
- Line 170: `bg-gray-50` → `bg-surface-secondary`
- Line 175: `text-gray-800` → `text-content-primary`
- Line 178: `text-gray-500` → `text-content-tertiary`
- Line 186: `bg-gray-50` → `bg-surface-secondary`
- Line 188: `text-gray-800` → `text-content-primary`
- Line 191: `text-gray-600` → `text-content-secondary`
- Line 204: `border-gray-200 bg-white` → `border-outline bg-surface-primary`
- Line 210: `text-gray-400` → `text-content-tertiary`
- Line 215: `text-gray-800` → `text-content-primary`
- Line 223: `text-gray-500` → `text-content-tertiary`
- Line 227: `text-gray-600` → `text-content-secondary`
- Line 234: `text-gray-600` → `text-content-secondary`
- Line 271: `bg-white` → `bg-surface-primary`
- Line 273: `text-gray-800` → `text-content-primary`
- Line 276: `text-gray-600` → `text-content-secondary`
- Line 283: `bg-gray-50 border-gray-200` → `bg-surface-secondary border-outline`
- Line 290: `text-gray-800` → `text-content-primary`
- Line 293: `text-gray-500` → `text-content-tertiary`
- Line 299: `text-gray-600` → `text-content-secondary`
- Line 309: `bg-gray-50` → `bg-surface-secondary`
- Line 311: `text-gray-800` → `text-content-primary`
- Line 335: `bg-white border-gray-200` → `bg-surface-primary border-outline`
- Line 337: `text-gray-800` → `text-content-primary`
- Line 338: `text-gray-600` → `text-content-secondary`

#### 4. `app/routes/volunteer-experience.tsx`
- Line 58: `bg-white` → `bg-surface-primary`
- Line 60: `text-gray-800` → `text-content-primary`
- Line 67: `bg-gray-50` → `bg-surface-secondary`
- Line 69: `text-gray-800` → `text-content-primary`
- Line 76: `bg-white border-gray-200` → `bg-surface-primary border-outline`
- Line 82: `text-gray-800` → `text-content-primary`
- Line 86-88: `text-gray-500` → `text-content-tertiary`
- Line 93: `text-gray-600` → `text-content-secondary`
- Line 102: `bg-white` → `bg-surface-primary`
- Line 104: `text-gray-800` → `text-content-primary`
- Line 107: `text-gray-600` → `text-content-secondary`
- Line 121: `bg-gray-100 text-gray-800 hover:bg-gray-200` → `bg-surface-tertiary text-content-primary hover:bg-surface-tertiary/80`

#### 5. `app/routes/impact-map.tsx`
- Line 30: `bg-white` → `bg-surface-primary`
- Line 36: `bg-gray-50` → `bg-surface-secondary`
- Line 38: `text-gray-800` → `text-content-primary`
- Line 45: `bg-white border-gray-200` → `bg-surface-primary border-outline`
- Line 49: `text-gray-800` → `text-content-primary`
- Line 53: `text-gray-600` → `text-content-secondary`

#### 6. `app/routes/updates.$slug.tsx`
- Line 93: `text-gray-800` → `text-content-primary`
- Line 132: `bg-white` → `bg-surface-primary`
- Line 136: `text-gray-600` → `text-content-secondary`
- Line 142: `border-gray-200` → `border-outline`
- Line 152: `text-gray-500 hover:text-gray-700` → `text-content-tertiary hover:text-content-primary`

#### 7. `app/routes/contact.tsx`
- Line 191, 206, 223, 243: `border-gray-400` → `border-outline-strong`
- Line 219: `text-gray-700` → `text-content-secondary`

#### 8. `app/routes/reports.tsx`
- Line 59: `text-gray-700` → `text-content-secondary`
- Line 70: `text-gray-700` → `text-content-secondary`

#### 9. `app/routes/volunteers.tsx`
- Line 30: `text-gray-800` → `text-content-primary`

### Components

#### 10. `app/components/cta-section.tsx`
- Line 21: `bg-white` → `bg-surface-primary`
- Line 24: `text-gray-800` → `text-content-primary`
- Line 27: `text-gray-600` → `text-content-secondary`

#### 11. `app/components/hero.tsx`
- Line 15: `bg-gray-100` → `bg-surface-tertiary`
- Line 30: `text-gray-600` → `text-content-secondary`

#### 12. `app/components/volunteer-timeline.tsx`
- Line 96: `bg-white` → `bg-surface-primary`
- Line 111: `text-gray-800` → `text-content-primary`
- Line 118: `bg-gray-50 border-gray-200` → `bg-surface-secondary border-outline`
- Line 124: `text-gray-600` → `text-content-secondary`
- Line 129: `text-gray-700` → `text-content-primary`
- Line 132: `text-gray-500` → `text-content-tertiary`

#### 13. `app/components/preset-donation-buttons.tsx`
- Line 21: `bg-white border-gray-200` → `bg-surface-primary border-outline`
- Line 22: `text-gray-800` → `text-content-primary`
- Line 36: `bg-white text-gray-700 border-gray-200` → `bg-surface-primary text-content-primary border-outline`
- Line 51: `border-gray-200` → `border-outline`

#### 14. `app/components/funding-progress.tsx`
- Line 33: `text-gray-800` → `text-content-primary`
- Line 35: `text-gray-600` → `text-content-secondary`
- Line 43: `bg-gray-200` → `bg-surface-tertiary`

#### 15. `app/components/fund-breakdown.tsx`
- Line 18: `text-gray-800` → `text-content-primary`
- Line 24: `bg-gray-50 border-gray-200` → `bg-surface-secondary border-outline`
- Line 30: `text-gray-800` → `text-content-primary`
- Line 33: `text-gray-600` → `text-content-secondary`

#### 16. `app/components/image.tsx`
- Line 12: `bg-gray-100` → `bg-surface-tertiary`

#### 17. `app/components/ui/card.tsx`
- Line 7: `border-gray-200` → `border-outline`

#### 18. `app/components/impact-map/impact-map.tsx`
- Line 16: `bg-white border-gray-200` → `bg-surface-primary border-outline`
- Line 84: `text-gray-500` → `text-content-tertiary`

#### 19. `app/components/impact-map/mandal-modal.tsx`
- Line 35: `bg-white` → `bg-surface-primary`
- Line 57: `text-gray-800` → `text-content-primary`
- Line 64: `bg-gray-50` → `bg-surface-secondary`
- Line 69: `text-gray-600` → `text-content-secondary`
- Line 76: `text-gray-800` → `text-content-primary`
- Line 93: `text-gray-800` → `text-content-primary`
- Line 99: `bg-gray-50 border-gray-200` → `bg-surface-secondary border-outline`
- Line 102: `text-gray-700` → `text-content-primary`
- Line 105: `text-gray-500` → `text-content-tertiary`

## Implementation Phases

### Phase 1: Core Routes - Quiz and Our Work
- Fix `app/routes/quiz.tsx` - Replace all hardcoded gray colors with theme tokens
- Fix `app/routes/our-work.tsx` - Replace all hardcoded gray colors with theme tokens

### Phase 2: Sponsor and Volunteer Routes
- Fix `app/routes/sponsor-a-child.tsx` - Full theme token conversion
- Fix `app/routes/volunteer-experience.tsx` - Full theme token conversion

### Phase 3: Impact Map and Updates
- Fix `app/routes/impact-map.tsx` - Theme token conversion
- Fix `app/routes/updates.$slug.tsx` - Theme token conversion

### Phase 4: Contact, Reports, Volunteers Routes
- Fix `app/routes/contact.tsx` - Form input borders and text colors
- Fix `app/routes/reports.tsx` - Text colors
- Fix `app/routes/volunteers.tsx` - Text colors

### Phase 5: CTA and Hero Components
- Fix `app/components/cta-section.tsx` - Card backgrounds and text
- Fix `app/components/hero.tsx` - Image placeholder and badge text

### Phase 6: Interactive Components
- Fix `app/components/volunteer-timeline.tsx` - Timeline nodes and expanded content
- Fix `app/components/preset-donation-buttons.tsx` - Button and input styling
- Fix `app/components/funding-progress.tsx` - Labels and progress bar
- Fix `app/components/fund-breakdown.tsx` - Item cards

### Phase 7: Utility Components
- Fix `app/components/image.tsx` - Placeholder background
- Fix `app/components/ui/card.tsx` - Border color

### Phase 8: Impact Map Components
- Fix `app/components/impact-map/impact-map.tsx` - Container and helper text
- Fix `app/components/impact-map/mandal-modal.tsx` - Modal content styling

## Testing Checklist

- [ ] All pages render correctly in light mode (default white theme)
- [ ] All pages render correctly in dark mode
- [ ] Text is readable with proper contrast in both modes
- [ ] Borders are visible in both modes
- [ ] Interactive elements (buttons, inputs) have proper hover states
- [ ] Cards and sections have distinct backgrounds
- [ ] Forms are usable in both themes
- [ ] Theme toggle works correctly and persists preference
- [ ] No hardcoded gray-* colors remain (except intentional accent colors)

## Notes

- Green accent colors (`bg-green-600`, `text-green-600`, etc.) should remain as-is since they are brand colors
- `text-white` on green backgrounds is correct and should not change
- Progress bar fills using `bg-green-600` should remain
- Some overlay colors like `bg-black/60` for modals are intentional
