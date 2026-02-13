import type { MetaFunction } from "@remix-run/node";
import { Link, useParams } from "@remix-run/react";
import { ArrowLeft, CalendarBlank, ShareNetwork } from "phosphor-react";

const updatesData: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    body: string[];
  }
> = {
  "new-check-dam-roddam": {
    title: "New Check Dam Completed in Roddam Mandal",
    date: "Jan 28, 2026",
    category: "Watershed",
    body: [
      "The latest check dam in Roddam mandal is now fully operational after three months of construction. This structure is expected to significantly raise groundwater levels for three surrounding villages, benefiting over 200 farming households.",
      "The dam was built using locally sourced stone and labor from the community, following SEDS' participatory approach to watershed management. Village committees were involved in site selection and will be responsible for maintenance.",
      "Early signs are promising - the check dam is already holding water from recent rains, and farmers downstream report improved moisture in their fields. This is the 120th check dam in the Roddam mandal area.",
    ],
  },
  "annual-science-fair": {
    title: "Annual Science Fair at SEDS School",
    date: "Jan 20, 2026",
    category: "Education",
    body: [
      "The SEDS school hosted its annual science fair, with 25 student projects focused on environmental conservation. The event was attended by parents, community members, and visiting educators.",
      "The winning project demonstrated a low-cost rainwater harvesting system designed by three 8th-grade students. Their design could be replicated in village homes using locally available materials.",
      "Other notable projects included a solar-powered water purifier, a composting system tracker, and a model demonstrating soil erosion prevention through vegetation. The fair highlighted how environmental education at SEDS goes beyond textbooks.",
    ],
  },
  "500th-biogas-digester": {
    title: "500th Biogas Digester Installed This Year",
    date: "Jan 15, 2026",
    category: "CDM",
    body: [
      "SEDS has reached a major milestone with the installation of its 500th biogas digester of the year in Chilamathur mandal. This brings the total number of operational digesters across the district to over 4,800.",
      "The CDM program continues to transform rural kitchens, replacing polluting firewood with clean biogas. Each digester prevents approximately 3 tonnes of CO2 emissions annually while improving the health and quality of life for women who no longer breathe in cooking smoke.",
      "The milestone was celebrated with a community gathering where beneficiary families shared their experiences. SEDS is on track to reach its goal of 5,000 digesters, a target set when the program began.",
    ],
  },
  "lcf-workshop-farmers": {
    title: "Low Carbon Farming Workshop for 50 Farmers",
    date: "Jan 8, 2026",
    category: "Farming",
    body: [
      "Fifty farmers from Somandepalli mandal participated in a two-day workshop on low carbon farming techniques. The training covered natural pest management, spacing optimization, and soil health practices.",
      "Experienced LCF practitioners shared results from their own fields, demonstrating how pesticide reduction of up to 60% is achievable without sacrificing yield. Several attendees expressed interest in converting their plots.",
      "SEDS field workers will follow up with each participant over the coming season to provide hands-on support. The workshop also introduced traditional seed varieties that are better adapted to local conditions.",
    ],
  },
  "german-volunteer-group": {
    title: "Volunteer Group from Germany Arrives",
    date: "Jan 3, 2026",
    category: "General",
    body: [
      "Eight students from the University of Munich have arrived at SEDS for a six-week volunteer placement. The group includes students of agriculture, social work, and environmental science.",
      "During their stay, the volunteers will assist with documentation of watershed projects, teach English and science at the school, and help develop educational materials for community outreach programs.",
      "This is the third group from Munich to visit SEDS, continuing a partnership that has been growing over the past five years. Previous volunteers have helped establish lasting connections between the university and SEDS.",
    ],
  },
  "reforestation-milestone": {
    title: "Reforestation Milestone: 2.5 Million Trees",
    date: "Dec 28, 2025",
    category: "Watershed",
    body: [
      "SEDS has crossed the 2.5 million mark for trees planted since its founding in 1980. This milestone reflects over four decades of committed reforestation work across Anantapur district.",
      "Survival rates have improved significantly in recent years, reaching 75% compared to earlier rates of around 50%. This improvement is attributed to better nursery practices, community involvement in maintenance, and improved soil conditions from watershed work.",
      "The reforested areas now support returning wildlife, including several species that had disappeared from the region. Villagers report sightings of wild boar, black buck, and even leopards in areas that were barren two decades ago.",
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const update = updatesData[params.slug ?? ""];
  return {
    title: update ? `${update.title} - SEDS` : "Update - SEDS",
    description: update
      ? update.body[0].slice(0, 160)
      : "Field update from SEDS programs.",
  };
};

export default function UpdateDetail() {
  const { slug } = useParams();
  const update = updatesData[slug ?? ""];

  if (!update) {
    return (
      <div className="not-prose py-20 text-center">
      <h1 className="font-display text-2xl text-content-primary mb-4">
            Update Not Found
        </h1>
        <Link
          to="/updates"
          className="text-green-600 hover:text-green-700 no-underline"
        >
          &larr; Back to all updates
        </Link>
      </div>
    );
  }

  return (
    <div className="not-prose">
      <section className="bg-green-600 py-10">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <Link
            to="/updates"
            className="text-green-200 hover:text-white text-sm flex items-center gap-1 mb-4 no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
              All updates
            </Link>
            <h1 className="font-display text-2xl md:text-3xl text-white mb-3">
              {update.title}
            </h1>
            <p className="text-green-100/80 text-sm mb-3 m-0">
              This update highlights recent progress from the field and what it means for the communities we serve.
            </p>
          <div className="flex items-center gap-3 text-green-100 text-sm">
            <span className="flex items-center gap-1">
              <CalendarBlank className="w-4 h-4" />
              {update.date}
            </span>
            <span className="bg-green-500/30 px-2 py-0.5 rounded text-xs">
              {update.category}
            </span>
          </div>
        </div>
      </section>

      <section className="py-10 bg-surface-primary">
          <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
            <div className="max-w-prose">
              {update.body.map((paragraph, i) => (
                <p key={i} className="text-content-secondary leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="border-t border-outline mt-8 pt-6">
              <div className="flex items-center justify-between">
                <Link
                  to="/updates"
                  className="text-green-600 hover:text-green-700 text-sm font-medium no-underline"
                >
                  &larr; Back to updates
                </Link>
                <a
                  href={`mailto:?subject=${encodeURIComponent(update.title)}&body=Read this update from SEDS`}
                  className="flex items-center gap-1 text-content-tertiary hover:text-content-secondary text-sm no-underline"
                >
                <ShareNetwork className="w-4 h-4" />
                Share
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
