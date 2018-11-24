import Head from "next/head";

import { DonorCard, VolunteerCard } from "../components/Cards";
import Container from "../components/Container";
import Flex, { FlexContainer } from "../components/Flex";
import Image from "../components/Image";

export default () => (
  <div>
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
      <Image name="students" title="Towards a greener tomorrow" />
    </Container>

    <Container>
      <p>
        The Social Education and Development Society (SEDS) is a
        Non-Governmental Organisation that has been actively involved in
        socially transforming initiatives and rural development for over 38
        years near the town of Penukonda in Andhra Pradesh.
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
  </div>
);
