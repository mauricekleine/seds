import { Link } from "@remix-run/react";

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
  General: "bg-surface-secondary text-content-secondary border-outline",
};

export default function UpdateCard({ update }: Props) {
  const colorClass =
    categoryColors[update.category] || categoryColors.General;

  return (
    <Link
      to={`/updates/${update.slug}`}
        className="block bg-surface-primary border border-outline rounded-lg hover:shadow-md transition-shadow no-underline"
    >
      <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-xs px-2 py-0.5 rounded border ${colorClass}`}
            >
              {update.category}
            </span>
          </div>
          <h3 className="font-display text-lg text-content-primary m-0 mb-2">
            {update.title}
          </h3>
          <p className="text-sm text-content-secondary m-0">{update.excerpt}</p>
        <span className="text-sm text-green-600 font-medium mt-3 inline-block">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}

export type { Update };
