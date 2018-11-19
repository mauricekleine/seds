import Link from "next/link";

import Flex, { FlexContainer } from "../components/Flex";
import Image from "../components/Image";
import Page from "../components/Page";

export default () => (
  <Page
    intro="We welcome volunteers from around the World to participate in our social development programmes. SEDS has so far hosted more than 300 volunteers from several countries who have enriched our work and who have returned home with enriching experiences."
    title="Volunteers & Interns"
  >
    <p>
      A minimum of 1 month’s commitment is necessary for general volunteering
      work, and 6 months for volunteers with teaching experience who would like
      to teach at the SEDS school.
    </p>

    <p>
      Contact us about volunteering opportunities via{" "}
      <Link href="/contact" prefetch>
        this form
      </Link>
      .
    </p>

    <Flex direction="column" flex={7}>
      <p>
        Check out these blogs to read about some of our volunteers' experiences:
      </p>

      <a href="http://sedsngo.blogspot.in/2014/09/volunteer-say-dreamcatcher-workshop-by.html">
        - Dreamcatcher workshop
      </a>

      <a href="http://sedsngo.blogspot.in/2014/08/volunteer-say-nothing-goes-to-waste-by.html">
        - Nothing goes to waste
      </a>

      <a href="http://sedsngo.blogspot.in/2011/07/coming-to-seds.html">
        - Coming to SEDS
      </a>

      <a href="http://sedsngo.blogspot.in/2011/01/seds-30th-anniversary.html">
        - SEDS 30th anniversary
      </a>
    </Flex>
  </Page>
);
