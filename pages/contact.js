import Head from "next/head";
import { Fragment } from "react";
import styled from "styled-components";

import { DonorCard, VolunteerCard } from "../components/Cards";
import Container from "../components/Container";
import Flex, { FlexContainer } from "../components/Flex";
import { FormGroup } from "../components/Forms";

const ContactContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.light};
`;

const SubTitle = styled.p`
  margin-bottom: 24px;
  margin-top: 8px;
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

export default () => (
  <Fragment>
    <Container>
      <Head>
        <title>SEDS - Contact Us</title>
      </Head>

      <FlexContainer parent>
        <Flex flex={1}>
          <VolunteerCard />
        </Flex>

        <Flex flex={1}>
          <DonorCard />
        </Flex>
      </FlexContainer>
    </Container>

    <ContactContainer>
      <Title>Get in touch</Title>
      <SubTitle>We'd love to hear from you</SubTitle>

      <form>
        <FormGroup>
          <label>Your name</label>

          <input placeholder="Your name" />
        </FormGroup>

        <FormGroup>
          <label>Your email</label>

          <input placeholder="Your email" />
        </FormGroup>

        <FormGroup>
          <label>
            Your phone number <span>optional</span>
          </label>

          <input placeholder="Your phone number" />
        </FormGroup>

        <FormGroup>
          <label>Your message</label>

          <p>
            Want us to keep you posted on the latest at SEDS, or you want to get
            in touch with us. Just leave us a message here. We are always happy
            to make new friends
          </p>

          <textarea rows="5" placeholder="Your message" />
        </FormGroup>

        <button type="submit">Send message</button>
      </form>
    </ContactContainer>
  </Fragment>
);
