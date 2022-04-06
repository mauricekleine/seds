import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Page from "~/components/page";

export const meta: MetaFunction = () => ({
  description:
    "We welcome volunteers from around the World to participate in our social development programmes. SEDS has so far hosted more than 300 volunteers from several countries who have enriched our work and who have returned home with enriching experiences.",
  title: "SEDS | Volunteers & Interns",
});

const Volunteers = () => (
  <Page
    intro="We welcome volunteers from around the World to participate in our social development programmes. SEDS has so far hosted more than 300 volunteers from several countries who have enriched our work and who have returned home with enriching experiences."
    title="Volunteers &amp; Interns"
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
