# Dark Mode / Light Mode with Uniform Contrast

## Requirements

Implement a dark mode and light mode option with uniform text contrast throughout the SEDS website to improve text legibility. The design should:
1. Stick with the same overall design/branding
2. Fix text contrast issues making text illegible
3. Create uniform contrast across all components
4. Allow users to toggle between light and dark modes

## Current Contrast Issues Identified

### Issue 1: Navigation Links Contrast
**Location:** `app/components/navbar-link.tsx` (Line 13)
**Problem:** Navigation links use `text-white sm:text-gray-600` which creates:
- White text on mobile (on green-600 background - good contrast)
- Gray-600 text on desktop (on white/transparent background - potentially low contrast)

### Issue 2: Footer Text Contrast
**Location:** `app/components/footer.tsx`
**Problem:** Various gray shades used inconsistently:
- `text-gray-800` for headings (good)
- `text-gray-600` for body text (borderline)
- Some sections have no explicit text color, inheriting black

### Issue 3: Project Links in Footer
**Location:** `app/components/project-links.tsx`
**Problem:** Links have no explicit text color - inherits from parent which may not have sufficient contrast.

### Issue 4: Inconsistent Gray Scale Usage
**Throughout codebase:** Multiple different gray shades are used inconsistently:
- `text-gray-500` (too light for body text)
- `text-gray-600` (borderline for small text)
- `text-gray-700` (good for body text)
- `text-gray-800` (good for headings)

## Design Decision: CSS Variables Approach

Use CSS custom properties (variables) for theming to ensure uniform contrast and easy dark mode implementation. This aligns with Tailwind's recommended approach and the existing `darkMode: "class"` config.

## Implementation Phases

### Phase 1: Define CSS Theme Variables
Add CSS custom properties for consistent colors in both light and dark modes.

**File to modify:** `app/app.css` (add at the beginning after Tailwind imports)

**Add the following CSS variables:**
```css
:root {
  /* Light mode colors */
  --color-bg-primary: 255 255 255;        /* white */
  --color-bg-secondary: 249 250 251;      /* gray-50 */
  --color-bg-tertiary: 243 244 246;       /* gray-100 */
  
  --color-text-primary: 17 24 39;          /* gray-900 - high contrast for headings */
  --color-text-secondary: 55 65 81;        /* gray-700 - good contrast for body */
  --color-text-tertiary: 107 114 128;      /* gray-500 - for muted/caption text */
  
  --color-border: 229 231 235;             /* gray-200 */
  --color-border-strong: 209 213 219;      /* gray-300 */
}

.dark {
  /* Dark mode colors */
  --color-bg-primary: 17 24 39;            /* gray-900 */
  --color-bg-secondary: 31 41 55;          /* gray-800 */
  --color-bg-tertiary: 55 65 81;           /* gray-700 */
  
  --color-text-primary: 249 250 251;       /* gray-50 - high contrast for headings */
  --color-text-secondary: 229 231 235;     /* gray-200 - good contrast for body */
  --color-text-tertiary: 156 163 175;      /* gray-400 - for muted/caption text */
  
  --color-border: 75 85 99;                /* gray-600 */
  --color-border-strong: 107 114 128;      /* gray-500 */
}
```

### Phase 2: Extend Tailwind Configuration
Update tailwind.config.js to use the CSS variables.

**File to modify:** `tailwind.config.js`

**Changes:**
```js
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        action: "#1D6DC2",
        dark: "#4A4A4A",
        descriptive: "#16A34A",
        // Theme-aware colors
        surface: {
          primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--color-bg-tertiary) / <alpha-value>)",
        },
        content: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--color-text-tertiary) / <alpha-value>)",
        },
        outline: {
          DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
          strong: "rgb(var(--color-border-strong) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Ubuntu", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
};
```

### Phase 3: Create Theme Toggle Component
Create a new component to toggle between light and dark modes.

**File to create:** `app/components/theme-toggle.tsx`

**Component features:**
- Sun/Moon icons for visual indication
- Persists preference to localStorage
- Respects system preference by default
- Adds/removes "dark" class on `<html>` element

### Phase 4: Update Root Layout
Add theme initialization and toggle to the root layout.

**File to modify:** `app/root.tsx`

**Changes:**
- Add theme toggle component to navigation
- Add script to prevent flash of incorrect theme on load
- Apply `bg-surface-primary text-content-primary` to body

### Phase 5: Update Navigation Component
Fix contrast issues in navigation links.

**File to modify:** `app/components/navbar-link.tsx`

**Changes:**
- Replace `text-white sm:text-gray-600` with `text-white sm:text-content-primary`
- Ensure consistent hover states

**File to modify:** `app/components/navigation.tsx`

**Changes:**
- Add dark mode background support: `dark:bg-surface-primary`
- Ensure border color adapts: `border-b-green-600 dark:border-b-green-500`

### Phase 6: Update Footer Component
Standardize text colors in footer.

**File to modify:** `app/components/footer.tsx`

**Changes:**
- Replace `text-gray-800` with `text-content-primary`
- Replace `text-gray-600` with `text-content-secondary`
- Add dark mode background: `dark:bg-surface-secondary`

### Phase 7: Update Key Components for Dark Mode
Update remaining components to use theme-aware colors.

**Files to modify:**
1. `app/components/project-links.tsx` - Add `text-content-primary`
2. `app/components/hero.tsx` - Already white text on images (OK)
3. `app/components/impact-banner.tsx` - Update gray colors
4. `app/components/programs-section.tsx` - Update gray colors
5. `app/components/testimonials-section.tsx` - Update gray colors
6. `app/components/our-story-section.tsx` - Update gray colors
7. `app/components/cta-section.tsx` - Update gray colors
8. `app/components/update-card.tsx` - Update gray colors
9. `app/components/updates-preview.tsx` - Update gray colors

### Phase 8: Update Page Routes
Apply dark mode support to route pages.

**Files to modify:**
- `app/routes/index.tsx` - Featured In section
- `app/routes/donate.tsx` - Card backgrounds
- `app/routes/volunteers.tsx` - Text colors
- `app/routes/our-work.tsx` - Card styling
- `app/routes/updates.tsx` - Filter buttons
- `app/routes/contact.tsx` - Form styling

## Technical Details

### Theme Toggle Implementation

```tsx
// app/components/theme-toggle.tsx
import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage and system preference on mount
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggle = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    document.documentElement.classList.toggle("dark", newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
}

export default ThemeToggle;
```

### Flash Prevention Script
Add to `app/root.tsx` head to prevent flash of wrong theme:

```tsx
<script dangerouslySetInnerHTML={{
  __html: `
    (function() {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (stored === 'dark' || (!stored && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    })();
  `
}} />
```

### Color Mapping Reference

| Current Class | Light Mode Replacement | Dark Mode Equivalent |
|--------------|----------------------|---------------------|
| `text-gray-800` | `text-content-primary` | Auto via CSS vars |
| `text-gray-700` | `text-content-secondary` | Auto via CSS vars |
| `text-gray-600` | `text-content-secondary` | Auto via CSS vars |
| `text-gray-500` | `text-content-tertiary` | Auto via CSS vars |
| `bg-white` | `bg-surface-primary` | Auto via CSS vars |
| `bg-gray-50` | `bg-surface-secondary` | Auto via CSS vars |
| `bg-gray-100` | `bg-surface-tertiary` | Auto via CSS vars |
| `border-gray-200` | `border-outline` | Auto via CSS vars |

## Files Requiring Changes

### New Files
1. `app/components/theme-toggle.tsx` - Theme toggle button component

### Modified Files (Priority Order)
1. `app/app.css` - Add CSS variables for theming
2. `tailwind.config.js` - Extend with theme colors
3. `app/root.tsx` - Add theme toggle and flash prevention
4. `app/components/navigation.tsx` - Add dark mode support
5. `app/components/navbar-link.tsx` - Fix contrast
6. `app/components/navbar-md.tsx` - Add theme toggle
7. `app/components/footer.tsx` - Standardize colors
8. `app/components/project-links.tsx` - Add text color
9. `app/components/impact-banner.tsx` - Update colors
10. `app/components/programs-section.tsx` - Update colors
11. `app/components/testimonials-section.tsx` - Update colors
12. `app/components/our-story-section.tsx` - Update colors
13. `app/components/update-card.tsx` - Update colors
14. `app/components/updates-preview.tsx` - Update colors
15. `app/routes/index.tsx` - Update Featured In section

## Success Criteria

- [ ] Theme toggle button visible in navigation
- [ ] Dark mode activates when toggle is clicked
- [ ] Theme preference persists across page reloads
- [ ] System preference is respected on first visit
- [ ] No flash of incorrect theme on page load
- [ ] All text meets WCAG AA contrast requirements (4.5:1 for normal text)
- [ ] Navigation links are legible in both modes
- [ ] Footer text is legible in both modes
- [ ] All gray text has been standardized to use theme variables
- [ ] Green brand color (green-600) remains consistent
- [ ] Images and media remain unaffected

## WCAG Contrast Requirements
- **Normal text (< 18px):** 4.5:1 minimum contrast ratio
- **Large text (>= 18px bold or >= 24px):** 3:1 minimum contrast ratio
- **Current issue:** `text-gray-600` on white = 4.47:1 (just below AA)
- **Solution:** Use `text-gray-700` (5.63:1) as minimum for body text
