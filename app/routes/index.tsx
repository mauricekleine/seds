import type { MetaFunction } from "@remix-run/node";

import Hero from "~/components/hero";
import ImpactBanner from "~/components/impact-banner";
import OurStorySection from "~/components/our-story-section";
import ProgramsSection from "~/components/programs-section";
import BeforeAfterGallery from "~/components/before-after-gallery";
import CTASection from "~/components/cta-section";
import TestimonialsSection from "~/components/testimonials-section";
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
    <PartnersSection />

    <section className="py-10 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
        <h3 className="font-display text-lg text-gray-800 mb-4 text-center">
          Featured In
        </h3>
        <div className="text-center text-gray-600 text-sm">
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
    </section>
  </div>
);

export default Homepage;
