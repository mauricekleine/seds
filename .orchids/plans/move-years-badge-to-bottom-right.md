# Move "Years of Impact" Badge to Bottom Right

## Requirements

Reposition the "46 Years of Impact" badge from the top-right corner of the hero section to the bottom-right corner, aligning it with the "Towards a Greener Tomorrow" heading and the description text about empowering rural communities.

## Current State

The hero component (`app/components/hero.tsx`) currently has:
- The "Years of Impact" badge positioned at `top-4 right-4` (top-right corner)
- The heading "Towards a Greener Tomorrow" and description at the bottom-left
- This causes the badge to cover the boy's face in the hero image

## Proposed Solution

Move the badge to the bottom-right corner so it sits at the same level as the text content on the left, creating a balanced layout and avoiding covering the boy's face in the image.

### Layout Change

**Current structure:**
```
┌────────────────────────────────┐
│                    [46 Years]  │  ← top-right
│                                │
│  Towards a Greener Tomorrow    │
│  Empowering rural...           │  ← bottom-left
└────────────────────────────────┘
```

**New structure:**
```
┌────────────────────────────────┐
│                                │
│                                │
│  Towards a Greener Tomorrow    │  [46 Years]  ← bottom-right
│  Empowering rural...           │
└────────────────────────────────┘
```

## Implementation Phases

### Phase 1: Reposition the badge container
- Change the badge wrapper from `top-4 right-4 md:top-6 md:right-6` to `bottom-6 right-4 md:bottom-10 md:right-6`
- This positions the badge at the bottom-right, aligned with the bottom text section

### Phase 2: Adjust vertical alignment
- Ensure the badge aligns vertically with the "Towards a Greener Tomorrow" heading
- The bottom padding values (`bottom-6` and `md:bottom-10`) match the text section's padding (`p-6` and `md:p-10`)

## Code Changes

In `app/components/hero.tsx`, line 22:

**Before:**
```tsx
<div className="absolute top-4 right-4 md:top-6 md:right-6">
```

**After:**
```tsx
<div className="absolute bottom-6 right-4 md:bottom-10 md:right-6">
```

## Testing

- Verify the badge displays in the bottom-right corner on desktop
- Verify responsive behavior on mobile (smaller bottom/right values)
- Ensure the badge doesn't overlap with the left-side text content
- Confirm the boy's face in the hero image is no longer obscured
