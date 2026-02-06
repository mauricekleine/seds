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
      "Supporting rural children with quality education, scholarships, and school infrastructure development. SEDS runs community schools and after-school programs to ensure every child has access to learning.",
    href: "/education",
    color: "text-blue-600",
  },
  {
    icon: <Sun className="w-12 h-12" />,
    title: "Clean Development Mechanism",
    description:
      "Implementing clean energy solutions and carbon reduction projects for sustainable communities. Our CDM programs introduce energy-efficient cookstoves and solar solutions to reduce emissions.",
    href: "/clean-development-mechanism",
    color: "text-amber-600",
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Low Carbon Farming",
    description:
      "Promoting sustainable agriculture practices that reduce emissions while improving yields. We train farmers in organic methods, crop diversification, and water-efficient techniques.",
    href: "/low-carbon-farming",
    color: "text-green-600",
  },
  {
    icon: <Drop className="w-12 h-12" />,
    title: "Natural Resource Management",
    description:
      "Watershed development, water conservation, and reforestation for ecological restoration. Our flagship program has restored degraded landscapes across 350+ villages through check dams, percolation tanks, and community forestry.",
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
            Our Work
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto m-0">
            Four decades of sustainable development through education,
            environment, and community empowerment in Anantapur District
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="space-y-8">
            {programs.map((program) => (
              <Link
                key={program.href}
                to={program.href}
                className="group block bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 hover:shadow-lg hover:border-green-500 transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className={`${program.color} shrink-0`}>
                    {program.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                      {program.title}
                    </h2>
                    <p className="text-gray-600 m-0 leading-relaxed">
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
