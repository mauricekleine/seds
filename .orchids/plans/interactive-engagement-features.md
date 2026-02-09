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

---

## Implementation Progress

| Phase | Feature | Status | Notes |
|-------|---------|--------|-------|
| Phase 1 | Donation Calculator | ✅ COMPLETE | `donation-calculator.tsx` created |
| Phase 2 | Animated Counters | ✅ COMPLETE | `animated-counter.tsx` created |
| Phase 3 | Watershed Tour Enhancement | ✅ COMPLETE | `before-after-gallery.tsx` enhanced |
| Phase 4 | Interactive Impact Map | ✅ COMPLETE | `impact-map/` components and route |
| Phase 5 | Carbon Credit Counter | ✅ COMPLETE | `carbon-counter.tsx` in CDM page |
| Phase 6 | Program Funding Pages | ✅ COMPLETE | All 4 program pages updated |
| Phase 7 | Volunteer Journey Preview | ✅ COMPLETE | `volunteer-timeline.tsx`, route created |
| Phase 8 | Live Updates Feed | ✅ COMPLETE | `updates.tsx`, `updates.$slug.tsx` |
| Phase 9 | Child Sponsorship Portal | ⏳ PENDING | Next to implement |
| Phase 10 | Program Matching Quiz | ⏳ PENDING | Final phase |

**Progress: 8 of 10 phases complete**

---

## Remaining Implementation

### Phase 9: Child Sponsorship Portal
**Priority: Medium | Complexity: Medium | Estimated: 4-5 hours**

Individual child profiles with sponsorship capability. Using static data approach (no Contentful dependency) for initial implementation.

#### Files to Create:

1. **`app/types/child.ts`**
   - TypeScript interfaces for child data
   - Privacy-conscious structure

   ```typescript
   export type Child = {
     id: string;
     firstName: string;
     age: number;
     grade: string;
     photo: string;
     shortBio: string;
     dream: string;
     isSponsored: boolean;
   };

   export type ChildDetail = Child & {
     story: string[];
     needs: string[];
     monthlyCost: number;
   };
   ```

2. **`app/components/child-profile-card.tsx`**
   - Card component for child grid display
   - Photo placeholder (silhouette for privacy)
   - Name, age, grade
   - Short bio/dream quote
   - "Sponsor" button or "Sponsored" badge

   ```typescript
   import { Link } from "@remix-run/react";
   import { Heart, CheckCircle } from "phosphor-react";
   import type { Child } from "~/types/child";

   type Props = {
     child: Child;
   };

   export default function ChildProfileCard({ child }: Props) {
     return (
       <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
         {/* Photo placeholder with colored background */}
         <div className="h-40 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
           <div className="w-20 h-20 rounded-full bg-green-300/50 flex items-center justify-center">
             <span className="text-3xl font-display text-green-700">
               {child.firstName.charAt(0)}
             </span>
           </div>
         </div>
         <div className="p-4">
           <h3 className="font-display text-lg text-gray-800 m-0">
             {child.firstName}
           </h3>
           <p className="text-sm text-gray-500 m-0 mb-2">
             Age {child.age} • {child.grade}
           </p>
           <p className="text-sm text-gray-600 m-0 mb-3 line-clamp-2">
             "{child.dream}"
           </p>
           {child.isSponsored ? (
             <span className="inline-flex items-center gap-1 text-sm text-green-600 font-medium">
               <CheckCircle className="w-4 h-4" />
               Sponsored
             </span>
           ) : (
             <Link
               to={`/sponsor-a-child/${child.id}`}
               className="inline-flex items-center gap-1.5 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors no-underline"
             >
               <Heart className="w-4 h-4" />
               Sponsor {child.firstName}
             </Link>
           )}
         </div>
       </div>
     );
   }
   ```

3. **`app/routes/sponsor-a-child.tsx`**
   - Landing page explaining sponsorship program
   - Grid of ChildProfileCard components
   - Filter tabs: All / Available / Sponsored
   - Monthly cost info: ₹2,500/month

   ```typescript
   import type { MetaFunction } from "@remix-run/node";
   import { useState } from "react";
   import { GraduationCap, Heart, Users } from "phosphor-react";
   import ChildProfileCard from "~/components/child-profile-card";
   import type { Child } from "~/types/child";

   export const meta: MetaFunction = () => ({
     title: "Sponsor a Child - SEDS",
     description:
       "Support a child's education at SEDS school. Your monthly sponsorship covers tuition, books, uniforms, and meals.",
   });

   // Static data - can later be moved to Contentful
   const children: Child[] = [
     {
       id: "lakshmi",
       firstName: "Lakshmi",
       age: 9,
       grade: "Class 4",
       photo: "",
       shortBio: "Loves mathematics and dreams of becoming a teacher",
       dream: "I want to teach other children in my village",
       isSponsored: false,
     },
     {
       id: "raju",
       firstName: "Raju",
       age: 11,
       grade: "Class 6",
       photo: "",
       shortBio: "Passionate about science and nature",
       dream: "I want to help farmers grow better crops",
       isSponsored: true,
     },
     {
       id: "anitha",
       firstName: "Anitha",
       age: 8,
       grade: "Class 3",
       photo: "",
       shortBio: "Creative artist who loves drawing plants and animals",
       dream: "I want to paint pictures of our beautiful hills",
       isSponsored: false,
     },
     {
       id: "venkat",
       firstName: "Venkat",
       age: 12,
       grade: "Class 7",
       photo: "",
       shortBio: "Aspiring engineer fascinated by how things work",
       dream: "I want to build machines that help villages",
       isSponsored: false,
     },
     {
       id: "priya",
       firstName: "Priya",
       age: 10,
       grade: "Class 5",
       photo: "",
       shortBio: "Excellent in languages, loves reading stories",
       dream: "I want to write books about village life",
       isSponsored: true,
     },
     {
       id: "kumar",
       firstName: "Kumar",
       age: 13,
       grade: "Class 8",
       photo: "",
       shortBio: "Star athlete and team leader",
       dream: "I want to become a sports coach",
       isSponsored: false,
     },
   ];

   export default function SponsorAChild() {
     const [filter, setFilter] = useState<"all" | "available" | "sponsored">("all");

     const filtered = children.filter((c) => {
       if (filter === "available") return !c.isSponsored;
       if (filter === "sponsored") return c.isSponsored;
       return true;
     });

     const availableCount = children.filter((c) => !c.isSponsored).length;

     return (
       <div className="not-prose">
         <section className="bg-green-600 py-12">
           <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
             <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
               Sponsor a Child
             </h1>
             <p className="text-green-100 max-w-2xl mx-auto m-0">
               Give the gift of education. Your sponsorship helps a child from rural
               Andhra Pradesh receive quality schooling, meals, and a brighter future.
             </p>
           </div>
         </section>

         <section className="py-12 bg-white">
           <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
             {/* Impact summary */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
               <div className="bg-gray-50 rounded-lg p-4 text-center">
                 <GraduationCap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                 <p className="text-2xl font-display text-gray-800 m-0">₹2,500</p>
                 <p className="text-sm text-gray-600 m-0">per month</p>
               </div>
               <div className="bg-gray-50 rounded-lg p-4 text-center">
                 <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                 <p className="text-2xl font-display text-gray-800 m-0">
                   {availableCount}
                 </p>
                 <p className="text-sm text-gray-600 m-0">children awaiting sponsors</p>
               </div>
               <div className="bg-gray-50 rounded-lg p-4 text-center">
                 <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                 <p className="text-2xl font-display text-gray-800 m-0">600+</p>
                 <p className="text-sm text-gray-600 m-0">lives transformed</p>
               </div>
             </div>

             {/* What sponsorship covers */}
             <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-10">
               <h2 className="font-display text-xl text-gray-800 mb-4 m-0">
                 What Your Sponsorship Covers
               </h2>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 m-0 p-0 list-none">
                 {[
                   "School tuition and fees",
                   "Textbooks and supplies",
                   "School uniform",
                   "Daily nutritious meals",
                   "Hostel accommodation (if needed)",
                   "Extracurricular activities",
                 ].map((item) => (
                   <li
                     key={item}
                     className="flex items-center gap-2 text-sm text-gray-700"
                   >
                     <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Filter tabs */}
             <div className="flex gap-2 mb-6">
               {[
                 { key: "all", label: "All Children" },
                 { key: "available", label: "Awaiting Sponsor" },
                 { key: "sponsored", label: "Sponsored" },
               ].map((tab) => (
                 <button
                   key={tab.key}
                   onClick={() => setFilter(tab.key as typeof filter)}
                   className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                     filter === tab.key
                       ? "bg-green-600 text-white border-green-600"
                       : "bg-white text-gray-600 border-gray-200 hover:border-green-300"
                   }`}
                 >
                   {tab.label}
                 </button>
               ))}
             </div>

             {/* Children grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {filtered.map((child) => (
                 <ChildProfileCard key={child.id} child={child} />
               ))}
             </div>

             {filtered.length === 0 && (
               <p className="text-center text-gray-500 py-8">
                 No children in this category.
               </p>
             )}
           </div>
         </section>
       </div>
     );
   }
   ```

4. **`app/routes/sponsor-a-child.$childId.tsx`**
   - Full child profile page
   - Detailed story and needs
   - "Sponsor [Name]" CTA
   - Cost breakdown

   ```typescript
   import type { MetaFunction } from "@remix-run/node";
   import { Link, useParams } from "@remix-run/react";
   import {
     ArrowLeft,
     Heart,
     GraduationCap,
     Book,
     Bread,
     House,
     EnvelopeSimple,
   } from "phosphor-react";
   import type { ChildDetail } from "~/types/child";

   // Static data - matches sponsor-a-child.tsx
   const childrenData: Record<string, ChildDetail> = {
     lakshmi: {
       id: "lakshmi",
       firstName: "Lakshmi",
       age: 9,
       grade: "Class 4",
       photo: "",
       shortBio: "Loves mathematics and dreams of becoming a teacher",
       dream: "I want to teach other children in my village",
       isSponsored: false,
       story: [
         "Lakshmi comes from a farming family in Somandepalli mandal. Her father works as a daily laborer and her mother takes care of their small plot of land.",
         "She joined the SEDS school two years ago and has shown remarkable aptitude for mathematics. Her teachers note that she often helps other students understand difficult concepts.",
         "Lakshmi stays at the SEDS hostel during the week, which allows her to focus on her studies without the 10km daily commute.",
       ],
       needs: [
         "Continued school enrollment",
         "Mathematics workbooks for advanced learning",
         "Hostel accommodation",
       ],
       monthlyCost: 2500,
     },
     anitha: {
       id: "anitha",
       firstName: "Anitha",
       age: 8,
       grade: "Class 3",
       photo: "",
       shortBio: "Creative artist who loves drawing plants and animals",
       dream: "I want to paint pictures of our beautiful hills",
       isSponsored: false,
       story: [
         "Anitha discovered her love for art during nature walks organized by the school. She spends her free time sketching the flora and fauna around the SEDS campus.",
         "Her family lives in a small village near Gorantla. With three siblings, her parents struggle to provide educational materials beyond the basics.",
         "The school has recognized her talent and would like to provide her with proper art supplies and training.",
       ],
       needs: [
         "School tuition",
         "Art supplies and sketchbooks",
         "After-school art classes",
       ],
       monthlyCost: 2500,
     },
     venkat: {
       id: "venkat",
       firstName: "Venkat",
       age: 12,
       grade: "Class 7",
       photo: "",
       shortBio: "Aspiring engineer fascinated by how things work",
       dream: "I want to build machines that help villages",
       isSponsored: false,
       story: [
         "Venkat became interested in engineering after observing the construction of a check dam near his village. He was fascinated by how such a simple structure could transform the landscape.",
         "At school, he excels in science and participates in every practical workshop. His science fair project on solar water pumping won second place last year.",
         "He dreams of studying engineering and returning to help develop rural infrastructure.",
       ],
       needs: [
         "Science lab materials",
         "Extra tutoring in mathematics",
         "School fees and supplies",
       ],
       monthlyCost: 2500,
     },
     kumar: {
       id: "kumar",
       firstName: "Kumar",
       age: 13,
       grade: "Class 8",
       photo: "",
       shortBio: "Star athlete and team leader",
       dream: "I want to become a sports coach",
       isSponsored: false,
       story: [
         "Kumar is known for his athletic abilities and leadership qualities. He captains the school's cricket team and organizes sports activities for younger students.",
         "Coming from a family of agricultural laborers, Kumar understands the importance of physical fitness and teamwork. He sees sports as a way to build community.",
         "His ambition is to pursue a degree in physical education and return to teach sports in rural schools.",
       ],
       needs: [
         "School fees for final years",
         "Sports equipment",
         "Preparation for high school entrance",
       ],
       monthlyCost: 2500,
     },
   };

   export const meta: MetaFunction = ({ params }) => {
     const child = childrenData[params.childId ?? ""];
     return {
       title: child
         ? `Sponsor ${child.firstName} - SEDS`
         : "Sponsor a Child - SEDS",
       description: child
         ? `Support ${child.firstName}'s education at SEDS school. ${child.shortBio}`
         : "Support a child's education at SEDS school.",
     };
   };

   export default function ChildProfile() {
     const { childId } = useParams();
     const child = childrenData[childId ?? ""];

     if (!child) {
       return (
         <div className="not-prose py-20 text-center">
           <h1 className="font-display text-2xl text-gray-800 mb-4">
             Child Profile Not Found
           </h1>
           <Link
             to="/sponsor-a-child"
             className="text-green-600 hover:text-green-700 no-underline"
           >
             &larr; View all children
           </Link>
         </div>
       );
     }

     if (child.isSponsored) {
       return (
         <div className="not-prose py-20 text-center">
           <h1 className="font-display text-2xl text-gray-800 mb-4">
             {child.firstName} is Already Sponsored
           </h1>
           <p className="text-gray-600 mb-6">
             Thank you for your interest! This child already has a sponsor.
           </p>
           <Link
             to="/sponsor-a-child"
             className="text-green-600 hover:text-green-700 no-underline"
           >
             &larr; View children awaiting sponsors
           </Link>
         </div>
       );
     }

     return (
       <div className="not-prose">
         <section className="bg-green-600 py-10">
           <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
             <Link
               to="/sponsor-a-child"
               className="text-green-200 hover:text-white text-sm flex items-center gap-1 mb-4 no-underline"
             >
               <ArrowLeft className="w-4 h-4" />
               All children
             </Link>
             <h1 className="font-display text-2xl md:text-3xl text-white mb-2">
               Meet {child.firstName}
             </h1>
             <p className="text-green-100 text-sm m-0">
               Age {child.age} • {child.grade}
             </p>
           </div>
         </section>

         <section className="py-10 bg-white">
           <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Main content */}
               <div className="md:col-span-2">
                 {/* Photo placeholder */}
                 <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-6">
                   <div className="w-24 h-24 rounded-full bg-green-300/50 flex items-center justify-center">
                     <span className="text-4xl font-display text-green-700">
                       {child.firstName.charAt(0)}
                     </span>
                   </div>
                 </div>

                 {/* Dream */}
                 <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6 rounded-r-lg">
                   <p className="text-gray-700 italic m-0">"{child.dream}"</p>
                   <p className="text-sm text-gray-500 mt-1 m-0">
                     — {child.firstName}'s dream
                   </p>
                 </div>

                 {/* Story */}
                 <h2 className="font-display text-xl text-gray-800 mb-4 m-0">
                   {child.firstName}'s Story
                 </h2>
                 {child.story.map((paragraph, i) => (
                   <p key={i} className="text-gray-600 leading-relaxed mb-4">
                     {paragraph}
                   </p>
                 ))}

                 {/* Needs */}
                 <h2 className="font-display text-xl text-gray-800 mb-4 mt-8 m-0">
                   Current Needs
                 </h2>
                 <ul className="space-y-2 m-0 p-0 list-none">
                   {child.needs.map((need, i) => (
                     <li
                       key={i}
                       className="flex items-center gap-2 text-gray-600"
                     >
                       <span className="w-2 h-2 bg-green-600 rounded-full" />
                       {need}
                     </li>
                   ))}
                 </ul>
               </div>

               {/* Sidebar - Sponsorship card */}
               <div className="md:col-span-1">
                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24">
                   <h3 className="font-display text-lg text-gray-800 mb-4 m-0">
                     Sponsor {child.firstName}
                   </h3>

                   <div className="space-y-3 mb-6">
                     <div className="flex items-center gap-3 text-sm text-gray-600">
                       <GraduationCap className="w-5 h-5 text-green-600" />
                       <span>School tuition</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600">
                       <Book className="w-5 h-5 text-green-600" />
                       <span>Books & supplies</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600">
                       <Bread className="w-5 h-5 text-green-600" />
                       <span>Daily meals</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600">
                       <House className="w-5 h-5 text-green-600" />
                       <span>Hostel (if needed)</span>
                     </div>
                   </div>

                   <div className="border-t border-gray-200 pt-4 mb-4">
                     <p className="text-sm text-gray-500 m-0">Monthly commitment</p>
                     <p className="text-2xl font-display text-gray-800 m-0">
                       ₹{child.monthlyCost.toLocaleString("en-IN")}
                     </p>
                     <p className="text-xs text-gray-500 m-0">per month</p>
                   </div>

                   <a
                     href={`mailto:sedsngo@gmail.com?subject=Sponsor%20${child.firstName}&body=I%20would%20like%20to%20sponsor%20${child.firstName}%20(${child.grade}).`}
                     className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors no-underline mb-3"
                   >
                     <Heart className="w-5 h-5" />
                     Sponsor {child.firstName}
                   </a>

                   <p className="text-xs text-gray-500 text-center m-0">
                     We'll contact you with payment details and updates
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </section>
       </div>
     );
   }
   ```

---

### Phase 10: Program Matching Quiz
**Priority: Low | Complexity: Medium | Estimated: 3 hours**

Fun, shareable quiz matching visitors to SEDS programs.

#### Files to Create:

1. **`app/components/quiz/quiz-data.ts`**
   - Questions and scoring logic
   - Program mappings

   ```typescript
   export type QuizQuestion = {
     id: number;
     question: string;
     options: {
       label: string;
       icon: string;
       scores: Record<string, number>;
     }[];
   };

   export type Program = {
     id: string;
     name: string;
     tagline: string;
     description: string;
     link: string;
     color: string;
   };

   export const programs: Program[] = [
     {
       id: "nrm",
       name: "Natural Resource Management",
       tagline: "Restore. Conserve. Flourish.",
       description:
         "You're drawn to the big picture of environmental restoration. Watershed management and reforestation align with your passion for healing ecosystems.",
       link: "/natural-resource-management",
       color: "green",
     },
     {
       id: "education",
       name: "Children's Education",
       tagline: "Learn. Grow. Transform.",
       description:
         "You believe in the power of education to break cycles of poverty. Supporting the SEDS school helps children access quality learning.",
       link: "/education",
       color: "blue",
     },
     {
       id: "cdm",
       name: "Clean Development Mechanism",
       tagline: "Clean Energy. Better Lives.",
       description:
         "You're interested in practical climate solutions that improve daily life. Biogas and clean cookstoves reduce emissions while helping families.",
       link: "/clean-development-mechanism",
       color: "orange",
     },
     {
       id: "lcf",
       name: "Low Carbon Farming",
       tagline: "Grow Sustainably. Farm Wisely.",
       description:
         "You value sustainable agriculture and helping farmers thrive. Low carbon farming techniques improve yields while protecting the soil.",
       link: "/low-carbon-farming",
       color: "amber",
     },
   ];

   export const questions: QuizQuestion[] = [
     {
       id: 1,
       question: "What aspect of development matters most to you?",
       options: [
         {
           label: "Restoring nature and ecosystems",
           icon: "Tree",
           scores: { nrm: 3, education: 0, cdm: 1, lcf: 1 },
         },
         {
           label: "Educating the next generation",
           icon: "GraduationCap",
           scores: { nrm: 0, education: 3, cdm: 0, lcf: 0 },
         },
         {
           label: "Clean energy and climate action",
           icon: "Flame",
           scores: { nrm: 1, education: 0, cdm: 3, lcf: 1 },
         },
         {
           label: "Sustainable food production",
           icon: "Plant",
           scores: { nrm: 1, education: 0, cdm: 1, lcf: 3 },
         },
       ],
     },
     {
       id: 2,
       question: "If you could solve one problem, what would it be?",
       options: [
         {
           label: "Water scarcity and drought",
           icon: "Drop",
           scores: { nrm: 3, education: 0, cdm: 0, lcf: 2 },
         },
         {
           label: "Lack of educational opportunities",
           icon: "Book",
           scores: { nrm: 0, education: 3, cdm: 0, lcf: 0 },
         },
         {
           label: "Indoor air pollution from cooking",
           icon: "Wind",
           scores: { nrm: 0, education: 0, cdm: 3, lcf: 0 },
         },
         {
           label: "Depleted soil and crop failures",
           icon: "Leaf",
           scores: { nrm: 1, education: 0, cdm: 0, lcf: 3 },
         },
       ],
     },
     {
       id: 3,
       question: "What kind of impact excites you most?",
       options: [
         {
           label: "Seeing barren land turn green",
           icon: "Mountains",
           scores: { nrm: 3, education: 0, cdm: 0, lcf: 1 },
         },
         {
           label: "A child's future transformed",
           icon: "Heart",
           scores: { nrm: 0, education: 3, cdm: 0, lcf: 0 },
         },
         {
           label: "Families with clean, modern kitchens",
           icon: "House",
           scores: { nrm: 0, education: 0, cdm: 3, lcf: 0 },
         },
         {
           label: "Farmers thriving with better harvests",
           icon: "Grain",
           scores: { nrm: 0, education: 0, cdm: 0, lcf: 3 },
         },
       ],
     },
     {
       id: 4,
       question: "Which describes you best?",
       options: [
         {
           label: "I think long-term about environmental systems",
           icon: "Globe",
           scores: { nrm: 3, education: 1, cdm: 1, lcf: 1 },
         },
         {
           label: "I love working with and inspiring children",
           icon: "Users",
           scores: { nrm: 0, education: 3, cdm: 0, lcf: 0 },
         },
         {
           label: "I'm interested in technology and innovation",
           icon: "Gear",
           scores: { nrm: 1, education: 0, cdm: 3, lcf: 1 },
         },
         {
           label: "I come from or connect with rural/farming communities",
           icon: "Sun",
           scores: { nrm: 1, education: 0, cdm: 1, lcf: 3 },
         },
       ],
     },
     {
       id: 5,
       question: "How would you like to see your contribution used?",
       options: [
         {
           label: "Building check dams and planting trees",
           icon: "Tree",
           scores: { nrm: 3, education: 0, cdm: 0, lcf: 0 },
         },
         {
           label: "Books, uniforms, and school meals",
           icon: "GraduationCap",
           scores: { nrm: 0, education: 3, cdm: 0, lcf: 0 },
         },
         {
           label: "Biogas digesters and cookstoves",
           icon: "Fire",
           scores: { nrm: 0, education: 0, cdm: 3, lcf: 0 },
         },
         {
           label: "Training and demonstration plots",
           icon: "Plant",
           scores: { nrm: 0, education: 0, cdm: 0, lcf: 3 },
         },
       ],
     },
   ];

   export function calculateResult(
     scores: Record<string, number>
   ): Program {
     let maxScore = 0;
     let result = programs[0];
     for (const program of programs) {
       if (scores[program.id] > maxScore) {
         maxScore = scores[program.id];
         result = program;
       }
     }
     return result;
   }
   ```

2. **`app/routes/quiz.tsx`**
   - Multi-step quiz container
   - Progress indicator
   - Results page with program match
   - Share buttons

   ```typescript
   import type { MetaFunction } from "@remix-run/node";
   import { useState } from "react";
   import { Link } from "@remix-run/react";
   import {
     ArrowRight,
     ArrowLeft,
     ShareNetwork,
     Tree,
     GraduationCap,
     Flame,
     Plant,
     Drop,
     Book,
     Wind,
     Leaf,
     Mountains,
     Heart,
     House,
     Grain,
     Globe,
     Users,
     Gear,
     Sun,
     Fire,
     CheckCircle,
   } from "phosphor-react";
   import { questions, programs, calculateResult } from "~/components/quiz/quiz-data";

   export const meta: MetaFunction = () => ({
     title: "Find Your Program - SEDS",
     description:
       "Take our quick quiz to discover which SEDS program aligns with your values and interests.",
   });

   const iconMap: Record<string, React.ElementType> = {
     Tree,
     GraduationCap,
     Flame,
     Plant,
     Drop,
     Book,
     Wind,
     Leaf,
     Mountains,
     Heart,
     House,
     Grain,
     Globe,
     Users,
     Gear,
     Sun,
     Fire,
   };

   export default function Quiz() {
     const [currentQuestion, setCurrentQuestion] = useState(0);
     const [answers, setAnswers] = useState<number[]>([]);
     const [showResult, setShowResult] = useState(false);

     const handleAnswer = (optionIndex: number) => {
       const newAnswers = [...answers];
       newAnswers[currentQuestion] = optionIndex;
       setAnswers(newAnswers);

       if (currentQuestion < questions.length - 1) {
         setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
       } else {
         setTimeout(() => setShowResult(true), 300);
       }
     };

     const calculateScores = () => {
       const scores: Record<string, number> = { nrm: 0, education: 0, cdm: 0, lcf: 0 };
       answers.forEach((answerIndex, questionIndex) => {
         const option = questions[questionIndex].options[answerIndex];
         if (option) {
           Object.entries(option.scores).forEach(([key, value]) => {
             scores[key] += value;
           });
         }
       });
       return scores;
     };

     const result = showResult ? calculateResult(calculateScores()) : null;

     const goBack = () => {
       if (currentQuestion > 0) {
         setCurrentQuestion(currentQuestion - 1);
       }
     };

     const restart = () => {
       setCurrentQuestion(0);
       setAnswers([]);
       setShowResult(false);
     };

     if (showResult && result) {
       return (
         <div className="not-prose">
           <section className="bg-green-600 py-12">
             <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
               <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
               <h1 className="font-display text-3xl md:text-4xl text-white mb-2">
                 Your Match
               </h1>
               <p className="text-green-100 m-0">{result.tagline}</p>
             </div>
           </section>

           <section className="py-12 bg-white">
             <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
               <h2 className="font-display text-2xl text-gray-800 mb-4 m-0">
                 {result.name}
               </h2>
               <p className="text-gray-600 max-w-lg mx-auto mb-8">
                 {result.description}
               </p>

               <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                 <Link
                   to={result.link}
                   className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors no-underline"
                 >
                   Learn About This Program
                   <ArrowRight className="w-5 h-5" />
                 </Link>
                 <Link
                   to="/donate"
                   className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors no-underline"
                 >
                   Support This Program
                 </Link>
               </div>

               <div className="border-t border-gray-200 pt-6">
                 <p className="text-sm text-gray-500 mb-3">Share your result</p>
                 <div className="flex gap-3 justify-center">
                   <a
                     href={`https://wa.me/?text=I%20matched%20with%20${encodeURIComponent(result.name)}%20at%20SEDS!%20Take%20the%20quiz:`}
                     target="_blank"
                     rel="noreferrer"
                     className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                   >
                     <ShareNetwork className="w-5 h-5" />
                   </a>
                 </div>

                 <button
                   onClick={restart}
                   className="mt-6 text-sm text-green-600 hover:text-green-700"
                 >
                   Take the quiz again
                 </button>
               </div>
             </div>
           </section>
         </div>
       );
     }

     const question = questions[currentQuestion];
     const progress = ((currentQuestion + 1) / questions.length) * 100;

     return (
       <div className="not-prose">
         <section className="bg-green-600 py-12">
           <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
             <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
               Find Your Program
             </h1>
             <p className="text-green-100 max-w-2xl mx-auto m-0">
               Answer 5 quick questions to discover which SEDS program aligns with
               your values
             </p>
           </div>
         </section>

         <section className="py-12 bg-white">
           <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
             {/* Progress bar */}
             <div className="mb-8">
               <div className="flex justify-between text-sm text-gray-500 mb-2">
                 <span>Question {currentQuestion + 1} of {questions.length}</span>
                 <span>{Math.round(progress)}% complete</span>
               </div>
               <div className="w-full bg-gray-200 rounded-full h-2">
                 <div
                   className="bg-green-600 h-2 rounded-full transition-all duration-300"
                   style={{ width: `${progress}%` }}
                 />
               </div>
             </div>

             {/* Question */}
             <h2 className="font-display text-xl text-gray-800 mb-6 text-center m-0">
               {question.question}
             </h2>

             {/* Options */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
               {question.options.map((option, index) => {
                 const Icon = iconMap[option.icon] || Tree;
                 const isSelected = answers[currentQuestion] === index;
                 return (
                   <button
                     key={index}
                     onClick={() => handleAnswer(index)}
                     className={`flex items-center gap-3 p-4 rounded-lg border-2 text-left transition-all ${
                       isSelected
                         ? "border-green-600 bg-green-50"
                         : "border-gray-200 hover:border-green-300 hover:bg-gray-50"
                     }`}
                   >
                     <Icon
                       className={`w-6 h-6 flex-shrink-0 ${
                         isSelected ? "text-green-600" : "text-gray-400"
                       }`}
                     />
                     <span
                       className={`text-sm ${
                         isSelected
                           ? "text-green-700 font-medium"
                           : "text-gray-700"
                       }`}
                     >
                       {option.label}
                     </span>
                   </button>
                 );
               })}
             </div>

             {/* Navigation */}
             {currentQuestion > 0 && (
               <div className="mt-8 text-center">
                 <button
                   onClick={goBack}
                   className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                 >
                   <ArrowLeft className="w-4 h-4" />
                   Previous question
                 </button>
               </div>
             )}
           </div>
         </section>
       </div>
     );
   }
   ```

---

## Navigation Update

After Phase 9 is complete, add a link to "Sponsor a Child" in the navigation. Two options:

**Option A: Add to desktop nav dropdown (if implementing sub-menu):**
- Keep current nav, add sponsor link under a "Get Involved" dropdown

**Option B: Add to Get Involved page (recommended):**
- Add prominent card/section on the volunteers page linking to sponsor-a-child
- Keep main nav simple

Modify `app/routes/volunteers.tsx` to add:
```tsx
<Link to="/sponsor-a-child" className="...">
  Sponsor a Child →
</Link>
```

---

## Testing Checklist

### Phase 9 Testing
- [ ] `/sponsor-a-child` displays grid of children
- [ ] Filter tabs work (All / Available / Sponsored)
- [ ] Child cards show correct sponsorship status
- [ ] Click on available child navigates to detail page
- [ ] Detail page displays full profile information
- [ ] "Sponsor" button opens email with correct subject/body
- [ ] Responsive layout works on mobile
- [ ] Back navigation works correctly

### Phase 10 Testing
- [ ] `/quiz` displays first question
- [ ] Selecting an option advances to next question
- [ ] Progress bar updates correctly
- [ ] Back button returns to previous question
- [ ] Final question submission shows result
- [ ] Result shows correct program match
- [ ] Links to program page and donate work
- [ ] "Take again" restarts quiz
- [ ] Share button generates correct URL

---

## File Structure (Final)

```
app/
├── components/
│   ├── child-profile-card.tsx          (Phase 9 - NEW)
│   ├── quiz/
│   │   └── quiz-data.ts                (Phase 10 - NEW)
│   └── [existing components...]
├── routes/
│   ├── sponsor-a-child.tsx             (Phase 9 - NEW)
│   ├── sponsor-a-child.$childId.tsx    (Phase 9 - NEW)
│   ├── quiz.tsx                        (Phase 10 - NEW)
│   └── [existing routes...]
└── types/
    └── child.ts                        (Phase 9 - NEW)
```

---

## Success Criteria

- [ ] All 10 phases implemented
- [ ] Child sponsorship portal fully functional
- [ ] Quiz provides accurate program matching
- [ ] All pages responsive on mobile devices
- [ ] No TypeScript errors
- [ ] Navigation updated to include new pages
- [ ] All existing functionality continues to work
