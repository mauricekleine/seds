import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { GraduationCap, Leaf, Sun, Drop } from "phosphor-react";

export const meta: MetaFunction = () => ({
  title: "Our Work - SEDS",
  description:
    "Explore SEDS programs in education, clean development, sustainable farming, and natural resource management across Anantapur District.",
});

const programs = [
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Children's Education",
    description:
      "We help children stay in school through scholarships, learning materials, and community support that removes barriers to attendance. SEDS runs community schools and after-school programs to ensure every child has access to learning.",
    href: "/education",
    color: "text-blue-600",
  },
  {
    icon: <Sun className="w-12 h-12" />,
    title: "Clean Development Mechanism",
    description:
      "CDM projects reduce greenhouse gas emissions while creating tangible local benefits—better infrastructure, improved services, and new income streams for rural households.",
    href: "/clean-development-mechanism",
    color: "text-amber-600",
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Low Carbon Farming",
    description:
      "We promote composting, water‑efficient irrigation, and soil‑healthy cultivation to lower costs and improve resilience to drought.",
    href: "/low-carbon-farming",
    color: "text-green-600",
  },
  {
    icon: <Drop className="w-12 h-12" />,
    title: "Natural Resource Management",
    description:
      "We work with communities to restore local ecosystems, conserve water, and protect shared land and forests across 350+ villages through check dams, percolation tanks, and community forestry.",
    href: "/natural-resource-management",
    color: "text-cyan-600",
  },
];

export default function OurWork() {
  return (
    <div className="not-prose">
      <section className="bg-green-600 py-12">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
          <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
            Our Programs
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto m-0">
              We focus on three areas that reinforce one another: education, sustainable livelihoods, and environmental conservation.
            </p>
        </div>
      </section>

      <section className="py-12 bg-surface-primary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="space-y-8">
            {programs.map((program) => (
              <Link
                key={program.href}
                to={program.href}
                className="group block bg-surface-secondary border border-outline rounded-lg p-6 md:p-8 hover:shadow-lg hover:border-green-500 transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className={`${program.color} shrink-0`}>
                    {program.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-content-primary mb-2 group-hover:text-green-600 transition-colors">
                      {program.title}
                    </h2>
                    <p className="text-content-secondary m-0 leading-relaxed">
                      {program.description}
                    </p>
                    <span className="inline-block mt-3 text-green-600 font-semibold group-hover:underline">
                      Learn more &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
