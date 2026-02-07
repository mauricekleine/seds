import type { MetaFunction } from "@remix-run/node";
import { MapPin } from "phosphor-react";
import ImpactMap from "~/components/impact-map/impact-map";
import { mandals } from "~/components/impact-map/map-data";

export const meta: MetaFunction = () => ({
  title: "Impact Map - SEDS",
  description:
    "Explore SEDS impact across 5 mandals in Anantapur district. Interactive map showing watershed restoration, education, and sustainable development programs.",
});

export default function ImpactMapPage() {
  const totalVillages = mandals.reduce((sum, m) => sum + m.villages, 0);

  return (
    <div className="not-prose">
      <section className="bg-green-600 py-12">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
          <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
            Our Impact Across Anantapur
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto m-0">
            SEDS works across {mandals.length} mandals, reaching {totalVillages}{" "}
            villages with watershed restoration, education, and sustainable
            livelihood programs
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <ImpactMap />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <h2 className="font-display text-2xl text-gray-800 mb-6 text-center">
            Mandal Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mandals.map((mandal) => (
              <div
                key={mandal.id}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <h3 className="font-display text-lg text-gray-800 m-0">
                    {mandal.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 m-0 mb-2">
                  {mandal.villages} villages
                </p>
                <div className="flex flex-wrap gap-1">
                  {mandal.programs.map((program) => (
                    <span
                      key={program}
                      className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
