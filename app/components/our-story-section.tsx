import { Link } from "@remix-run/react";
import { calculateSEDSYears } from "~/utils/seds-years";

const milestones = [
  { year: "1980", label: "SEDS founded by Rajen & Manil Joshua" },
  { year: "1985", label: "Watershed development programs begin" },
  { year: "1995", label: "Community schools established" },
  { year: "2005", label: "Clean Development Mechanism launched" },
  { year: "2015", label: "Low carbon farming initiatives expand" },
  { year: "Today", label: "350+ villages across 5 mandals" },
];

function OurStorySection() {
    return (
        <section className="py-12 bg-surface-primary relative overflow-hidden">
      <img
        src="/logos/seds_emblem_transparent.png"
        alt=""
        className="pointer-events-none absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 opacity-10 sm:w-48 md:w-56"
      />
            <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 relative">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-content-primary mb-4">
                Our Story
              </h2>
              <p className="text-content-secondary leading-relaxed mb-4">
              In 1980, Rajen Joshua and Manil Jayasena Joshua founded SEDS in
                  one of India's most drought-prone regions — Anantapur District,
                  Andhra Pradesh. What began as a small effort to strengthen rural
                  livelihoods has grown into{" "}
                  <span data-seds-years>{calculateSEDSYears()}</span> years of
                  community-driven transformation.
                </p>
                <p className="text-content-secondary leading-relaxed mb-6">
                  Today, SEDS supports long‑term development through education access, climate‑smart agriculture, and natural resource management across rural districts in Andhra Pradesh.
              </p>
            <Link
              to="/about"
              className="inline-block text-green-600 font-semibold hover:text-green-700 hover:underline"
            >
              Read our full story &rarr;
            </Link>
          </div>

          <div className="order-first md:order-last">
            <img
              alt="Rajen and Manil Joshua, founders of SEDS"
              className="rounded-lg shadow-md w-full m-0"
              src="/rajen-manil@1x.jpg"
              srcSet="/rajen-manil@1x.jpg 1x, /rajen-manil@2x.jpg 2x"
            />
          </div>
        </div>

          <div className="border-t border-outline pt-8">
              <h3 className="font-display text-lg text-content-primary mb-6 text-center">

              Key Milestones
            </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {milestones.map((m) => (
              <div key={m.year} className="text-center">
                <span className="block font-display text-green-700 text-lg">
                  {m.year}
                </span>
                  <span className="text-xs text-content-tertiary leading-snug">
                    {m.label}
                  </span>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;
