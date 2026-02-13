import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import UpdateCard from "~/components/update-card";
import type { Update } from "~/components/update-card";

export const meta: MetaFunction = () => ({
  title: "Field Notes - SEDS",
  description:
    "Weekly updates from SEDS field programs across Anantapur district. Stay informed about watershed restoration, education, and community development.",
});

const updates: Update[] = [
  {
    title: "New Check Dam Completed in Roddam Mandal",
    slug: "new-check-dam-roddam",
    date: "Jan 28, 2026",
    category: "Watershed",
    excerpt:
      "The latest check dam in Roddam mandal is now operational, expected to raise groundwater levels for 3 surrounding villages.",
  },
  {
    title: "Annual Science Fair at SEDS School",
    slug: "annual-science-fair",
    date: "Jan 20, 2026",
    category: "Education",
    excerpt:
      "Students showcased 25 projects on environmental conservation, with the winning project on rainwater harvesting.",
  },
  {
    title: "500th Biogas Digester Installed This Year",
    slug: "500th-biogas-digester",
    date: "Jan 15, 2026",
    category: "CDM",
    excerpt:
      "A milestone achievement as SEDS installs its 500th biogas digester of the year in Chilamathur mandal.",
  },
  {
    title: "Low Carbon Farming Workshop for 50 Farmers",
    slug: "lcf-workshop-farmers",
    date: "Jan 8, 2026",
    category: "Farming",
    excerpt:
      "Farmers from Somandepalli gathered to learn pest management techniques that reduce pesticide use by up to 60%.",
  },
  {
    title: "Volunteer Group from Germany Arrives",
    slug: "german-volunteer-group",
    date: "Jan 3, 2026",
    category: "General",
    excerpt:
      "A group of 8 volunteers from the University of Munich begin their 6-week placement at SEDS campus.",
  },
  {
    title: "Reforestation Milestone: 2.5 Million Trees",
    slug: "reforestation-milestone",
    date: "Dec 28, 2025",
    category: "Watershed",
    excerpt:
      "SEDS crosses the 2.5 million mark for trees planted since its founding, with increased survival rates due to improved techniques.",
  },
];

const categories = ["All", "Watershed", "Education", "CDM", "Farming", "General"];

export default function UpdatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? updates
      : updates.filter((u) => u.category === activeCategory);

  return (
    <div className="not-prose">
      <section className="bg-green-600 py-12">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
            <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
              News and field updates.
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto m-0">
              Stories from our programs, community partners, and volunteers.
            </p>
        </div>
      </section>

        <section className="py-12 bg-surface-primary">
          <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                    activeCategory === cat
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-surface-primary text-content-secondary border-outline hover:border-green-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((update) => (
              <UpdateCard key={update.slug} update={update} />
            ))}
          </div>

          {filtered.length === 0 && (
              <p className="text-center text-content-tertiary py-8">
              No updates in this category yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
