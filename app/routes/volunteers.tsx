import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Page from "~/components/page";
import VolunteerTimeline from "~/components/volunteer-timeline";

export const meta: MetaFunction = () => ({
  description:
    "We welcome volunteers from around the World to participate in our social development programmes. SEDS has so far hosted more than 300 volunteers from several countries who have enriched our work and who have returned home with enriching experiences.",
  title: "SEDS | Volunteers & Interns",
});

const Volunteers = () => (
  <Page
    intro="Join projects in education, community outreach, and environmental conservation. Whether you can give a few hours or several weeks, your skills can make a real difference. SEDS has hosted more than 300 volunteers from several countries."
    title="Volunteer with SEDS."
  >
    <p>
      A minimum of 1 month's commitment is necessary for general volunteering
      work, and 6 months for volunteers with teaching experience who would like
      to teach at the SEDS school.
    </p>

    <p>
      Contact us about volunteering opportunities via{" "}
      <Link to="/contact">this form</Link>.
    </p>

    <div className="not-prose my-8">
      <h3 className="font-display text-lg text-content-primary mb-4">
        Preview Your Volunteer Journey
      </h3>
      <VolunteerTimeline compact />
      <Link
        to="/volunteer-experience"
        className="inline-block mt-4 text-sm text-green-600 hover:text-green-700 font-medium no-underline"
      >
        View full 2-week timeline &rarr;
      </Link>
    </div>

    <div>
      <p>
        Check out these blogs to read about some of our volunteers&apos;
        experiences:
      </p>

      <p>
        <a
          href="http://sedsngo.blogspot.in/2014/09/volunteer-say-dreamcatcher-workshop-by.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          - Dreamcatcher workshop
        </a>
      </p>

      <p>
        <a
          href="http://sedsngo.blogspot.in/2014/08/volunteer-say-nothing-goes-to-waste-by.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          - Nothing goes to waste
        </a>
      </p>

      <p>
        <a
          href="http://sedsngo.blogspot.in/2011/07/coming-to-seds.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          - Coming to SEDS
        </a>
      </p>

      <p>
        <a
          href="http://sedsngo.blogspot.in/2011/01/seds-30th-anniversary.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          - SEDS 30th anniversary
        </a>
      </p>
    </div>
  </Page>
);

export default Volunteers;
