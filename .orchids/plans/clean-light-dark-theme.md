# Clean Light and Dark Theme for Header and Footer

## Requirements

Fix the header and footer which currently have a dark appearance with dark text that doesn't look good. Create clean, visually appealing light and dark themes that:
1. Ensure proper text contrast in both header and footer
2. Make light mode feel clean and professional
3. Make dark mode feel cohesive and readable
4. Fix the current issue where dark backgrounds have dark text (unreadable)

## Current Problems Identified

### Problem 1: Header Navigation Background
**Location:** `app/components/navigation.tsx` (Line 9)
**Current:** `bg-surface-primary` - Uses CSS variable that adapts to theme
**Issue:** The navigation uses `bg-surface-primary` which works, but the header border uses green colors that may clash

### Problem 2: Navbar Link Text Colors
**Location:** `app/components/navbar-link.tsx` (Line 13)
**Current:** `text-white sm:text-gray-600 sm:dark:text-content-secondary`
**Issue:** On small screens, links are white (designed for green mobile nav bar), but on larger screens gray-600 may not have enough contrast against some backgrounds

### Problem 3: Mobile Navigation Bar Dark on Dark
**Location:** `app/components/navbar-sm.tsx` (Line 62)
**Current:** `bg-green-600` for mobile nav bar
**Issue:** The mobile hamburger menu bar is always green-600, which works, but doesn't adapt to dark mode preferences

### Problem 4: Footer Has No Dark Mode Support
**Location:** `app/components/footer.tsx`
**Current issues:**
- Line 19: `bg-green-50` for newsletter - light green doesn't adapt
- Line 20: `text-gray-800` for headings - no dark variant
- Line 23-24: `text-gray-600` - no dark variant
- Line 53: `divide-gray-100` - no dark variant
- Line 128: `bg-green-600 text-white` for copyright - this is fine

### Problem 5: Newsletter Signup Component Issues
**Location:** Within `app/components/footer.tsx` (NewsletterSignup function)
- `bg-green-50 border-green-200` - doesn't adapt to dark mode
- `text-gray-800`, `text-gray-600` - no dark variants
- Form input `border-gray-300`, `bg` defaults to white - doesn't adapt

### Problem 6: Featured In Section (Homepage)
**Location:** `app/routes/index.tsx` (Lines 55-86)
- `bg-gray-50` - no dark mode support
- `text-gray-800`, `text-gray-600` - no dark variants

### Problem 7: Before/After Gallery Section
**Location:** `app/components/before-after-gallery.tsx`
- `bg-gray-50` (Line 68) - no dark mode support
- `bg-white`, `border-gray-200` (Line 84) - no dark variants
- `text-gray-800`, `text-gray-500` - no dark variants

### Problem 8: Donate Page Sections
**Location:** `app/routes/donate.tsx`
- Line 28: `bg-white` - no dark variant
- Various `text-gray-*` without dark variants
- `bg-gray-100`, `bg-gray-50`, `border-gray-200` - no dark variants

## Design Approach

### Color Strategy
Use the existing CSS variable system already in place:
- `bg-surface-primary` for main backgrounds (white in light, gray-900 in dark)
- `bg-surface-secondary` for section backgrounds (gray-50 in light, gray-800 in dark)
- `text-content-primary` for headings (gray-900 in light, gray-50 in dark)
- `text-content-secondary` for body text (gray-700 in light, gray-200 in dark)
- `text-content-tertiary` for muted text (gray-500 in light, gray-400 in dark)
- `border-outline` for borders (gray-200 in light, gray-600 in dark)

### Green Accent Strategy
Keep green-600 as the primary brand color - it works well in both light and dark modes. For green backgrounds:
- In light mode: `bg-green-50` with `text-gray-800`
- In dark mode: `dark:bg-green-900/30` with `dark:text-green-100`

## Implementation Phases

### Phase 1: Fix Footer Component
**File:** `app/components/footer.tsx`

Update the NewsletterSignup component and main footer with dark mode support:

1. NewsletterSignup section (Line 18-19):
   - Change `bg-green-50 border-green-200` to `bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800`
   - Change `text-gray-800` to `text-gray-800 dark:text-green-100`
   - Change `text-gray-600` to `text-gray-600 dark:text-green-200`
   - Update form input: add `dark:bg-surface-secondary dark:border-outline dark:text-content-primary`
   - Update button: already uses green-600/700 which works

2. Main footer container (Line 53):
   - Change `divide-gray-100` to `divide-gray-100 dark:divide-outline`

3. Footer section divs (Line 56-57):
   - Add `bg-surface-primary` to the container div inside footer

4. Headings with MapPin, Phone icons (Lines 60-61, 83, 103, 123):
   - Change `font-display text-lg` to include `text-content-primary`

5. Address and contact text:
   - Add `text-content-secondary` or `text-content-tertiary` as appropriate

6. Facebook icon (Line 111):
   - Keep the blue color as-is (brand color)

### Phase 2: Fix Project Links Component  
**File:** `app/components/project-links.tsx`

Update project links to support dark mode:
- Line 14: Add `text-content-primary dark:text-content-primary hover:text-green-600` to links

### Phase 3: Fix Featured In Section (Homepage)
**File:** `app/routes/index.tsx`

Update the Featured In section (Lines 55-86):
- Line 55: Change `bg-gray-50` to `bg-gray-50 dark:bg-surface-secondary`
- Line 55: Change `border-gray-200` to `border-gray-200 dark:border-outline`
- Line 57: Change `text-gray-800` to `text-gray-800 dark:text-content-primary`
- Line 60: Change `text-gray-600` to `text-gray-600 dark:text-content-secondary`

### Phase 4: Fix Before/After Gallery
**File:** `app/components/before-after-gallery.tsx`

Update colors for dark mode:
- Line 68: Change `bg-gray-50` to `bg-gray-50 dark:bg-surface-secondary`
- Line 71: Change `text-gray-800` to `text-gray-800 dark:text-content-primary`
- Line 74: Change `text-gray-600` to `text-gray-600 dark:text-content-secondary`
- Line 84: Change `bg-white` to `bg-white dark:bg-surface-primary`
- Line 84: Change `border-gray-200` to `border-gray-200 dark:border-outline`
- Line 92: Change `text-gray-800` to `text-gray-800 dark:text-content-primary`
- Line 95: Change `text-gray-500` to `text-gray-500 dark:text-content-tertiary`

### Phase 5: Fix Donate Page
**File:** `app/routes/donate.tsx`

Update colors for dark mode:
- Line 28: Change `bg-white` to `bg-white dark:bg-surface-primary`
- Line 31: Change `text-gray-800` to `text-gray-800 dark:text-content-primary`
- Line 34: Change `text-gray-600` to `text-gray-600 dark:text-content-secondary`
- Line 51: Change `bg-gray-100` to `bg-gray-100 dark:bg-surface-tertiary`
- Line 51: Change `text-gray-800` to `text-gray-800 dark:text-content-primary`
- Line 59: Change `bg-gray-50 border-gray-200` to `bg-gray-50 dark:bg-surface-secondary border-gray-200 dark:border-outline`
- Line 60: Change `text-gray-800` to `text-gray-800 dark:text-content-primary`
- Line 63: Change `text-gray-600` to `text-gray-600 dark:text-content-secondary`
- Line 65-66: Change `text-gray-700` to `text-gray-700 dark:text-content-primary`
- Line 73: Change `text-gray-500` to `text-gray-500 dark:text-content-tertiary`

### Phase 6: Fix Theme Toggle Button Styling
**File:** `app/components/theme-toggle.tsx`

Improve the theme toggle button visibility:
- Line 28: Ensure `hover:bg-surface-tertiary` works in both modes (already uses this)

### Phase 7: Fix Navbar Mobile Colors
**File:** `app/components/navbar-sm.tsx`

The mobile menu uses green-600 which is intentional branding. Keep this but ensure text contrast:
- Line 62: `bg-green-600` - keep as-is (brand color)
- Line 87: `bg-green-600` for slide-out nav - keep as-is
- All text in mobile nav is white, which works

### Phase 8: Verify Navbar Link Desktop Colors
**File:** `app/components/navbar-link.tsx`

Current implementation looks correct:
- Line 13: `text-white sm:text-gray-600 sm:dark:text-content-secondary`
- This means white on mobile (green background), gray-600 on desktop light, content-secondary on desktop dark

Verify this works correctly - may need adjustment to:
- `text-white sm:text-content-primary dark:sm:text-content-secondary`

## Summary of Files to Modify

1. **`app/components/footer.tsx`** - Major updates for dark mode support
2. **`app/components/project-links.tsx`** - Add dark mode text colors
3. **`app/routes/index.tsx`** - Update Featured In section
4. **`app/components/before-after-gallery.tsx`** - Add dark mode support
5. **`app/routes/donate.tsx`** - Add dark mode support
6. **`app/components/navbar-link.tsx`** - Verify/adjust text colors (minor)

## Success Criteria

- [ ] Footer text is readable in both light and dark modes
- [ ] Newsletter signup section adapts to dark mode
- [ ] Project links in footer are visible in dark mode
- [ ] Featured In section on homepage adapts to dark mode
- [ ] Before/After gallery adapts to dark mode
- [ ] Donate page adapts to dark mode
- [ ] No dark text on dark backgrounds anywhere
- [ ] Consistent use of CSS variable-based colors
- [ ] Green brand color remains prominent and consistent
- [ ] Mobile navigation remains green (intentional branding)
- [ ] Theme toggle works smoothly between modes
