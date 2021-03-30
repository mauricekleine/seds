import {
  faHandHoldingUsd,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styled from "styled-components";

import Icon from "./Icon";

const Card = styled.div`
  border: 1px solid rgba(150, 150, 150, 0.3);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
  margin: 16px 0;
  padding: 16px;
`;

export const CardTitle = styled.h3``;

const Cards = ({ children }) => <Card>{children}</Card>;

export default Cards;

export const DonorCard = () => (
  <Card>
    <Icon icon={faHandHoldingUsd} size="2x" />

    <CardTitle>Donors</CardTitle>

    <p>
      Help us to implement projects in watershed management and reforestation.
    </p>

    <a>Support us!</a>
  </Card>
);

export const VolunteerCard = () => (
  <Card>
    <Icon icon={faHandshake} size="2x" transform={{ rotate: -32 }} />

    <CardTitle>Volunteers & Interns</CardTitle>

    <p>
      We welcome volunteers from around the World to participate in our social
      development programmes.
    </p>

    <Link href="/volunteers">
      <a>Come join us!</a>
    </Link>
  </Card>
);
