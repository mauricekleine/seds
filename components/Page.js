import { Fragment } from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Image from "../components/Image";

const IntroBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.descriptive};
  color: ${({ theme }) => theme.colors.light};
  font-weight: bold;
  margin-right: 24px;
  padding: 16px 0;
`;

export default ({ children, image, intro, title }) => (
  <Fragment>
    <Image name={image} />

    <Container>
      <h1>{title}</h1>
    </Container>

    <IntroBlock>
      <Container>{intro}</Container>
    </IntroBlock>

    <Container>{children}</Container>
  </Fragment>
);
