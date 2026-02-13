import type { MetaFunction } from "@remix-run/node";
import { Tree, Leaf, Sun, Flask } from "phosphor-react";

import Page from "~/components/page";
import FundingProgress from "~/components/funding-progress";
import FundBreakdown from "~/components/fund-breakdown";
import PresetDonationButtons from "~/components/preset-donation-buttons";

export const meta: MetaFunction = () => ({
  description:
    "With the Low Carbon Farming (LCF) programme, SEDS propagates traditional innovative farming methods to break the cycle of heavy pesticide usage, soil depletion and successively reduced crop yields. Conventional wisdom advocates intensive use of pesticides and fertilizer to increase crop yield and force more out of smaller plots of land. This however, depletes the soil, forcing the farmer to use greater amounts of fertilizer and pesticide with each crop to maintain the yield.",
  title: "SEDS | Low Carbon Farming",
});

const LowCarbonFarming = () => (
  <Page
    image={{ name: "farming" }}
    intro="We promote composting, water‑efficient irrigation, and soil‑healthy cultivation to lower costs and improve resilience to drought. SEDS propagates traditional innovative farming methods to break the cycle of heavy pesticide usage, soil depletion and successively reduced crop yields."
    title="Farming practices that reduce emissions and improve livelihoods."
  >
    <p>
      Through LCF, SEDS encourages farmers to minimize pesticide usage and try
      alternative ideas such as planting a slightly earlier crop around the
      perimeter of the field so that pests attack that instead of the main crop.
      Planting fewer seedlings with greater spacing between them ensures that
      each stalk can grow stronger and healthier without competition from a
      crowded field. This in turn minimizes wastage in the crop and helps reduce
      fertilizer usage. Finally, the demands on the soil are not as intensive
      allowing for natural regeneration and improved results.
    </p>

    <p>
      From a small demonstration plot of half an acre, LCF initiatives in the
      region have caught on and spread to over 2000 farm plots today.
    </p>

    <div className="not-prose mt-8 space-y-6">
      <FundingProgress
        current={95000}
        goal={1000000}
        label="LCF Fund Progress"
      />

      <FundBreakdown
        title="How Your Donation Helps"
        items={[
          {
            icon: <Tree className="w-5 h-5" />,
            amount: "₹2,000",
            description: "Set up a demonstration plot",
          },
          {
            icon: <Leaf className="w-5 h-5" />,
            amount: "₹5,000",
            description: "Organic farming training for 5 farmers",
          },
          {
            icon: <Sun className="w-5 h-5" />,
            amount: "₹10,000",
            description: "Seed bank for traditional crop varieties",
          },
          {
            icon: <Flask className="w-5 h-5" />,
            amount: "₹25,000",
            description: "Soil testing lab for a village cluster",
          },
        ]}
      />

      <PresetDonationButtons programName="Low Carbon Farming" />
    </div>
  </Page>
);

export default LowCarbonFarming;
