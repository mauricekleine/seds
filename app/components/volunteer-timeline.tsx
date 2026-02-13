import { useState } from "react";
import {
  MapTrifold,
  Users,
  Mountains,
  Handshake,
  Notebook,
  AirplaneTilt,
} from "phosphor-react";

const milestones = [
  {
    day: "Day 1",
    title: "Arrival & Orientation",
    icon: <AirplaneTilt className="w-5 h-5" />,
    description:
      "Welcome to the SEDS campus in Penukonda. Meet the team, settle into accommodation, and get an overview of programs and local culture.",
    quote: null,
  },
  {
    day: "Day 2-3",
    title: "Campus Tour & Introductions",
    icon: <MapTrifold className="w-5 h-5" />,
    description:
      "Tour the SEDS school, biogas facilities, and nurseries. Meet staff members and understand the day-to-day operations across programs.",
    quote: null,
  },
  {
    day: "Day 4-6",
    title: "Field Visits to Watershed Sites",
    icon: <Mountains className="w-5 h-5" />,
    description:
      "Visit check dams, reforested hills, and water harvesting structures. Witness the dramatic before-and-after transformation of the landscape.",
    quote: {
      text: "Seeing the green hills where there was once barren rock was unforgettable.",
      author: "Sarah, UK Volunteer",
    },
  },
  {
    day: "Day 7-9",
    title: "Community Interaction",
    icon: <Users className="w-5 h-5" />,
    description:
      "Visit villages and interact with self-help groups, farmers practicing low-carbon methods, and families using biogas digesters.",
    quote: {
      text: "The warmth of the village communities made me feel right at home.",
      author: "Marco, Italian Volunteer",
    },
  },
  {
    day: "Day 10-12",
    title: "Program Participation",
    icon: <Handshake className="w-5 h-5" />,
    description:
      "Contribute directly: teach at the SEDS school, assist with tree planting, help document projects, or support administrative work.",
    quote: null,
  },
  {
    day: "Day 13-14",
    title: "Reflection & Departure",
    icon: <Notebook className="w-5 h-5" />,
    description:
      "Share feedback, reflect on the experience, and discuss how to stay connected and continue supporting SEDS from home.",
    quote: {
      text: "I left with a completely new perspective on grassroots development.",
      author: "Yuki, Japanese Volunteer",
    },
  },
];

type Props = {
  compact?: boolean;
};

export default function VolunteerTimeline({ compact }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(
    compact ? null : 0
  );
  const items = compact ? milestones.slice(0, 4) : milestones;

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-green-200" />

      <div className="space-y-4">
        {items.map((milestone, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className="relative pl-12 md:pl-16">
              {/* Node */}
              <div
                className={`absolute left-2 md:left-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isExpanded
                      ? "bg-green-600 border-green-600"
                      : "bg-surface-primary border-green-400"
                  }`}

                style={{ top: "0.25rem" }}
              />

              <button
                onClick={() =>
                  setExpandedIndex(isExpanded ? null : index)
                }
                className="w-full text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                    {milestone.day}
                  </span>
                    <h3 className="text-sm font-semibold text-content-primary m-0">
                      {milestone.title}
                    </h3>

                </div>
              </button>

              {isExpanded && (
                <div className="mt-2 bg-surface-secondary border border-outline rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-green-600 flex-shrink-0">
                      {milestone.icon}
                    </div>
                    <div>
                      <p className="text-sm text-content-secondary m-0">
                        {milestone.description}
                      </p>
                      {milestone.quote && (
                        <div className="mt-3 border-l-2 border-green-300 pl-3">
                          <p className="text-sm text-content-secondary italic m-0">
                            "{milestone.quote.text}"
                          </p>
                          <p className="text-xs text-content-tertiary m-0 mt-1">
                            — {milestone.quote.author}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
