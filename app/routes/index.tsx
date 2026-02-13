import type { MetaFunction } from "@remix-run/node";

import Hero from "~/components/hero";
import ImpactBanner from "~/components/impact-banner";
import OurStorySection from "~/components/our-story-section";
import ProgramsSection from "~/components/programs-section";
import BeforeAfterGallery from "~/components/before-after-gallery";
import CTASection from "~/components/cta-section";
import TestimonialsSection from "~/components/testimonials-section";
import UpdatesPreview from "~/components/updates-preview";
import PartnersSection from "~/components/partners-section";
import { calculateSEDSYears } from "~/utils/seds-years";

export const meta: MetaFunction = () => ({
  description: `SEDS (Social Education and Development Society) has been transforming rural communities in Andhra Pradesh through sustainable development, education, and environmental programs for over ${calculateSEDSYears()} years.`,
  title: "SEDS - Social Education and Development Society",
});

const Homepage = () => (
  <div className="not-prose">
    <Hero imageName="students" imageAlt="Children in rural community" />
    <ImpactBanner />
    <OurStorySection />
    <ProgramsSection />
    <BeforeAfterGallery />
    <CTASection />
    <TestimonialsSection />
      <UpdatesPreview
        updates={[
          {
            title: "New Check Dam Completed in Roddam Mandal",
            slug: "new-check-dam-roddam",
            date: "Jan 28, 2026",
            category: "Watershed",
            excerpt: "The latest check dam in Roddam mandal is now operational, expected to raise groundwater levels for 3 surrounding villages.",
          },
          {
            title: "Annual Science Fair at SEDS School",
            slug: "annual-science-fair",
            date: "Jan 20, 2026",
            category: "Education",
            excerpt: "Students showcased 25 projects on environmental conservation, with the winning project on rainwater harvesting.",
          },
          {
            title: "500th Biogas Digester Installed This Year",
            slug: "500th-biogas-digester",
            date: "Jan 15, 2026",
            category: "CDM",
            excerpt: "A milestone achievement as SEDS installs its 500th biogas digester of the year in Chilamathur mandal.",
          },
        ]}
      />
      <PartnersSection />

    <section className="py-10 bg-surface-secondary border-t border-outline">
      <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-lg text-content-primary mb-4">
              Featured In
            </h3>
            <div className="text-content-secondary text-sm">
              <p className="mb-3">Recent interviews with Digital Discourse:</p>
              <ul className="space-y-2 list-none p-0 m-0">
                <li>
                  <a
                    href="https://digitaldiscourseinterviews.blogspot.com/2021/11/interview-ofmanil-joshua-ceo-seds-ngo.html"
                    rel="noreferrer"
                    target="_blank"
                    className="text-green-600 hover:underline"
                  >
                    Interview of Manil Joshua, CEO, Founder Member SEDS NGO
                  </a>
                </li>
                <li>
                  <a
                    href="https://digitaldiscoursephotoblogspot.blogspot.com/2021/11/email-interview-mrs.html"
                    rel="noreferrer"
                    target="_blank"
                    className="text-green-600 hover:underline"
                  >
                    Watershed Management in Anantapur - interventions by SEDS
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  </div>
);

export default Homepage;
