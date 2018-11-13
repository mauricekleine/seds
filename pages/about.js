import ReactCompareImage from "react-compare-image";

import Page from "../components/Page";

export default () => (
  <Page
    image="rajen-manil"
    intro="The Social Education and Development Society (SEDS) is a
  Non-Governmental Organisation that has been actively involved in
  socially transforming initiatives and rural development for over 38
  years near the town of Penukonda in Andhra Pradesh."
    title="About SEDS"
  >
    <p>
      Founded in 1980 by Rajen Joshua and Manil Jayasena Joshua, SEDS has
      pioneered and implemented projects in watershed management, reforestation,
      clean development mechanism, low carbon farming, rural health, vocational
      training, village self-help groups, and children's education that have
      done so much to improve the lives of people in 350 villages across 5
      mandals in Anantapur district.
    </p>

    <p>
      With a focus on making people and projects self-reliant and
      self-sustaining, SEDS continues to use our three-decade worth of hard-won
      knowledge to work with local villages, to partner with global
      organisations and to help volunteers from everywhere realize their hopes
      for a better tomorrow.
    </p>

    <ReactCompareImage
      leftImage="/static/checkdam-before.jpg"
      rightImage="/static/checkdam-after.jpg"
    />
    <small>Left: early 80s. Right: same checkdam in late 90s</small>

    <h2>History</h2>

    <p>
      When Rajen Joshua came to Anantpur as a part of a group of young
      volunteers , it was the second-most drought prone area in the country. The
      hilltops were barren and it was extremely difficult to grow crops. He
      decided to stay on and try to change the situation. The local people were
      extremely sceptical about his ideas for rainwater conservation and
      reforestation. But Rajen persisted. At first, trenches were dug at the
      base of hills where it had been observed that rainwater washed down.
      Gradually, vegetation began to grow around the perimeter of these check
      dams. With these first literal green shoots, the locals began to believe
      the intentions of the fledgling SEDS organisation.
    </p>

    <p>
      Manil Jayasena joined Rajen as his wife and partner in their vision to do
      more for the land. From environmental re-generation, the focus expanded to
      conservation and social upliftment. SEDS began to run programmes that
      would improve the quality of life in the villages around Penukonda.
      Village self-help groups were established to provide a support network for
      women and to ensure that they received all benefits due to them under
      various government schemes. Vocational training was established for women
      and men, aimed at teaching them skills such as stitching, metal work and
      carpentry by which they could generate income and find employment. The
      SEDS school was started to provide quality and subsidised education to the
      children of the surrounding villages.
    </p>

    <p>
      The Clean Development Mechanism program is one of the most important in
      the history of SEDS. The program unites the goals of carbon and pollution
      reduction, women’s welfare, economic sustainability and renewable energy
      in a meticulously planned endeavour that is also subject to rigorous
      methods of verification.
    </p>

    <p>
      The story of SEDS is a story of identifying needs and responding to them
      using the latest knowledge, implemented with a local flavour. It is a
      story of one development program leading to the next, adding more value
      and raising the bar further. Of small beginnings that lead to widespread
      good. In the words of Rajen today, “One follows the other, it happens so
      beautifully.”
    </p>
  </Page>
);
