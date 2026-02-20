# SEDS Website Homepage Restructure

## Requirements

Transform the SEDS NGO website homepage to follow the recommended page structure from the website audit, implementing a more engaging, story-driven flow with improved navigation and interactive engagement features. The goal is to increase donor/volunteer conversion by creating emotional connection through better visual hierarchy, prominent impact metrics, and streamlined user journeys.

### Target Homepage Flow (Top to Bottom)
1. Hero Section - Emotional image + tagline + "46 Years of Impact" counter
2. Impact Stats Bar - 350 Villages • 12,000+ Women Supported • 5 Mandals
3. Our Story - Brief founder narrative with timeline
4. Programs Grid - Visual cards for each program area
5. Before/After Gallery - Watershed transformation photos
6. Get Involved - Volunteer + Donate side-by-side CTAs
7. Testimonials - Quotes from villagers, volunteers, partners
8. Partners & Recognition - Logos of collaborating organizations
9. Footer - Contact, social links, newsletter signup

### Navigation Simplification
- **Current:** Home | About | Projects (dropdown) | Reports | Contact
- **Proposed:** Home | About | Our Work (single page with sections) | Get Involved | Donate (prominent button)

---

## Current State Analysis

### What Already Exists (Strengths)
- **Hero component** (`app/components/hero.tsx`) - Basic hero with image and tagline
- **ImpactBanner component** (`app/components/impact-banner.tsx`) - Stats bar with 46 years, 350+ villages, 2M+ trees, 50K+ lives
- **ProgramsSection component** (`app/components/programs-section.tsx`) - 4 program cards with links
- **TestimonialsSection component** (`app/components/testimonials-section.tsx`) - 2 testimonials
- **CTASection component** (`app/components/cta-section.tsx`) - Volunteer/Donate CTAs
- **CompareImage component** (`app/components/compare-image.tsx`) - Before/after slider using `react-compare-image`
- **StickyDonateButton component** (`app/components/sticky-donate-button.tsx`) - Fixed donate button
- **seds-years.js** - Auto-calculating years since 1980
- **Before/after images** in `public/before-after/` folder (checkdam, valley, wasteland, shed)

### Gaps to Address
1. **No "Our Story" section** with founder narrative/timeline on homepage
2. **No Before/After Gallery section** on homepage (CompareImage exists but only used on about/project pages)
3. **No Partners & Recognition section** with organization logos
4. **Navigation still uses dropdown** for Projects instead of simplified structure
5. **Impact stats could be enhanced** with "12,000+ Women Supported" and "5 Mandals" metrics
6. **Hero lacks the "46 Years of Impact" counter** directly in the hero area
7. **Testimonials section** only has 2 generic testimonials (could add more diverse voices)
8. **Footer** missing newsletter signup functionality (Contentful/Mailchimp integration exists but unused)

---

## Implementation Phases

### Phase 1: Enhance Hero Section with Impact Counter
**Goal:** Add "46 Years of Impact" counter directly in hero for immediate emotional impact

**Tasks:**
- [ ] Modify `app/components/hero.tsx` to include years counter badge/overlay
- [ ] Add animated counter that uses `data-seds-years` attribute
- [ ] Update hero subtitle to be more emotionally compelling
- [ ] Ensure hero image and text create stronger emotional connection

**Files to modify:**
- `app/components/hero.tsx`

---

### Phase 2: Update Impact Stats Bar
**Goal:** Align stats with audit recommendations (350 Villages, 12,000+ Women, 5 Mandals, 46 Years)

**Tasks:**
- [ ] Update ImpactBanner to show: 46 Years | 350+ Villages | 12,000+ Women | 5 Mandals
- [ ] Add animation for numbers counting up on scroll into view
- [ ] Update icons to better represent each metric (calendar, houses, people, map pin)

**Files to modify:**
- `app/components/impact-banner.tsx`

---

### Phase 3: Add "Our Story" Section
**Goal:** Create brief founder narrative with timeline on homepage

**Tasks:**
- [ ] Create new `app/components/our-story-section.tsx` component
- [ ] Include brief narrative about Rajen Joshua and Manil Jayasena Joshua founding SEDS in 1980
- [ ] Add a simple visual timeline showing key milestones (1980 founding, watershed beginnings, school establishment, etc.)
- [ ] Include link to full About page
- [ ] Add founders image (`rajen-manil.jpg` already exists in public folder)

**Files to create:**
- `app/components/our-story-section.tsx`

**Files to modify:**
- `app/routes/index.tsx` - Add OurStorySection after ImpactBanner

---

### Phase 4: Create Before/After Gallery Section
**Goal:** Showcase watershed transformation on homepage

**Tasks:**
- [ ] Create new `app/components/before-after-gallery.tsx` component
- [ ] Display 2-3 before/after comparisons using existing CompareImage component
- [ ] Use existing images: checkdam, valley, wasteland (already in `public/before-after/`)
- [ ] Add descriptive captions for each transformation
- [ ] Add section header explaining the visual impact

**Files to create:**
- `app/components/before-after-gallery.tsx`

**Files to modify:**
- `app/routes/index.tsx` - Add BeforeAfterGallery after ProgramsSection

---

### Phase 5: Enhance Testimonials Section
**Goal:** Add more diverse voices (villagers, volunteers, partners)

**Tasks:**
- [ ] Add 1-2 more testimonials to create a grid of 4 testimonials
- [ ] Include quotes from: village beneficiary, international volunteer, local partner/government
- [ ] Consider adding testimonial rotation or carousel for mobile

**Files to modify:**
- `app/components/testimonials-section.tsx`

---

### Phase 6: Add Partners & Recognition Section
**Goal:** Display logos of collaborating organizations for social proof

**Tasks:**
- [ ] Create new `app/components/partners-section.tsx` component
- [ ] Display partner organization logos in a responsive grid
- [ ] Note: Will need placeholder styling until actual partner logos are provided
- [ ] Include section explaining partnerships

**Files to create:**
- `app/components/partners-section.tsx`

**Files to modify:**
- `app/routes/index.tsx` - Add PartnersSection before Footer

---

### Phase 7: Simplify Navigation Structure
**Goal:** Implement proposed navigation: Home | About | Our Work | Get Involved | Donate

**Tasks:**
- [ ] Update `app/components/navbar-md.tsx` to remove Projects dropdown
- [ ] Add "Our Work" link that goes to a section or new page combining all programs
- [ ] Add "Get Involved" link pointing to volunteers page
- [ ] Make "Donate" a prominent styled button in the nav
- [ ] Update `app/components/navbar-sm.tsx` mobile navigation similarly
- [ ] Consider keeping projects as a combined "Our Work" page with anchor sections

**Files to modify:**
- `app/components/navbar-md.tsx`
- `app/components/navbar-sm.tsx`
- `app/components/navigation.tsx` - Add Donate button styling

**Optional new file:**
- `app/routes/our-work.tsx` - Combined programs page (if desired over current separate pages)

---

### Phase 8: Enhance Footer with Newsletter Signup
**Goal:** Add newsletter signup form to footer

**Tasks:**
- [ ] Add newsletter signup form section to footer
- [ ] Connect to Mailchimp (env vars exist: MAILCHIMP_API_KEY)
- [ ] Style newsletter input with email field and subscribe button
- [ ] Add success/error states for form submission

**Files to modify:**
- `app/components/footer.tsx`

**Optional new files:**
- `app/routes/api/newsletter.tsx` - API route for Mailchimp subscription

---

### Phase 9: Reorder Homepage Sections
**Goal:** Implement final section order as per audit

**Tasks:**
- [ ] Update `app/routes/index.tsx` to implement exact flow:
  1. Hero (with impact counter)
  2. ImpactBanner
  3. OurStorySection (NEW)
  4. ProgramsSection
  5. BeforeAfterGallery (NEW)
  6. CTASection (Get Involved)
  7. TestimonialsSection
  8. PartnersSection (NEW)
  9. Featured In section (existing, can keep or remove)

**Files to modify:**
- `app/routes/index.tsx`

---

## Technical Considerations

### Existing Patterns to Follow
- Use Tailwind CSS for styling (project uses tailwindcss ~3.2.4)
- Use phosphor-react icons (already installed)
- Follow component structure: functional components with TypeScript props
- Use `font-display` class for headings (Ubuntu font)
- Use `font-sans` for body text (Open Sans)
- Green color palette: green-600, green-700 as primary action colors
- Container width: `container mx-auto lg:max-w-screen-md px-8 lg:px-0`

### Dependencies Already Available
- `react-compare-image` - For before/after sliders
- `phosphor-react` - Icon library
- `@tailwindcss/typography` - Typography plugin
- `classnames` - Conditional class utility
- `@mailchimp/mailchimp_transactional` - Email/newsletter integration
- `contentful` - CMS integration (available but not currently used on homepage)

### Auto-Updating Year
- `seds-years.js` already handles auto-calculation of years since 1980
- Use `data-seds-years` attribute on elements that should display the year count
- Script runs on page load and updates all matching elements

---

## Content Requirements (To Be Provided)
- Partner organization logos (for Partners section)
- Additional testimonials (for enhanced testimonials section)
- Timeline milestones for Our Story section (can use existing content from About page)

---

## Success Metrics
- Clear visual hierarchy guiding users from emotional hook to action
- Prominent display of impact (46 years, 350 villages, etc.)
- Simplified navigation reducing cognitive load
- Before/after visuals demonstrating tangible transformation
- Multiple pathways to donation/volunteering throughout page
