# Field Notes Dates Removal and Header/Footer Color Consistency

## Requirements

Remove the dates displayed in the Field Notes section and fix the header and footer color inconsistencies to ensure uniform styling with the rest of the website in both light and dark modes.

## Current Issues

### 1. Field Notes Dates
- The `UpdateCard` component displays dates with a calendar icon next to each update
- Dates appear in format like "Jan 28, 2026" with a CalendarBlank icon
- Located in `app/components/update-card.tsx` lines 40-43

### 2. Header Color Issues
- The navigation header in `app/components/navigation.tsx` uses:
  - `bg-surface-primary` for background (correctly uses theme variables)
  - `border-b-green-600 dark:border-b-green-800` for bottom border (acceptable)
- The navbar links in `app/components/navbar-link.tsx` use:
  - `text-white sm:text-gray-600 sm:dark:text-content-secondary` - the `text-white` for mobile and `text-gray-600` for desktop light mode are hardcoded
  - Should use consistent theme variables: `text-content-primary` or `text-content-secondary`

### 3. Footer Color Issues
- The footer in `app/components/footer.tsx` is correctly using semantic colors (`text-content-primary`, `text-content-secondary`, `border-outline`)
- The "Featured In" section in `app/routes/index.tsx` uses:
  - `bg-surface-secondary border-t border-outline` - correctly themed
  - Text uses `text-content-primary`, `text-content-secondary` - correctly themed
- The updates page in `app/routes/updates.tsx` uses hardcoded colors:
  - `bg-white` instead of `bg-surface-primary` (line 86)
  - `text-gray-600` and `text-gray-500` instead of themed colors

### Theme System Reference
From `app.css`, the theme variables are:
- Light mode: `--color-bg-primary: 255 255 255` (white), `--color-text-primary: 17 24 39` (dark gray)
- Dark mode: `--color-bg-primary: 17 24 39` (dark gray), `--color-text-primary: 249 250 251` (light gray)

## Implementation Phases

### Phase 1: Remove dates from Field Notes update cards
- File: `app/components/update-card.tsx`
- Remove the date span element (lines 40-43) that displays the CalendarBlank icon and date
- Remove the CalendarBlank import since it will no longer be used

### Phase 2: Fix navbar link colors for consistency
- File: `app/components/navbar-link.tsx`
- Change link color from `text-white sm:text-gray-600 sm:dark:text-content-secondary` to `text-content-primary sm:text-content-secondary` for proper theme support in both modes

### Phase 3: Fix updates page background color
- File: `app/routes/updates.tsx`
- Change `bg-white` to `bg-surface-primary` for the main section
- Change `text-gray-600` to `text-content-secondary` 
- Change `text-gray-500` to `text-content-tertiary`
- Change `border-gray-200` to `border-outline`
- Ensure dark mode classes are consistent

## Files to Modify

1. `app/components/update-card.tsx` - Remove date display
2. `app/components/navbar-link.tsx` - Fix navbar link colors
3. `app/routes/updates.tsx` - Fix background and text colors for dark mode

## Testing Checklist

- [ ] Field Notes cards no longer show dates
- [ ] Header navigation links are readable in light mode
- [ ] Header navigation links are readable in dark mode
- [ ] Updates page background matches rest of site in light mode
- [ ] Updates page background matches rest of site in dark mode
- [ ] All text colors transition smoothly when switching themes
