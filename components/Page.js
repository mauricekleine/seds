import Head from "next/head";
import styled from "styled-components";

import Container from "../components/Container";
import Image from "../components/Image";

const IntroBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.descriptive};
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  margin-right: 24px;
  padding: 16px 0;
`;

const PageWrapper = styled.div`
  margin-bottom: 16px;
`;

export default ({ children, image, intro, title }) => (
  <PageWrapper>
    <Head>
      <title>SEDS - {title}</title>
    </Head>

    {image && <Image name={image} />}

    <Container>
      <h1>{title}</h1>
    </Container>

    <IntroBlock>
      <Container>{intro}</Container>
    </IntroBlock>

    <Container>{children}</Container>
  </PageWrapper>
);
