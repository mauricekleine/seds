import type { MetaFunction } from "@remix-run/node";

import CompareImage from "~/components/compare-image";
import Page from "~/components/page";
import { calculateSEDSYears } from "~/utils/seds-years";

const sedsYears = calculateSEDSYears();

export const meta: MetaFunction = () => ({
  description: `The Social Education and Development Society (SEDS) is a Non-Governmental Organisation that has been actively involved in socially transforming initiatives and rural development for over ${sedsYears} years near the town of Penukonda in Andhra Pradesh.`,
  title: "SEDS | About",
});

const About = () => (
  <Page
    image={{ name: "rajen-manil" }}
    intro={`SEDS began as a local effort to strengthen rural livelihoods in Anantapur, Andhra Pradesh. What started with a small group of community partners has grown into multi‑sector programs in education, agriculture, and environmental conservation over ${sedsYears} years.`}
    title="Our Story"
  >
    <h3 className="font-display">How We Started</h3>

    <p>
      When Rajen Joshua came to Anantapur as part of a group of young
      volunteers, it was the second-most drought-prone area in the country. The
      hilltops were barren and it was extremely difficult to grow crops. He
      decided to stay on and try to change the situation. The local people were
      sceptical about his ideas for rainwater conservation and reforestation,
      but Rajen persisted. Trenches were dug at the base of hills where
      rainwater washed down. Gradually, vegetation began to grow around the
      perimeter of these check dams. With these first literal green shoots, the
      locals began to believe in the intentions of the fledgling SEDS
      organisation.
    </p>

    <CompareImage
      caption="Left: early 80s. Right: same checkdam in late 90s"
      name="checkdam"
    />

    <h3 className="font-display">How We Grew</h3>

    <p>
      Manil Jayasena joined Rajen as his wife and partner in their vision to do
      more for the land. From environmental regeneration, the focus expanded to
      conservation and social upliftment. SEDS began running programmes that
      would improve the quality of life in the villages around Penukonda.
      Village self-help groups were established to support women and ensure they
      received all benefits due to them. Vocational training was established for
      women and men, and the SEDS school was started to provide quality and
      subsidised education to the children of surrounding villages.
    </p>

    <p>
      Over the years, we expanded by listening to farmers, teachers, and village
      leaders. Each program is designed around local needs and delivered
      alongside community‑based organizations.
    </p>

    <CompareImage caption="Natural resource management" name="valley" />

    <h3 className="font-display">Where We Are Today</h3>

    <p>
      The Clean Development Mechanism program is one of the most important in
      the history of SEDS. The program unites the goals of carbon and pollution
      reduction, women's welfare, economic sustainability and renewable energy
      in a meticulously planned endeavour that is also subject to rigorous
      methods of verification.
    </p>

    <p>
      Today, SEDS supports long‑term development through education access,
      climate‑smart agriculture, and natural resource management across 350+
      villages in 5 mandals of Anantapur district. In the words of Rajen,
      "One follows the other, it happens so beautifully."
    </p>
  </Page>
);

export default About;
