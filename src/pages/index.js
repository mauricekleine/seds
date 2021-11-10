import Head from "next/head";

import { DonorCard, VolunteerCard } from "../components/Cards";
import Container from "../components/Container";
import Flex, { FlexContainer } from "../components/Flex";
import Image from "../components/Image";

const Homepage = () => (
  <>
    <Head>
      <meta
        name="description"
        content="The Social Education and Development Society (SEDS) is a
        Non-Governmental Organisation that has been actively involved in
        socially transforming initiatives and rural development for over 38
        years near the town of Penukonda in Andhra Pradesh."
      />

      <title>SEDS</title>
    </Head>

    <Container fullWidth>
      <Image
        alt="Towards a greener tomorrow"
        name="students"
        title="Towards a greener tomorrow"
      />
    </Container>

    <Container>
      <p>
        The Social Education and Development Society (SEDS) is a
        Non-Governmental Organisation that has been actively involved in
        socially transforming initiatives and rural development for over 38
        years near the town of Penukonda in Andhra Pradesh.
      </p>

      <p>
        We recently did an interview with Digital Discourse, check it out here:
        <ul>
          <li>
            <a
              href="https://digitaldiscourseinterviews.blogspot.com/2021/11/interview-ofmanil-joshua-ceo-seds-ngo.html"
              rel="noreferrer"
              target="_blank"
            >
              Interview of Manil Joshua, CEO, Founder Member SEDS NGO Anantapur,
              Andhra Pradesh
            </a>
          </li>

          <li>
            <a
              href="https://digitaldiscoursephotoblogspot.blogspot.com/2021/11/email-interview-mrs.html"
              rel="noreferrer"
              target="_blank"
            >
              Watershed Management in Anantapur - interventions by SEDSNGO
            </a>
          </li>
        </ul>
      </p>

      <FlexContainer parent>
        <Flex flex={1}>
          <VolunteerCard />
        </Flex>

        <Flex flex={1}>
          <DonorCard />
        </Flex>
      </FlexContainer>
    </Container>
  </>
);

export default Homepage;
