import type { MetaFunction } from "@remix-run/node";
import { Drop, Tree, Mountains, Fish } from "phosphor-react";

import CompareImage from "~/components/compare-image";
import Page from "~/components/page";
import FundingProgress from "~/components/funding-progress";
import FundBreakdown from "~/components/fund-breakdown";
import PresetDonationButtons from "~/components/preset-donation-buttons";

export const meta: MetaFunction = () => ({
  description:
    "Natural Resource Management, especially watershed management, was the first initiative that SEDS was involved in. Anantpur was the second-most drought prone area in the country. Barren land and loose topsoil made growing crops a very difficult task. The first task was to conserve the little rain that the land received. At first, trenches were dug at the base of hills where it had been observed that rainwater washed down.",
  title: "SEDS | Natural Resource Management",
});

const NaturalResourceManagement = () => (
  <Page
    image={{ name: "tap" }}
    intro="We partner with villages to conserve water, restore degraded land, and protect shared resources that sustain farming and daily life. Anantapur was the second-most drought-prone area in the country. Barren land and loose topsoil made growing crops extremely difficult. The first task was to conserve the little rain that the land received."
    title="Protecting the natural systems communities depend on."
  >
    <p>
      Gradually, vegetation began to grow around the perimeter of these check
      dams. More check dams were built and the groundwater levels began to rise.
      With more water, local varieties of vegetation were introduced to bind and
      preserve the topsoil. With better topsoil, the crop yield improved. The
      increasing number of trees and vegetation served as ideal cover for
      returning wildlife. Several species such as wild boar, black buck and even
      leopards have been sighted in the area. Suitable fish varieties have been
      introduced into the check dams and tanks. The fish fertilize the soil and
      also serve to supplement the diet of the cultivators.
    </p>

    <CompareImage caption="Reforestation near 'Rajen's hill" name="wasteland" />

    <p>
      Our NRM programmes have been so visibly successful that the villagers
      today act as the guardians of tree cover, not allowing anyone to cut
      trees. Today, SEDS has brought about the reforestation of more than 4000
      acres of land and our expertise in this area has been sought out by
      governing bodies from other districts as well. Vital steps towards a
      greener tomorrow.
    </p>

    <CompareImage caption="Reforestation near 'Rajen's hill" name="shed" />

    <div className="not-prose mt-8 space-y-6">
      <FundingProgress
        current={180000}
        goal={400000}
        label="NRM Fund Progress"
      />

      <FundBreakdown
        title="How Your Donation Helps"
        items={[
          {
            icon: <Drop className="w-5 h-5" />,
            amount: "₹10,000",
            description: "Contribute to check dam construction",
          },
          {
            icon: <Tree className="w-5 h-5" />,
            amount: "₹500",
            description: "Plant and maintain one tree",
          },
          {
            icon: <Mountains className="w-5 h-5" />,
            amount: "₹25,000",
            description: "Restore one acre of degraded land",
          },
          {
            icon: <Fish className="w-5 h-5" />,
            amount: "₹5,000",
            description: "Stock fish in a check dam tank",
          },
        ]}
      />

      <PresetDonationButtons programName="Natural Resource Management" />
    </div>
  </Page>
);

export default NaturalResourceManagement;
