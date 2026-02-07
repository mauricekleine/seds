# Interactive Engagement Features for SEDS

## Requirements

Transform passive visitors into active supporters by implementing 8 key interactive engagement features plus enhanced program funding pages:

1. **Interactive Impact Map** - Clickable map of Anantapur district (5 mandals: Penukonda, Roddam, Gorantla, Somandepalli, Chilamathur)
2. **Impact Calculator** - Donation slider showing tangible outcomes (₹500-₹50,000)
3. **Virtual Watershed Tour** - Enhanced before/after sliders with timeline context
4. **Volunteer Journey Preview** - Interactive 2-week volunteer timeline
5. **Child Sponsorship Portal** - Individual child profiles with sponsorship capability
6. **Live Project Updates Feed** - "Field notes" blog with weekly updates
7. **Carbon Credit Counter** - Live environmental impact metrics
8. **Program Matching Quiz** - Fun quiz matching visitors to SEDS programs
9. **Program Funding Pages** - Individual funding pages with progress tracking

## Current State Analysis

### Existing Components & Patterns
- **Before/After Slider**: `react-compare-image` library in `compare-image.tsx` - foundation for watershed tour
- **Impact Banner**: `impact-banner.tsx` shows stats (350+ villages, 12,000+ women, 5 mandals)
- **Programs Section**: Card-based layout in `programs-section.tsx`
- **Testimonials Section**: Grid layout with quotes in `testimonials-section.tsx`
- **Page Component**: Reusable wrapper in `page.tsx`
- **Donate Page**: Currently imports non-existent `DonationCalculator` component

### Tech Stack
- **Framework**: Remix 1.10 with React 18
- **Styling**: Tailwind CSS with `@tailwindcss/forms` and `@tailwindcss/typography`
- **Icons**: phosphor-react (extensive use across components)
- **CMS**: Contentful (configured, credentials in .env)
- **Image Handling**: Responsive images with @1x/@2x srcsets

### Design System
```
Container:     container mx-auto lg:max-w-screen-md px-8 lg:px-0
Primary:       green-600 (actions), green-700 (hover)
Cards:         bg-white border border-gray-200 rounded-lg shadow-sm
Headings:      font-display text-2xl md:text-3xl text-gray-800
Body:          text-gray-600 leading-relaxed
Section BG:    Alternating bg-white and bg-gray-50
```

---

## Implementation Phases

### Phase 1: Donation Impact Calculator
**Priority: Critical | Complexity: Low | Estimated: 2 hours**

The donate page already imports this component but it doesn't exist. This is the most immediately needed feature.

#### Files to Create:
1. **`app/components/donation-calculator.tsx`**
   - Range slider: ₹500 - ₹50,000 in ₹500 increments
   - INR formatting with `toLocaleString('en-IN')`
   - Impact tiers with phosphor icons:
     ```
     ₹500    → 🌳 Plant 1 tree (Tree icon)
     ₹2,000  → 📚 1 month child education (GraduationCap icon)
     ₹5,000  → 👩‍🌾 Train 1 woman vocational skills (Handshake icon)
     ₹10,000 → 💧 Contribute to 1 check dam (Drop icon)
     ₹25,000 → 🏫 Sponsor child for 1 year (Student icon)
     ₹50,000 → 🌍 Fund watershed restoration (Globe icon)
     ```
   - CTA button to initiate donation contact

#### Files to Modify:
1. **`app/routes/donate.tsx`** (line 3)
   - Properly import and render DonationCalculator component
   - Add calculator section above bank transfer details

---

### Phase 2: Animated Impact Counters
**Priority: High | Complexity: Low | Estimated: 1.5 hours**

Enhance the existing impact banner with scroll-triggered animations.

#### Files to Create:
1. **`app/components/animated-counter.tsx`**
   - IntersectionObserver for scroll trigger
   - Configurable: target, duration, suffix, prefix
   - Easing function for smooth animation
   - SSR-safe with initial static value

#### Files to Modify:
1. **`app/components/impact-banner.tsx`**
   - Replace static values with AnimatedCounter components
   - Add animation to existing stats (350+, 12,000+, 5, years)

---

### Phase 3: Virtual Watershed Tour Enhancement
**Priority: High | Complexity: Low | Estimated: 2 hours**

Enhance the existing before/after gallery with narrative timeline context.

#### Files to Modify:
1. **`app/components/before-after-gallery.tsx`**
   - Add year labels (leftYear, rightYear) to each comparison
   - Add narrative descriptions
   - Update comparisons data:
     ```typescript
     {
       name: "checkdam",
       caption: "Check dam construction restoring water tables",
       leftYear: "Early 1980s",
       rightYear: "Late 1990s",
       narrative: "Barren terrain transformed into thriving ecosystem"
     }
     ```
   - Add fullscreen toggle option
   - Add keyboard navigation (← →)

2. **`app/components/compare-image.tsx`**
   - Add leftYear/rightYear props
   - Add overlay labels for years
   - Improve accessibility with ARIA labels

---

### Phase 4: Interactive Impact Map
**Priority: High | Complexity: Medium | Estimated: 4-5 hours**

SVG-based clickable map of Anantapur district's 5 mandals.

#### Files to Create:
1. **`app/components/impact-map/impact-map.tsx`**
   - Main map container component
   - SVG rendering of 5 mandal regions
   - Hover effects with mandal name tooltip
   - Click handler to open modal
   - Color coding by activity level

2. **`app/components/impact-map/mandal-modal.tsx`**
   - Full-screen modal overlay
   - Mandal details: villages, programs, stats
   - CompareImage component for before/after
   - Local testimonials
   - Close on click-outside or ESC key

3. **`app/components/impact-map/map-data.ts`**
   - Mandal data structure:
     ```typescript
     type Mandal = {
       id: string;
       name: string;
       villages: number;
       programs: string[];
       stats: { label: string; value: string }[];
       stories: { quote: string; author: string }[];
       svgPath: string; // SVG path data
     };
     ```
   - 5 mandals: Penukonda, Roddam, Gorantla, Somandepalli, Chilamathur
   - Approximate SVG paths for map regions

4. **New route `app/routes/impact-map.tsx`**
   - Full page impact map experience
   - Legend and instructions
   - Meta tags for SEO

---

### Phase 5: Carbon Credit Counter
**Priority: Medium | Complexity: Low | Estimated: 2 hours**

Environmental impact metrics for CDM program.

#### Files to Create:
1. **`app/components/carbon-counter.tsx`**
   - Animated counters using AnimatedCounter:
     - CO2 offset: ~15,000 tonnes
     - Trees planted: 2,500,000+ since 1980
     - Improved cookstoves: 5,000
     - Households benefited: 3,500
   - Eco-themed green gradient background
   - Leaf/Globe icons from phosphor-react
   - Optional: subtle increment animation

#### Files to Modify:
1. **`app/routes/clean-development-mechanism.tsx`**
   - Add CarbonCounter component after intro section
   - Link to environmental impact details

---

### Phase 6: Program Funding Pages
**Priority: High | Complexity: Medium | Estimated: 5 hours**

Transform program pages into funding-enabled pages with progress tracking.

#### Files to Create:
1. **`app/components/funding-progress.tsx`**
   - Animated progress bar (0-100%)
   - Current/Goal amount display
   - Milestone markers
   - "X% funded" badge

2. **`app/components/fund-breakdown.tsx`**
   - Visual breakdown of fund usage
   - Icon + Amount + Description grid
   - Responsive 2-column layout

3. **`app/components/preset-donation-buttons.tsx`**
   - Quick donation amount buttons: ₹500, ₹2,000, ₹5,000, ₹10,000
   - Custom amount input
   - Program-specific donation CTA

#### Files to Modify (pattern for all 4 programs):
1. **`app/routes/education.tsx`**
2. **`app/routes/natural-resource-management.tsx`**
3. **`app/routes/clean-development-mechanism.tsx`**
4. **`app/routes/low-carbon-farming.tsx`**

Each gets:
- FundingProgress with program-specific goal
- FundBreakdown showing fund allocation
- PresetDonationButtons component
- Photo gallery section

---

### Phase 7: Volunteer Journey Preview
**Priority: Medium | Complexity: Medium | Estimated: 3-4 hours**

Interactive timeline of the 2-week volunteer experience.

#### Files to Create:
1. **`app/components/volunteer-timeline.tsx`**
   - Horizontal timeline on desktop, vertical on mobile
   - Clickable milestone nodes:
     - Day 1: Arrival & orientation
     - Day 2-3: Campus tour, team introductions
     - Day 4-6: Field visits to watershed sites
     - Day 7-9: Community interaction, village visits
     - Day 10-12: Program participation
     - Day 13-14: Reflection & departure
   - Expandable details for each milestone
   - Testimonial quotes from past volunteers

2. **`app/routes/volunteer-experience.tsx`** (new route)
   - Full volunteer journey page
   - Detailed timeline component
   - "Apply Now" CTA
   - FAQ accordion

#### Files to Modify:
1. **`app/routes/volunteers.tsx`**
   - Add compact VolunteerTimeline preview
   - Link to full volunteer-experience page

---

### Phase 8: Live Project Updates Feed
**Priority: Medium | Complexity: Medium | Estimated: 4 hours**

"Field Notes" blog showing weekly updates from the field.

#### Contentful Setup Required:
- Content type: "Update"
- Fields: title, slug, date, category, excerpt, body (rich text), images

#### Files to Create:
1. **`app/routes/updates.tsx`**
   - Updates feed with card layout
   - Category filter tabs
   - Pagination
   - Loader fetching from Contentful

2. **`app/routes/updates.$slug.tsx`**
   - Individual update detail page
   - Rich text rendering
   - Image gallery
   - Share buttons
   - Related updates

3. **`app/components/update-card.tsx`**
   - Thumbnail, title, date, category badge
   - Excerpt preview
   - "Read more" link

4. **`app/components/updates-preview.tsx`**
   - Homepage preview (3 latest updates)
   - "View all updates" link

#### Files to Modify:
1. **`app/routes/index.tsx`**
   - Add UpdatesPreview section after testimonials

---

### Phase 9: Child Sponsorship Portal
**Priority: Medium | Complexity: High | Estimated: 6 hours**

Individual child profiles with sponsorship capability.

#### Contentful Setup Required:
- Content type: "SponsoredChild"
- Fields: firstName, age, grade, photo, shortBio, story, dream, needs, monthlyCost, isSponsored

#### Files to Create:
1. **`app/routes/sponsor-a-child.tsx`**
   - Landing page explaining sponsorship
   - Grid of ChildProfileCard components
   - Filter by grade/sponsored status
   - Monthly cost: ₹2,500/month

2. **`app/routes/sponsor-a-child.$childId.tsx`**
   - Full child profile page
   - Detailed story and needs
   - "Sponsor [Name]" CTA
   - Cost breakdown

3. **`app/components/child-profile-card.tsx`**
   - Photo (consent-approved)
   - Name, age, grade
   - Short bio/dream quote
   - "Sponsor" button or "Sponsored" badge

4. **`app/types/child.ts`**
   - TypeScript interfaces
   - Privacy-conscious data structure

---

### Phase 10: Program Matching Quiz
**Priority: Low | Complexity: Medium | Estimated: 3 hours**

Fun, shareable quiz matching visitors to SEDS programs.

#### Files to Create:
1. **`app/routes/quiz.tsx`**
   - Multi-step quiz container
   - 5-7 questions with visual options
   - Progress indicator
   - Results page with program match
   - Social share buttons

2. **`app/components/quiz/quiz-question.tsx`**
   - Question text
   - Visual answer options (icon + text)
   - Selection state styling

3. **`app/components/quiz/quiz-result.tsx`**
   - Matched program highlight
   - "Why this matches you" text
   - CTA: Learn more / Donate / Volunteer
   - Share to WhatsApp, Twitter, Facebook

#### Quiz Logic:
- Questions mapped to program categories
- Score calculation based on answers
- Programs: Education, CDM, Low Carbon Farming, NRM

---

## Implementation Order (Recommended)

| Order | Phase | Feature | Priority | Hours |
|-------|-------|---------|----------|-------|
| 1 | Phase 1 | Donation Calculator | Critical | 2 |
| 2 | Phase 2 | Animated Counters | High | 1.5 |
| 3 | Phase 3 | Watershed Tour Enhancement | High | 2 |
| 4 | Phase 6 | Program Funding Pages | High | 5 |
| 5 | Phase 4 | Interactive Impact Map | High | 4-5 |
| 6 | Phase 5 | Carbon Credit Counter | Medium | 2 |
| 7 | Phase 7 | Volunteer Journey | Medium | 3-4 |
| 8 | Phase 8 | Live Updates Feed | Medium | 4 |
| 9 | Phase 9 | Child Sponsorship | Medium | 6 |
| 10 | Phase 10 | Program Quiz | Low | 3 |

**Total Estimated: 32-38 hours**

---

## File Structure After Implementation

```
app/
├── components/
│   ├── donation-calculator.tsx         (Phase 1)
│   ├── animated-counter.tsx            (Phase 2)
│   ├── funding-progress.tsx            (Phase 6)
│   ├── fund-breakdown.tsx              (Phase 6)
│   ├── preset-donation-buttons.tsx     (Phase 6)
│   ├── carbon-counter.tsx              (Phase 5)
│   ├── volunteer-timeline.tsx          (Phase 7)
│   ├── update-card.tsx                 (Phase 8)
│   ├── updates-preview.tsx             (Phase 8)
│   ├── child-profile-card.tsx          (Phase 9)
│   ├── impact-map/
│   │   ├── impact-map.tsx              (Phase 4)
│   │   ├── mandal-modal.tsx            (Phase 4)
│   │   └── map-data.ts                 (Phase 4)
│   ├── quiz/
│   │   ├── quiz-question.tsx           (Phase 10)
│   │   └── quiz-result.tsx             (Phase 10)
│   ├── before-after-gallery.tsx        (Phase 3 - modified)
│   ├── compare-image.tsx               (Phase 3 - modified)
│   └── impact-banner.tsx               (Phase 2 - modified)
├── routes/
│   ├── donate.tsx                      (Phase 1 - modified)
│   ├── index.tsx                       (Phase 8 - modified)
│   ├── volunteers.tsx                  (Phase 7 - modified)
│   ├── education.tsx                   (Phase 6 - modified)
│   ├── natural-resource-management.tsx (Phase 6 - modified)
│   ├── clean-development-mechanism.tsx (Phase 5,6 - modified)
│   ├── low-carbon-farming.tsx          (Phase 6 - modified)
│   ├── impact-map.tsx                  (Phase 4 - new)
│   ├── volunteer-experience.tsx        (Phase 7 - new)
│   ├── updates.tsx                     (Phase 8 - new)
│   ├── updates.$slug.tsx               (Phase 8 - new)
│   ├── sponsor-a-child.tsx             (Phase 9 - new)
│   ├── sponsor-a-child.$childId.tsx    (Phase 9 - new)
│   └── quiz.tsx                        (Phase 10 - new)
└── types/
    └── child.ts                        (Phase 9 - new)
```

---

## Technical Considerations

### Performance
- Lazy load images in galleries and grids
- Use Remix `defer` for non-critical data
- Optimize SVG map with viewBox and minification
- IntersectionObserver for scroll animations

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation for sliders and modals
- Focus management in quiz flow
- Screen reader announcements for counter animations

### Mobile Responsiveness
- Timeline: horizontal (desktop) → vertical (mobile)
- Map: tap-to-select on touch devices
- Quiz: full-width buttons on mobile
- Cards: single column on mobile

### Data Management
- Static data for initial implementation
- Contentful CMS for updates, child profiles
- Consider local JSON files for map data

---

## Dependencies

### Existing (no changes needed)
- `react-compare-image` - before/after sliders
- `phosphor-react` - icons
- `contentful` - CMS client

### Potential New Dependencies
- None required - all features implementable with existing stack

### External Assets Needed
- Anantapur district SVG map (can be created or sourced)
- Volunteer journey photos
- Child profile photos (with consent)
- Program-specific funding goal data
