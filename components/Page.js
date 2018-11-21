import Head from "next/head";
import styled from "styled-components";

import Container from "../components/Container";
import Image from "../components/Image";

const IntroBlock = styled(Container)`
  background-color: ${({ theme }) => theme.colors.descriptive};
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  margin-right: 24px;
  padding: 16px 8px;
`;

const PageWrapper = styled.div`
  margin-bottom: 16px;
`;

export default ({ children, image, intro, title }) => (
  <PageWrapper>
    <Head>
      <title>SEDS - {title}</title>
    </Head>

    <Container fullWidth>
      {image && <Image name={image} title={title} />}
    </Container>

    <Container>{!image && <h1>{title}</h1>}</Container>

    <IntroBlock>{intro}</IntroBlock>

    <Container>{children}</Container>
  </PageWrapper>
);
