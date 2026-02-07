import { Link } from "@remix-run/react";
import { CalendarBlank } from "phosphor-react";

type Update = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
};

type Props = {
  update: Update;
};

const categoryColors: Record<string, string> = {
  Watershed: "bg-blue-50 text-blue-700 border-blue-200",
  Education: "bg-purple-50 text-purple-700 border-purple-200",
  CDM: "bg-orange-50 text-orange-700 border-orange-200",
  Farming: "bg-green-50 text-green-700 border-green-200",
  General: "bg-gray-50 text-gray-700 border-gray-200",
};

export default function UpdateCard({ update }: Props) {
  const colorClass =
    categoryColors[update.category] || categoryColors.General;

  return (
    <Link
      to={`/updates/${update.slug}`}
      className="block bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow no-underline"
    >
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-xs px-2 py-0.5 rounded border ${colorClass}`}
          >
            {update.category}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <CalendarBlank className="w-3 h-3" />
            {update.date}
          </span>
        </div>
        <h3 className="font-display text-lg text-gray-800 m-0 mb-2">
          {update.title}
        </h3>
        <p className="text-sm text-gray-600 m-0">{update.excerpt}</p>
        <span className="text-sm text-green-600 font-medium mt-3 inline-block">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}

export type { Update };
