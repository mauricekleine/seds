import { MetaFunction } from "@remix-run/node";

import CompareImage from "~/components/compare-image";
import Page from "~/components/page";

export const meta: MetaFunction = () => ({
  description:
    "Natural Resource Management, especially watershed management, was the first initiative that SEDS was involved in. Anantpur was the second-most drought prone area in the country. Barren land and loose topsoil made growing crops a very difficult task. The first task was to conserve the little rain that the land received. At first, trenches were dug at the base of hills where it had been observed that rainwater washed down.",
  title: "SEDS | Natural Resource Management",
});

const NaturalResourceManagement = () => (
  <Page
    image={{ name: "tap" }}
    intro="Natural Resource Management, especially watershed management, was the first initiative that SEDS was involved in. Anantpur was the second-most drought prone area in the country. Barren land and loose topsoil made growing crops a very difficult task. The first task was to conserve the little rain that the land received. At first, trenches were dug at the base of hills where it had been observed that rainwater washed down."
    title="Natural Resource Management"
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
  </Page>
);

export default NaturalResourceManagement;
