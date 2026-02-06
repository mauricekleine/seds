import type { MetaFunction } from "@remix-run/node";

import Hero from "~/components/hero";
import ImpactBanner from "~/components/impact-banner";
import ProgramsSection from "~/components/programs-section";
import TestimonialsSection from "~/components/testimonials-section";
import CTASection from "~/components/cta-section";

export const meta: MetaFunction = () => ({
  description:
    "SEDS (Social Education and Development Society) has been transforming rural communities in Andhra Pradesh through sustainable development, education, and environmental programs for over 46 years.",
  title: "SEDS - Social Education and Development Society",
});

const Homepage = () => (
  <div className="not-prose">
    <Hero imageName="students" imageAlt="Children in rural community" />
    <ImpactBanner />

    <section className="py-12 bg-white">
      <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-gray-800 mb-4">
            About SEDS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Social Education and Development Society (SEDS) is a
            Non-Governmental Organisation that has been actively involved in
            socially transforming initiatives and rural development for over{" "}
            <span data-seds-years>46</span> years near the town of Penukonda in
            Anantapur District, Andhra Pradesh, India.
          </p>
          <a
            href="/about"
            className="inline-block text-green-600 font-semibold hover:text-green-700 hover:underline"
          >
            Learn more about our story &rarr;
          </a>
        </div>
      </div>
    </section>

    <ProgramsSection />
    <TestimonialsSection />
    <CTASection />

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
