import { Link } from "@remix-run/react";
import UpdateCard from "~/components/update-card";
import type { Update } from "~/components/update-card";

type Props = {
  updates: Update[];
};

export default function UpdatesPreview({ updates }: Props) {
  if (updates.length === 0) return null;

  return (
      <section className="py-12 bg-surface-primary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-content-primary mb-3">
              Field Notes
            </h2>
            <p className="text-content-secondary max-w-xl mx-auto m-0">
              Latest updates from the ground
            </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {updates.slice(0, 3).map((update) => (
            <UpdateCard key={update.slug} update={update} />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/updates"
            className="text-green-600 hover:text-green-700 font-medium text-sm no-underline"
          >
            View all updates &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
