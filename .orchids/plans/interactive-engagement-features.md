# Interactive Engagement Features for SEDS

## Requirements

Transform passive visitors into active supporters by implementing comprehensive interactive engagement features across the SEDS website. This includes an Interactive Impact Map, Donation Impact Calculator, Virtual Watershed Tour, Volunteer Journey Preview, Child Sponsorship Portal, Live Project Updates Feed, Carbon Credit Counter, Program Matching Quiz, and individual program funding pages with progress tracking.

## Current State Analysis

### Existing Components & Patterns
- **Before/After Slider**: Already using `react-compare-image` library in `compare-image.tsx` - can be extended for Virtual Watershed Tour
- **Impact Banner**: `impact-banner.tsx` shows stats (350+ villages, 12,000+ women, 5 mandals) - foundation for animated counters
- **Programs Section**: Card-based layout in `programs-section.tsx` - pattern for program funding pages
- **Testimonials Section**: Grid layout with quotes - pattern for volunteer testimonials
- **Page Component**: Reusable page wrapper with hero image and intro text

### Tech Stack
- **Framework**: Remix 1.10 with React 18
- **Styling**: Tailwind CSS with custom colors (green-600 primary, gray-800 text)
- **Icons**: phosphor-react (icon library already in use)
- **CMS**: Contentful (configured but .env empty)
- **Fonts**: Ubuntu (display), Open Sans (body)
- **Utilities**: `calculateSEDSYears()` for dynamic year calculations

### Design System
- Container: `container mx-auto lg:max-w-screen-md px-8 lg:px-0`
- Primary green: `green-600`, `green-700` (hover)
- Cards: `bg-white border border-gray-200 rounded-lg shadow-sm`
- Headings: `font-display text-2xl md:text-3xl text-gray-800`
- Body text: `text-gray-600 leading-relaxed`

## Implementation Plan

### Phase 1: Donation Impact Calculator & Animated Counters
**Priority: High | Complexity: Low | Estimated: 2-3 hours**

Create an interactive donation slider showing tangible outcomes.

#### Files to Create:
1. **`app/components/donation-calculator.tsx`**
   - Range slider input (₹500 - ₹50,000)
   - Impact tiers with icons:
     - ₹500: Plant 1 tree
     - ₹2,000: 1 month child education
     - ₹5,000: Train 1 woman in vocational skills
     - ₹10,000: Contribute to 1 check dam
     - ₹25,000: Sponsor a child for 1 year
     - ₹50,000: Fund watershed restoration project
   - Animated value display with `toLocaleString('en-IN')` for INR formatting
   - CTA button linking to `/donate`

2. **`app/components/animated-counter.tsx`**
   - Intersection Observer for scroll-triggered animation
   - Configurable duration, target value, suffix
   - Reusable across impact banner and other sections

3. **Update `app/routes/donate.tsx`**
   - Add DonationCalculator component above bank details
   - Show impact breakdown based on amount selected

#### Implementation Pattern:
```tsx
// donation-calculator.tsx structure
const impactTiers = [
  { threshold: 500, emoji: "🌳", text: "Plant 1 tree", icon: Tree },
  { threshold: 2000, emoji: "📚", text: "1 month of child education", icon: GraduationCap },
  // ...
];
```

---

### Phase 2: Interactive Impact Map
**Priority: High | Complexity: Medium | Estimated: 4-5 hours**

A clickable SVG map of Anantapur district showing 5 mandals with project details.

#### Files to Create:
1. **`app/components/impact-map/impact-map.tsx`**
   - SVG-based map of Anantapur district
   - 5 clickable mandal regions: Penukonda, Roddam, Gorantla, Somandepalli, Chilamathur
   - Hover states with mandal name tooltip
   - Click opens modal with mandal details

2. **`app/components/impact-map/mandal-modal.tsx`**
   - Modal overlay with mandal information
   - Stats: villages reached, programs active, people impacted
   - Before/after photos (reuse CompareImage component)
   - Local stories/testimonials
   - Close button and click-outside-to-close

3. **`app/components/impact-map/map-data.ts`**
   - TypeScript data structure for mandal information
   - SVG path data for each region
   - Project statistics per mandal

4. **`public/map/anantapur-district.svg`** (asset needed)
   - Simplified vector map with 5 mandal regions
   - Each region as separate path with data attributes

#### Data Structure:
```typescript
type Mandal = {
  id: string;
  name: string;
  villages: number;
  programs: string[];
  stats: { label: string; value: string }[];
  stories: { quote: string; author: string }[];
  images?: { before: string; after: string };
};
```

---

### Phase 3: Virtual Watershed Tour (Before/After Gallery Enhancement)
**Priority: High | Complexity: Low | Estimated: 2 hours**

Enhance existing before/after gallery with timeline context and narrative.

#### Files to Modify:
1. **`app/components/before-after-gallery.tsx`**
   - Add year labels to each comparison (e.g., "1982 → 1998")
   - Add descriptive timeline context
   - Add navigation dots for slideshow mode
   - Optional: Add fullscreen view capability

2. **`app/components/compare-image.tsx`**
   - Add year labels props (leftYear, rightYear)
   - Add keyboard navigation (arrow keys)
   - Improve accessibility with ARIA labels

#### Enhanced Comparisons Data:
```typescript
const comparisons = [
  {
    name: "checkdam",
    caption: "Check dam construction restoring water tables",
    leftYear: "Early 1980s",
    rightYear: "Late 1990s",
    narrative: "From barren terrain to thriving ecosystem",
  },
  // ...
];
```

---

### Phase 4: Volunteer Journey Preview
**Priority: Medium | Complexity: Medium | Estimated: 3-4 hours**

Interactive timeline showing the 2-week volunteer experience.

#### Files to Create:
1. **`app/components/volunteer-timeline.tsx`**
   - Horizontal scrollable timeline on desktop
   - Vertical timeline on mobile
   - Milestone markers with expandable details
   - Day-by-day breakdown:
     - Day 1: Arrival & orientation
     - Day 2-3: Campus tour & team introductions
     - Day 4-6: Field visits to watershed sites
     - Day 7-9: Community interaction & village visits
     - Day 10-12: Program participation
     - Day 13-14: Reflection & departure
   - Photos and testimonials at each milestone

2. **`app/routes/volunteer-experience.tsx`** (new route)
   - Full volunteer journey page
   - Embedded timeline component
   - Application CTA
   - FAQ section

3. **Update `app/routes/volunteers.tsx`**
   - Add VolunteerTimeline component
   - Update page structure with timeline preview

---

### Phase 5: Program Funding Pages
**Priority: High | Complexity: Medium | Estimated: 5-6 hours**

Individual pages for each program with funding goals and progress.

#### Files to Create:
1. **`app/components/funding-progress.tsx`**
   - Progress bar with percentage
   - Current amount / Goal amount display
   - Animated fill on scroll into view
   - Milestone markers on progress bar

2. **`app/components/fund-breakdown.tsx`**
   - Visual breakdown of how funds are used
   - Icon + amount + description format
   - Responsive grid layout

3. **`app/components/donor-wall.tsx`**
   - Grid of recent donor names (anonymous option)
   - Optional: Donation amount tiers with badges
   - "Join X others who supported this project"

4. **Update program routes** (pattern to apply to all):
   - `app/routes/education.tsx`
   - `app/routes/natural-resource-management.tsx`
   - `app/routes/clean-development-mechanism.tsx`
   - `app/routes/low-carbon-farming.tsx`
   
   Each gets:
   - FundingProgress component with program-specific goal
   - FundBreakdown showing use of funds
   - Preset donation amounts (₹500, ₹2,000, ₹5,000, ₹10,000)
   - Photo/video updates section
   - DonorWall component

---

### Phase 6: Carbon Credit Counter
**Priority: Medium | Complexity: Low | Estimated: 2 hours**

Live counter showing environmental impact metrics.

#### Files to Create:
1. **`app/components/carbon-counter.tsx`**
   - Animated counters for:
     - CO2 offset (tonnes)
     - Trees planted (cumulative)
     - Improved cookstoves distributed
     - Households benefited
   - Green/eco-themed design
   - Optional: Real-time increment animation

2. **Update `app/routes/clean-development-mechanism.tsx`**
   - Add CarbonCounter component prominently
   - Link to detailed impact page

#### Counter Data (could be static initially, CMS later):
```typescript
const carbonStats = {
  co2Offset: 15000, // tonnes
  treesPlanted: 2500000, // millions since 1980
  cookstoves: 5000,
  households: 3500,
};
```

---

### Phase 7: Child Sponsorship Portal
**Priority: Medium | Complexity: High | Estimated: 6-8 hours**

Individual child profiles with sponsorship capability.

#### Files to Create:
1. **`app/routes/sponsor-a-child.tsx`**
   - Landing page explaining sponsorship program
   - Grid of child profile cards
   - Filter by grade/age (optional)
   - Monthly sponsorship cost: ₹2,500/month

2. **`app/components/child-profile-card.tsx`**
   - Child photo (with consent)
   - Name, age, grade, interests
   - "Sponsor [Name]" CTA button
   - Dream/aspiration quote

3. **`app/routes/sponsor-a-child.$childId.tsx`** (dynamic route)
   - Full child profile page
   - Detailed story
   - How sponsorship helps
   - Monthly cost breakdown
   - Sponsorship form/CTA

4. **`app/types/child.ts`**
   - TypeScript interface for child profiles
   - Privacy considerations built-in

#### Data Structure:
```typescript
type ChildProfile = {
  id: string;
  firstName: string;
  age: number;
  grade: string;
  photo: string;
  shortBio: string;
  story: string;
  dream: string;
  needs: string[];
  sponsorshipCost: number;
  isSponsored: boolean;
};
```

**Note**: This requires careful handling of children's data and consent. Consider using Contentful CMS for managing profiles with proper access control.

---

### Phase 8: Live Project Updates Feed
**Priority: Medium | Complexity: Medium | Estimated: 4-5 hours**

"Field Notes" blog/feed showing weekly updates.

#### Files to Create:
1. **`app/routes/updates.tsx`**
   - Main updates feed page
   - Card-based layout for updates
   - Filter by program/category
   - Pagination or infinite scroll

2. **`app/routes/updates.$slug.tsx`** (dynamic route)
   - Individual update detail page
   - Full content with images
   - Share buttons
   - Related updates

3. **`app/components/update-card.tsx`**
   - Thumbnail image
   - Title, date, category badge
   - Short excerpt
   - Read more link

4. **`app/components/updates-preview.tsx`**
   - Compact version for homepage
   - Shows 3 latest updates
   - "View all updates" link

#### Contentful Integration:
- Create "Update" content type in Contentful
- Fields: title, slug, date, category, excerpt, body, images
- Fetch via Contentful client in loader

---

### Phase 9: Program Matching Quiz
**Priority: Low | Complexity: Medium | Estimated: 3-4 hours**

Fun, shareable quiz to match visitors with SEDS programs.

#### Files to Create:
1. **`app/routes/quiz.tsx`**
   - Multi-step quiz interface
   - 5-7 questions about interests/values
   - Progress indicator
   - Results page with matched program
   - Share result buttons (WhatsApp, Twitter, Facebook)

2. **`app/components/quiz/quiz-container.tsx`**
   - State management for quiz flow
   - Question navigation
   - Score calculation

3. **`app/components/quiz/quiz-question.tsx`**
   - Question text
   - Multiple choice options
   - Visual answer selection

4. **`app/components/quiz/quiz-result.tsx`**
   - Matched program highlight
   - "Why this matches you" explanation
   - CTA to learn more/donate/volunteer
   - Social share buttons

#### Quiz Questions (examples):
1. "What environmental issue concerns you most?" → Water/Trees/Climate/All
2. "How do you prefer to help?" → Donate/Volunteer/Spread awareness
3. "Which cause resonates with you?" → Education/Women/Environment/Health
4. "What's your connection to rural India?" → Heritage/Interest/Professional

---

## Implementation Phases Summary

| Phase | Feature | Priority | Complexity | Est. Hours |
|-------|---------|----------|------------|------------|
| 1 | Donation Calculator & Counters | High | Low | 2-3 |
| 2 | Interactive Impact Map | High | Medium | 4-5 |
| 3 | Virtual Watershed Tour | High | Low | 2 |
| 4 | Volunteer Journey Preview | Medium | Medium | 3-4 |
| 5 | Program Funding Pages | High | Medium | 5-6 |
| 6 | Carbon Credit Counter | Medium | Low | 2 |
| 7 | Child Sponsorship Portal | Medium | High | 6-8 |
| 8 | Live Project Updates | Medium | Medium | 4-5 |
| 9 | Program Matching Quiz | Low | Medium | 3-4 |

**Total Estimated: 32-41 hours**

---

## Dependencies & Considerations

### External Dependencies
- **Contentful CMS**: Need to configure space for updates, child profiles
- **SVG Map Asset**: Need Anantapur district map vector file
- **Additional Images**: Before/after photos with year metadata

### Technical Considerations
1. **Progressive Enhancement**: Ensure features work without JavaScript where possible
2. **Mobile-First**: All components must be responsive
3. **Performance**: Lazy load images, optimize SVG map
4. **Accessibility**: ARIA labels, keyboard navigation, screen reader support
5. **SEO**: Proper meta tags for new routes

### Recommended Implementation Order
1. **Phase 1**: Donation Calculator (immediate donation impact)
2. **Phase 3**: Virtual Watershed Tour (enhances existing component)
3. **Phase 5**: Program Funding Pages (enables targeted giving)
4. **Phase 2**: Interactive Impact Map (geographic visualization)
5. **Phase 6**: Carbon Credit Counter (CDM program highlight)
6. **Phase 4**: Volunteer Journey (volunteer recruitment)
7. **Phase 8**: Live Updates (ongoing engagement)
8. **Phase 7**: Child Sponsorship (requires data collection)
9. **Phase 9**: Quiz (engagement/shareability)

---

## File Structure After Implementation

```
app/
├── components/
│   ├── donation-calculator.tsx (new)
│   ├── animated-counter.tsx (new)
│   ├── funding-progress.tsx (new)
│   ├── fund-breakdown.tsx (new)
│   ├── donor-wall.tsx (new)
│   ├── carbon-counter.tsx (new)
│   ├── update-card.tsx (new)
│   ├── updates-preview.tsx (new)
│   ├── child-profile-card.tsx (new)
│   ├── volunteer-timeline.tsx (new)
│   ├── impact-map/
│   │   ├── impact-map.tsx (new)
│   │   ├── mandal-modal.tsx (new)
│   │   └── map-data.ts (new)
│   ├── quiz/
│   │   ├── quiz-container.tsx (new)
│   │   ├── quiz-question.tsx (new)
│   │   └── quiz-result.tsx (new)
│   ├── before-after-gallery.tsx (modified)
│   └── compare-image.tsx (modified)
├── routes/
│   ├── donate.tsx (modified)
│   ├── volunteers.tsx (modified)
│   ├── education.tsx (modified)
│   ├── natural-resource-management.tsx (modified)
│   ├── clean-development-mechanism.tsx (modified)
│   ├── low-carbon-farming.tsx (modified)
│   ├── sponsor-a-child.tsx (new)
│   ├── sponsor-a-child.$childId.tsx (new)
│   ├── updates.tsx (new)
│   ├── updates.$slug.tsx (new)
│   ├── volunteer-experience.tsx (new)
│   └── quiz.tsx (new)
├── types/
│   └── child.ts (new)
└── utils/
    └── seds-years.ts (existing)
```

---

## Critical Implementation Notes

1. **Reuse Existing Patterns**: Follow the card component pattern from `programs-section.tsx` and `testimonials-section.tsx`
2. **Consistent Styling**: Use existing Tailwind classes: `font-display`, `text-green-600`, container widths
3. **Icon Library**: Use phosphor-react icons consistently (already imported)
4. **Mobile Breakpoints**: `sm:`, `md:`, `lg:` following existing patterns
5. **Green Color Palette**: Primary actions use `green-600`, hover `green-700`
