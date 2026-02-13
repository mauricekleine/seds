import type { MetaFunction } from "@remix-run/node";
import { Fire, Flame, House, Users } from "phosphor-react";

import Image from "~/components/image";
import Page from "~/components/page";
import CarbonCounter from "~/components/carbon-counter";
import FundingProgress from "~/components/funding-progress";
import FundBreakdown from "~/components/fund-breakdown";
import PresetDonationButtons from "~/components/preset-donation-buttons";

export const meta: MetaFunction = () => ({
  description:
    "The Clean Development Mechanism (CDM) project is one of our main priorities today. By facilitating the construction of 5000 biogas digesters in small households, the project leverages one of the carbon reduction provisions of the Kyoto Protocol treaty to realize two major benefits for more than 300 villages in the district. Replacing firewood which is a polluting and hazardous cooking fuel with non-polluting and sustainable biogas, and providing an opportunity for small households to participate in the global carbon trade economy.",
  title: "SEDS | Clean Development Mechanism",
});

const CleanDevelopmentMechanism = () => (
  <Page
    image={{ name: "biogas" }}
    intro="Clean Development Mechanism (CDM) projects reduce greenhouse gas emissions while creating tangible local benefits—better infrastructure, improved services, and new income streams. By facilitating the construction of 5000 biogas digesters in small households, the project leverages one of the carbon reduction provisions of the Kyoto Protocol treaty to realize major benefits for more than 300 villages in the district."
    title="Turning climate solutions into community benefits."
  >
    <div className="not-prose -mx-4 mb-6">
      <CarbonCounter />
    </div>

    <p>
      SEDS links village households with international forwarding funding for
      CDM. With a meticulous project design approved by the United Nations
      Framework Convention on Climate Change (UNFCCC), SEDS provides the
      expertise to construct the igloo-shaped biogas digesters and champions
      their use.
    </p>

    <p>
      Traditionally, women in rural households use firewood to cook. The smoke
      from such fires represents a health hazard to the women who remain bent
      over these fires for hours a day. When cooking with biogas, not only are
      the women spared the smoke, they also do not need to spend time collecting
      firewood, and in the words of one user "we no longer need to scrub sooty
      cooking pots anymore." Since the biogas digesters run on cow manure, which
      is easily available in villages, it means that many tree branches saved as
      well.
    </p>

    <Image
      alt="SEDS is a member of the Fair Climate Network, an association of
        grassroots NGOs who utilize carbon resources for the sustainable
        development of the poor."
      name="biogas-2"
    />

    <p>
      SEDS also facilitates the rigorous validation procedures that CDM
      initiatives require in order to qualify to sell carbon credits. We are a
      bridge between global auditing firms and local stakeholders, ensuring that
      nothing gets lost in translation during this crucial stage. Once the CDM
      programme matures, SEDS will ensure that the monetary benefits from carbon
      credit sales to corporations that need them to offset their carbon
      footprint, reach the households that generated those credits.
    </p>

    <p>
      <em>
        SEDS is a member of the Fair Climate Network, an association of
        grassroots NGOs who utilize carbon resources for the sustainable
        development of the poor.
      </em>
    </p>

    <div className="not-prose mt-8 space-y-6">
        <FundingProgress
          current={70000000}
          goal={70000000}
          label="CDM Fund Progress"
        />

      <FundBreakdown
        title="How Your Donation Helps"
        items={[
          {
            icon: <Fire className="w-5 h-5" />,
            amount: "₹15,000",
            description: "Build one biogas digester",
          },
          {
            icon: <Flame className="w-5 h-5" />,
            amount: "₹2,000",
            description: "Supply improved cookstove",
          },
          {
            icon: <Users className="w-5 h-5" />,
            amount: "₹5,000",
            description: "Train a household in biogas usage",
          },
          {
            icon: <House className="w-5 h-5" />,
            amount: "₹50,000",
            description: "Carbon credit validation for a village",
          },
        ]}
      />

      <PresetDonationButtons programName="Clean Development Mechanism" />
    </div>
  </Page>
);

export default CleanDevelopmentMechanism;
