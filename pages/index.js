import {
  faHandHoldingUsd,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Link from "next/link";

import Card, { CardTitle } from "../components/Card";
import Container from "../components/Container";
import Flex, { FlexContainer } from "../components/Flex";
import Icon from "../components/Icon";
import Image from "../components/Image";

export default () => (
  <div>
    <Head>
      <title>SEDS</title>
    </Head>

    <Image name="students" title="Towards a greener tomorrow" />

    <Container>
      <p>
        The Social Education and Development Society (SEDS) is a
        Non-Governmental Organisation that has been actively involved in
        socially transforming initiatives and rural development for over 38
        years near the town of Penukonda in Andhra Pradesh.
      </p>

      <FlexContainer parent>
        <Flex flex={1}>
          <Card>
            <Icon icon={faHandshake} size="2x" transform={{ rotate: -32 }} />

            <CardTitle>Volunteers & Interns</CardTitle>

            <p>
              We welcome volunteers from around the World to participate in our
              social development programmes.
            </p>

            <Link href="/volunteers" prefetch>
              Come join us!
            </Link>
          </Card>
        </Flex>

        <Flex flex={1}>
          <Card>
            <Icon icon={faHandHoldingUsd} size="2x" />

            <CardTitle>Donors</CardTitle>

            <p>
              Help us to implement projects in watershed management and
              reforestation.
            </p>

            <a>Support us!</a>
          </Card>
        </Flex>
      </FlexContainer>
    </Container>
  </div>
);
