import {
  faHandHoldingUsd,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Card, { CardTitle } from "../components/Card";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Icon from "../components/Icon";
import Image from "../components/Image";

const CardContainer = styled(Flex)`
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export default () => (
  <div>
    <Image name="students" title="Towards a greener tomorrow" />

    <Container>
      <p>
        The Social Education and Development Society (SEDS) is a
        Non-Governmental Organisation that has been actively involved in
        socially transforming initiatives and rural development for over 38
        years near the town of Penukonda in Andhra Pradesh.
      </p>

      <CardContainer>
        <Flex flex={1} style={{ marginRight: 8 }}>
          <Card>
            <Icon icon={faHandshake} size="2x" transform={{ rotate: -32 }} />

            <CardTitle>Volunteers & Interns</CardTitle>

            <p>
              We welcome volunteers from around the World to participate in our
              social development programmes.
            </p>

            <a>Come join us!</a>
          </Card>
        </Flex>

        <Flex flex={1} style={{ marginLeft: 8, marginRight: 8 }}>
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

        <Flex flex={1} style={{ marginLeft: 8 }}>
          <Card>
            <Icon icon={faHandshake} size="2x" transform={{ rotate: -32 }} />

            <CardTitle>Volunteers & Interns</CardTitle>

            <p>
              We welcome volunteers from around the World to participate in our
              social development programmes.
            </p>

            <a>Come join us!</a>
          </Card>
        </Flex>
      </CardContainer>
    </Container>
  </div>
);
